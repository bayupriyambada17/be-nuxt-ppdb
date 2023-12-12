<template>
  <main class="c-main">
    <div class="container-fluid">
      <div class="fade-in">
        <div class="row">
          <div class="col-md-12">
            <div class="card border-0 rounded shadow-sm border-top-orange">
              <div class="card-header">
                <div class="d-flex justify-content-between align-items-center">
                  <span class="font-weight-bold"
                    ><i class="fa fa-folder"></i> {{ dataTitle }}</span
                  >
                  <button class="btn btn-sm btn-warning">Download Data</button>
                </div>
              </div>
              <div class="card-body">
                <b-table
                  striped
                  bordered
                  hover
                  :items="peserta.data"
                  :fields="fields"
                  show-empty
                  responsive
                >
                  <template v-slot:cell(index)="row">
                    {{ getIndex(row.index) }}
                  </template>

                  <!-- <template v-slot:cell(actions)="row">
                    <b-button
                      :to="{
                        name: 'peserta-proses-id-validasi',
                        params: { id: row.item.id },
                      }"
                      variant="warning"
                      size="sm"
                    >
                      Validasi Peserta
                    </b-button>
                  </template> -->
                </b-table>
                <b-pagination
                  align="right"
                  :value="peserta.current_page"
                  :total-rows="peserta.total"
                  :per-page="peserta.per_page"
                  @change="changePage"
                  aria-controls="my-table"
                ></b-pagination>
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
      title: `${this.dataTitle} - Dasbor Bazma`,
    };
  },

  data() {
    return {
      fields: [
        {
          label: "#",
          key: "index",
          tdClass: "text-center",
        },
        {
          label: "Nomor Pendaftar",
          key: "nomor_pendaftar",
        },
        {
          label: "Tahun Pelajaran",
          key: "tahun_pelajaran.tahun_pelajaran",
        },
        {
          label: "Nama Lengkap",
          key: "nama_lengkap",
        },
        {
          label: "Tanggal Terdaftar",
          key: "tanggal_terdaftar",
        },
        // {
        //   label: "",
        //   key: "actions",
        //   tdClass: "text-center",
        // },
      ],
      search: "",
      dataTitle: "Peserta Ditolak",
    };
  },

  async asyncData({ store }) {
    await store.dispatch("operator/peserta/ditolak/getAllDataState");
  },

  computed: {
    peserta() {
      return this.$store.state.operator.peserta.ditolak.ditolak;
    },
  },

  // watch: {
  //   search(newSearchValue) {
  //     this.$store.commit("operator/dayaListrik/SET_PAGE", 1);
  //     this.$store.dispatch(
  //       "operator/pesertaProses/getAllDataState",
  //       newSearchValue
  //     );
  //   },
  // },

  methods: {
    getIndex(index) {
      return index + 1;
    },
    // searchData() {
    //   this.$store.commit("operator/pesertaProses/SET_PAGE", 1);
    //   this.$store.dispatch(
    //     "operator/pesertaProses/getAllDataState",
    //     this.search
    //   );
    // },

    changePage(page) {
      this.$store.commit("operator/peserta/ditolak/SET_PAGE", page);

      this.$store.dispatch(
        "operator/peserta/ditolak/getAllDataState",
        this.search
      );
    },
  },
};
</script>

<style></style>
