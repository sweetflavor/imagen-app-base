<template>
  <div>
    <!-- {{ $store.state.counter }} -->
    <div v-for="item in images" :key="item.id">
      <h1>{{ item.title }}</h1>
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
    await store.dispatch("images/GET_IMAGES", { start: 0, end: 20 })
  },
  data() {
    return {
      start: 0,
      end: 30
    }
  },
  computed: {
    ...mapState({
      images: state => state.images.images
    })
  },
  mounted() {
    console.log(this.images)
  },
  methods: {
    infiniteScroll($state) {
      this.$store
        .dispatch("images/GET_IMAGES", {
          start: this.start,
          end: this.end
        })
        .then(res => {
          if (res.length) {
            console.log(this.start, "VECES START")
            console.log(this.end, "VECES END")
            this.end += 30
            $state.loaded()
          } else {
            $state.complete()
          }
        })
    }
  }
}
</script>
<style lang="stylus">
@import '../styles/pages/home.stylus';
</style>
