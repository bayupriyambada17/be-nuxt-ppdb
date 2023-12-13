<template>
  <ul class="c-sidebar-nav">
    <li class="c-sidebar-nav-item">
      <nuxt-link
        :to="{ name: 'dashboard' }"
        class="c-sidebar-nav-link"
        to="/dashboard"
      >
        Dasbor {{  }}
      </nuxt-link>
    </li>
    <div v-if="isOperator()">
      <MenuOperator/>
    </div>

    <div v-if="isBerkas()">
      <MenuBerkas/>
    </div>
  </ul>
</template>

<script>
import LinkItem from "@/components/shared/linkItem.vue";
import MenuOperator from "@/components/Menu/MenuOperator.vue"
import MenuBerkas from "@/components/Menu/MenuBerkas.vue"
export default {
  components: {
    LinkItem,
    MenuOperator,
    MenuBerkas,
  },

  methods: {
    isActive(routeName) {
      return this.$route.name === routeName;
    },

    isOperator() {
      return this.$auth.user.status_login === "operator";
    },
    isBerkas() {
      return this.$auth.user.status_login === "berkas";
    },
  },
};
</script>

<style scoped>
a.nuxt-link-active {
  background: rgba(255, 255, 255, 0.05) !important;
}
</style>
