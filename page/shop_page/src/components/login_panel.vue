<template>
  <div id="Login-Title">
    <h1>登录</h1>
    <h4>&nbsp;&nbsp;Login</h4>
    <!-- 不加空格会导致Login和登录对不齐？？？？？？？？？？ -->
  </div>
  <div id="Login-form-Area">
    <div class="Login-TextLine-Area">
      <input class="Login-TextLine" type="text" required />
      <label>Account</label>
    </div>
    <div class="Login-TextLine-Area">
      <input class="Login-TextLine" type="password" required />
      <label>Password</label>
    </div>
  </div>
  <div class="Login-submit-Area">
    <div class="Feature-Area">
      <div id="Remember-box">
        <input type="checkbox" id="myCheckbox" class="hidden-checkbox" />
        <div class="checkbox-rect"></div>
        <div class="checkbox-rect-1"></div>
        <label for="myCheckbox">记住我的账号</label>
        <a>忘记密码&nbsp;>></a>
      </div>
    </div>
  </div>
</template>

<style scoped>
input[type="checkbox"] {
  -webkit-appearance: none;
  appearance: none;
  outline: none;
}
.checkbox-rect {
  position: relative;
  height: 1rem;
  width: 1rem;
  border-radius: 0.125rem;
  background-color: rgba(66, 46, 157, 0.2);
  transform: scale(0.3, 0);
  opacity: 0;
  transition: transform 0.2s;
}
.checkbox-div {
  position: relative;
}
.checkbox-rect-1 {
  position: absolute;
  height: 1rem;
  width: 1rem;
  border: 2px solid rgb(255, 149, 0);
  border-radius: 0.125rem;
  z-index: 0;
}
#myCheckbox:checked + .checkbox-rect {
  transform: scale(1, 1);
  background-color: rgb(255, 149, 0);
  transition: transform 0.2s, opacity 0.2s;
  opacity: 1;
  z-index: 10;
}
#myCheckbox + .checkbox-rect {
  transform: scale(0.4, 0.4);
  background-color: rgb(255, 149, 0);
  transition: transform 0.5s, opacity 0.3s;
  opacity: 0;
  z-index: 10;
}
.Feature-Area {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  top: -1.8rem;
}
.Feature-Area > #Remember-box {
  position: relative;
  left: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
#Remember-box > a {
  position: absolute;
  right: 0px;
}

#Remember-box > label {
  pointer-events: auto; /*取消none效果，使label可以触发鼠标事件 */
  user-select: none; /*禁止用户框选s*/
  cursor: pointer;
  position: relative;
  left: 0%;
}
@font-face {
  src: url("../assets/font/AlimamaFangYuanTiVF-Thin-2.ttf");
  font-family: ali;
}
@font-face {
  src: url("../assets/font/SmileySans-Oblique-2.ttf");
  font-family: deyi;
}
#Login-Title {
  width: 100%;
  height: 20%;
  overflow: hidden;
}
#Login-Title > h1 {
  font-size: 2.5rem;
  font-family: deyi;
  color: black;
  line-height: normal;
}
#Login-Title > h4 {
  font-family: deyi;
  color: black;
  line-height: normal;
}
#Login-form-Area {
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
#Login-form-Area::before {
  content: "";
  position: absolute;
  top: 5rem;
  width: 100%;
  height: 1px;
  background-color: rgb(235, 235, 235);
}

.Login-TextLine-Area {
  position: relative;
  height: 2.5rem;
  width: 90%;
  background-color: rgb(247, 247, 247);
  border: 1px rgba(0, 0, 255, 0) solid;
  /* Login-TextLine-Area 作为一个容器，需要让子元素(输入框)居中 */
  display: flex;
  justify-content: center;
  align-items: center;
}

.Login-TextLine-Area:focus-within {
  background-color: rgb(235, 235, 235);
  transition: background-color 1s;
}
.Login-TextLine {
  height: 2rem;
  width: 95%;
  background-color: inherit;
  border-style: none;
  font-family: ali;
  letter-spacing: 2px; /* 设置字间距为 2 像素 */
  font-weight: bold;
}
.Login-TextLine:focus {
  outline: none;
  background-color: inherit;
}
.Login-TextLine-Area label {
  font-family: ali;
  font-size: 1rem;
  font-weight: 400;
  position: absolute;
  top: 50%;
  left: 12%; /* 设置为50%表示label的左上角位于父元素的中心 */
  transform: translate(-50%, -50%); /* 使用transform进行居中调整 */
  color: rgb(190, 190, 190);
  pointer-events: none;
  transition: all 0.3s cubic-bezier(0.37, 0.38, 0.28, 0.99);
  /*这是一条及其抽象的缓动曲线，一般来说不要动，虽然动了也大概率看不出来*/
}

.Login-TextLine:focus ~ label,
.Login-TextLine:valid ~ label {
  font-weight: 700;
  transform: none;
  top: -1.2rem;
  left: 0rem;
  font-size: 0.8rem;
  color: #585858;
}
.Login-submit-Area {
  position: relative;
  width: 100%;
  height: 30%;
  /* background-color: rgb(160, 255, 160); */
}
</style>
<script setup>
import "mdui/mdui.css";
import "mdui";
</script>
