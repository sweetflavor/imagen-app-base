<template>
  <div class="btn">
    <button class="btn_item" @click="callback($event)">
      <slot>Button</slot>
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    callback: function(e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style lang="stylus">
@import '../../styles/UI/btn.stylus';
</style>