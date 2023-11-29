<script setup>
import login from "../components/login_panel.vue";
</script>

<template>
  <div class="background"></div>
  <div class="loginCrad">
    <div class="Pre-Login-Display">
      <!-- Pre-Login-Display 在组件加载前显示一些图案，避免出现空白 -->
      <div class="Pre-login-Title"></div>
      <div class="Pre-Login-form-Area">
        <div class="Pre-Login-Account"></div>
        <div class="Pre-Login-Account"></div>
      </div>
      <div class="Pre-Login-submit-Area"></div>
    </div>

    <div id="login-panel">
      <login></login>
    </div>
  </div>
</template>
<style scoped>
.background {
  height: 100vh;
  width: 100vw;
  background: url("../assets/background/starRail.jpg") no-repeat center center
    fixed;
  background-size: cover;
}
.loginCrad {
  position: absolute;
  top: 50%;
  left: 75%;
  transform: translate(-50%, -50%);
  height: 25rem;
  width: 25rem;
  background-color: #fcfcfc; /* 设置背景颜色或其他样式 */
  padding: 1rem;
  border-top: 0.5rem solid rgb(255, 149, 0);
}

#login-panel {
  position: absolute;
  top: 1rem;
  width: 23rem; /*父元素为25rem，border为1rem*/
  height: 22.5rem; /*还需要减去上边框的0.5REM */
  z-index: 1;
}

.Pre-Login-Display {
  width: 100%;
  height: 100%;
  border: none;
}
.Pre-login-Title {
  width: 100%;
  height: 20%;
  /* background-color: bisque; */
}

.Pre-Login-form-Area {
  width: 100%;
  height: 50%;
  /* background-color: rgb(254, 168, 214); */
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
.Pre-Login-submit-Area {
  width: 100%;
  height: 30%;
  /* background-color: rgb(160, 220, 255); */
}
.Pre-Login-Account {
  height: 2.5rem;
  width: 90%;
  background-color: rgb(239, 239, 239);
}
</style>
