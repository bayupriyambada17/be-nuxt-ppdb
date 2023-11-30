<template>
  <ul class="c-sidebar-nav">

    <li class="c-sidebar-nav-item"><nuxt-link :to="{ name: 'dashboard' }" class="c-sidebar-nav-link" href="index.html">
        <svg class="c-sidebar-nav-icon">
          <use xlink:href="@/node_modules/@coreui/icons/sprites/free.svg#cil-speedometer"></use>
        </svg> Dasbor</nuxt-link></li>

    <li class="c-sidebar-nav-title">Data Master</li>

    <LinkItem label="Provinsi" to="/provinsi" />
    <LinkItem label="Golongan Darah" to="/golongan-darah" />
    <LinkItem label="Daya Listrik" to="/daya-listrik" />
    <LinkItem label="Sumber Air" to="/sumber-air" />

    <li class="c-sidebar-nav-title">Data Tahun</li>

    <LinkItem label="Tahun Pelajaran" to="/tahun-pelajaran" />
    <LinkItem label="Tahun Lulus" to="/tahun-lulus" />


    <li class="c-sidebar-nav-title">OTHERS</li>

    <li class="c-sidebar-nav-item"><a href="#" class="c-sidebar-nav-link">
        <svg class="c-sidebar-nav-icon">
          <use xlink:href="@/node_modules/@coreui/icons/sprites/free.svg#cil-user"></use>
        </svg> Customers</a>
    </li>

    <li class="c-sidebar-nav-item"><a href="#" class="c-sidebar-nav-link">
        <svg class="c-sidebar-nav-icon">
          <use xlink:href="@/node_modules/@coreui/icons/sprites/free.svg#cil-laptop"></use>
        </svg> Sliders</a>
    </li>

    <li class="c-sidebar-nav-item"><a href="#" class="c-sidebar-nav-link">
        <svg class="c-sidebar-nav-icon">
          <use xlink:href="@/node_modules/@coreui/icons/sprites/free.svg#cil-group"></use>
        </svg> Users</a>
    </li>

    <li class="c-sidebar-nav-divider"></li>
  </ul>
</template>

<script>
import LinkItem from '@/components/shared/linkItem.vue';
export default {
  components: {
    LinkItem,
  }
}
</script>

<style scoped>
a.nuxt-link-active {
  background: rgba(255, 255, 255, .05) !important;
}
</style>
