import { storiesOf } from '@storybook/vue'
import Button from './../components/atoms/Button.vue'
import Icon from './../components/atoms/Icon.vue'
import IconButton from './../components/molecules/IconButton.vue'

storiesOf('Button', module)
  .add('default', () => ({
    components: { Button },
    template: `
    <div>
      <Button @submit="submit" text="default" />
    </div>
    `,
    methods: {
      submit: function () {
        alert('onClick')
      }
    }
  }))
  .add('color', () => ({
    components: { Button },
    template: `
    <div>
      <Button text="primary" color="primary" />
      <Button text="success" color="success" />
      <Button text="error" color="error" />
      <Button text="info" color="info" />
      <Button text="warning" color="warning" />
      <Button text="disabled" color="gray" :disabled="true" />
    </div>
    `
  }))
  .add('size', () => ({
    components: { Button },
    template: `
    <div>
      <Button text="default" color="primary" />
      <Button text="small" color="primary" :small="true" />
      <Button text="large" color="primary" :large="true" />
      <Button text="block" color="primary" :block="true" />
    </div>
    `
  }))

storiesOf('Icon', module)
  .add('type example', () => ({
    components: { Icon },
    template: `
    <div>
      <Icon @submit="submit" type="email" />
      <Icon @submit="submit" type="business" />
      <Icon @submit="submit" type="chat" />
      <Icon @submit="submit" type="delete" />
      <Icon @submit="submit" type="home" />
    </div>
    `,
    methods: {
      submit: function () {
        alert('onClick')
      }
    }
  }))
  .add('color', () => ({
    components: { Icon },
    template: `
    <div>
      <Icon type="home" color="primary" />
      <Icon type="home" color="success" />
      <Icon type="home" color="error" />
      <Icon type="home" color="info" />
      <Icon type="home" dark="true" color="warning" />
      <Icon type="home" color="gray" :disabled="true"  />
    </div>
    `,
    methods: {
      submit: function () {
        alert('onClick')
      }
    }
  }))
  .add('size', () => ({
    components: { Icon },
    template: `
    <div>
      <Icon type="home" color="primary" />
      <Icon type="home" color="primary" :small="true" />
      <Icon type="home" color="primary" :large="true" />
      <Icon type="home" color="primary" :xLarge="true" />
    </div>
    `
  }))

storiesOf('IconButton', module)
  .add('default', () => ({
    components: { IconButton },
    template: `
    <div>
      <IconButton @submit="submit" text="default" />
    </div>
    `,
    methods: {
      submit: function () {
        alert('onClick')
      }
    }
  }))
  .add('example', () => ({
    components: { IconButton },
    template: `
    <div>
      <IconButton text="home red" type="home" color="red" dark />
      <IconButton text="business purple" type="business" color="purple" dark />
      <IconButton text="delete grey" type="delete" color="grey" dark />
    </div>
    `
  }))
