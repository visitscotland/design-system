<template>
  <div v-html="index"></div>
</template>

<script>
  import index from './index.md'

  export default {
    computed: {
      index() {
        return index
      }
    }
  }
</script>