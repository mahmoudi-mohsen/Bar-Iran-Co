<template>
  <div class="body">
    <div class="banner">
      <div class="ms-layers-template">
        <carousel :items-to-show="1" :dir="'rtl'" :wrap-around="true" :transition="1500" :autoplay="5000" :loop="true">
          <!-- Slide  -->
          <slide :key="0" class="slide-wrapper">
            <img :src="require(`@/assets/images/home/banner-1.webp`)"
                 :data-src="require(`@/assets/images/home/banner-1.webp`)" alt="Slider Image 1"/>
            <div class="layer">
              <h1>حمل و نقل دریایی</h1>
              <ul class="tick-bullet">
                <li>ایمنی بالا</li>
                <li>هزینه کم</li>
                <li>ارسال کالا در حجم زیاد</li>
              </ul>
              <router-link class="bttn site" to="/seaFreight">اطلاعات بیشتر</router-link>
              <img class="banner-logo" :src="require(`@/assets/images/tat.png`)" alt="تات"/>
            </div>

          </slide><!-- ms-slide end -->

          <slide :key="1" class="slide-wrapper">
            <img :src="require(`@/assets/images/home/banner-2.jpg`)"
                 :data-src="require(`@/assets/images/home/banner-2.jpg`)" alt="Slider Image 2"/>
            <div class="layer">
              <h1>حمل و نقل جاده ای</h1>
              <ul class="tick-bullet">
                <li>لرزش و نوسان کم</li>
                <li>سلامت محموله</li>
                <li>ارسال سریع</li>
              </ul>
              <router-link class="bttn site" to="/groundFreight">اطلاعات بیشتر</router-link>
              <img class="banner-logo" :src="require(`@/assets/images/logo-big.png`)" alt="بار ایران"/>
            </div>

          </slide><!-- ms-slide end -->

          <!-- Slide  -->
          <slide :key="2" class="slide-wrapper">
            <img :src="require(`@/assets/images/home/banner-3.jpg`)"
                 :data-src="require(`@/assets/images/home/banner-3.jpg`)" alt="Slider Image 3"/>
            <div class="layer">
              <h1>حمل و نقل هوایی</h1>
              <p>اطلاعات بیشتر را می توانید در اینجا بخوانید</p>
              <router-link class="bttn site" to="/airFreight">اطلاعات بیشتر</router-link>
              <img class="banner-logo" :src="require(`@/assets/images/logo-big.png`)" alt="بار ایران"/>
            </div>

          </slide><!-- ms-slide end -->

          <!-- Slide  -->
          <slide :key="3" class="slide-wrapper">
            <img :src="require(`@/assets/images/home/banner-4.jpg`)"
                 :data-src="require(`@/assets/images/home/banner-4.jpg`)" alt="Slider Image 4"/>
            <div class="layer">
              <h1>حمل و نقل ریلی</h1>
              <ul class="tick-bullet">
                <li>ایمنی بالا</li>
                <li>بهترین روش برای مواد معدنی</li>
              </ul>
              <router-link class="bttn site" to="/railFreight">اطلاعات بیشتر</router-link>
              <img class="banner-logo" :src="require(`@/assets/images/logo-big.png`)" alt="بار ایران"/>
            </div>

          </slide><!-- ms-slide end -->
          <template #addons>
            <Pagination/>
          </template>
        </carousel><!-- master-slider end -->
      </div><!-- ms-layers-template end -->
    </div><!-- banner -->

    <div class="description-section white-bg has-clear-fix">
      <div class="right-section">
        <div class="reveal">
          <h1 class="company-name">
            حمل و نقل بین‌المللی شرکت بار ایران و شرکت تات
          </h1>
          <img :src="require(`@/assets/images/home/destination.png`)" alt=""/>
          <h2>آیا با نحوه کار ما آشنایی دارید؟</h2>
          <p>
            حمل و نقل بین‌المللی کالا ، بخش مهمی از تجارت جهانی است که نمی‌توان آن را نادیده گرفت و یا از دنیای مدرن
            امروز، حذف کرد. دنیای امروز ما با تجارت و حمل‌ونقل کالا گره خورده است و جزء جدایی‌ناپذیر از آن است.
            شرکت حمل و نقل بین المللی و کشتیرانی
            <span style="color: #1a81c4">بارایران</span>
            دارای بیش از 37 سال سابقه میباشد.
          </p>
          <router-link class="bttn has-icon has-top-margin" to="/about">آشنایی با تیم ما</router-link>
        </div><!-- reveal end -->
      </div><!-- right-section end -->
      <div class="left-section">
        <ul>
          <li>
            <div class="reveal table-cell-display vertical-aligned element-hidden" v-infocus="'showElement'">
              <i class="fal fa-ship"></i>
              <strong>حمل و نقل مطمئن</strong>
            </div><!-- table-cell-display end -->
          </li>
          <li>
            <div class="reveal table-cell-display vertical-aligned element-hidden" v-infocus="'showElement'">
              <i class="fal fa-badge-percent"></i>
              <strong>مناسب ترین قیمت</strong>
            </div><!-- table-cell-display end -->
          </li>
          <li>
            <div class="reveal table-cell-display vertical-aligned element-hidden" v-infocus="'showElement'">
              <i class="fal fa-truck-container"></i>
              <strong>حمل و نقل سریع</strong>
            </div><!-- table-cell-display end -->
          </li>
          <li>
            <div class="reveal table-cell-display vertical-aligned element-hidden" v-infocus="'showElement'">
              <i class="fal fa-box-heart"></i>
              <strong>تضمین سلامت کالا</strong>
            </div><!-- table-cell-display end -->
          </li>
        </ul>
      </div><!-- left-section end -->
    </div><!-- description-section end -->

    <div class="parallax"
         :style="{'background-image': 'url(' + require('@/assets/images/home/supply-chain.jpg') + ')'}">
      <div class="table-display">
        <div class="table-cell-display vertical-aligned center-aligned">
          <router-link :to="{name:'SpecificBlog',params:{id:1001}}" class="reveal bttn site-2 large element-hidden"
                       v-infocus="'showElement'"><i
              class="fal fa-globe"></i>
            درباره حمل و نقل بین المللی بخوانید
          </router-link>
        </div><!-- table-cell-display end -->
      </div><!-- table-display end -->
    </div><!-- parallax end -->

    <div class="page-section white-bg on-parallax">

      <div class="overlap-box">
        <div class="frame">

          <div class="column-boxes center-aligned">
            <div class="section-wrapper">
              <div class="section cl-6 image-section tat-section"
                   :style="{'background-image': 'url(' + require('@/assets/images/home/banner-1.jpg') + ')'}">
                &nbsp;
              </div><!-- section end -->
              <div class="section cl-6">
                <div class="reveal table-cell-display vertical-aligned element-hidden" v-infocus="'showElement'">
                  <h2>حمل و نقل دریایی</h2>
                  <p>
                    رایج‌ترین شیوه حمل و نقل بین المللی کالا‌ها حمل دریایی است. این روش به واسطه حداقل هزینه و نبود نیاز
                    به راه سازی و ایجاد خطوط راه آهن و جاده از دیر باز مورد استقبال بسیاری بوده است. با این همه هزینه
                    زمان در این نوع حمل کالا افزایش می‌یابد و برای کالا‌های بسیار ارزش مند و کم حجم و کم وزن روش مناسبی
                    نیست.
                  </p>
                  <router-link class="bttn has-top-margin" to="/seaFreight">اطلاعات بیشتر</router-link>
                </div><!-- table-cell-display end -->
              </div><!-- section end -->
              <div class="section cl-6 image-section"
                   :style="{'background-image': 'url(' + require('@/assets/images/home/banner-2-1.jpg') + ')'}">
                &nbsp;
              </div><!-- section end -->
              <div class="section cl-6">
                <div class="reveal table-cell-display vertical-aligned element-hidden" v-infocus="'showElement'">
                  <h2>حمل و نقل جاده ای</h2>
                  <p>
                    باربری جاده ای به وسیله کامیون های استاندارد و ایمن کم ترین لرزش و نوسان را به محموله وارد می کند.
                    از این رو برای کالاهایی که آسیب پذیری و حساسیت بالایی دارند بسیار مناسب می باشد. از طرفی سرعت ارسال
                    کالا در این نوع حمل و نقل بار از چشم گیری خاص خود برخوردار است.
                  </p>
                  <router-link class="bttn has-top-margin" to="/groundFreight">اطلاعات بیشتر</router-link>
                </div><!-- table-cell-display end -->
              </div><!-- section end -->
              <div class="section cl-6 image-section"
                   :style="{'background-image': 'url(' + require('@/assets/images/home/banner-3-1.jpg') + ')'}">
                &nbsp;
              </div><!-- section end -->
              <div class="section cl-6">
                <div class="reveal table-cell-display vertical-aligned element-hidden" v-infocus="'showElement'">
                  <h2>حمل و نقل هوایی</h2>
                  <p>
                    این شیوه حمل کالا بیشتر برای محمولات اورژانسی که با کمبود زمان روبرو هستند و یا ارزش کالایی آنها
                    بسیار بالاست استفاده می‌شود. حمل هوایی برای حجم کالا به مانند وزن آن محدودیت‌هایی دارد. در این روش
                    حمل کانتینر‌های هوایی با اشکال مخصوص بدنه هواپیمای باربری تهیه شده اند و استفاده می‌شوند. ارزش فضا
                    هر متر مکعب در هواپیما برابر ارزش 160 کیلوگرم است.
                  </p>
                  <router-link class="bttn has-top-margin" to="/airFreight">اطلاعات بیشتر</router-link>
                </div><!-- table-cell-display end -->
              </div><!-- section end -->
              <div class="section cl-6 image-section"
                   :style="{'background-image': 'url(' + require('@/assets/images/home/banner-4-1.jpg') + ')'}">
                &nbsp;
              </div><!-- section end -->
              <div class="section cl-6">
                <div class="reveal table-cell-display vertical-aligned element-hidden" v-infocus="'showElement'">
                  <h2>حمل و نقل ریلی</h2>
                  <p>
                    حمل و نقل بین المللی ریلی نیز یکی دیگر از روش‌های حمل‌ونقل زمینی بوده که علی‌رغم شباهت‌هایی که با
                    روش جاده‌ای داشته، اما تفاوت‌هایی نیز دارند. قطارهای باری وسیله حمل کالا در روش ریلی هستند.
                  </p>
                  <router-link class="bttn has-top-margin" to="/railFreight">اطلاعات بیشتر</router-link>
                </div><!-- table-cell-display end -->
              </div><!-- section end -->
            </div><!-- section-wrapper end -->
          </div><!-- column-boxes end -->
        </div><!-- frame end -->
      </div><!-- overlap-box end -->

    </div><!-- page-section end -->

    <div class="page-section ui-gradient">
      <div class="frame hexagon-wrapper">
        <div class="title">
          <h2>پروژه ها</h2>
          <p>
            مزید استحضار نمونه ای از فعالیت و پروژه های انجام شده وشرکتها و سازمانهایی که این مجموعه افتخاری همکاری و
            انجام امور نقل و انتقال کالاهای آنها را در رزومه خود ثبت نموده به شرح ذیل تقدیم میگردد
          </p>
        </div><!-- title end -->
        <div class="has-top-padding has-bottom-padding">
          <ul class="hexagon-grid-container">
            <li class="hexagon hexagon-blue">
              <div class="hexagon-inner">
                <img class="hexagon-avatar-img" :src="require(`@/assets/images/static/blue-company.png`)" alt=""/>
                <span class="hexagon-name">گروه کارخانجات پارلا منسوجات</span>
              </div>
            </li>
            <li class="hexagon hexagon-red">
              <div class="hexagon-inner">
                <img class="hexagon-avatar-img" :src="require(`@/assets/images/static/blue-company.png`)" alt=""/>
                <span class="hexagon-name">شرکت صنعتی و معدنی آکام کانی پویا</span>
              </div>
            </li>
            <li class="hexagon hexagon-red">
              <div class="hexagon-inner">
                <img class="hexagon-avatar-img" :src="require(`@/assets/images/static/blue-company.png`)" alt=""/>
                <span class="hexagon-name">شرکت نفت بهران شرکت پتروشیمی جم</span>
              </div>
            </li>
            <li class="hexagon hexagon-red">
              <div class="hexagon-inner">
                <img class="hexagon-avatar-img" :src="require(`@/assets/images/static/blue-company.png`)" alt=""/>
                <span class="hexagon-name">شرکت پتروشیمی روان سازان آریا جم</span>
              </div>
            </li>
            <li class="hexagon hexagon-yellow">
              <div class="hexagon-inner">
                <img class="hexagon-avatar-img" :src="require(`@/assets/images/static/blue-company.png`)" alt=""/>
                <span class="hexagon-name">شرکت ملی  صنایع مس ایران</span>
              </div>
            </li>
            <li class="hexagon hexagon-yellow">
              <div class="hexagon-inner">
                <img class="hexagon-avatar-img" :src="require(`@/assets/images/static/blue-company.png`)" alt=""/>
                <span class="hexagon-name">شرکت قالی سرام</span>
              </div>
            </li>
            <li class="hexagon hexagon-yellow">
              <div class="hexagon-inner">
                <img class="hexagon-avatar-img" :src="require(`@/assets/images/static/blue-company.png`)" alt=""/>
                <span class="hexagon-name">کارخانه کاشی سازی عقیق یزد</span>
              </div>
            </li>
            <li class="hexagon hexagon-red">
              <div class="hexagon-inner">
                <img class="hexagon-avatar-img" :src="require(`@/assets/images/static/blue-company.png`)" alt=""/>
                <span class="hexagon-name">شرکت پارس سرام</span>
              </div>
            </li>
            <li class="hexagon hexagon-red">
              <div class="hexagon-inner">
                <img class="hexagon-avatar-img" :src="require(`@/assets/images/static/blue-company.png`)" alt=""/>
                <span class="hexagon-name">شرکت کاشی سازی حافظ</span>
              </div>
            </li>
            <li class="hexagon hexagon-red">
              <div class="hexagon-inner">
                <img class="hexagon-avatar-img" :src="require(`@/assets/images/static/blue-company.png`)" alt=""/>
                <span class="hexagon-name">کاشی سازی میبد</span>
              </div>
            </li>
            <li class="hexagon hexagon-blue">
              <div class="hexagon-inner">
                <img class="hexagon-avatar-img" :src="require(`@/assets/images/static/blue-company.png`)" alt=""/>
                <span class="hexagon-name">شیشه بلور کاوه</span>
              </div>
            </li>
            <li class="hexagon hexagon-blue">
              <div class="hexagon-inner">
                <img class="hexagon-avatar-img" :src="require(`@/assets/images/static/blue-company.png`)" alt=""/>
                <span class="hexagon-name">شرکت ایران خودرو</span>
              </div>
            </li>
            <li class="hexagon hexagon-red">
              <div class="hexagon-inner">
                <img class="hexagon-avatar-img" :src="require(`@/assets/images/static/blue-company.png`)" alt=""/>
                <span class="hexagon-name">شرکت قطعات خودرو سازی سایپا ملیبل</span>
              </div>
            </li>
            <li class="hexagon hexagon-red">
              <div class="hexagon-inner">
                <img class="hexagon-avatar-img" :src="require(`@/assets/images/static/blue-company.png`)" alt=""/>
                <span class="hexagon-name">ایندامین</span>
              </div>
            </li>
            <li class="hexagon hexagon-green">
              <div class="hexagon-inner">
                <img class="hexagon-avatar-img" :src="require(`@/assets/images/static/blue-company.png`)" alt=""/>
                <span class="hexagon-name">متین خودرو</span>
              </div>
            </li>
            <li class="hexagon hexagon-green">
              <div class="hexagon-inner">
                <img class="hexagon-avatar-img" :src="require(`@/assets/images/static/blue-company.png`)" alt=""/>
                <span class="hexagon-name">داروسازی دکتر عبیدی</span>
              </div>
            </li>
            <li class="hexagon hexagon-green">
              <div class="hexagon-inner">
                <img class="hexagon-avatar-img" :src="require(`@/assets/images/static/blue-company.png`)" alt=""/>
                <span class="hexagon-name">شرکت مادیران</span>
              </div>
            </li>
            <li class="hexagon hexagon-green">
              <div class="hexagon-inner">
                <img class="hexagon-avatar-img" :src="require(`@/assets/images/static/blue-company.png`)" alt=""/>
                <span class="hexagon-name">پتروشیمی شازند</span>
              </div>
            </li>
            <li class="hexagon hexagon-red">
              <div class="hexagon-inner">
                <img class="hexagon-avatar-img" :src="require(`@/assets/images/static/blue-company.png`)" alt=""/>
                <span class="hexagon-name">شرکت هیرا گستر</span>
              </div>
            </li>
            <li class="hexagon hexagon-red">
              <div class="hexagon-inner">
                <img class="hexagon-avatar-img" :src="require(`@/assets/images/static/blue-company.png`)" alt=""/>
                <span class="hexagon-name">شرکت اکسون</span>
              </div>
            </li>
            <li class="hexagon hexagon-blue">
              <div class="hexagon-inner">
                <img class="hexagon-avatar-img" :src="require(`@/assets/images/static/blue-company.png`)" alt=""/>
                <span class="hexagon-name">شرکت پتروشیمی شازند</span>
              </div>
            </li>
          </ul>
        </div><!-- price-tables end -->
      </div><!-- frame end -->
    </div><!-- page-section end -->

    <div class="page-section white-bg">
      <div class="frame">
        <div class="title">
          <h2>جدیدترین
            <router-link to="/blog">مقالات</router-link>
          </h2>
        </div><!-- title end -->
        <div class="listing-items center-aligned">
          <ul class="has-clear-fix">
            <li v-for="(item,index) in blogsList.slice(0,3)" :key="index">
              <router-link :to="{name:'SpecificBlog',params:{id:item.id}}">
                <img class="blog-img" :src="require(`@/assets/images/blog/${item.img}`)" alt=""/>
              </router-link>
              <div class="inner-listing-box">
                <h5>
                  <router-link :to="{name:'SpecificBlog',params:{id:item.id}}">
                    {{ item.title }}
                  </router-link>
                </h5>
                <div class="post-stats">
                  <span>{{ item.date }}</span>
                </div><!-- post-stats end -->
                <span class="blog-summary">
                  {{ item.summaries }}
                </span>
                <router-link class="bottom-bttn" :to="{name:'SpecificBlog',params:{id:item.id}}">مشاهده بلاگ
                </router-link>
              </div><!-- inner-listing-box end -->
            </li>
          </ul>
        </div><!-- listing-items end -->
      </div><!-- frame end -->
    </div><!-- page-section end -->
    <Loader style="direction: ltr" v-if="isLoading === true"/>
  </div>
