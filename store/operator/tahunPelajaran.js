//state
export const state = () => ({

  //categories
  tahunPelajaran: [],

  //page
  // page: 1,

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

}

//actions
export const actions = {

  //get categories data
  getTahunPelajaranData({ commit, state }, payload) {

    //search
    let search = payload ? payload : ''

    //set promise
    return new Promise((resolve, reject) => {

      //fetching Rest API "/api/admin/categories" with method "GET"
      // this.$axios.get(`/api/v1/categories?q=${search}&page=${state.page}`)
      this.$axios.get(`/api/v1/tahun-pelajaran`)

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
