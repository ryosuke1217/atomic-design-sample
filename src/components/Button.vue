<template>
  <v-btn
    @click="$emit('submit')"
    :color="color"
    :disabled="disabled"
    :small="small"
    :large="large"
    :block="block"
  >
    {{ text }}
  </v-btn>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: 'white'
    },
    small: {
      type: Boolean,
      default: false
    },
    large: {
      type: Boolean,
      default: false
    },
    block: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
</style>