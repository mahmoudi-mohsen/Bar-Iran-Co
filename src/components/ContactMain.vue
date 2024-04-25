<template>
  <div class="body">
    <div class="breadcrumb">
      <ul>
        <li>
          <router-link to="/">خانه</router-link>
        </li>
        <li>تماس با ما</li>
      </ul>
    </div><!-- breadcrumb end -->
    <div id="static">
      <div class="content">
        <div class="frame">
          <div class="main-content has-clear-fix has-large-top-margin">
            <div class="static-sidebar">
              <ul>
                <li>
                  <router-link to="/about">درباره ما</router-link>
                </li>
                <li>
                  <router-link to="/termsConditions">شرایط و قوانین</router-link>
                </li>
                <li>
                  <router-link to="/faq">سوالات متداول</router-link>
                </li>
                <li class="active">
                  <router-link to="/contact">تماس با ما</router-link>
                </li>
              </ul>
            </div><!-- static-sidebar end -->
            <div class="static-main">
              <div class="contact">
                <a href="https://goo.gl/maps/9buUkb1pGFHhrCtw6" target="_blank" class="contact-map">
                  <img :src="require(`@/assets/images/static/gmap.png`)" alt=""/>
                </a>
                <div class="contact-box">
                  <h2 class="font-type-default site-color">تماس با ما</h2>
                  <p class="limited">شما می توانید از طریق شماره تلفن، فکس و ایمیل با ما در تماس باشید.</p>
                  <div class="contact-info has-clear-fix">
                    <address>تهران، خیابان وزرا کوچه بیست و یکم پلاک ۴ واحد ۲ و ۳</address>
                    <a href="tel:+982188106436"><i class="fal fa-phone"></i> <span class="inline-block-display reverse-direction">021 88106436</span></a>
                    <a href="tel:+982191035978"><i class="fal fa-phone"></i> <span class="inline-block-display reverse-direction">021 91035978</span></a>
                    <a href="javascript:void(0)"> <span class="inline-block-display reverse-direction">فکس: 02188108920</span></a>
                    <a href="#"><i class="fal fa-envelope-open"></i> <span
                        class="inline-block-display reverse-direction">info@iranbar.com</span></a>
                  </div><!-- contact-info end -->
                </div><!-- contact-box end -->
              </div><!-- contact end -->
            </div><!-- static-main end -->
          </div><!-- main-content end -->
        </div><!-- frame end -->
      </div><!-- content end -->
    </div><!-- static end -->
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>