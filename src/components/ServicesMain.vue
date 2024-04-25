<template>
  <div class="body">

    <div class="breadcrumb">
      <ul>
        <li><router-link to="/">خانه</router-link></li>
        <li>سرویس ها</li>
      </ul>
    </div><!-- breadcrumb end -->

    <div class="page-banner">
      <img :src="require(`@/assets/images/home/services.jpg`)" alt="" style="max-height: 790px;width: 100%;object-fit: cover;">
    </div><!-- breadcrumb end -->

    <div id="tours">
      <div class="content">
        <div class="frame">
          <div class="center-aligned">
            <h2><i class="far fa-globe-americas"></i> سرویس های فعال</h2>
            <p>ما بهترین سرویس های حمل و نقل بین المللی را ارایه می دهیم.</p>
          </div><!-- center-aligned end -->
          <div class="tour-wrapper has-vlarge-top-margin">
            <router-link to="/seaFreight" class="related-tour">
              <img :src="require('@/assets/images/home/s1.png')" alt="" />
              <h4>حمل و نقل دریایی</h4>
              <div class="has-top-margin">
                <ul class="tick-bullet">
                  <li>حمل کانتینر به صورت دربست</li>
                  <li>حمل خرده بار</li>
                  <li>حمل بار فله</li>
                  <li>ایمن و به صرفه</li>
                </ul>
              </div><!-- has-top-margin end -->
            </router-link><!-- related-tour end -->

            <router-link to="/airFreight" class="related-tour">
              <img :src="require('@/assets/images/home/s2.png')" alt="" />
              <h4>حمل و نقل هوایی</h4>
              <div class="has-top-margin">
                <ul class="tick-bullet">
                  <li>سریع ترین روش حمل و نقل</li>
                  <li>کمترین میزان آسیب و دزدی</li>
                  <li>ردیابی آسان</li>
                  <li>ایمن ترین شیوه حمل و نقل</li>
                </ul>
              </div><!-- has-top-margin end -->
            </router-link><!-- related-tour end -->
            <router-link to="/railFreight" class="related-tour">
              <img :src="require('@/assets/images/home/s3.png')" alt="" />
              <h4>حمل و نقل ریلی</h4>
              <div class="has-top-margin">
                <ul class="tick-bullet">
                  <li>حمل و نقل بارهای عظیم</li>
                  <li>ارزان ترین روش حمل و نقل</li>
                  <li>سازگار با محیط زیست</li>
                  <li>مناسب ترین روش برای مواد معدنی</li>
                </ul>
              </div><!-- has-top-margin end -->
            </router-link><!-- related-tour end -->
            <router-link to="/groundFreight" class="related-tour">
              <img :src="require('@/assets/images/home/s4.png')" alt="" />
              <h4>حمل و نقل جاده ای</h4>
              <div class="has-top-margin">
                <ul class="tick-bullet">
                  <li>کامیون فول (FTL)</li>
                  <li>کامیون گروپاژ (LTL)</li>
                  <li>سرویس کامیون یخچالی</li>
                  <li>انجام امور گمرکی در مبدا</li>
                </ul>
              </div><!-- has-top-margin end -->
            </router-link><!-- related-tour end -->

          </div><!-- tour-wrapper end -->

        </div><!-- frame end -->
      </div><!-- content end -->
    </div><!-- tours end -->

  </div>
</template>

<script>
export default {
  name: "ServicesMain"
}
</script>

<style scoped>

</style>