<template>
  <div class="about">
    <UiButton @click="submit">提交</UiButton>
  </div>
</template>

<script>
import UiButton from '../components/UiButton/UiButton'
export default {
  name: 'About',
  components: {
    UiButton
  },
  methods: {
    submit () {

    }
  }
}
</script>
