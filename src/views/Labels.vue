import Nav from '@/components/Nav.vue';
<template>
    <div class="nav-wrapper">
        <div class="content">
            <p>Labels.vue</p>
        </div>
        <Nav/>
    </div>
</template>

<script>
    export default {
      name: 'Labels',
    }
</script>

<style lang="scss" scoped>
  .nav-wrapper{
      border: 1px solid blue;
      display: flex;
      flex-direction: column;
      height: 100vh;
  }
  .content{
      overflow: auto;
      flex-grow: 1;
  }
</style>