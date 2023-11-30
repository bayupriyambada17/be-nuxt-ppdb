<template>
  <li class="c-sidebar-nav-item">
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
};
</script>

<style scoped>
/* Gaya khusus komponen ini jika diperlukan */
</style>
