<template>
  <transition-group class="galery-wra" name="fade" tag="div">
    <div v-for="item in data" :key="item.id" class="galery-wra__items" @click="deleteItem(item.id)">
      <img :class="{ darkMode: colorMode }" 
           :src="item.url" 
           :alt="item.title" 
      >
    </div>
  </transition-group>
</template>

<script>
export default {
    name: 'ImagesGrid',
    props: {
        data:{ 
            type: Array,
            default: () => [],
            }, 
        colorMode: Boolean
    },
    methods: {
        deleteItem(id) {
            this.$store.dispatch("images/REMOVE_IMAGE", id)
        }
    }
}
</script>

<style lang="stylus">
@import '../styles/base/animation.stylus';
@import '../styles/pages/images-grid.stylus';
</style>