<template>
  <div class="header">

    <router-link class="logo" to="/">
      <img :src="require(`@/assets/images/logo.png`)" alt=""/>
    </router-link>

    <div class="top-header">

      <div class="navigation">
        <nav>
          <ul>
            <li>
              <router-link to="/">خانه</router-link>
            </li>
            <li>
              <router-link to="/services">سرویس ها</router-link>
            </li>
            <li>
              <router-link to="/contact">تماس با ما</router-link>
            </li>
            <li>
              <router-link to="/about">درباره ما</router-link>
            </li>
            <li>
              <router-link to="/blog">مقالات</router-link>
            </li>
          </ul>
        </nav>
      </div><!-- navigation end -->

      <div class="header-items">

        <ul>
          <li>
            <a class="nav-toggle" href="javascript:void(0)">
              <i class="far fa-bars"></i>
            </a><!-- nav-toggle end -->
          </li>
          <li>
            <a class="login" href="javascript:void(0)" @click="incoming()">
              <i class="fal fa-box-alt"></i>
              <span>پیگیری سفارشات</span>
            </a>
          </li>
        </ul>

      </div><!-- header-items end -->

    </div><!-- top-header end -->

  </div>
</template>

<script>
export default {
  methods: {
    incoming() {
      this.$moshaToast('این قسمت به زودی فعال خواهد شد',
          {
            type: 'info',
            timeout: 5000,
            position: 'top-right',
            transition: 'slide',
            swipeClose: 'true',
            showIcon: 'true',
          })
    }
  },
  mounted() {
    const recaptchaScript = document.createElement("script");
    recaptchaScript.setAttribute(
        "src",
        "/js/jquery.min.js"
    );
    document.head.appendChild(recaptchaScript);
    const recaptchaScript2 = document.createElement("script");
    recaptchaScript2.setAttribute(
        "src",
        "/js/core.plugins.js"
    );
    document.head.appendChild(recaptchaScript2);
    setTimeout(() => {
      const recaptchaScript3 = document.createElement("script");
      recaptchaScript3.setAttribute(
          "src",
          "/js/icons.js"
      );
      document.head.appendChild(recaptchaScript3);

      // const recaptchaScript5 = document.createElement("script");
      // recaptchaScript5.setAttribute(
      //     "src",
      //     "/js/jquery.scrollme.js"
      // );
      // document.head.appendChild(recaptchaScript5);

    }, 100);
    setTimeout(() => {
      const recaptchaScript6 = document.createElement("script");
      recaptchaScript6.setAttribute(
          "src",
          "/js/project.js"
      );
      document.head.appendChild(recaptchaScript6);
    }, 800);
  }
}
</script>

