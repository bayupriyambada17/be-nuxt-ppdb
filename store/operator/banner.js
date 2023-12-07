//state
export const state = () => ({

  //categories
  banner: [],

  //page
  page: 1,

  banner: {}

})

//mutations
export const mutations = {

  //mutation "SET_CATEGORIES_DATA"
  SET_FUNCTION_DATA(state, payload) {

    //set value state "categories"
    state.banner = payload
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

      this.$axios.get(`/api/v1/banner?page=${state.page}`)

        //success
        .then((response) => {

          commit('SET_FUNCTION_DATA', response.data.data)
          console.log(response.data.data)

          //resolve promise
          resolve()
        })

    })

  },
  storeDataState({ dispatch, commit }, payload) {

    //set promise
    return new Promise((resolve, reject) => {
      this.$axios.post('/api/v1/banner/tambah', payload)

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
}
