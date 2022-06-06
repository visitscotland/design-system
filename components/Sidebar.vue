<template>
    <div class="sidebar">
        <nav>
            <ul>
                <li v-for="page of pages" :key="page.path">
                    <NuxtLink v-if="!page.isChildPage" :to="page.path">
                        {{ page.title }}
                    </NuxtLink>
                    <ul v-if="page.children">
                        <li v-for="page of page.children" :key="page.index">
                            <NuxtLink :to="page.path">
                                {{ page.title }}
                            </NuxtLink>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    </div>
</template>
<script setup>
const pages = useRouter()
    .options.routes.filter(route => route.path !== '/')
    .filter(route => route.path !== '/[...slug]');

for (const section of pages) {
    section.title = section.path.match(/([^\/]*)\/*$/)[1].replace(/-/g, ' ').replace(/\w/, c => c.toUpperCase());
    section.isChildPage = section.path.split('/')[2] !== undefined ? true : false;
}
const topLevelSections = pages.filter(x => x.isChildPage === false);

topLevelSections.forEach((_page) => {
        _page.children = (pages.filter(page => page.path.split('/')[1] === _page.path.split('/')[1]).filter(page => page.name !== _page.path.split('/')[1]));
    })
console.log(topLevelSections);
</script>
<script>
export default {
    computed: {
        path() {
            return this.$nuxt.$route.path;
        },
    },
};
</script>
<style scoped lang="scss">
.sidebar {
    flex: 1;

    ul li a {
        font-size: 24px;
        text-decoration: none;
        padding: 4px 16px;
    }
}
</style>
