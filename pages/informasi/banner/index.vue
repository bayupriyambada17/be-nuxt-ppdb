<template>
  <main class="c-main">
    <div class="container-fluid">
      <div class="fade-in">
        <div class="row">
          <div class="col-md-12">
            <div class="card border-0 rounded shadow-sm border-top-orange">
              <div class="card-header">
                <span class="font-weight-bold"
                  ><i class="fa fa-laptop"></i> SLIDERS</span
                >
              </div>
              <div class="card-body">
                <nuxt-link
                  :to="{ name: 'informasi-banner-create' }"
                  class="btn btn-warning btn-sm mb-3 p-2"
                >
                  <i class="fa fa-plus-circle"></i> ADD NEW</nuxt-link
                >

                <b-table
                  striped
                  bordered
                  hover
                  :items="banner.data"
                  :fields="fields"
                  show-empty
                >
                  <template v-slot:cell(gambar)="data">
                    <img class="img-fluid" width="200" :src="data.item.gambar" />
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
      title: "Banner - Dasbor Bazma",
    };
  },

  //data function
  data() {
    return {
      //table header
      fields: [
        {
          label: "Gambar",
          key: "gambar",
          tdClass: "text-center",
        },
        {
          label: "Actions",
          key: "actions",
          tdClass: "text-center",
        },
      ],
    };
  },

  //hook "asyncData"
  async asyncData({ store }) {
    await store.dispatch("operator/banner/getAllDataState")
  },

  //computed
  computed: {
    //sliders
    banner() {
      return this.$store.state.operator.banner.banner;
    },
  },
};
</script>

<style></style>
