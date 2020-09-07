<template>
  <div class="box">
    <UiButton type="warning" @click="shuffle(els,puzzles)">重置</UiButton>
    <transition-group name="cell" tag="div" class="container">
      <div ref="cell" @click.prevent="clickBlock(index)" v-for="(puzzle,index) in puzzles" :key="puzzle" v-text="puzzle" :class="puzzle === ''? 'cell cells':'cell'"></div>
    </transition-group>
  </div>
</template>

<script>
import UiButton from '../components/UiButton/UiButton'

export default {
  name: 'About',
  components: {
    UiButton
  },
  data () {
    return {
      timeOut: '',
      puzzles: [],
      els: []
    }
  },
  methods: {
    // 数组乱序
    upsetArr (arr) {
      arr.sort(function () {
        return Math.random() > 0.5 ? -1 : 1
      })
    },
    // 洗牌方法
    shuffle (els, arr) {
      this.upsetArr(arr);
      for (var i = 0, len = els.length; i < len; i++) {
        var el = els[i];
        el.setAttribute('index', i);  // 将打乱后的数组索引缓存到元素中
        el.style.transform = 'translate(' + arr[i].x + 'vw,' + arr[i].y + 'vh' + ')';
      }
    },
    // 点击方块
    clickBlock (index) {
      let curIndex = this.puzzles[index];
      let leftIndex = this.puzzles[index - 1];
      let rightIndex = this.puzzles[index + 1];
      let topIndex = this.puzzles[index - 3];
      let bottomIndex = this.puzzles[index + 3];
      //向响应式对象中添加一个 property，并确保这个新 property 同样是响应式的，且触发视图更新。
      if (leftIndex === '' && index % 3) {
        this.$set(this.puzzles, index - 1, curIndex);
        this.$set(this.puzzles, index, '');
      } else if (rightIndex === '' && 2 !== index % 3) {
        this.$set(this.puzzles, index + 1, curIndex);
        this.$set(this.puzzles, index, '');
      } else if (topIndex === '') {
        this.$set(this.puzzles, index - 3, curIndex);
        this.$set(this.puzzles, index, '');
      } else if (bottomIndex === '') {
        this.$set(this.puzzles, index + 3, curIndex);
        this.$set(this.puzzles, index, '');
      }
      this.pass()
    },
    pass () {
      if (this.puzzles[8] === '') {
        const newPuzzles = this.puzzles.slice(0, 8);
        const isPass = newPuzzles.every((e, i) => e === i + 1);
        if (isPass) {
          this.$toast('You are successful!')
        }
      }
    },
    submit () {

    },
    startTime (e) {
      console.log(e)
      console.log('创建计时器')
      clearTimeout(this.timeOut)
      this.timeOut = setTimeout(() => {
        // setTimeout(() => {
        if (this.timeOut) {
          console.log(this)
          // this.$router.push('/')
        }
        // }, 0)
      }, 1000 * 3)

      this.$once('hook:beforeDestroy', () => {
        clearTimeout(this.timeOut)
        this.timeOut = null
        console.log('promenu销毁');
      })
    }
  },
  mounted () {
    const params = Object.keys(this.$route.params).length
    if (params) {
      console.log(this.$route.params)
    }
    // this.startTime()
    this.puzzles = [1, 2, 3, 4, 5, 6, 7, 8, '']
    this.$nextTick(function () {
      this.els = this.$refs['cell']
    })
    this.shuffle(this.els, this.puzzles)
  }
}
</script>

<style lang="stylus" scoped>
.box
  width 400px
  margin 60px auto 0
.container
  display flex
  // 自动换行
  flex-wrap wrap
  width 306px
  margin-top 10px
  border 1px solid #ccc
.cell
  color #fff
  font-size 20px
  display flex
  justify-content space-around
  align-items center
  width 100px
  height 100px
  margin 1px
  -moz-box-shadow 0px 0px 3px #333333
  -webkit-box-shadow 0px 0px 3px #333333
  box-shadow 0px 0px 3px #333333
  background-color #996666
.cells
  background-color #fff
  -moz-box-shadow 0px 0px 0px #333333
  -webkit-box-shadow 0px 0px 0px #333333
  box-shadow 0px 0px 0px #333333
  z-index -999
.cell-move
  transition transform 0.5s
</style>
