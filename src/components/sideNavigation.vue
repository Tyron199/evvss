<template>
  <v-navigation-drawer
    v-model="$store.state.side_navigation"
    :clipped="$vuetify.breakpoint.lgAndUp"
    app
  >
    <v-list dense>
      <template v-for="item in items">
        <v-row v-if="item.heading" :key="item.heading" align="center">
          <v-col cols="6">
            <v-subheader v-if="item.heading">{{ item.heading }}</v-subheader>
          </v-col>
          <v-col cols="6" class="text-center">
            <a href="#!" class="body-2 black--text">EDIT</a>
          </v-col>
        </v-row>
        <v-list-group
          v-else-if="item.children"
          :key="item.text"
          v-model="item.model"
          :prepend-icon="item.model ? item.icon : item['icon-alt']"
          append-icon
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item v-for="(child, i) in item.children" :key="i" link>
            <v-list-item-action v-if="child.icon">
              <v-icon>{{ child.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ child.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-list-item v-else :key="item.text" link>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>

    <template v-slot:append>
      <div class="pa-2">
        <v-row justify="center">
          <div class="d-flex">
            <v-img
              v-if="$store.getters['showDrawer']"
              alt="Vuetify Logo"
              contain
              class="flip-h"
              :src="$vuetify.theme.dark ? '/images/logo.png' : '/images/logo.png'"
              transition="scale-transition"
              width="120"
            />
          </div>
        </v-row>
        <v-row justify="space-around">
          <v-switch
            v-model="$vuetify.theme.dark"
            @change="saveColorPref"
            color="primary"
            label="Dark mode"
          ></v-switch>
        </v-row>

        <v-btn color="primary" block>Sign Out</v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "sideNavigation",
  data() {
    return {
      items: [
        { icon: "fa-tachometer-alt", text: "Dashboard" },

        { icon: "fa-plus", text: "New Campaign" },
        {
          icon: "fa-chevron-up",
          "icon-alt": "fa-chevron-down",
          text: "Sample Campaign",
          model: false,
          children: [
            { text: "Overview", icon: "fa-chart-line" },
            { text: "Settings", icon: "fa-cog" },
            { text: "Accounts", icon: "fa-user" },
          ],
        },
      ],
    };
  },
  created() {
    this.loadColorPref();
  },
  methods: {
    loadColorPref() {
      if (localStorage.getItem("darkmode")) {
        this.$vuetify.theme.dark = JSON.parse(localStorage.getItem("darkmode"));
      }
    },
    saveColorPref() {
      localStorage.setItem(
        "darkmode",
        JSON.stringify(this.$vuetify.theme.dark)
      );
    },
  },
};
</script>

<style>
</style>