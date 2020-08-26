<template>
  <v-app>
    <side-navigation></side-navigation>

    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="primary"
      dark
      style="-webkit-app-region: drag"
    >
      <v-app-bar-nav-icon
        style="-webkit-app-region: no-drag;"
        @click.stop="$store.state.side_navigation = !$store.state.side_navigation"
      ></v-app-bar-nav-icon>
      <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
        <span class="font-weight-bold">EVVSS</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <window-buttons></window-buttons>
    </v-app-bar>

    <v-main id="router-view">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import sideNavigation from "@/components/sideNavigation";
import windowButtons from "@/components/windowButtons";
export default {
  name: "App",

  components: {
    sideNavigation,
    windowButtons,
  },

  data: () => ({}),
  created() {},
  computed: {},
  methods: {},
};
</script>
<style lang="scss">
html {
  overflow: hidden !important;
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: grey;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

#router-view {
  max-height: 100vh;
  max-width: 100vw;
  overflow-y: auto;
}
</style>