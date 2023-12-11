<template>
  <main class="c-main">
    <div class="container-fluid">
      <div class="fade-in">
        <div class="row">
          <div class="col-md-12">
            <div class="card border-0 rounded shadow-sm border-top-orange">
              <div class="card-header">
                <span class="font-weight-bold"
                  ><i class="fa fa-folder"></i> {{ dataTitle }}</span
                >
              </div>
              <div class="card-body">
                <div class="form-group">
                  <div class="input-group mb-3">
                    <input
                      type="text"
                      v-model="search"
                      @keypress.enter="searchData"
                      class="form-control"
                      placeholder="cari berdasarkan tahun"
                    />
                  </div>
                </div>
                <b-table
                  striped
                  bordered
                  hover
                  :items="pesertaDidikTahunPelajaran"
                  :fields="fields"
                  show-empty
                  responsive
                >
                  <template v-slot:cell(actions)="row">
                    <b-button
                      :to="`/tahun-pelajaran/${row.item.id}/data-peserta`"
                      variant="info"
                      size="sm"
                    >
                      Detail Peserta
                    </b-button>
                  </template>
                </b-table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  //layout
  layout: "operator",

  //meta
  head() {
    return {
      title: `${this.pesertaDidikTahunPelajaran} - Dasbor Bazma`,
    };
  },

  data() {
    return {
      data: {
        tahunPelajaran: ""
      },
      fields: [
        {
          label: "No",
          key: "index",
        },
        {
          label: "Nomor Pendaftar",
          key: "nomor_pendaftar",
        },
        {
          label: "Nama Lengkap",
          key: "nama_lengkap",
        },
        {
          label: "Provinsi",
          key: "provinsi",
        },
        {
          label: "",
          key: "actions",
          tdClass: "text-center",
        },
      ],

      search: "",

      dataTitle: "Data Peserta",
    };
  },
  async asyncData({ store, route }) {
    await store.dispatch("operator/tahunPelajaran/getPesertaByTahunPelajaran",
    route.params.id);
  },

  computed: {
    pesertaDidikTahunPelajaran() {
      return this.$store.state.operator.tahunPelajaran.pesertaDidikTahunPelajaran;
    },
  },
  //  //mounted
  // mounted() {
  //   this.data.tahunPelajaran =
  //     this.$store.state.operator.tahunPelajaran.pesertaDidikTahunPelajaran.tahun_pelajaran;
  // },
};
</script>

<style></style>
