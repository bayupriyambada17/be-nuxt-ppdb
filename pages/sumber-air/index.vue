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
                        :to="{ name: 'sumber-air-create' }"
                        class="btn btn-warning btn-sm"
                        style="padding-top: 10px"
                      >
                        <i class="fa fa-plus-circle"></i> Tambah
                      </nuxt-link>
                    </div>
                    <input
                      type="text"
                      v-model="search"
                      @keypress.enter="searchData"
                      class="form-control"
                      placeholder="cari berdasarkan data"
                    />
                  </div>
                </div>

                <b-table
                  striped
                  bordered
                  hover
                  :items="sumberAir"
                  :fields="fields"
                  show-empty
                >
                  <template v-slot:cell(index)="row">
                    {{ getIndex(row.index) }}
                  </template>
                  <template v-slot:cell(actions)="row">
                    <b-button
                      :to="{
                        name: 'sumber-air-edit-id',
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
                      @click="destroy(row.item)"
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
          label: this.dataTitle,
          key: "status",
          tdClass: "text-center",
        },
        {
          label: "Total Peserta",
          key: "peserta_didik_fasilitas_count",
          tdClass: "text-center",
        },
        {
          label: "Actions",
          key: "actions",
          tdClass: "text-center",
        },
      ],
      search: "",
      dataTitle: "Sumber Air",
    };
  },

  //hook "asyncData"
  async asyncData({ store }) {
    await store.dispatch("operator/sumberAir/getAllDataState");
  },

  watch: {
    search(newSearchValue) {
      this.$store.commit("operator/sumberAir/SET_PAGE", 1);
      this.$store.dispatch(
        "operator/sumberAir/getAllDataState",
        newSearchValue
      );
    },
  },

  //computed
  computed: {
    sumberAir() {
      const sumberAirData = this.$store.state.operator.sumberAir.sumberAir;

      // Pastikan sumberAirData adalah array sebelum menghitung indeks
      if (Array.isArray(sumberAirData)) {
        return sumberAirData;
      } else {
        return [];
      }
    },
  },

  methods: {
    getIndex(index) {
      // Menghitung indeks dengan menambahkan 1
      return index + 1;
    },

    searchData() {
      this.$store.commit("operator/sumberAir/SET_PAGE", 1);
      this.$store.dispatch(
        "operator/sumberAir/getAllDataState",
        this.search
      );
    },

    async destroy(item) {
      const confirmationResult = await this.$swal.fire({
        title: `Yakin ingin menghapus data: ${item.status}?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "YA, HAPUS!",
        cancelButtonText: "TIDAK",
      });

      if (confirmationResult.isConfirmed) {
        try {
          const response = await this.$axios.delete(
            `/api/v1/sumber-air/${item.id}/hapus`
          );


          // Check the response from the API
          if (response.data.status === true) {
            // If deletion is successful, refresh data and show success alert
            this.$nuxt.refresh();
            this.$swal.fire({
              title: "BERHASIL!",
              text: response.data.message,
              icon: "success",
              showConfirmButton: false,
              timer: 2000,
            });
          }
        } catch (error) {
          this.$swal.fire({
            title: "GAGAL!",
            text: error.response.data.message,
            icon: "error",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Tutup",
          });
        }
      }
    },
  },
};
</script>

<style></style>
