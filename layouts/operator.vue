<template>
  <div class="c-app">
    <div class="c-sidebar c-sidebar-dark c-sidebar-fixed c-sidebar-lg-show" id="sidebar">
      <div class="c-sidebar-brand d-lg-down-none">
        <span class="ml-2 font-weight-bold">Dasbor Bazma</span>
      </div>

      <!-- sidebar -->
      <Sidebar />
      <!-- end sidebar -->

    </div>
    <div class="c-wrapper c-fixed-components">

      <!-- header -->
      <Header />
      <!-- end header -->

      <div class="c-body">

        <!-- content -->
        <Nuxt />
        <!-- end content -->

        <footer class="c-footer">
        <div><strong>DasBazma</strong> &copy; {{new Date().getFullYear() }} - bayupm.com</div>
          <div class="ml-auto">Template by&nbsp;<a href="https://coreui.io/">CoreUI</a></div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>

import Header from '@/components/operator/header.vue'
import Sidebar from '@/components/operator/sidebar.vue'

export default {

  //middleware
  middleware: 'isOperator',

  //register components
  components: {
    Header,
    Sidebar
  }

}
</script>

<style></style>
