<template>
  <swiper v-bind:options="swiperOption" style="user-select: none;">
    <swiper-slide>
      <!-- 轮播内容1 -->
      <div class="slide-image">
        <img src="../assets/img/slide-one.png" alt="大图1">
        <div class="text-overlay">
          <h2>专业视觉解决<br/>方案提供商</h2>
          <h3>Professional Vision <br/>Solution Provider</h3>
          <p>快速响应&nbsp;&nbsp;·&nbsp;&nbsp;现场展示&nbsp;&nbsp;·&nbsp;&nbsp;教学科研&nbsp;&nbsp;·&nbsp;&nbsp;工程应用</p>
        </div>
      </div>
    </swiper-slide>
    <!-- 轮播内容2 -->
    <swiper-slide>
      <div class="slide-image">
        <img src="@/assets/img/slide-two.jpg" alt="大图2">
        <div class="text-overlay2">
          <div>
          <span class="slide-two-font">行业应用案例&nbsp;&nbsp;&nbsp;</span>
          <span style="font-size: 2.5rem;color: #151111">更多>>></span>
          </div>
          <div class="red-rectangle">
            <div class="green-rectangle-row">
              <div class="green-rectangle">
                <div class="image-overlay1"></div>
                <span class="text-desc1">汽车行业</span>
                <span class="text-desc1" style="font-size: 2rem;color: #ffffff;margin-left: 13rem;margin-top: 0.5rem">更多>>></span>
              </div>
              <div class="green-rectangle">
                <div class="image-overlay2"></div>
                <span class="text-desc2">电子行业</span>
                <span class="text-desc1" style="font-size: 2rem;color: #ffffff;margin-left: 57rem;margin-top: 0.5rem">更多>>></span>
              </div>
              <div class="green-rectangle">
                <div class="image-overlay3"></div>
                <span class="text-desc3">教育行业</span>
                <span class="text-desc1" style="font-size: 2rem;color: #ffffff;margin-left: 104rem;margin-top: 0.5rem">更多>>></span>
              </div>
            </div>
            <div class="green-rectangle-row">
              <div class="green-rectangle">
                <div class="image-overlay4"></div>
                <span class="text-desc4">医药行业</span>
                <span class="text-desc1" style="font-size: 2rem;color: #ffffff;margin-left: 13rem;margin-top: 35.2rem">更多>>></span>
              </div>
              <div class="green-rectangle">
                <div class="image-overlay5"></div>
                <span class="text-desc5">食品行业</span>
                <span class="text-desc1" style="font-size: 2rem;color: #ffffff;margin-left: 57rem;margin-top: 35.2rem">更多>>></span>
              </div>
              <div class="green-rectangle">
                <div class="image-overlay6"></div>
                <span class="text-desc6">包装行业</span>
                <span class="text-desc1" style="font-size: 2rem;color: #ffffff;margin-left: 104rem;margin-top: 35.2rem">更多>>></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
    <!-- 轮播内容3 -->
    <swiper-slide>
      <div class="slide-image">
        <img src="@/assets/img/slide-three.png" alt="大图3">
      </div>
    </swiper-slide>
    <!-- 轮播内容4 -->
    <swiper-slide>
      <div class="slide-image">
        <img src="@/assets/img/slide-four.png" alt="大图4">
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';

