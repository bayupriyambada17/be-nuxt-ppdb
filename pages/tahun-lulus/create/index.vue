<template>
  <main class="c-main">
    <div class="container-fluid">
      <div class="fade-in">
        <div class="row">
          <div class="col-md-12">
            <div class="card border-0 rounded shadow-sm border-top-orange">
              <div class="card-header">
                <span class="font-weight-bold"><i class="fa fa-folder"></i> ADD NEW CATEGORY</span>
              </div>
              <div class="card-body">

                <form @submit.prevent="storeData">

                  <div class="form-group">
                    <label>Tahun Pelajaran</label>
                    <input type="text" v-model="data.tahun_pelajaran" placeholder="Masukkan Nama Category"
                      class="form-control">
                    <div v-if="validation.tahun_pelajaran" class="mt-2">
                      <b-alert show variant="danger">{{ validation.tahun_pelajaran[0] }}</b-alert>
                    </div>
                  </div>
                  <div class="form-group">
                    <b-form-checkbox id="checkbox-1" v-model="data.is_active" name="checkbox-1" value="Ya"
                      unchecked-value="Tidak">
                    </b-form-checkbox>

                    <div>State: <strong>{{ data.is_active }}</strong></div>
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
      title: 'Add New Category - Administrator',

    }
  },

  data() {
    return {
      //state category
      data: {
        tahun_pelajaran: '',
        is_active: 'Ya'
      },
      //state validation
      validation: []
    }
  },

  methods: {

    //method "storeData"
    async storeData() {

      const is_active_value = this.data.is_active === 'Ya' ? 1 : 0;

      //define formData
      let formData = new FormData();

      formData.append('tahun_pelajaran', this.data.tahun_pelajaran)
      formData.append('is_active', is_active_value)

      //sending data to action "storeCategory" vuex
      await this.$store.dispatch('operator/tahunPelajaran/storeTahunPelajaran', formData)

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
            name: 'tahun-pelajaran'
          })

        })

        //error
        .catch(error => {

          //assign error to state "validation"
          this.validation = error
        })
    }
  }

}
</script>

<style></style>
