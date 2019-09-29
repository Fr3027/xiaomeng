<template>
  <div>
    <v-app-bar color="primary" fixed app>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>跳蚤市场</v-toolbar-title>

      <div class="flex-grow-1"></div>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
      <template v-slot:extension>
        <v-tabs
          background-color="white"
          slider-color="primary darken-3"
          color="primary darken-4"
          centered
          fixed-tabs
        >
          <v-tab>全部</v-tab>
          <v-tab>数码产品</v-tab>
          <v-tab>生活用品</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-content class="pt-4">
      <v-card max-width="344" class="mx-auto mb-1" v-for="i in 2" :key="i">
        <v-card-title class="pt-0">
          <v-row>
            <v-col cols="3">
              <v-avatar size="55">
                <img :src="require('@/assets/avatar.png')" alt="John" />
              </v-avatar>
            </v-col>
            <v-col cols="4">
              <v-row class="title">北辰</v-row>
              <v-row class="subtitle-1">12分钟前</v-row>
            </v-col>
            <v-col cols="5" align-self="center">
              <span style="color:orange" class="display-1">¥ 180</span>
            </v-col>
          </v-row>
        </v-card-title>
        <v-card-text class="mb-0 pb-0">
          <v-row>
            <v-col cols class="ma-0 pa-0">
              <v-carousel class="mt-0" height="150px" cycle hide-delimiters :show-arrows="false">
                <v-carousel-item v-for="(item,i) in swipes" :key="i" :src="item.src"></v-carousel-item>
              </v-carousel>
            </v-col>
          </v-row>
          <v-row>
            <p class="body-1 mb-0">低价卖阿迪达斯三叶草卫衣 原价699 我找代购买的 现在我180包邮卖了 保证正品 支持平台验货</p>
          </v-row>
        </v-card-text>
        <v-card-actions class="pt-0 pr-4">
          <div class="flex-grow-1"></div>
          <v-btn icon>
            <v-icon>mdi-comment-processing</v-icon>
          </v-btn>
          <span>1</span>
          <v-btn icon>
            <v-icon>mdi-heart</v-icon>
          </v-btn>
          <span>4</span>
        </v-card-actions>
      </v-card>
      <v-btn dark fab bottom right fixed color="rgb(255,149,0,0.8)" class style="margin-bottom:20%">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-content>
    <BottomNav activeBtn="2"></BottomNav>
  </div>
</template>
<script>
import BottomNav from "../views/BottomNav.vue";
export default {
  components: {
    BottomNav
  },
  data: () => ({
    tab: null,
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    bottomNav: 3,
    swipes: [
      {
        src:
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569757329202&di=52336c91848c4f4c1814a764d6e9ab2d&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201509%2F06%2F20150906195306_vxLT2.jpeg"
      },
      {
        src:
          "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1179589079,1666098063&fm=26&gp=0.jpg"
      }
    ]
  })
};
</script>
<style scoped>
/* .card{

} */
</style>>