<template>
  <div class="body">

    <div class="breadcrumb">
      <ul>
        <li><router-link to="/">خانه</router-link></li>
        <li>
          <router-link to="/services">سرویس ها</router-link>
        </li>
        <li>حمل و نقل ریلی</li>
      </ul>
    </div><!-- breadcrumb end -->

    <div id="tours">
      <div class="specific-banner"
           :style="{'background-image': 'url(' + require('@/assets/images/home/banner-4.jpg') + ')'}">
        <h1>حمل و نقل <strong>ریلی</strong></h1>
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
                    <i class="fal fa-boxes-alt"></i>
                    <span>حمل و نقل بارهای عظیم</span>
                  </li>
                  <li>
                    <i class="fal fa-money-check-alt"></i>
                    <span>ارزان ترین روش حمل و نقل</span>
                  </li>
                  <li>
                    <i class="fal fa-trees"></i>
                    <span>سازگار با محیط زیست</span>
                  </li>
                  <li>
                    <i class="fal fa-shield-check"></i>
                    <span>بالاترین میزان امنیت</span>
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
                      حمل و نقل بین المللی ریلی نیز یکی دیگر از روش‌های حمل‌ونقل زمینی بوده که علی‌رغم شباهت‌هایی که با روش جاده‌ای داشته، اما تفاوت‌هایی نیز دارند. قطارهای باری وسیله حمل کالا در روش ریلی هستند.
                    </p>
                    <p>
                      در ایران نیز ارتباط ریلی با برخی از کشورهای همسایه برقرار شده و انتظار می‌رود که این ارتباط در آینده بیشتر گسترش یابد. از طریق ارتباط ریلی با برخی از کشورهای همسایه می‌توان به بسیاری دیگر از کشورها و بازارهای دیگر دسترسی داشت.
                    </p>
                    <p>
                      از روش ریلی در ایران بیشتر برای برخی از کشورها از جمله کشورهای اوراسیا و ترکیه استفاده می‌شود.
                    </p>
                    <h6>مزایای حمل و نقل ریلی:</h6>
                    <p>از مزایای این نوع ارسال می توان به موارد زیر اشاره کرد.</p>
                    <ol class="tick-bullet has-top-margin">
                      <li>تصادفات در این روش بسیار کم و امنیت بالایی دارد.</li>
                      <li>هزینه حمل نسبت به روش هوایی و بعضاً دریایی پایین‌تر است.</li>
                      <li>برای حمل برخی کالاها مانند مواد معدنی بهترین روش است.</li>
                      <li>مشکلات آب‌وهوایی چندان تأثیری در روش ریلی ندارد.</li>
                    </ol>
                    <h6>معایب حمل و نقل ریلی:</h6>
                    <ol class="tick-bullet has-top-margin">
                      <li>هر کالایی را نمی‌توان به روش ریلی صادر کرد.</li>
                      <li>حمل‌ونقل ریلی برای بسیاری از کشورها امکان‌پذیر نیست.</li>
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
                      <a href="#">حمل و نقل ریلی</a>
                      <a href="#">به صرفه ترین روش حمل و نقل کالا</a>
                      <a href="#">ایمن ترین روش حمل و نقل کالا</a>
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