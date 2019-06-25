<template>
  <v-icon
    @click="$emit('submit')"
    :color="color"
    :disabled="disabled"
    :small="small"
    :large="large"
    :x-large="xLarge"
    :dark="dark"
    :right="right"
  >
    {{ type }}
  </v-icon>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    type: {
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
    xLarge: {
      type: Boolean,
      default: false
    },
    dark: {
      type: Boolean,
      default: false
    },
    right: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>
</style>
