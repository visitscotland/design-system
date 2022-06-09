/* eslint-disable import/no-extraneous-dependencies */

const webpack = require("webpack");
const MFS = require("memory-fs");
const path = require("path");
const webpackHotMiddleware = require("webpack-hot-middleware");
const webpackDevMiddleware = require("webpack-dev-middleware");

const clientConfig = require("../../build/ssr.client.webpack.conf");
const serverConfig = require("../../build/ssr.server.webpack.conf");

/**
 * Setup webpack-dev-middleware and webpack-hot-middleware.
 * Rebuild SSR bundle on src files change.
 *
 * @param {Object} app Express application
 * @param {Function} onServerBundleReady Callback
 */
const setupDevServer = (app, onServerBundleReady) => {
    // additional client entry for hot reload
    clientConfig.entry["VsApp"] = ["webpack-hot-middleware/client", clientConfig.entry["VsApp"]];

    const clientCompiler = webpack(clientConfig);

    // setup dev middleware
    app.use(webpackDevMiddleware(clientCompiler, {
        publicPath: clientConfig.output.publicPath,
        serverSideRender: true,
        logLevel: "silent",
    }));

    // setup hot middleware
    app.use(webpackHotMiddleware(clientCompiler));

    // watch src files and rebuild SSR bundle
    global.console.log("Building SSR bundle...");
    const serverCompiler = webpack(serverConfig);
    const mfs = new MFS();

    serverCompiler.outputFileSystem = mfs;
    serverCompiler.watch({}, (error, stats) => {
        if (error) throw error

        global.console.log(
            `${stats.toString({
                colors: true,
                modules: false,
                children: false,
                chunks: false,
                chunkModules: false,
            })}\n\n`,
        )

        if (stats.hasErrors()) {
            console.error(stats.compilation.errors)
            throw new Error(stats.compilation.errors)
        }

        // read bundle generated by vue-ssr-webpack-plugin
        const bundle = JSON.parse(
            mfs.readFileSync(path.join(serverConfig.output.path, "vue-ssr-server-bundle.json"), "utf-8"),
        )
        onServerBundleReady(bundle)
    });
};

module.exports = setupDevServer;