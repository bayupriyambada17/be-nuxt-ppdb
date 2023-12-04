<template>
  <main class="c-main">
    <div class="container-fluid">
      <div class="fade-in">
        <div class="row">
          <div class="col-md-12">
            <div class="card border-0 rounded shadow-sm border-top-orange">
              <div class="card-header">
                <span class="font-weight-bold"
                  ><i class="fa fa-folder"></i> EDIT CATEGORY</span
                >
              </div>
              <div class="card-body">
                <form @submit.prevent="updateData">
                  <div class="form-group">
                    <label>Tahun Lulus</label>
                    <input
                      type="text"
                      v-model="data.tahun"
                      placeholder="Masukkan Tahun Lulus"
                      class="form-control"
                    />
                    <div v-if="validation.tahun" class="mt-2">
                      <b-alert show variant="danger">{{
                        validation.tahun[0]
                      }}</b-alert>
                    </div>
                  </div>

                  <div class="form-group">
                    <b-form-checkbox
                      id="checkbox-1"
                      v-model="data.is_active"
                      name="checkbox-1"
                      value="Ya"
                      unchecked-value="Tidak"
                    >
                    </b-form-checkbox>

                    <div>
                      State: <strong>{{ data.is_active }}</strong>
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
      title: "Edit Tahun Pelajaran - Dasbor Bazm",
    };
  },

  data() {
    return {
      //state category
      data: {
        tahun: "",
        is_active: "Ya",
      },
      //state validation
      validation: [],
    };
  },

  //hook "asyncData"
  async asyncData({ store, route }) {
    await store.dispatch(
      "operator/tahunPelajaran/getDetailIdTahunPelajaran",
      route.params.id
    );
  },

  //mounted
  mounted() {
    this.data.tahun =this.$store.state.operator.tahunPelajaran.tahunPelajaran.tahun;
    this.data.is_active =this.$store.state.operator.tahunPelajaran.tahunPelajaran.is_active;
  },

  //method
  methods: {
    //method "updateData"
    async updateData() {
      //define formData
       const is_active_value = this.data.is_active === 'Ya' ? 1 : 0;
      let formData = new FormData();


      formData.append("tahun", this.data.tahun);
      formData.append("is_active", is_active_value);
      // formData.append("_method", "PATCH");

      //sending data to action "updateCategory" vuex
      await this.$store
        .dispatch("operator/tahunPelajaran/updateTahunPelajaran", {
          tahunPelajaranId: this.$route.params.id,
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
          this.validation = error;
        });
    },
  },
};
</script>

<style></style>
