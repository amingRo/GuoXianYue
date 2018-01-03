<template>
  <div class="hello">
    <p>我的博客：<a href="http://blog.csdn.net/Roamings_blo" target="_blank">http://blog.csdn.net/Roamings_blo</a></p>
    <p>我的读书笔记：
      <a href="http://note.youdao.com/noteshare?id=db55a2e518f3ef012986b7661e7b7df8" target="_blank">《Github入门与实践》</a>
      <a href="http://note.youdao.com/noteshare?id=ee32e617c20a08e929307c0028d5bd44" target="_blank">《超实用的JavaScript代码段》</a>
      <a href="http://note.youdao.com/noteshare?id=4a31beb640f0ca02905edc5e104be710" target="_blank">《WEB前端开发最佳实践》</a>
      <a href="http://note.youdao.com/noteshare?id=81af022d7334110c15ee86e40652a1c6" target="_blank">《深入理解ES6》</a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {

    }
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
