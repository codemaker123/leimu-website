<template>
  <div class="fullpage-footer">
    <div class="container">
      <div class="footer-section">
        <span class="footer-section-title">解决方案</span>
        <ul class="footer-section-list">
          <li>汽车行业</li>
          <li style="margin-right: 3rem">光伏行业</li>
          <li>物流行业</li><br/>
          <li>电子行业</li>
          <li>新能源行业</li>
          <li>交通行业</li> <br/>
          <li>教育行业</li>
          <li style="margin-right: 3rem">食品行业</li>
          <li>半导体行业</li> <br/> 
          <li>医药行业</li>
          <li style="margin-right: 3rem">包装行业</li>
          <li>模具行业</li>
        </ul>
      </div>
      <div class="footer-section">
        <span class="footer-section-title">服务与支持</span>
        <ul class="footer-section-list">
          <li>行业动态</li><br/>
          <li>服务定制</li><br/>
          <li>常见问题</li>
        </ul>
      </div>
      <div class="footer-section">
        <span class="footer-section-title">关于我们</span>
        <p>微信二维码</p>
        <p>抖音</p>
        <p>联系电话: 13630194792</p>
      </div>
    </div>
    <div style="margin-bottom: 2rem;font-size: 1.2rem">
      Copyright@雷目智能科技（佛山）有限公司 &nbsp;&nbsp;&nbsp;&nbsp;备案号:粤ICP备2023079344号
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
.fullpage-footer {
  /*position: absolute;*/
  /*bottom: 0;*/
  /*left: 0;*/
  /*width: 100%;*/
  /*background: linear-gradient(135deg, #6ab9cf, #31d4d9, #1f9ecb); !* 设置渐变背景 *!*/
  /*box-shadow: 0 0 2rem 1rem rgba(106, 185, 207, 0.2), 0 0 30px 15px rgba(49, 212, 217, 0.2), 0 0 40px 20px rgba(31, 158, 203, 0.2); !* 添加发光效果 *!*/
  /*text-align: center;*/
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.6); /* 使用 RGBA 颜色值设置背景颜色 */
  text-align: center;
}
.container {
  display: flex;
  /*justify-content: space-between;*/
}

.footer-section {
  flex: 1;
  margin-right: 1rem;
  height: 14rem;
}

.footer-section-title {
  font-size: 2rem;
  text-align: left;
  margin-left: 10rem;
  height: 2rem;
  display: block;
  margin-top: 0.5rem;
  margin-bottom: 1.8rem;
}

.footer-section p {
  text-align: left;
  margin-left: 10rem;
  font-size: 1.5rem;  
}

.footer-section-list {
  list-style-type: none;
  padding-left: 10rem;
  text-align: left;
}

.footer-section-list li {
  margin-bottom: 1rem;
  margin-right: 1.5rem;
  font-size: 1.4rem;
  display: inline-block;
}
</style>