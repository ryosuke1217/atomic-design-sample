<template>
  <v-toolbar app fixed clipped-left>
    <v-toolbar-side-icon @click.stop="switchDrawer"></v-toolbar-side-icon>
    <v-toolbar-title>{{ title }}</v-toolbar-title>
    <v-spacer></v-spacer>
    <IconButton dark text="home" type="home"/>
    <IconButton dark text="info" type="info" />
    <IconButton dark text="logout" type="logout"/>
  </v-toolbar>
</template>

<script>
import IconButton from '@/components/molecules/IconButton'

export default {
  name: 'Toolbar',
  components: {
    IconButton
  },
  props: {
    title: {
      type: String,
      default: 'title'
    }
  },
  data: () => ({
    drawer: true
  }),
  methods: {
    switchDrawer (b) {
      this.$emit('switchDrawer', !this.drawer)
      this.drawer = !this.drawer
    }
  }
}
</script>

<style>
</style>
