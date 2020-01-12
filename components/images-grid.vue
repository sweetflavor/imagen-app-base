<template>
  <transition-group class="galery-wra" name="fade" tag="div">
      <div v-for="(item, index) in data" :key="index" class="galery-wra__items">
        <!-- <img class="cover-delete" v-if="isHovered" src="~assets/delete.svg"/> -->
        <img :class="{ darkMode: colorMode }" :src="item.url" :alt="item.title" @click="deleteItem(item.id)">
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

<style>

</style>