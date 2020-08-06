<template>
  <div class="home">
    <UiButton @click="submit" large type="success"></UiButton>
    <UiButton type="warning">警告</UiButton>
    <UiButton type="error">错误</UiButton>

  </div>
</template>

<script>
// @ is an alias to /src
import UiButton from '../components/UiButton/UiButton'

export default {
  name: 'Home',
  components: {
    UiButton
  },
  methods: {
    submit () {
      this.$messageTips(
        {
          type: 'error',
          message: '11111111'
        }
      )
    }
  }
}
</script>
