<template>
  <div>
    <v-btn @click="minimizeApp" icon dark style="-webkit-app-region: no-drag;">
      <v-icon>fa-minus</v-icon>
    </v-btn>
    <v-btn @click="maximizeApp" icon dark style="-webkit-app-region: no-drag;">
      <v-icon v-if="isMaximized">fa-compress-alt</v-icon>
      <v-icon v-else>far fa-square</v-icon>
    </v-btn>
    <v-btn @click="closeApp" icon dark style="-webkit-app-region: no-drag;">
      <v-icon>fa-times</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "windowButtons",
  data() {
    return { isMaximized: false };
  },
  created() {
    this.$electron.getCurrentWindow().on(
      "maximize",
      function () {
        this.isMaximized = true;
      }.bind(this)
    );
    this.$electron.getCurrentWindow().on(
      "unmaximize",
      function () {
        this.isMaximized = false;
      }.bind(this)
    );
  },
  methods: {
    maximizeApp() {
      this.$electron.getCurrentWindow().isMaximized()
        ? this.$electron.getCurrentWindow().unmaximize()
        : this.$electron.getCurrentWindow().maximize();
    },
    minimizeApp() {
      this.$electron.getCurrentWindow().minimize();
    },
    closeApp() {
      let win = this.$electron.getCurrentWindow();
      win.close();
    },
  },
};
</script>

<style>
</style>