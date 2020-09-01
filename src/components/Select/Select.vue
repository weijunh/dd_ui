<template>
  <div class="container">
    <select class="select" name="select" placeholder="请选择" v-model="selectValue">
      <option disabled value="-1">请选择</option>
      <option v-for="(item, index) in optionValue" :key="index" value="itme.value">
        {{item.name}}
      </option>
    </select>
  </div>
</template>
<script>
export default {
  name: 'select',
  prop: {

  },
  data () {
    return {
      selectValue: '-1',
      optionValue: [
        {
          name: '北京',
          value: 'beijing'
        },
        {
          name: '上海',
          value: 'shanghai'
        },
        {
          name: '广东',
          value: 'guangdong'
        },
        {
          name: '天津',
          value: 'tianjin'
        },
        {
          name: '四川',
          value: 'sichuan'
        }
      ]
    }
  },
  methods: {

  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scope>
.container
  width 100vw
  .select
    width 10vw
    border 1px solid #B0C4DE
    border-radius 5px
    outline none
    &:hover
      border 1px solid #1E90FF
    &:visited
      border 1px solid #1E90FF
</style>