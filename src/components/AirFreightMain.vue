<template>
  <div class="body">

    <div class="breadcrumb">
      <ul>
        <li><router-link to="/">خانه</router-link></li>
        <li>
          <router-link to="/services">سرویس ها</router-link>
        </li>
        <li>حمل و نقل هوایی</li>
      </ul>
    </div><!-- breadcrumb end -->

    <div id="tours">
      <div class="specific-banner"
           :style="{'background-image': 'url(' + require('@/assets/images/home/banner-3.jpg') + ')'}">
        <h1>حمل و نقل <strong>هوایی</strong></h1>
      </div><!-- specific-banner end -->

      <div class="content">
        <div class="frame">

          <div class="specific-tour has-clear-fix has-large-y-padding">

            <div class="specific-tour-main">
              <div class="tour-images">

              </div><!-- tour-images end -->
              <div class="tour-icons">
                <ul>
                  <li class="active">
                    <i class="fal fa-globe"></i>
                    <span>نمایندگانی در سرتاسر جهان</span>
                  </li>
                  <li>
                    <i class="fal fa-plane-alt"></i>
                    <span>سریع ترین روش</span>
                  </li>
                  <li>
                    <i class="fal fa-shield-alt"></i>
                    <span>کمترین میزان آسیب و دزدی</span>
                  </li>
                  <li>
                    <i class="fal fa-location-arrow"></i>
                    <span>ردیابی آسان</span>
                  </li>
                  <li>
                    <i class="fal fa-shield-check"></i>
                    <span>ایمن ترین شیوه</span>
                  </li>
                </ul>
              </div><!-- tour-icons end -->
              <div class="tour-section">
                <div class="inner-tour-title">
                  <h4>توضیحات</h4>
                </div><!-- inner-tour-title end -->
                <div class="inner-tour-content">
                  <div class="tour-description">
                    <p style="padding: 0">
                      این شیوه حمل کالا بیشتر برای محمولات اورژانسی که با کمبود زمان روبرو هستند و یا ارزش کالایی آنها بسیار بالاست استفاده می‌شود. حمل هوایی برای حجم کالا به مانند وزن آن محدودیت‌هایی دارد.
                    </p>
                    <p>
                      در این روش حمل کانتینر‌های هوایی با اشکال مخصوص بدنه هواپیمای باربری تهیه شده اند و استفاده می‌شوند. ارزش فضا هر متر مکعب در هواپیما برابر ارزش 160 کیلوگرم است.
                    </p>
                    <p>
                      بنابراین در صورتی که کالای شما یک لیتر باشد و 160 کیلو وزن داشته باشد و یا بر عکس یک متر مکعب حجم داشته باشد و 1 کیلو وزن در هر دوصورت کالای شما بر اساس یک مترمکعب با 160 کیلوگرم نرخ گذاری می‌شود.
                    </p>
                    <p>
                      روش نرخ دهی در کالای هوایی به واسطه تعدد محمولات خرد به صورت پلکانی است. به عنوان مثال محمولات زیر 40 کیلوگرم همگی 40 کیلو در نظر گرفته خواهند شد.
                    </p>
                    <h6>مزایای حمل و نقل هوایی:</h6>
                    <p>از مزایای این نوع ارسال می توان به موارد زیر اشاره کرد.</p>
                    <ol class="tick-bullet has-top-margin">
                      <li>امنیت بالا؛ حمل‌ونقل هوایی نسبت به انواع دیگر با مخاطرات کمتری مواجه است و ایمن‌تر است.</li>
                      <li>سرعت جابجایی بالا؛ حمل‌ونقل هوایی، با سرعت بسیار بالاتری نسبت به انواع دیگر صورت می‌گیرد.</li>
                      <li>امکان انتقال طیف وسیع کالا؛ حمل و نقل هوایی کالا سریع‌ترین حالت ممکن برای انتقال محصولات و مسافران است و دارای امنیت بالایی نیز است.</li>
                    </ol>
                    <h6>معایب حمل و نقل هوایی:</h6>
                    <ol class="tick-bullet has-top-margin">
                      <li>هزینه بالا نسبت به سایر روش‌ها؛ همان‌طور که می‌دانید هزینه حمل‌ونقل هوایی نسبت به انواع دیگر بسیار گران‌تر است.</li>
                      <li>امکان بروز تأخیر در پروازها</li>
                      <li>عدم وجود فرودگاه در همه نقاط مبدأ و مقصد</li>
                    </ol>
                  </div><!-- tour-description end -->
                </div><!-- inner-tour-content end -->
              </div><!-- tour-section end -->
              <div class="tour-section">
                <div class="inner-tour-title">
                  <h4>تگ های مربوط</h4>
                </div><!-- inner-tour-title end -->
                <div class="inner-tour-content">
                  <div class="tour-tags">
                    <div class="web-tags">
                      <a href="#">بار ایران</a>
                      <a href="#">سریع ترین روش حمل و نقل</a>
                      <a href="#">ایمن ترین شیوه جا به جایی کالا</a>
                      <a href="#">حمل و نقل هوایی</a>
                    </div><!-- web-tags end -->
                  </div><!-- tour-tags end -->
                </div><!-- inner-tour-content end -->
              </div><!-- tour-section end -->
            </div><!-- specific-tour-main end -->

            <div class="specific-tour-side">
              <div class="booking-box">
                <h4>- سرویس های دیگر -</h4>
                <div class="booking-box-inner">
                  <div class="most-viewed">
                    <ul>
                      <li>
                        <h6>
                          <router-link to="/railFreight">
                            <i class="fal fa-train"></i>
                            حمل و نقل ریلی
                          </router-link>
                        </h6>
                      </li>
                      <li>
                        <h6>
                          <router-link to="/seaFreight">
                            <i class="fal fa-ship"></i>
                            حمل و نقل دریایی
                          </router-link>
                        </h6>
                      </li>
                      <li>
                        <h6>
                          <router-link to="/groundFreight">
                            <i class="fal fa-truck"></i>
                            حمل و نقل جاده ای
                          </router-link>
                        </h6>
                      </li>
                    </ul>
                  </div><!-- most-viewed end -->
                </div><!-- booking-box-inner end -->
              </div><!-- booking-box end -->
              <a href="tel:+982188106436" class="book-by-phone">
                <i class="fal fa-phone-volume"></i>
                <span>درخواست خدمات از طریق <b>تلفن</b></span>
                <strong>+98 21 88106436</strong>
                <i>شنبه تا پنج شنبه از ساعت 9 صبح تا 9 شب</i>
              </a><!-- book-by-phone end -->
            </div><!-- specific-tour-side end -->
          </div><!-- specific-tour end -->

        </div><!-- frame end -->
      </div><!-- content end -->
    </div><!-- tours end -->

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>