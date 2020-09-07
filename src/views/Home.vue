<template>
  <div class="home">
    <UiButton @click="submit" large type="success"></UiButton>
    <UiButton class="warning" type="warning" @click="gotoabout">警告</UiButton>
    <UiButton type="error" @click="toast">错误</UiButton>
    <loading duration='2s' :isshow='show'></loading>
    <UiButton type="warning" @click="show = !show">显示/隐藏loading</UiButton>
    <!-- <select class="select" name="select" placeholder="请选择" v-model="select.selectValue">
      <option value="-1" disabled>请选择</option>
      <option v-for="(item, index) in select.optionValue" :key="index" :value="item.value">
        {{item.name}}
      </option>
    </select>

    <div>Selected: {{ select.selectValue }}</div> -->

  </div>
</template>

<script>
// @ is an alias to /src
import UiButton from '../components/UiButton/UiButton'
// import Select from '../components/Select/Select'
export default {
  name: 'Home',
  components: {
    UiButton,
    // Select
  },
  data () {
    return {
      size: 0,
      select: {
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
          },
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
          },
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
          },
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
          },
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
          },
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
          },
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
      },
      show: false,//loading的 show
    }
  },
  methods: {
    submit () {
      this.$messageTip(
        {
          message: '警告!!',
          type: 'error'
        }
      )
    },
    toast () {
      this.$toast('九月你好')
    },
    gotoabout () {
      this.$router.push({
        name: 'About',
        params: {
          page: '1', code: '8989'
        }
      })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scope>
.home
  button
    margin-top 10px
  .warning
    transition all 0.3s ease-in-out
    &:hover
      box-shadow 5px 5px 5px 5px rgba(0, 0, 0, 0.2)
.select
  height 5vh
  width 50vw
  border 1px solid #B0C4DE
  border-radius 5px
  outline none
  font-size 15px
  &:hover
    border 1px solid #1E90FF
  &:visited
    border 1px solid #1E90FF
  option
    &:hover
      background-color #D4F2E7
</style>
