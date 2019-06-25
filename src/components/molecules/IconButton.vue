<template>
  <v-btn
    @click="$emit('submit')"
    :color="color"
    :disabled="disabled"
    :small="small"
    :large="large"
    :dark="dark"
  >
    {{ text }}
    <Icon dark right :type="type"/>
  </v-btn>
</template>

<script>
import Icon from '@/components/atoms/Icon'

export default {
  name: 'IconButton',
  components: {
    Icon
  },
  props: {
    text: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: 'primary'
    },
    small: {
      type: Boolean,
      default: false
    },
    large: {
      type: Boolean,
      default: false
    },
    dark: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'home'
    }
  }
}
</script>

<style>
</style>
