<template>
  <div class="footer">
    <div class="footer-top">
      <div class="frame has-clear-fix">
        <div class="right-floated">
          <div class="inline-block-display vertical-aligned today-time">
            <strong>تاریخ امروز :</strong>
            <span>{{ today }}</span>
          </div><!-- inline-block-display end -->
        </div><!-- right-floated end -->
        <div class="left-floated">
          <div class="inline-block-display vertical-aligned">
            <strong>به ما بپیوندید</strong>
            <span>شبکه های اجتماعی</span>
          </div><!-- inline-block-display end -->
          <div class="socials">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
          </div><!-- socials end -->
        </div><!-- left-floated end -->
      </div><!-- frame end -->
    </div><!-- footer-top end -->
    <div class="footer-bottom">
      <div class="frame">
        <div class="footer-items has-clear-fix">
          <div class="footer-navigation right-floated">
            <a class="open-nav" href="javascript:void(0)">فهرست</a>
            <ul>
              <li>
                <router-link to="/blog">اخبار</router-link>
              </li>
              <li>
                <router-link to="/about">درباره ما</router-link>
              </li>
              <li>
                <router-link to="/faq">سوالات متداول</router-link>
              </li>
              <li>
                <router-link to="/termsConditions">شرایط و قوانین</router-link>
              </li>
              <li>
                <router-link to="/contact">تماس با ما</router-link>
              </li>
            </ul>
          </div><!-- footer-navigation end -->
          <div class="footer-contact left-floated">
            <a href="tel:+982188106436"><i class="fal fa-phone"></i> <span
                class="inline-block-display reverse-direction">021 88106436</span></a>
            <a href="https://goo.gl/maps/9buUkb1pGFHhrCtw6" target="_blank"><i class="fal fa-map-marker-alt"></i> بار
              ایران در نقشه</a>
          </div><!-- footer-contact end -->
        </div><!-- footer-items end -->
        <div class="copyright center-aligned">
          <router-link to="/"><img :src="require(`@/assets/images/logo.png`)" alt=""/></router-link>
          <router-link to="/"><img :src="require(`@/assets/images/tat.png`)" alt=""/></router-link>
          <strong class="block-display">تمام حقوق سایت برای شرکت بار ایران و شرکت تات محفوظ است.</strong>
        </div><!-- copyright end -->
      </div><!-- frame end -->
    </div><!-- footer-bottom end -->
<!--    <button @click="handleSubmit()">handleSubmit</button>-->
  </div>
</template>

<script>
const fs = require('fs');
// import * as fs from "fs";

let moment = require('jalali-moment');

export default {
  data() {
    return {
      today: moment().locale('fa').format('ddd') + ' - ' + moment().locale('fa').format('D MMMM YYYY'),
    }
  },
  methods: {
    handleSubmit() {
      let products = {
        title: 'test',
        id: 1004
      };

      fs.writeFile('http://192.168.88.93:8085/blog/allBlogs.json', JSON.stringify(products), (err) => {
        console.log(err);
      });

    }
  }
}
</script>
