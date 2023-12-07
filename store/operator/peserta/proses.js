//state
export const state = () => ({

  //categories
  proses: [],

  //page
  page: 1,

  proses: {},

})

//mutations
export const mutations = {

  //mutation "SET_CATEGORIES_DATA"
  SET_FUNCTION_DATA(state, payload) {

    //set value state "categories"
    state.proses = payload
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

      // this.$axios.get(`/api/v1/peserta-didik/proses?status=${search}&page=${state.page}`)
      this.$axios.get(`/api/v1/peserta-didik/proses?page=${state.page}`)

        //success
        .then((response) => {

          commit('SET_FUNCTION_DATA', response.data.data)

          //resolve promise
          resolve()
        })

    })
  },
  getDetailIdstate({ commit }, payload) {

    //set promise
    return new Promise((resolve, reject) => {

      //get to Rest API "/api/admin/categories/:id" with method "GET"
      this.$axios.get(`/api/v1/peserta-didik/proses/${payload}`)

        //success
        .then(response => {
          //commit to mutation "SET_CATEGORY_DATA"
          commit('SET_FUNCTION_DATA', response.data.data)

          //resolve promise
          resolve()

        })

    })

  },
  getDetailIdValidation({ commit }, payload) {

    //set promise
    return new Promise((resolve, reject) => {

      //get to Rest API "/api/admin/categories/:id" with method "GET"
      this.$axios.get(`/api/v1/peserta-didik/proses/${payload}/validasi`)

        //success
        .then(response => {

          //commit to mutation "SET_CATEGORY_DATA"
          commit('SET_FUNCTION_DATA', response.data.data)
          // console.log(response.data.data)


          //resolve promise
          resolve()

        })

    })

  },
}
