import { configure, addDecorator } from '@storybook/vue'
import Vue from 'vue'
import Vuetify from 'vuetify'
import "vuetify/dist/vuetify.css"
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify, {
  iconfont: "md"
})

addDecorator(() => ({
  template: "<v-app><story/></v-app>"
}))

function loadStories () {
  require('./../src/stories')
}

configure(loadStories, module)