export const state = () => ({
  images: []
})
export const mutations = {
  SET_IMAGES(state, payload) {
    state.images = payload
  }
}
// https://jsonplaceholder.typicode.com/photos?_page=1&_limit=5
export const actions = {
  GET_IMAGES({ commit }, params) {
    return new Promise((resolve, reject) => {
      this.$axios
        .$get("/photos", {
          params: {
            _start: params.start,
            _end: params.end
          }
        })
        .then(
          data => {
            commit("SET_IMAGES", data)
            resolve(data)
          },
          error => {
            reject(error)
          }
        )
    })
  }
}
