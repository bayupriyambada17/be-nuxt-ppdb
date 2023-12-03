<template>
  <main class="c-main">
    <div class="container-fluid">
      <div class="fade-in">
        <div class="row">
          <div class="col-md-12">
            <div class="card border-0 rounded shadow-sm border-top-orange">
              <div class="card-header">
                <span class="font-weight-bold"
                  ><i class="fa fa-folder"></i> EDIT: {{ data.name }} </span
                >
              </div>
              <div class="card-body">
                <form @submit.prevent="updateData">
                  <div class="form-group">
                    <label>NAMA PROVINSI</label>
                    <input
                      type="text"
                      v-model="data.name"
                      placeholder="Masukkan Nama"
                      class="form-control"
                    />
                    <div v-if="validation.name" class="mt-2">
                      <b-alert show variant="danger">{{
                        validation.name[0]
                      }}</b-alert>
                    </div>
                  </div>

                  <button class="btn btn-info mr-1 btn-submit" type="submit">
                    <i class="fa fa-paper-plane"></i> UPDATE
                  </button>
                  <button class="btn btn-warning btn-reset" type="reset">
                    <i class="fa fa-redo"></i> RESET
                  </button>
                </form>
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
      // title: "Edit - Administrator",
      title: `Edit ${this.data.name} - Dasbor Bazma`,
    };
  },

  data() {
    return {
      //state category
      data: {
        name: "",
      },
      //state validation
      validation: [],
    };
  },

  //hook "asyncData"
  async asyncData({ store, route }) {
    await store.dispatch(
      "operator/provinsi/getDetailIdstate",
      route.params.id
    );
  },

  //mounted
  mounted() {
    this.data.name =this.$store.state.operator.provinsi.provinsi.name;
  },

  //method
  methods: {
    //method "updateData"
    async updateData() {
      //define formData
      let formData = new FormData();


      formData.append("name", this.data.name);

      await this.$store
        .dispatch("operator/provinsi/updateDataState", {
          provinsiId: this.$route.params.id,
          payload: formData,
        })

        //success
        .then(() => {
          //sweet alert
          this.$swal.fire({
            title: "BERHASIL!",
            text: "Data Berhasil Diupdate!",
            icon: "success",
            showConfirmButton: false,
            timer: 2000,
          });

          //redirect route "admin-categories"
          this.$router.push({
            name: "provinsi",
          });
        })

        //error
        .catch((error) => {
          //assign error to state "validation"
          this.validation = error;
        });
    },
  },
};
</script>

<style></style>
