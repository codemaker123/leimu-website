<template>
  <div class="product-page">
    <div class="background-image"></div>
    <div class="product-info">
      <!-- 在这里添加你的产品信息内容 -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Products"
}
</script>

<style scoped>
.product-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* 设置产品页面的样式，如宽度、高度、背景颜色等 */
}

.background-image {
  /*background-color: red;*/
  /*background: url("");*/
  background-image: url(../assets/img/products-bg.png);
  width: 100%;
  height: 35rem; /* 设置背景图的高度 */
}

.product-info {
  background-color: green;
  width: 85%;
  height: 150rem;
  /* 添加其他产品信息div的样式，如高度、边框等 */
}
</style>