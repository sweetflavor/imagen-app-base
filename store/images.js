export const state = () => ({
  images: []
})
export const mutations = {
  SET_IMAGES(state, payload) {
    payload.map(i => {
      state.images.push(i)
    })
  },
  DELETE_IMAGE: (state, payload) => {
    var index = state.images.findIndex(image => image.id === payload)
    state.images.splice(index, 1)
  }
}
export const actions = {
  GET_IMAGES({ commit }, params) {
    return new Promise((resolve, reject) => {
      this.$axios
        .$get(
          `/photos?_page=${params.page}&_limit=${params.limit}`
        )
        .then(
          data => {
            resolve(data)
            commit("SET_IMAGES", data)
          },
          error => {
            reject(error)
          }
        )
    })
  },
  REMOVE_IMAGE: (context, payload) => {
    context.commit("DELETE_IMAGE", payload)
  }
}
