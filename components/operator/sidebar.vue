<template>
  <ul class="c-sidebar-nav">
    <li class="c-sidebar-nav-item">
      <nuxt-link
        :to="{ name: 'dashboard' }"
        class="c-sidebar-nav-link"
        href="index.html">
        Dasbor</nuxt-link>
    </li>
    <LinkItem label="Chart Provinsi" to="dashboard/chart-provinsi" />

    <li class="c-sidebar-nav-title">Data Peserta</li>

    <LinkItem label="Peserta Didik (Diterima)" to="/peserta-didik" />
    <LinkItem label="Peserta Didik (Ditolak)" to="/peserta-didik" />

    <li class="c-sidebar-nav-title">Data Master</li>
    <LinkItem label="Provinsi" to="/provinsi" />
    <LinkItem label="Golongan Darah" to="/golongan-darah" />
    <LinkItem label="Daya Listrik" to="/daya-listrik" />
    <LinkItem label="Sumber Air" to="/sumber-air" />
    <LinkItem label="Keadaan Orang Tua" to="/master/keadaan-orang-tua" />
    <LinkItem
      label="Penerima Bantuan Sosial"
      to="/master/penerima-bantuan-sosial"
    />

    <li class="c-sidebar-nav-title">Data Status</li>
    <LinkItem
      label="Status Tinggal Bersama"
      to="/status/status-tinggal-bersama"
    />
    <LinkItem
      label="Status Dalam Keluarga"
      to="/status/status-dalam-keluarga"
    />
    <LinkItem
      label="Status Harta Tidak Bergerak"
      to="/status/harta-tidak-bergerak"
    />
    <LinkItem
      label="Status Kepemilikan Kendaraan"
      to="/status/kepemilikan-kendaraan"
    />
    <LinkItem label="Status Kepemilikan Rumah" to="/status/kepemilikan-rumah" />

    <li class="c-sidebar-nav-title">Data Tahun</li>

    <LinkItem label="Tahun Pelajaran" to="/tahun-pelajaran" />
    <LinkItem label="Tahun Lulus" to="/tahun-lulus" />

    <li class="c-sidebar-nav-title">Informasi</li>

    <LinkItem label="Informasi PPDB" to="/informasi/ppdb" />
    <LinkItem label="Informasi Pendaftaran" to="#" />

    <li class="c-sidebar-nav-title">Statistik</li>

    <LinkItem label="Peserta Didik (Diterima)" to="/peserta-didik" />
    <LinkItem label="Peserta Didik (Ditolak)" to="/peserta-didik" />

    <li class="c-sidebar-nav-title">OTHERS</li>

    <li class="c-sidebar-nav-item">
      <a href="#" class="c-sidebar-nav-link">
        <svg class="c-sidebar-nav-icon">
          <use
            xlink:href="@/node_modules/@coreui/icons/sprites/free.svg#cil-user"
          ></use>
        </svg>
        Customers</a
      >
    </li>

    <li class="c-sidebar-nav-item">
      <a href="#" class="c-sidebar-nav-link">
        <svg class="c-sidebar-nav-icon">
          <use
            xlink:href="@/node_modules/@coreui/icons/sprites/free.svg#cil-laptop"
          ></use>
        </svg>
        Sliders</a
      >
    </li>

    <li class="c-sidebar-nav-item">
      <a href="#" class="c-sidebar-nav-link">
        <svg class="c-sidebar-nav-icon">
          <use
            xlink:href="@/node_modules/@coreui/icons/sprites/free.svg#cil-group"
          ></use>
        </svg>
        Users</a
      >
    </li>

    <li class="c-sidebar-nav-divider"></li>
  </ul>
</template>

<script>
import LinkItem from "@/components/shared/linkItem.vue";
export default {
  components: {
    LinkItem,
  },
};
</script>

<style scoped>
a.nuxt-link-active {
  background: rgba(255, 255, 255, 0.05) !important;
}
</style>
