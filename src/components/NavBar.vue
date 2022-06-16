<template>
  <nav>
    <ul>
      <li><RouterLink to="/encoding">编解码</RouterLink></li>
      <li><RouterLink to="/idcard">身份证号码生成器</RouterLink></li>
      <li><RouterLink to="/credit">信用代码生成器</RouterLink></li>
      <li><RouterLink to="/password">密码生成器</RouterLink></li>
    </ul>
  </nav>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
nav {
  background: aliceblue;
}
ul {
  display: flex;
  align-items: center;
  list-style: none;
  height: 40px;
  max-width: 800px;
  margin: 0 auto;

  li {
    padding: 0 20px;

    a {
      cursor: pointer;
      text-decoration: none;
      color: indigo;
    }
  }
}
.router-link-active {
  font-weight: bold;
  border-bottom: 2px solid rosybrown;
}
</style>
