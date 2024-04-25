<template>
  <div class="body">

    <div class="breadcrumb">
      <ul>
        <li>
          <router-link to="/">خانه</router-link>
        </li>
        <li>
          <router-link to="/blog">بلاگ</router-link>
        </li>
        <li>{{ blog.title }}</li>
      </ul>
    </div><!-- breadcrumb end -->

    <div id="blog">
      <div class="content">
        <div class="frame">
          <div class="has-clear-fix">
            <div class="main-blog">
              <strong class="blog-date">{{ blog.date }}</strong>
              <div class="static-content">
                <img v-if="blog.img" :src="require(`@/assets/images/blog/${blog.img}`)" alt=""/>
                <h2>{{ blog.title }}</h2>
                <p>{{ blog.summaries }}</p>
                <div v-for="(item,index) in blog.para" :key="index">
                  <h3>{{ item.paraTitle }}</h3>
                  <p>{{ item.paraContent }}</p>
                  <ul>
                    <li v-for="(list,index) in item.paraList" :key="'A' + index">{{ list.listContent }}</li>
                  </ul>
                  <img v-if="item.img" :src="require(`@/assets/images/blog/${item.img}`)" alt=""/>
                </div>
              </div><!-- static-content end -->

            </div><!-- main-blog end -->
            <div class="side-blog">
              <div class="most-viewed">
                <h5>آخرین مقالات</h5>
                <ul>
                  <li v-for="(item,index) in blogsList.slice().reverse()" :key="index">
                    <h6>
                      <router-link :to="{name:'SpecificBlog',params:{id:item.id}}">
                        {{ item.title }}
                      </router-link>
                    </h6>
                    <strong>مقاله</strong>
                    <span>{{ item.date }}</span>
                  </li>
                </ul>
              </div><!-- most-viewed end -->
            </div><!-- side-blog end -->
          </div><!-- has-clear-fix end -->
        </div><!-- frame end -->
      </div><!-- content end -->
    </div><!-- blog end -->

  </div>
</template>

<script>
import SERVER from "@/server";

export default {
  data() {
    return {
      blog: {},
      blogsList: []
    }
  },
  created() {
    this.blogs();
  },
  methods: {
    blogs() {
      SERVER.blogs()
          .then((result) => {
            this.blogsList = result.data.data;
            let blog = result.data.data;
            for (let i = 0; i < blog.length; i++) {
              if (Number(this.$route.params.id) === blog[i].id) {
                this.blog = blog[i]
              }
            }
          })
          .catch((error) => {
            console.log(error);
          });
    },
  },
  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
        this.blogs();
      }
    },
  }
}
</script>

<style scoped>
p {
  text-align: justify;
}

.static-content ul, .static-content ol {
  margin-top: 8px;
}

.static-content p {
  padding-top: 4px !important;
}
.main-blog .static-content img {
  margin: 0 auto 30px auto !important;
}
li{
  text-align: justify;
}
</style>