<template>
  <v-btn
    @click="$emit('submit')"
    :color="color"
    :disabled="disabled"
    :small="small"
    :large="large"
    :block="block"
    :dark="dark"
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
      default: 'dark'
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
    },
    dark: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
</style>
