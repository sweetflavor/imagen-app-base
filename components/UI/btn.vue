<template>
  <div class="btn">
      <button class="btn_item" @click="callback($event)">
          <slot>Button</slot>
      </button>
  </div>
</template>

<script>
export default {
  props: [

  ],
  methods: {
    callback: function(e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style lang="stylus">
@import '../../styles/UI/ui.stylus';
</style>