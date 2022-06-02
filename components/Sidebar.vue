<template>
    <div class="sidebar">
        <nav>
            <ul>
                <li v-for="section of sections" :key="section.path">
                    <NuxtLink :to="section.path">
                        {{ section.title }}
                    </NuxtLink>
                </li>
            </ul>
        </nav>
    </div>
</template>
<script>

export default {
  name: 'Sidebar',
  async asyncData({ $content, params }) {
    const sections = await $content({deep: true})
      .only(['title', 'description', 'img', 'slug', 'author'])
      .sortBy('createdAt', 'desc')
      .fetch()
      return {
        sections
      }
  },
  data() {
    return {
      sections: [{
        title: 'Getting Started',
        path: '/getting-started'
      }, {
        title: 'Patterns',
        path: '/patterns'
      }, {
        title: 'Guidelines',
        path: '/guidelines'
      }, {
        title: 'Style Guide',
        path: '/style-guide'
      }, {
        title: 'Contributing',
        path: '/contributing'
      }, {
        title: 'License',
        path: '/license'
      }]
    }
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
