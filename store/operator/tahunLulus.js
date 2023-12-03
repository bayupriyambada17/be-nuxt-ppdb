//state
export const state = () => ({

  //categories
  tahunLulus: [],

  //page
  page: 1,

  tahunLulus: {}

})

//mutations
export const mutations = {

  //mutation "SET_CATEGORIES_DATA"
  SET_FUNCTION_DATA(state, payload) {

    //set value state "categories"
    state.tahunLulus = payload
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
  getAllDataState({ commit, state }, payload) {

    //search
    let search = payload ? payload : ''

    //set promise
    return new Promise((resolve, reject) => {

      //fetching Rest API "/api/admin/categories" with method "GET"
      // this.$axios.get(`/api/v1/categories?q=${search}&page=${state.page}`)
      this.$axios.get(`/api/v1/tahun-lulus?tahun=${search}&page=${state.page}`)

        //success
        .then((response) => {

          commit('SET_FUNCTION_DATA', response.data.data)

          //resolve promise
          resolve()
        })

    })

  },
  storeDataState({ dispatch, commit }, payload) {

    //set promise
    return new Promise((resolve, reject) => {
      this.$axios.post('/api/v1/tahun-lulus/tambah', payload)

        //success
        .then(() => {

          dispatch('getAllDataState')
          resolve()

        })

        //error
        .catch(error => {
          reject(error)
        })

    })
  },

  getDetailIdstate({ commit }, payload) {

    //set promise
    return new Promise((resolve, reject) => {

      //get to Rest API "/api/admin/categories/:id" with method "GET"
      this.$axios.get(`/api/v1/tahun-lulus/${payload}`)

        //success
        .then(response => {
          //commit to mutation "SET_CATEGORY_DATA"
          commit('SET_FUNCTION_DATA', response.data.data)

          //resolve promise
          resolve()

        })

    })

  },

  updateDataState({ dispatch, commit }, { tahunLulusId, payload }) {

    //set promise
    return new Promise((resolve, reject) => {

      //store to Rest API "/api/admin/categories/:id" with method "POST"
      this.$axios.post(`/api/v1/tahun-lulus/${tahunLulusId}/ubah`, payload)

        //success
        .then(() => {

          dispatch('getAllDataState')
          //resolve promise
          resolve()
        })
        //error
        .catch(error => {
          reject(error)
        })
    })
  },

  destroyDataState({ dispatch, commit }, payload) {
    return new Promise((resolve, reject) => {
      this.$axios.delete(`/api/v1/tahun-lulus/${payload}/hapus`)
        .then(() => {
          dispatch('getAllDataState')
          resolve()
        })
    })
  },
}
