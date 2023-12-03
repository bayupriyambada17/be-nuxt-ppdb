<template>
  <main class="c-main">
    <div class="container-fluid">
      <div class="fade-in">
        <div class="row">
          <div class="col-md-12">
            <div class="card border-0 rounded shadow-sm border-top-orange">
              <div class="card-header">
                <span class="font-weight-bold"><i class="fa fa-folder"></i> {{ dataTitle }}</span>
              </div>
              <div class="card-body">

                <form @submit.prevent="storeData">

                  <div class="form-group">
                    <label>{{ dataTitle }}</label>
                    <input type="text" v-model="data.status" :placeholder="'Masukkan data ' + dataTitle"
                      class="form-control">
                    <div v-if="validation.status" class="mt-2">
                      <b-alert show variant="danger">{{ validation.status[0] }}</b-alert>
                    </div>
                  </div>

                  <button class="btn btn-info mr-1 btn-submit" type="submit"><i class="fa fa-paper-plane"></i>
                    SAVE</button>
                  <button class="btn btn-warning btn-reset" type="reset"><i class="fa fa-redo"></i>
                    RESET</button>

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
  layout: 'operator',

  //meta
  head() {
    return {
      title: `Tambah ${this.dataTitle} - Dasbor Bazma`,

    }
  },

  data() {
    return {
      //state category
      data: {
        status: '',
      },
      //state validation
      validation: [],
      dataTitle: "Keadaan Orang Tua"
    }
  },

   computed: {
        //categories
        keadaanOrangTua() {
            return this.$store.state.admin.keadaanOrangTua.keadaanOrangTua
        },
    },

  methods: {

    //method "storeData"
    async storeData() {
      //define formData
      let formData = new FormData();

      formData.append('status', this.data.status)

      //sending data to action "storeCategory" vuex
      await this.$store.dispatch('operator/keadaanOrangTua/storeDataState', formData)

        //success
        .then(() => {

          //sweet alert
          this.$swal.fire({
            title: 'BERHASIL!',
            text: "Data Berhasil Disimpan!",
            icon: 'success',
            showConfirmButton: false,
            timer: 2000
          })

          //redirect route "admin-categories"
          this.$router.push({
            name: 'master-keadaan-orang-tua'
          })

        })

        //error
        .catch(error => {
          this.validation = error.response.data
        })
    }
  }

}
</script>

<style></style>
