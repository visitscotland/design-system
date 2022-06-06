<template>
<div class="container">
    <Header />
    <div class="flex-grid">
        <Sidebar :links=sections />
          <div class="content">
            <NuxtChild />
          </div>
    </div>
</div>
</template>
<script>
import Header from '../components/Header.vue';
import Sidebar from '../components/Sidebar.vue';

export default {
  components: {
    Header,
    Sidebar
  },
  data() {
    return {
      sections: []
    }
  },
};
</script>
<style lang="scss">

body {
    font-family: "Source Sans Pro",Roboto,"Helvetica Neue",Arial,sans-serif;
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 1.5;
    color: #191919;
    text-align: left;
    margin:0;
    padding:0;
}
.container {
    margin:0;
}

.flex-grid {
    display: flex;
    margin: auto -1rem -1rem;
}

.content {
  flex:3;
}

.header {
  flex: 3;
}

ul {
  list-style: none;
}

a {
  color: #191919;
}

h1, h2 {
  font-weight: 400;
    color: #700e57;
    letter-spacing: -1px;
  margin: 0;
  padding: 0;
  text-transform: uppercase;
  font-family: "evelethclean-regular",sans-serif,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
}

h1 {
    font-size: 3.6rem;
}
</style>
