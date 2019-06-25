<template>
  <v-card>
    <v-img
      :src="src"
      height="200px"
    >
      <v-container
        fill-height
        fluid
        pa-2
      >
        <v-layout fill-height>
          <v-flex xs12 align-end flexbox>
            <span class="headline white--text" v-text="title"></span>
          </v-flex>
        </v-layout>
      </v-container>
    </v-img>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn icon>
        <Icon type="favorite" dark />
      </v-btn>
      <v-btn icon>
        <Icon type="bookmark" dark />
      </v-btn>
      <v-btn icon>
        <Icon type="share" dark />
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import Icon from '@/components/atoms/Icon'

export default {
  name: 'Icon',
  components: {
    Icon
  },
  props: {
    title: {
      type: String,
      default: 'title'
    },
    src: {
      type: String
    },
    flex: {
      type: Number,
      default: 12
    }
  }
}
</script>

<style>
</style>
