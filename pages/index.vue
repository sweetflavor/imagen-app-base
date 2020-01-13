<template>
  <div>
    <btn-principal @click="isInDarkmode = !isInDarkmode">
      Make your eyes a favor!
    </btn-principal>
    <images-grid :data="images" :color-mode="isInDarkmode" />
    <client-only>
      <infinite-loading spinner="spiral" @infinite="infiniteScroll" />
    </client-only>
  </div>
</template>

<script>
import { mapState } from "vuex"
import BtnPrincipal from '@/components/UI/btn'
import imagesGrid from '@/components/images-grid'
export default {
  components:{
    BtnPrincipal,
    imagesGrid
  },
  async fetch({ store }) {
    await store.dispatch("images/GET_IMAGES", { page: 1, limit: 10 })
  },
  data() {
    return {
      page: 2,
      limit: 10,
      isInDarkmode: false
    }
  },
  computed: {
    ...mapState({
      images: state => state.images.images
    })
  },
  methods: {
    getImages(page, limit) {
      return this.$store.dispatch("images/GET_IMAGES", {
        page: page,
        limit: limit
      })
    },

    infiniteScroll($state) {
      setTimeout(() => {
        this.getImages(this.page, this.limit).then(res => {
          res.length === this.limit ? (this.page += 1, $state.loaded()) : $state.complete()
        })
      }, 500)
    },
  }
}
</script>
<style lang="stylus">

</style>
