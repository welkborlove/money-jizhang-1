import router from '../router/index';
<template>
  <div>
    <div>当前网页不存在，请检查好正确路径</div>
    <div>
        <router-link to="/">返回首页</router-link>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "NotFound",
};
</script>

<style scoped>
</style>