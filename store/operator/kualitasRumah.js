//state
export const state = () => ({

  //categories
  kualitasRumah: [],

  //page
  page: 1,

  kualitasRumah: {}

})

//mutations
export const mutations = {

  //mutation "SET_CATEGORIES_DATA"
  SET_FUNCTION_DATA(state, payload) {

    //set value state "categories"
    state.kualitasRumah = payload
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

      this.$axios.get(`/api/v1/kualitas-rumah?status=${search}&page=${state.page}`)

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
      this.$axios.post('/api/v1/daya-listrik/tambah', payload)

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
      this.$axios.get(`/api/v1/kualitas-rumah/${payload}`)

        //success
        .then(response => {
          //commit to mutation "SET_CATEGORY_DATA"
          commit('SET_FUNCTION_DATA', response.data.data)

          //resolve promise
          resolve()

        })

    })

  },

  updateDataState({ dispatch, commit }, { dataId, payload }) {

    //set promise
    return new Promise((resolve, reject) => {

      //store to Rest API "/api/admin/categories/:id" with method "POST"
      this.$axios.post(`/api/v1/kualitas-rumah/${dataId}/ubah`, payload)

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
}
