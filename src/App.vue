<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Upload and examine files securely in the browser."></HelloWorld>
    <button @click="getFile">Get File</button>
    <div>
      Name: {{ dataView.name }}
    </div>
    <hr/>
    <div>
      Size: {{ dataView.size }}
    </div>
    <hr/>
    <!-- <div>
      Text: {{ dataView.text }}
    </div> -->
    <hr/>
    <div>
      Last Modified: {{ dataView.lastModifiedDate }}
    </div>
    <hr/>
    <div>
      Type: {{ dataView.type }}
    </div>
  </div>
</template>

<script>
import { FileSystem } from 'shake-file'
import HelloWorld from './components/HelloWorld.vue'
export default {
    name: 'App',
    data() {
        return {
            file: {},
            directory: {},
            fileSystem: {},
            dataView: {}
        };
    },
    mounted() {
        this.fileSystem = new FileSystem();
    },
    methods: {
        async getFile() {
            this.file = await this.fileSystem.getFile();
            this.dataView = await this.fileSystem.getFileContents();
        },
        async getDir() {
            this.directory = await this.fileSystem.getDir();
        }
    },
    components: { HelloWorld }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
