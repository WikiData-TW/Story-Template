<template>
  <div id="app">
    <router-view class="viewport" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class App extends Vue {}
</script>

<style lang="scss">
@import "@/scss/main.scss";
</style>
