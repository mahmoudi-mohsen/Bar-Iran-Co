<template>
  <div class="body">

    <div class="breadcrumb">
      <ul>
        <li><router-link to="/">خانه</router-link></li>
        <li>
          <router-link to="/services">سرویس ها</router-link>
        </li>
        <li>حمل و نقل زمینی</li>
      </ul>
    </div><!-- breadcrumb end -->

    <div id="tours">
      <div class="specific-banner"
           :style="{'background-image': 'url(' + require('@/assets/images/home/banner-2.jpg') + ')'}">
        <h1>حمل و نقل <strong>جاده ای</strong></h1>
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
                    <i class="fal fa-truck"></i>
                    <span>کامیون فول (FTL)</span>
                  </li>
                  <li>
                    <i class="fal fa-truck-container"></i>
                    <span>کامیون گروپاژ (LTL)</span>
                  </li>
                  <li>
                    <i class="fal fa-truck-moving"></i>
                    <span>سرویس کامیون یخچالی</span>
                  </li>
                  <li>
                    <i class="fal fa-clipboard"></i>
                    <span>انجام امور گمرکی در مبدا</span>
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
                      باربری جاده ای به وسیله کامیون های استاندارد و ایمن کم ترین لرزش و نوسان را به محموله وارد می کند.
                      از این رو برای کالاهایی که آسیب پذیری و حساسیت بالایی دارند بسیار مناسب می باشد. از طرفی سرعت
                      ارسال کالا در این نوع حمل و نقل بار از چشم گیری خاص خود برخوردار است.
                    </p>
                    <p>
                      شیوه حمل جاده ای محمولات به وسیله کامیون‌ها و تریلی‌های کفی و چادری در ناوگان زمینی
                      امری کاملاً رایج و مرسوم است، سالیان سال است که عمده محمولات کشورمان از مبدأ
                      ترکیه و اروپا و به مقصد عراق و افغانستان و کشور‌های مستقل همسود (CIS) از این روش استفاده می‌کنند.
                    </p>
                    <p>
                      از مزایای این روش عدم نیاز به تخلیه و بارگیری مجزا در بندر و یا تخلیه و بارگیری به وسیله
                      جرثقیل‌های بندر و خطرات ناشی از طوفان و باران‌ها در حمل دریایی است. البته در این روش حمل معمولاً
                      زمان بسیار مناسب‌تر از حمل دریایی خواهد بود.
                    </p>
                    <p>
                      دسترسی برای حمل و نقل دریایی به همه نقاط مقدور نیست بسیار از کشور‌ها هیچ راهی به مرز‌های آبی
                      ندارند و یا اگر هم دارند مسیر آبی مستلزم دور زدن دنیاست. حمل زمینی راه حل مناسب و امن برای اکثر
                      محمولات است.
                    </p>
                    <p>
                      ارزش کالاها در این روش از حمل دریایی بالاتر و کرایه حمل‌های نیز بالاتر است. این روش حمل در حالت
                      تریلری خود به صورت FTL و LTL یا خرده بار است که در این حالات زمان حمل افزایش یافته و محموله باید
                      در انبار فورواردر در مبدأ COORDINATE شود.
                    </p>
                    <h6>مزایای حمل و نقل جاده ای:</h6>
                    <p>از مزایای این نوع ارسال می توان به موارد زیر اشاره کرد.</p>
                    <ol class="tick-bullet has-top-margin">
                      <li>لرزش و نوسان کم</li>
                      <li>سلامت محموله</li>
                      <li>ارسال سریع</li>
                    </ol>
                    <h6>معایب حمل و نقل جاده ای:</h6>
                    <ol class="tick-bullet has-top-margin">
                      <li>زمان‌بر بودن در مقایسه با دیگر روش‌ها</li>
                      <li>مکان آسیب دیدن کالاها که ممکن است به علت زمان بیشتر جابجایی و نوع جابجایی است.</li>
                      <li>مقررات مختلف در کشورهای متفاوت که این مساله در حمل‌ونقل بین‌المللی بسیار چالش‌برانگیز می‌تواند باشد.</li>
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
                      <a href="#">حمل و نقل جاده ای</a>
                      <a href="#">کامیون گروپاژ (LTL)</a>
                      <a href="#">کامیون فول (FTL)</a>
                      <a href="#">کامیون یخچالی</a>
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
                          <router-link to="/seaFreight">
                            <i class="fal fa-ship"></i>
                           حمل و نقل دریایی
                          </router-link>
                        </h6>
                      </li>
                      <li>
                        <h6>
                          <router-link to="/airFreight">
                            <i class="fal fa-plane-departure"></i>
                           حمل و نقل هوایی
                          </router-link>
                        </h6>
                      </li>
                      <li>
                        <h6>
                          <router-link to="/railFreight">
                            <i class="fal fa-train"></i>
                           حمل و نقل ریلی
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