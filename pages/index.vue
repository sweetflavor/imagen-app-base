<template>
  <div class="windowHight">
    <div v-for="item in images" :key="item.id">
      <h1 @click="deleteItem(item.id)">
        {{ item.title }}
      </h1>
      <h2 style="color: blue">
        {{ item.id }}
      </h2>
    </div>
    <client-only>
      <infinite-loading spinner="spiral" @infinite="infiniteScroll" />
    </client-only>
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
  async fetch({ store }) {
    await store.dispatch("images/GET_IMAGES", { page: 1, limit: 10 })
  },
  data() {
    return {
      page: 2,
      limit: 10
    }
  },
  computed: {
    ...mapState({
      images: state => state.images.images
    })
  },
  methods: {
    getPayloadSlice(page, limit) {
      return this.$store.dispatch("images/GET_IMAGES", {
        page: page,
        limit: limit
      })
    },

    infiniteScroll($state) {
      setTimeout(() => {
        this.getPayloadSlice(this.page, this.limit).then(res => {
          if (res.length === this.limit) {
            this.page += 1
            $state.loaded()
          } else {
            $state.complete()
          }
        })
      }, 500)
    },

    deleteItem(id) {
      this.$store.dispatch("images/REMOVE_IMAGE", id)
    }
  }
}
</script>
<style lang="stylus">
@import '../styles/pages/home.stylus';
.windowHight
  min-height 200vh
</style>
