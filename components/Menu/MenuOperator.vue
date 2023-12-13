<template>
  <div>
    <div v-for="(p, i) in itemsMenu" :key="i">
      <li class="c-sidebar-nav-title">
        {{ p.title }}
      </li>
      <LinkItem
        v-for="(sub, j) in p.menu"
        :key="j"
        :label="sub.name"
        :to="sub.link"
      />
    </div>
  </div>
</template>

<script>
import LinkItem from "@/components/shared/linkItem.vue";
export default {
  components: {
    LinkItem,
  },

  data() {
    return {
      itemsMenu: [
        {
          title: "Data Monitoring",
          menu: [
            {
              name: "Chart Provinsi",
              link: "/dashboard/chart-provinsi",
            },
            {
              name: "Data Monitoring",
              link: "/dashboard/monitoring",
            },
            {
              name: "Peserta Didik (Ditolak)",
              link: "/peserta/ditolak",
            },
          ],
        },
        {
          title: "Data Tahun",
          menu: [
            {
              name: "Tahun Pelajaran",
              link: "/tahun-pelajaran",
            },
            {
              name: "Tahun Lulus",
              link: "/tahun-lulus",
            },
          ],
        },
        {
          title: "Data Peserta",
          menu: [
            {
              name: "Peserta Didik (Terima)",
              link: "/peserta/diterima",
            },
            {
              name: "Peserta Didik (Ditolak)",
              link: "/peserta/ditolak",
            },
          ],
        },
        {
          title: "Data Master",
          menu: [
            {
              name: "Provinsi",
              link: "/provinsi",
            },
            {
              name: "Golongan Darah",
              link: "/golongan-darah",
            },
            {
              name: "Daya Listrik",
              link: "/daya-listrik",
            },
            {
              name: "Sumber Air",
              link: "/sumber-air",
            },
            {
              name: "Keadaan Orang Tua",
              link: "/master/keadaan-orang-tua",
            },
            {
              name: "Penerima Bantuan Sosial",
              link: "/master/penerima-bantuan-sosial",
            },
            {
              name: "Kualitas Rumah",
              link: "/master/kualitas-rumah",
            },
            {
              name: "Harta Tidak Bergerak",
              link: "/master/harta-tidak-bergerak",
            },
            {
              name: "Kepemilikan Kendaraan",
              link: "/master/kepemilikan-kendaraan",
            },
          ],
        },
        {
          title: "Data Status",
          menu: [
            {
              name: "Status Tinggal Bersama",
              link: "/status/status-tinggal-bersama",
            },
            {
              name: "Status Dalam Keluarga",
              link: "/status/status-dalam-keluarga",
            },
            {
              name: "Status Harta Tidak Bergerak",
              link: "/status/harta-tidak-bergerak",
            },
            {
              name: "Status Kepemilikan Kendaraan",
              link: "/status/kepemilikan-kendaraan",
            },
            {
              name: "Status Kepemilikan Rumah",
              link: "/status/kepemilikan-rumah",
            },
          ],
        },
        {
          title: "Data Informasi",
          menu: [
            {
              name: "Link PPDB",
              link: "/informasi/ppdb",
            },
            {
              name: "Banner PPDB",
              link: "/informasi/banner",
            },
          ],
        },
      ],
    };
  },
};
</script>
