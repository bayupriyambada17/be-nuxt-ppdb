<template>
  <main class="c-main">
    <div class="container-fluid">
      <div class="fade-in">
        <div class="row">
          <div class="col-md-12">
            <div class="card border-0 rounded shadow-sm border-top-orange">
              <div class="card-header">
                <span class="font-weight-bold"
                  ><i class="fa fa-folder"></i> EDIT: {{ data.status }}
                </span>
              </div>
              <div class="card-body">
                <form @submit.prevent="updateData">
                  <div class="form-group">
                    <label>{{ titleForm.title }}</label>
                    <input
                      type="text"
                      v-model="data.status"
                      :placeholder="'Masukan data ' + titleForm.title"
                      class="form-control"
                    />
                    <div v-if="validation.status" class="mt-2">
                      <b-alert show variant="danger">{{
                        validation.status[0]
                      }}</b-alert>
                    </div>
                  </div>

                  <button class="btn btn-info mr-1 btn-submit" type="submit">
                   Perbaharui
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
      title: `Edit ${this.data.status} - Dasbor Bazma`,
    };
  },

  data() {
    return {
      //state category
      data: {
        status: "",
      },
      //state validation
      validation: [],
      titleForm: {
        title: "Kualitas Rumah",
      },
    };
  },

  //hook "asyncData"
  async asyncData({ store, route }) {
    await store.dispatch(
      "operator/kualitasRumah/getDetailIdstate",
      route.params.id
    );
  },

  //mounted
  mounted() {
    this.data.status =
      this.$store.state.operator.kualitasRumah.kualitasRumah.status;
  },

  //method
  methods: {
    //method "updateData"
    async updateData() {
      //define formData
      let formData = new FormData();

      formData.append("status", this.data.status);

      await this.$store
        .dispatch("operator/kualitasRumah/updateDataState", {
          dataId: this.$route.params.id,
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

         this.$router.go(-1);
        })

        //error
        .catch((error) => {
          //assign error to state "validation"
          this.validation = error.response.data;
        });
    },
  },
};
</script>

<style></style>
