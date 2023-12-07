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
                  :items="provinsi"
                  :fields="fields"
                  show-empty
                >
                  <template v-slot:cell(actions)="row">
                    <b-button
                      :to="{
                        name: 'provinsi-edit-id',
                        params: { id: row.item.id },
                      }"
                      variant="warning"
                      size="sm"
                    >
                      Ubah
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
      title: `${this.dataTitle} - Dasbor Bazma`,
    };
  },

  //data function
  data() {
    return {
      //table header
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
        {
          label: "Status Proses",
          key: "is_pendaftar",
          tdClass: "text-center fw-bold",
        },
      ],
      search: "",
      dataTitle: "Peserta Diterima",
    };
  },

  //hook "asyncData"
  async asyncData({ store }) {
    await store.dispatch("operator/peserta/diterima/getAllDataState");
  },

  //computed
  computed: {
    provinsi() {
      return this.$store.state.operator.peserta.diterima.diterima.map(
        (item, index) => {
          return { ...item, index: index + 1 };
        }
      );
    },
  },

  // watch: {
  //   search(newSearchValue) {
  //     this.$store.commit("operator/dayaListrik/SET_PAGE", 1);
  //     this.$store.dispatch(
  //       "operator/provinsi/getAllDataState",
  //       newSearchValue
  //     );
  //   },
  // },

  methods: {
    async pesertaDiterimaExport() {
      try {
        const response = await this.$axios.post(
          "/api/v1/peserta/diterima-export",
          {
            responseType: "blob",
            'content-type': "application/json"
          }
        );

        if (response.data instanceof Blob) {
          // Create a Blob URL
          const blobUrl = URL.createObjectURL(response.data);

          // Create a link element and trigger a click to download the file
          const link = document.createElement('a');
          link.href = blobUrl;
          link.download = 'exported_data.xlsx';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
      } catch (error) {
        console.error("Error exporting data:", error);
        // Handle error
      }
    },
    // searchData() {
    //   this.$store.commit("operator/provinsi/SET_PAGE", 1);
    //   this.$store.dispatch(
    //     "operator/provinsi/getAllDataState",
    //     this.search
    //   );
    // },
  },
};
</script>

<style></style>
