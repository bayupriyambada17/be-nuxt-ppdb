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
                  <button
                    @click="pesertaDiterimaExport"
                    class="btn btn-sm btn-warning"
                  >
                    Download Data
                  </button>
                </div>
              </div>
              <div class="card-body">
                <div class="form-group">
                  <div class="input-group mb-3">
                    <input
                      type="text"
                      v-model="search"
                      @keypress.enter="searchData"
                      class="form-control"
                      :placeholder="'Cari berdasarkan ' + dataTitle"
                    />
                  </div>
                </div>

                <b-table
                  striped
                  bordered
                  hover
                  :items="pesertaDiterima.data"
                  :fields="fields"
                  show-empty
                  responsive
                >
                  <template v-slot:cell(index)="row">
                    {{ getIndex(row.index) }}
                  </template>
                  <template v-slot:cell(actions)="row">
                    <!-- <b-button
                      :to="{
                        name: 'pesertaDiterima-edit-id',
                        params: { id: row.item.id },
                      }"
                      variant="warning"
                      size="sm"
                    >
                      Ubah
                    </b-button> -->
                  </template>
                </b-table>

                <b-pagination
                  align="right"
                  :value="pesertaDiterima.current_page"
                  :total-rows="pesertaDiterima.total"
                  :per-page="pesertaDiterima.per_page"
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
  layout: "operator",

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

      ],
      search: "",
      dataTitle: "Peserta Diterima",
    };
  },

  async asyncData({ store }) {
    await store.dispatch("operator/peserta/diterima/getAllDataState");
  },

  //computed
  computed: {
    pesertaDiterima() {
      return this.$store.state.operator.peserta.diterima.diterima;
    },
  },

  // watch: {
  //   search(newSearchValue) {
  //     this.$store.commit("operator/dayaListrik/SET_PAGE", 1);
  //     this.$store.dispatch(
  //       "operator/pesertaDiterima/getAllDataState",
  //       newSearchValue
  //     );
  //   },
  // },

  methods: {
    getIndex(index) {
      return index + 1;
    },
    async pesertaDiterimaExport() {
      try {
        const response = await this.$axios.post(
          "/api/v1/peserta/diterima-export",
          {
            responseType: "blob",
            "content-type": "application/json",
          }
        );

        if (response.data instanceof Blob) {
          const blobUrl = URL.createObjectURL(response.data);

          const link = document.createElement("a");
          link.href = blobUrl;
          link.download = "exported_data.xlsx";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
      } catch (error) {
        console.error("Error exporting data:", error);
      }
    },

    changePage(page) {
      this.$store.commit("operator/peserta/diterima/SET_PAGE", page);

      this.$store.dispatch("operator/peserta/diterima/getAllDataState", this.search);
    },
  },
};
</script>

<style></style>
