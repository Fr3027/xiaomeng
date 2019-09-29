<template>
  <div class="back">
    <v-container fluid style="margin-top: 10%;">
      <v-row>
        <v-col cols="12" align="center" class="display-2" style="color:white">Welcome</v-col>
      </v-row>
      <v-row>
        <v-col cols="12" align="center">
          <v-avatar size="100">
            <img :src="require('@/assets/avatar.png')" alt="John" />
          </v-avatar>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" align="center">
          <v-form class="ml-5 mr-5">
            <v-text-field name="name" label="用户名" outlined></v-text-field>
            <v-text-field name="name" label="密码" outlined append-icon="mdi-eye-off"></v-text-field>
            <v-btn
              color="rgb(0,151,121,0.54)"
              class="headline"
              width="93%"
              height="60px"
              style="color:white"
            >登录</v-btn>
          </v-form>
        </v-col>
      </v-row>
      <v-row
        class="ml-5 mr-5"
        style="color:white;margin-left: 3.5%;margin-right: 3.5%;"
        justify="center"
        align="center"
      >
        <v-col cols="6" align="left">注册</v-col>
        <v-col cols="6" align="right">找回密码</v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      alignmentsAvailable: ["start", "center", "end", "baseline", "stretch"],
      alignment: "center",
      dense: false,
      justifyAvailable: [
        "start",
        "center",
        "end",
        "space-around",
        "space-between"
      ],
      justify: "center"
    };
  }
};
</script>
<style>
.back {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-image: url("../assets/background.jpg");
  background-size: cover;
}
</style>