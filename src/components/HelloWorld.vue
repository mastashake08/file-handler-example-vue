<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Shake File Explorer is a web app that uses the <a href="https://developer.mozilla.org/en-US/docs/Web/API/File_System_API#examples" target="_blank">File System API</a> to securely load and inspect files without risking malicious code running.
    </p>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
