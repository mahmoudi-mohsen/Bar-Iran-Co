<template>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>
<script>

export default {
created() {

}

}
</script>
<style lang="scss">
@import "@/assets/sass/main.scss";
</style>

