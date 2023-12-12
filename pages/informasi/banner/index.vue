<template>
  <main class="c-main">
    <div class="container-fluid">
      <div class="fade-in">
        <div class="row">
          <div class="col-md-12">
            <div class="card border-0 rounded shadow-sm border-top-orange">
              <div class="card-header">
                <span class="font-weight-bold"
                  ><i class="fa fa-laptop"></i> Banner</span
                >
              </div>
              <div class="card-body">
                <nuxt-link
                  :to="{ name: 'informasi-banner-create' }"
                  class="btn btn-warning btn-sm mb-3 p-2"
                >
                  Tambah Banner</nuxt-link
                >

                <b-table
                  striped
                  bordered
                  hover
                  :items="banner.data"
                  :fields="fields"
                  show-empty
                >
                  <template v-slot:cell(index)="row">
                    {{ getIndex(row.index) }}
                  </template>
                  <template v-slot:cell(gambar)="data">
                    <img
                      class="img-fluid"
                      width="500"
                      :src="data.item.gambar"
                      style="height: 100px"
                    />
                  </template>

                  <template v-slot:cell(actions)="row">
                    <b-button
                      variant="danger"
                      size="md"
                      @click="destroy(row.item.id)"
                      >Hapus</b-button
                    >
                  </template>
                </b-table>

                <b-pagination
                  align="right"
                  :value="banner.current_page"
                  :total-rows="banner.total"
                  :per-page="banner.per_page"
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
      title: "Banner - Dasbor Bazma",
    };
  },

  data() {
    return {
      fields: [
        {
          label: "No",
          key: "index",
        },
        {
          label: "Gambar",
          key: "gambar",
        },
        {
          label: "Actions",
          key: "actions",
          tdClass: "text-center",
        },
      ],
    };
  },

  async asyncData({ store }) {
    await store.dispatch("operator/banner/getAllDataState");
  },

  computed: {
    banner() {
      return this.$store.state.operator.banner.banner;
    },
  },

  methods: {
    getIndex(index) {
      return index + 1;
    },
    changePage(page) {
      this.$store.commit("operator/peserta/diterima/SET_PAGE", page);

      this.$store.dispatch(
        "operator/peserta/diterima/getAllDataState",
        this.search
      );
    },
    destroy(id) {
      this.$swal
        .fire({
          text: "Ingin menghapus gambar ini ?",
          icon: "info",
          showCancelButton: true,
          confirmButtonColor: "#d33",
          cancelButtonColor: "#3085d6",
          confirmButtonText: "Hapus!",
          cancelButtonText: "Tidak",
        })
        .then((result) => {
          if (result.isConfirmed) {
            this.$store
              .dispatch("operator/banner/destroyDataState", id)
              .then(() => {
                this.$nuxt.refresh();
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
