import { storiesOf } from '@storybook/vue'
import Button from './../components/Button.vue'

storiesOf('Button', module)
  .add('default', () => ({
    components: { Button },
    template: `
    <div>
    <Button @submit="submit" text="default"></Button>
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
    <Button text="primary" color="primary"></Button>
    <Button text="success" color="success"></Button>
    <Button text="error" color="error"></Button>
    <Button text="info" color="info"></Button>
    <Button text="warning" color="warning"></Button>
    <Button text="disabled" color="gray" :disabled="true"></Button>
    </div>
    `
  }))
  .add('size', () => ({
    components: { Button },
    template: `
    <div>
    <Button text="default" color="primary"></Button>
    <Button text="small" color="primary" :small="true"></Button>
    <Button text="large" color="primary" :large="true"></Button>
    <Button text="block" color="primary" :block="true"></Button>
    </div>
    `
  }))
