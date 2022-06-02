import { defineNuxtConfig } from '@nuxt/bridge'

export default defineNuxtConfig({
    // modules: ['@nuxt/content'],
    modules: [
        '@nuxtjs/strapi'
    ],
    strapi: {
        url: process.env.STRAPI_URL || 'http://localhost:1337',
        prefix: '/api',
        version: 'v4',
        cookie: {},
    },
    // [optional] markdownit options
    // See https://github.com/markdown-it/markdown-it
    markdownit: {
        preset: 'default',
        linkify: true,
        breaks: true
    },
    vite: {
        bridge: {
            meta: true
        },
        content: {
            // https://content.nuxtjs.org/api/configuration
        },
        components: {
            dirs: [
                '~/components/base',
                '~/components/elements/address',
                '~/components/elements/button',
                '~/components/elements/form-input',
                '~/components/elements/heading',
                '~/components/elements/icon',
                '~/components/elements/img',
                '~/components/elements/layout',
                '~/components/elements/link',
                '~/components/elements/list',
                '~/components/elements/modal',
                '~/components/elements/panel',
                '~/components/elements/prototype',
                '~/components/elements/psr-embed',
                '~/components/elements/rich-text-wrapper',
                '~/components/elements/svg',
                '~/components/elements/svg-link',
                '~/components/elements/tag',
                '~/components/elements/tooltip',
                '~/components/elements/video',
                '~/components/patterns/accordion',
                '~/components/patterns/article',
                '~/components/patterns/banner',
                '~/components/patterns/breadcrumb',
                '~/components/patterns/canned-search',
                '~/components/patterns/caption',
                '~/components/patterns/carousel',
                '~/components/patterns/description-list',
                '~/components/patterns/dropdown',
                '~/components/patterns/embed-wrapper',
                '~/components/patterns/favourites',
                '~/components/patterns/footer',
                '~/components/patterns/form',
                '~/components/patterns/global-menu',
                '~/components/patterns/icentre',
                '~/components/patterns/icon-list',
                '~/components/patterns/image-with-caption',
                '~/components/patterns/itineraries',
                '~/components/patterns/link-list',
                '~/components/patterns/listicle',
                '~/components/patterns/mega-nav',
                '~/components/patterns/megalinks',
                '~/components/patterns/megalinks/components',
                '~/components/patterns/module-wrapper',
                '~/components/patterns/page-intro',
                '~/components/patterns/psr-module',
                '~/components/patterns/quote',
                '~/components/patterns/site-search',
                '~/components/patterns/site-search/components',
                '~/components/patterns/skip-to',
                '~/components/patterns/skip-to/components',
                '~/components/patterns/social-credit-link',
                '~/components/patterns/social-share',
                '~/components/patterns/stretched-link-card',
                '~/components/patterns/summary-box',
                '~/components/patterns/tabs',
                '~/components/patterns/toggle-button',
                '~/components/patterns/video-caption',
            ],
            pattern: '**/*.{vue}',
        },
    },
});

// export default {
//   build: {
//     plugins: [
//       new webpack.ProvidePlugin({
//         // global modules
//         _: 'lodash'
//       })
//     ]
//   },
//     target: 'static',
//     modules: [
//         '@nuxt/content',
//     ],
//     buildModules: ['@nuxtjs/style-resources'],
//     styleResources: {
//         scss: [
//             './assets/styles/resources.scss',
//             './assets/styles/forms/*.scss',
//             './assets/styles/mixins/resources.scss',
//             '~bootstrap/scss/navbar',
//         ],
//     },
//     components: {
//         dirs: [
//             '~/components',
//             '~/components/elements/address',
//             '~/components/elements/button',
//             '~/components/elements/form-input',
//             '~/components/elements/heading',
//             '~/components/elements/icon',
//             '~/components/elements/img',
//             '~/components/elements/layout',
//             '~/components/elements/link',
//             '~/components/elements/list',
//             '~/components/elements/modal',
//             '~/components/elements/panel',
//             '~/components/elements/prototype',
//             '~/components/elements/psr-embed',
//             '~/components/elements/rich-text-wrapper',
//             '~/components/elements/svg',
//             '~/components/elements/svg-link',
//             '~/components/elements/tag',
//             '~/components/elements/tooltip',
//             '~/components/elements/video',
//             '~/components/patterns/accordion',
//             '~/components/patterns/article',
//             '~/components/patterns/banner',
//             '~/components/patterns/breadcrumb',
//             '~/components/patterns/canned-search',
//             '~/components/patterns/caption',
//             '~/components/patterns/carousel',
//             '~/components/patterns/description-list',
//             '~/components/patterns/dropdown',
//             '~/components/patterns/embed-wrapper',
//             '~/components/patterns/favourites',
//             '~/components/patterns/footer',
//             '~/components/patterns/form',
//             '~/components/patterns/global-menu',
//             '~/components/patterns/icentre',
//             '~/components/patterns/icon-list',
//             '~/components/patterns/image-with-caption',
//             '~/components/patterns/itineraries',
//             '~/components/patterns/link-list',
//             '~/components/patterns/listicle',
//             '~/components/patterns/mega-nav',
//             '~/components/patterns/megalinks',
//             '~/components/patterns/module-wrapper',
//             '~/components/patterns/page-intro',
//             '~/components/patterns/psr-module',
//             '~/components/patterns/quote',
//             '~/components/patterns/site-search',
//             '~/components/patterns/site-search/components',
//             '~/components/patterns/skip-to',
//             '~/components/patterns/skip-to/components',
//             '~/components/patterns/social-credit-link',
//             '~/components/patterns/social-share',
//             '~/components/patterns/stretched-link-card',
//             '~/components/patterns/summary-box',
//             '~/components/patterns/tabs',
//             '~/components/patterns/toggle-button',
//             '~/components/patterns/video-caption',
//         ],
//         pattern: '**/*.{vue}',
//     },
//     content: {
//     // Options
//     },
//     alias: {
//         components: resolve(__dirname, './components'),
//     },
// };
