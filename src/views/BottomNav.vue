<template>
  <v-bottom-navigation :value="activeBtn" background-color="primary" shift grow fixed app>
    <v-btn to="/" value="1">
      <span>主页</span>
      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-btn to="/flea" value="2">
      <span>跳蚤市场</span>
      <v-icon>mdi-shopping</v-icon>
    </v-btn>

    <v-btn to="/LostAndFound" value="3">
      <span>失物招领</span>
      <v-icon>mdi-briefcase-search</v-icon>
    </v-btn>

    <v-btn value="4">
      <span>表白墙</span>
      <v-icon>mdi-heart</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>
<script>
export default {
  props: ["activeBtn"],
  data: () => ({})
};
</script>