</template>

<script>
import SERVER from "@/server";
import 'vue3-carousel/dist/carousel.css'
import {Carousel, Slide, Pagination, Navigation} from 'vue3-carousel'
import Loader from "@/components/Loader";

export default {
  components: {
    Loader,
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      blogsList: [],
      isLoading: false
    }
  },
  created() {
    this.blogs();
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 1000)
  },
  methods: {
    blogs() {
      SERVER.blogs()
          .then((result) => {
            let blogsList = result.data.data;
            blogsList.sort((a, b) => b.id - a.id)
            this.blogsList = blogsList;
          })
          .catch((error) => {
            console.log(error);
          });
    },
  },
  directives: {
    infocus: {
      isLiteral: true,
      mounted: (el, binding, vnode) => {
        let f = () => {
          let rect = el.getBoundingClientRect();
          let inView = (
              rect.width > 0 &&
              rect.height > 0 &&
              rect.top <= (window.innerHeight || document.documentElement.clientHeight)
              // rect.bottom >= 0
          );
          if (inView) {
            el.classList.add(binding.value);
            window.removeEventListener('scroll', f)
          }
        };
        window.addEventListener('scroll', f);
        f()
      }
    },
  },

}
</script>
<style scoped lang="scss">
.ui-gradient {
  background: #E0EAFC; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #CFDEF3, #E0EAFC); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #F0F8FF, #fcfcff); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}

.blog-summary {
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  overflow-wrap: anywhere;
  word-wrap: anywhere;
  text-align: justify;
  padding-bottom: 0;
}

.blog-img {
  height: 223px !important;
  object-fit: cover;
}

.element-hidden {
  visibility: visible;
  -webkit-transform: translateY(100px) scale(0.8);
  transform: translateY(100px) scale(0.8);
  opacity: 0;
}

.showElement {
  visibility: visible;
  -webkit-transform: translateY(0) scale(1);
  transform: translateY(0) scale(1);
  opacity: 1;
  -webkit-transition: -webkit-transform 0.7s ease-in-out 0s, opacity 0.7s ease-in-out 0s;
  transition: transform 0.7s ease-in-out 0s, opacity 0.7s ease-in-out 0s;
}


$xv-secondary-light-gray: #c9c9c9;
$xv-secondary-dark-gray: #9fa0a2;
$xv-secondary-green: rgba(133, 177, 58, 1);
$xv-secondary-ltgreen: #A9C875;
$xv-secondary-dkgreen: rgba(106, 141, 46, 1);
$xv-secondary-blue: rgba(47, 155, 167, 1);
$xv-secondary-ltblue: #6DB9C1;
$xv-secondary-dkblue: rgba(37, 124, 133, 1);
$xv-secondary-yellow: rgba(227, 169, 40, 1);
$xv-secondary-ltyellow: #EBC268;
$xv-secondary-dkyellow: rgba(181, 135, 32, 1);
$xv-secondary-red: rgba(204, 55, 77, 1);
$xv-secondary-ltred: #DB7382;
$xv-secondary-dkred: rgba(163, 44, 61, 1);

/* Outer Hexagon */
.hexagon-grid-container {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  list-style: none;
  direction: ltr;
}

.hexagon {
  position: relative;
  width: 140px;
  height: 80.83px;
  background-color: $xv-secondary-dark-gray;
  margin: 44px 2px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0 !important;
  transition: all .7s;

  &:hover {
    transform: scale(0.8);
  }

  &:before, &:after {
    content: "";
    position: absolute;
    width: 0;
    border-left: 70px solid transparent;
    border-right: 70px solid transparent;
  }

  &:before {
    bottom: 100%;
    border-bottom: 40.41px solid $xv-secondary-dark-gray;
  }

  &:after {
    top: 100%;
    width: 0;
    border-top: 40.41px solid $xv-secondary-dark-gray;
  }
}

/* Inner Hexagon */
.hexagon-inner {
  position: relative;
  width: 136px;
  height: 78.52px;
  background-color: $xv-secondary-light-gray;
  margin: 39.26px 0;
  display: flex;
  justify-content: center;

  &:before, &:after {
    content: "";
    position: absolute;
    width: 0;
    border-left: 68px solid transparent;
    border-right: 68px solid transparent;
    z-index: 1;
  }

  &:before {
    bottom: 100%;
    border-bottom: 39.26px solid $xv-secondary-light-gray;
  }

  &:after {
    top: 100%;
    width: 0;
    border-top: 39.26px solid $xv-secondary-light-gray;
  }
}

.hexagon-wrapper {
  padding: 0 !important;
}

/* Media queries */
@media (min-width: 1920px) {
  .hexagon-wrapper {
    max-width: 100%;
    width: 100%;
  }
  .hexagon-grid-container {
    width: 1600px;
  }
  .hexagon:nth-child(21n+12) {
    margin-left: 74px;
  }
}

@media (max-width: 1919px) and (min-width: 1280px) {
  .hexagon-grid-container {
    width: 1100px;
  }
  .hexagon:nth-child(14n+8) {
    margin-left: 74px;
  }
}

@media (max-width: 1279px) and (min-width: 1024px) {
  .hexagon-grid-container {
    width: 960px;
  }
  .hexagon:nth-child(12n+7) {
    margin-left: 74px;
  }
}

@media (max-width: 1023px) and (min-width: 781px) {
  .hexagon-grid-container {
    width: 780px;
  }
  .hexagon:nth-child(9n+6) {
    margin-left: 74px;
  }
}

@media (max-width: 780px) and (min-width: 640px) {
  .hexagon-grid-container {
    width: 640px;
  }
  .hexagon:nth-child(7n+5) {
    margin-left: 74px;
  }
}

@media (max-width: 639px) {
  .hexagon-grid-container {
    width: 320px;
  }
  .hexagon:nth-child(3n+3) {
    margin-left: 74px;
  }
}

/* Avatar */
.hexagon-avatar-img {
  position: absolute;
  width: 42px;
  border-radius: 42px;
  border: 2px solid #fff;
  top: -24px;
  z-index: 1;
}

/* Name */
.hexagon-name {
  position: absolute;
  width: 130px;
  text-align: center;
  font-size: 13px;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}


/* Hexagon Color Coding */
.hexagon.hexagon-green {
  background-color: $xv-secondary-green;

  &:before {
    border-bottom: 40.41px solid $xv-secondary-green;
  }

  &:after {
    border-top: 40.41px solid $xv-secondary-green;
  }

  .hexagon-inner {
    background-color: $xv-secondary-ltgreen;

    &:before {
      border-bottom: 39.26px solid $xv-secondary-ltgreen;
    }

    &:after {
      border-top: 39.26px solid $xv-secondary-ltgreen;
    }
  }

  .hexagon-featured-score {
    background: lighten($xv-secondary-green, 5%);
    border-color: $xv-secondary-green;
  }
}

.hexagon.hexagon-blue {
  background-color: $xv-secondary-blue;

  &:before {
    border-bottom: 40.41px solid $xv-secondary-blue;
  }

  &:after {
    border-top: 40.41px solid $xv-secondary-blue;
  }

  .hexagon-inner {
    background-color: $xv-secondary-ltblue;

    &:before {
      border-bottom: 39.26px solid $xv-secondary-ltblue;
    }

    &:after {
      border-top: 39.26px solid $xv-secondary-ltblue;
    }
  }

  .hexagon-featured-score {
    background: lighten($xv-secondary-blue, 5%);
    border-color: $xv-secondary-blue;
  }
}

.hexagon.hexagon-yellow {
  background-color: $xv-secondary-yellow;

  &:before {
    border-bottom: 40.41px solid $xv-secondary-yellow;
  }

  &:after {
    border-top: 40.41px solid $xv-secondary-yellow;
  }

  .hexagon-inner {
    background-color: $xv-secondary-ltyellow;

    &:before {
      border-bottom: 39.26px solid $xv-secondary-ltyellow;
    }

    &:after {
      border-top: 39.26px solid $xv-secondary-ltyellow;
    }
  }

  .hexagon-featured-score {
    background: lighten($xv-secondary-yellow, 5%);
    border-color: $xv-secondary-yellow;
  }
}

.hexagon.hexagon-red {
  background-color: $xv-secondary-red;

  &:before {
    border-bottom: 40.41px solid $xv-secondary-red;
  }

  &:after {
    border-top: 40.41px solid $xv-secondary-red;
  }

  .hexagon-inner {
    background-color: $xv-secondary-ltred;

    &:before {
      border-bottom: 39.26px solid $xv-secondary-ltred;
    }

    &:after {
      border-top: 39.26px solid $xv-secondary-ltred;
    }
  }

  .hexagon-featured-score {
    background: lighten($xv-secondary-red, 5%);
    border-color: $xv-secondary-red;
  }
}

/* Icon Color Coding */
.hexagon-icon-green {
  background: lighten($xv-secondary-green, 5%);
  border-color: $xv-secondary-green;
  color: $xv-secondary-dkgreen;
}

.hexagon-icon-blue {
  background: lighten($xv-secondary-blue, 5%);
  border-color: $xv-secondary-blue;
  color: $xv-secondary-dkblue;
}

.hexagon-icon-yellow {
  background: lighten($xv-secondary-yellow, 5%);
  border-color: $xv-secondary-yellow;
  color: $xv-secondary-dkyellow;
}

.hexagon-icon-red {
  background: lighten($xv-secondary-red, 5%);
  border-color: $xv-secondary-red;
  color: $xv-secondary-dkred;
}
</style>