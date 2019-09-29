<template>
  <div>
    <v-app-bar color="primary" fixed app>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>主页</v-toolbar-title>

      <div class="flex-grow-1"></div>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content class="pt-0">
      <v-container grid-list-xs>
        <v-card class="mx-auto" max-width="344">
          <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>

          <v-card-title>
            <div>Top western road trips</div>
            <span class="grey--text subtitle-1">1,000 miles of wonder</span>
          </v-card-title>
        </v-card>
        <v-card class="mx-auto" max-width="344">
          <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>

          <v-card-title>
            <div>Top western road trips</div>
            <span class="grey--text subtitle-1">1,000 miles of wonder</span>
          </v-card-title>
        </v-card>
        <v-card class="mx-auto" max-width="344">
          <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>

          <v-card-title>
            <div>Top western road trips</div>
            <span class="grey--text subtitle-1">1,000 miles of wonder</span>
          </v-card-title>
        </v-card>
      </v-container>
    </v-content>
    <BottomNav activeBtn="1"></BottomNav>
  </div>
</template>

<script>
import BottomNav from "../views/BottomNav.vue";
export default {
  components: {
    BottomNav
  },
  data: () => ({
    show: false,
    bottomNav: 3
  }),

  computed: {
    color() {
      switch (this.bottomNav) {
        case 0:
          return "blue";
        case 1:
          return "teal";
        case 2:
          return "brown";
        case 3:
          return "indigo";
      }
    }
  },
  methods: {
    test() {
      // this.blur();
    }
  }
};
</script>
<style>
/* .v-btn:hover:before {
  background-color: transparent;
} */
.v-btn:hover:before {
  opacity: 0 !important;
}
</style>
