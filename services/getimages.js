export const getImages = (page, limit) => {
    return this.$store.dispatch("images/GET_IMAGES", {
        page: page,
        limit: limit
    })
}