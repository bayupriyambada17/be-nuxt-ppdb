<template>
  <main class="c-main">
    <div class="container-fluid">
      <div class="fade-in">
        <div class="row">
          <div class="col-md-12">
            <div class="card border-0 rounded shadow-sm border-top-orange">
              <div class="card-header">
                <span class="font-weight-bold"><i class="fa fa-folder"></i> ADD NEW SLIDER</span>
              </div>
              <div class="card-body">

                <form @submit.prevent="storeBanner">

                  <div class="form-group">
                    <label>GAMBAR</label>
                    <input type="file" @change="handleFileChange" class="form-control">
                    <div v-if="validation.gambar" class="mt-2">
                      <b-alert show variant="danger">{{ validation.gambar[0] }}</b-alert>
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
        title: 'Tambah Banner - Dasbor Bazma',
      }
    },

    data() {
      return {
        //state slider
        banner: {
          gambar: '',
        },
        //state validation
        validation: []
      }
    },

    methods: {

      //handle file upload
      handleFileChange(e) {

        //get image
        let gambar = this.banner.gambar = e.target.files[0]

        //check fileType
        if (!gambar.type.match('image.*')) {

          e.target.value = ''

          this.banner.gambar = null

          //show sweet alert
          this.$swal.fire({
            title: 'OOPS!',
            text: "Format File Tidak Didukung!",
            icon: 'error',
            showConfirmButton: false,
            timer: 2000
          })
        }

      },

      async storeBanner() {

        //define formData
        let formData = new FormData();

        formData.append('gambar', this.banner.gambar)

        //sending data to action "storeBanner" vuex
        await this.$store.dispatch('operator/banner/storeDataState', formData)

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

            //redirect route "admin-sliders"
            this.$router.push({
              name: 'informasi-banner'
            })

          })

          //error
          .catch(error => {

            //assign error to state "validation"
            this.validation = error.response.data
          })
      }
    }

  }
</script>

<style>

</style>
