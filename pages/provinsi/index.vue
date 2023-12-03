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
                        :to="{ name: 'provinsi-create' }"
                        class="btn btn-warning btn-sm"
                        style="padding-top: 10px"
                      >
                        <i class="fa fa-plus-circle"></i> Tambah</nuxt-link
                      >
                    </div>
                     <input
                      type="text"
                      v-model="search"
                      @keypress.enter="searchData"
                      class="form-control"
                      placeholder="cari berdasarkan tahun"
                    />
                    <!-- <div class="input-group-append">
                      <button @click="searchData" class="btn btn-warning">
                        <i class="fa fa-search"></i>SEARCH
                      </button>
                    </div> -->
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
          label: "Nama Provinsi",
          key: "name",
        },
        {
          label: "Actions",
          key: "actions",
          tdClass: "text-center",
        },
      ],
      search: "",
      dataTitle: "Provinsi",
    };
  },

  //hook "asyncData"
  async asyncData({ store }) {
    await store.dispatch("operator/provinsi/getAllDataState");
  },

  //computed
  computed: {
    provinsi() {
      return this.$store.state.operator.provinsi.provinsi.map((item, index) => {
        return { ...item, index: index + 1 };
      });
    },
  },

  watch: {
    search(newSearchValue) {
      this.$store.commit("operator/dayaListrik/SET_PAGE", 1);
      this.$store.dispatch(
        "operator/provinsi/getAllDataState",
        newSearchValue
      );
    },
  },

  methods: {
    searchData() {
      this.$store.commit("operator/provinsi/SET_PAGE", 1);
      this.$store.dispatch(
        "operator/provinsi/getAllDataState",
        this.search
      );
    },
  }
};
</script>

<style></style>