export default {
  name: 'HomePage',
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    msg: String
  },
  data() {
    return {
      message: '',
      swiperOption: {
        direction: "horizontal"
      },
      swiperConfig: {
        notNextTick: true, //notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        direction: "vertical", //垂直方向移动
        grabCursor: true, //鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状
        setWrapperSize: true, //Swiper使用flexbox布局(display: flex)，开启这个设定会在Wrapper上添加等于slides相加的宽或高，在对flexbox布局的支持不是很好的浏览器中可能需要用到。
        autoHeight: true, //自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化
        slidesPerView: 1, //设置slider容器能够同时显示的slides数量(carousel模式)。可以设置为数字（可为小数，小数不可loop），或者 'auto'则自动根据slides的宽度来设定数量。loop模式下如果设置为'auto'还需要设置另外一个参数loopedSlides。
        mousewheel: true, //开启鼠标滚轮控制Swiper切换。可设置鼠标选项，默认值false
        mousewheelControl: true, //同上
        height: window.innerHeight - 60, // 高度设置，占满设备高度
        resistanceRatio: 0, //抵抗率。边缘抵抗力的大小比例。值越小抵抗越大越难将slide拖离边缘，0时完全无法拖离。本业务需要
        observeParents: true, //将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新
        allowSlidePrev: false, // 禁止向前滑动
        allowSlideNext: false, // 禁止向后滑动
        on: {
        }
      }
    }
  }
}
window.addEventListener('load', function() {
  var screenHeight = window.innerHeight;
  var screenWidth = window.innerWidth;

  document.documentElement.style.height = screenHeight + 'px';
  document.documentElement.style.width = screenWidth + 'px';
  document.body.style.height = screenHeight + 'px';
  document.body.style.width = screenWidth + 'px';
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html, body {
  overflow-x: hidden;
}
.slide-image {
  position: relative;
  width: 100%;
  height: 100vh; /* 设置大图占据整个视口高度 */
  overflow: hidden;
}

.slide-image img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: auto;
  height: 100%; /* 图片高度占满父容器 */
  object-fit: cover; /* 图片按比例填充父容器 */
}

@media (max-width: 768px) {
  .slide-image {
    height: auto; /* 移动端下取消固定高度 */
  }
}

.text-overlay {
  position: absolute;
  top: 45%;
  left: 30%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
}

.text-overlay h2 {
  font-size: 7.8rem;
  position: center;
  margin-left: 1rem;
  display: flex;
  letter-spacing: 1.7rem;
  margin-bottom: 3rem;
  text-align: left;
}

.text-overlay h3 {
  font-size: 5rem;
  position: center;
  margin-left: 1rem;
  display: flex;
  letter-spacing: 0.3rem;
  text-align: left;
}

.text-overlay p {
  margin-top: 12rem;
  font-size: 4rem;
  margin-left: 2rem;
}
.text-overlay2 {
  position: absolute;
  top: 10%;
  left: 20%;
  transform: translate(-50%, -50%);
  text-align: center;
}
.slide-two-font {
  margin-top: 8rem;
  color: #151111;
  font-size: 8rem;
  top: 25%;
}

.red-rectangle {
  position: absolute;
  top: 90%;
  width: 135rem;
  height: 60rem;
  background-color: red;
  margin-top: 5rem;
}

.green-rectangle-row {
  display: flex;
  align-items: center;
  margin-bottom: 10rem;
}

.green-rectangle {
  background-color: green;
  width: 35rem;
  height: 25rem;
  /*margin-left: 2rem;*/
  margin-right: 10rem;
}
.image-overlay1 {
  background-image: url(../assets/img/car-indus.png);
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
}
.image-overlay2 {
  background-image: url(../assets/img/electron-indus.png);
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
}
.image-overlay3 {
  background-image: url(../assets/img/edu-indus.png);
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
}
.image-overlay4 {
  background-image: url(../assets/img/medicine-indus.png);
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
}
.image-overlay5 {
  background-image: url(../assets/img/food-indus.png);
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
}
.image-overlay6 {
  background-image: url(../assets/img/package-indus.png);
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
}
.text-desc1{
  position: absolute;
  top: 5%;
  left: 7%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #ffffff;
  font-size: 3rem;
}
.text-desc2{
  position: absolute;
  top: 5%;
  left: 40%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #ffffff;
  font-size: 3rem;
}
.text-desc3{
  position: absolute;
  top: 5%;
  left: 75%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #ffffff;
  font-size: 3rem;
}
.text-desc4{
  position: absolute;
  top: 63%;
  left: 7%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #ffffff;
  font-size: 3rem;
}
.text-desc5{
  position: absolute;
  top: 63%;
  left: 40%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #ffffff;
  font-size: 3rem;
}
.text-desc6{
  position: absolute;
  top: 63%;
  left: 75%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #ffffff;
  font-size: 3rem;
}
</style>
