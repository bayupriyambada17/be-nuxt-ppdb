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
                    <div class="input-group-prepend">
                      <nuxt-link
                        :to="{ name: 'tahun-pelajaran-create' }"
                        class="btn btn-warning btn-sm"
                        style="padding-top: 10px"
                      >
                        <i class="fa fa-plus-circle"></i> Tambah Data</nuxt-link
                      >
                    </div>
                    <input
                      type="text"
                      v-model="search"
                      @keypress.enter="searchData"
                      class="form-control"
                      placeholder="cari berdasarkan tahun"
                    />
                    <div class="input-group-append">
                      <button @click="searchData" class="btn btn-warning">
                        <i class="fa fa-search"></i>SEARCH
                      </button>
                    </div>
                  </div>
                </div>

                <b-table
                  striped
                  bordered
                  hover
                  :items="tahunPelajaran"
                  :fields="fields"
                  show-empty
                >
                  <template v-slot:cell(actions)="row">
                    <b-button
                      :to="{
                        name: 'tahun-pelajaran-id-data-peserta',
                        params: { id: row.item.id },
                      }"
                      variant="info"
                      size="sm"
                    >
                      Lihat Peserta
                    </b-button>
                    <b-button
                      :to="{
                        name: 'tahun-pelajaran-edit-id',
                        params: { id: row.item.id },
                      }"
                      variant="warning"
                      size="sm"
                    >
                      Ubah
                    </b-button>
                    <b-button
                      variant="danger"
                      size="sm"
                      @click="destroy(row.item.id)"
                      >Hapus</b-button
                    >
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
      title: "Tahun Pelajaran - Administrator",
    };
  },

  //data function
  data() {
    return {
      //table header
      fields: [

        {
          label: "Tahun Pelajaran",
          key: "tahun_pelajaran",
        },
        {
          label: "Data Aktif",
          key: "is_active",
        },
        {
          label: "Actions",
          key: "actions",
          tdClass: "text-center",
        },
      ],

      search: "",

      dataTitle: "Tahun Pelajaran",
    };
  },

  //hook "asyncData"
  async asyncData({ store }) {
    await store.dispatch("operator/tahunPelajaran/getTahunPelajaranData");
  },

  //computed
  computed: {
    tahunPelajaran() {
      // return
      return this.$store.state.operator.tahunPelajaran.tahunPelajaran;
    },
  },

  methods: {
    searchData() {
      this.$store.commit("operator/tahunPelajaran/SET_PAGE", 1);

      this.$store.dispatch(
        "operator/tahunPelajaran/getTahunPelajaranData",
        this.search
      );
    },

    destroy(id) {
      this.$swal
        .fire({
          title: "APAKAH ANDA YAKIN ?",
          text: "INGIN MENGHAPUS DATA INI !",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#d33",
          cancelButtonColor: "#3085d6",
          confirmButtonText: "YA, HAPUS!",
          cancelButtonText: "TIDAK",
        })
        .then((result) => {
          if (result.isConfirmed) {
            this.$store
              .dispatch("operator/tahunPelajaran/destroyTahunPelajaran", id)
              .then(() => {
                //feresh data
                this.$nuxt.refresh();

                //alert
                this.$swal.fire({
                  title: "BERHASIL!",
                  text: "Data Berhasil Dihapus!",
                  icon: "success",
                  showConfirmButton: false,
                  timer: 2000,
                });
              });
          }
        });
    },
  },
};
</script>

<style></style>
