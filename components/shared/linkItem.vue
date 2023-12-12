<template>
  <li class="c-sidebar-nav-item" :class="{ 'c-active': isActive }">
    <router-link :to="to" class="c-sidebar-nav-link">
      {{ label }}
    </router-link>
  </li>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    to: {
      type: [String, Object],
      required: true,
    },
  },
  computed: {
    isActive() {
      return this.$route.fullPath === this.to;
    },
  },
};
</script>

<style scoped>
.c-active {
  background: rgba(255, 255, 255, 0.05) !important;
}
</style>
