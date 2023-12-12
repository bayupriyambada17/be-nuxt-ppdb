//state
export const state = () => ({

  banner: [],

  page: 1,

  banner: {}

})

//mutations
export const mutations = {

  SET_FUNCTION_DATA(state, payload) {
    state.banner = payload
  },
  SET_PAGE(state, payload) {
    state.page = payload
  },
}

export const actions = {

  getAllDataState({ commit, state }) {
    return new Promise((resolve, reject) => {
      this.$axios.get(`/api/v1/banner?page=${state.page}`)
        .then((response) => {
          console.log(response.data.data)
          commit('SET_FUNCTION_DATA', response.data.data)
          resolve()
        })
    })
  },
  storeDataState({ dispatch, commit }, payload) {

    return new Promise((resolve, reject) => {
      this.$axios.post('/api/v1/banner/tambah', payload)
        .then(() => {
          dispatch('getAllDataState')
          resolve()
        })
        .catch(error => {
          reject(error)
        })
    })
  },

  destroyDataState({ dispatch, commit }, payload) {
    return new Promise((resolve, reject) => {
      this.$axios.delete(`/api/v1/banner/${payload}/hapus`)
        .then(() => {
          dispatch('getAllDataState')
          resolve()

        })

    })

  },
}
