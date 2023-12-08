//state
export const state = () => ({

  //categories
  tahunPelajaran: [],

  //page
  page: 1,

  tahunPelajaran: {}

})

//mutations
export const mutations = {

  //mutation "SET_CATEGORIES_DATA"
  SET_TAHUN_PELAJARAN_DATA(state, payload) {

    //set value state "categories"
    state.tahunPelajaran = payload
  },

  //mutation "SET_PAGE"
  SET_PAGE(state, payload) {

    //set value state "page"
    state.page = payload
  },

  SET_TAHUN_PELAJARAN_DATA(state, payload) {
    state.tahunPelajaran = payload

  }

}

//actions
export const actions = {

  //get categories data
  getTahunPelajaranData({ commit, state }, payload) {

    //search
    let search = payload ? payload : ''

    //set promise
    return new Promise((resolve, reject) => {

      // this.$axios.get(`/api/v1/categories?q=${search}&page=${state.page}`)
      this.$axios.get(`/api/v1/tahun-pelajaran?tahun_pelajaran=${search}&page=${state.page}`)

        //success
        .then((response) => {

          //commit ti mutation "SET_TAHUN_PELAJARAN_DATA"
          commit('SET_TAHUN_PELAJARAN_DATA', response.data.data)

          //resolve promise
          resolve()
        })

    })

  },
  storeTahunPelajaran({ dispatch, commit }, payload) {

    //set promise
    return new Promise((resolve, reject) => {

      //store to Rest API "/api/admin/categories" with method "POST"
      this.$axios.post('/api/v1/tahun-pelajaran/tambah', payload)

        //success
        .then(() => {

          //dispatch action "getCategoriesData"
          dispatch('getTahunPelajaranData')

          //resolve promise
          resolve()

        })

        //error
        .catch(error => {
          reject(error)
        })

    })
  },

  getDetailIdTahunPelajaran({ commit }, payload) {

    //set promise
    return new Promise((resolve, reject) => {

      //get to Rest API "/api/admin/categories/:id" with method "GET"
      this.$axios.get(`/api/v1/tahun-pelajaran/${payload}`)

        //success
        .then(response => {
          //commit to mutation "SET_CATEGORY_DATA"
          commit('SET_TAHUN_PELAJARAN_DATA', response.data.data)

          //resolve promise
          resolve()

        })

    })

  },

  updateTahunPelajaran({ dispatch, commit }, { tahunPelajaranId, payload }) {

    //set promise
    return new Promise((resolve, reject) => {

      //store to Rest API "/api/admin/categories/:id" with method "POST"
      this.$axios.post(`/api/v1/tahun-pelajaran/${tahunPelajaranId}/ubah`, payload)

        //success
        .then(() => {

          //dispatch action "getCategoriesData"
          dispatch('getTahunPelajaranData')

          //resolve promise
          resolve()

        })

        //error
        .catch(error => {
          reject(error)
        })

    })
  },

  destroyTahunPelajaran({ dispatch, commit }, payload) {
    return new Promise((resolve, reject) => {
      this.$axios.delete(`/api/v1/tahun-pelajaran/${payload}/hapus`)
        .then(() => {
          dispatch('getTahunPelajaranData')
          resolve()

        })

    })

  },

  getPesertaByTahunPelajaran({ commit, state }, payload) {

    //search
    let search = payload ? payload : ''

    //set promise
    return new Promise((resolve, reject) => {

      // this.$axios.get(`/api/v1/categories?q=${search}&page=${state.page}`)
      this.$axios.get(`/api/v1/tahun-pelajaran?tahun_pelajaran=${search}&page=${state.page}`)

        //success
        .then((response) => {

          //commit ti mutation "SET_TAHUN_PELAJARAN_DATA"
          commit('SET_TAHUN_PELAJARAN_DATA', response.data.data)

          //resolve promise
          resolve()
        })

    })

  },

}
