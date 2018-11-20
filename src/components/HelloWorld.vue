<template>
  <div class="hello">
    <p>我的博客：<a href="http://blog.csdn.net/Roamings_blo" target="_blank">http://blog.csdn.net/Roamings_blo</a></p>
    <p>我的读书笔记：
      <a href="http://note.youdao.com/noteshare?id=db55a2e518f3ef012986b7661e7b7df8" target="_blank">《Github入门与实践》</a>
      <a href="http://note.youdao.com/noteshare?id=ee32e617c20a08e929307c0028d5bd44" target="_blank">《超实用的JavaScript代码段》</a>
      <a href="http://note.youdao.com/noteshare?id=4a31beb640f0ca02905edc5e104be710" target="_blank">《WEB前端开发最佳实践》</a>
      <a href="http://note.youdao.com/noteshare?id=81af022d7334110c15ee86e40652a1c6" target="_blank">《深入理解ES6》</a>
    </p>
    <!-- <canvas ref="q"></canvas> -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {

    }
  },
  mounted () {
    // console.log(this.$refs)
    // var s = window.screen
    // let q = this.$refs.q
    // var width = q.width = s.width
    // var height = q.height = s.height
    // var letters = Array(256).join(1).split('')
    // var draw = function () {
    //   q.getContext('2d').fillStyle = 'rgba(0,0,0,0.05)'
    //   q.getContext('2d').fillRect(0, 0, width, height)
    //   q.getContext('2d').fillStyle = '#00FF00'
    //   letters.map(function (yPos, index) {
    //     let text = String.fromCharCode(34 + Math.random() * 33)
    //     let xPos = index * 10
    //     q.getContext('2d').fillText(text, xPos, yPos)
    //     letters[index] = (yPos > 758 + Math.random() * 1e4) ? 0 : yPos + 10
    //     q.getContext('2d').fillStyle = '#00FF00'
    //   })
    // }
    // setInterval(draw, 33)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  a:link,
  a:visited     {
    color:#FF0000;
    text-decoration:underline;
  }
  a:hover,
  a:active    {
    color:#000000;
    text-decoration:none;
  }
</style>
