<template>
  <div class="body">
    <div class="breadcrumb">
      <ul>
        <li><router-link to="/">خانه</router-link></li>
        <li>بلاگ</li>
      </ul>
    </div><!-- breadcrumb end -->
    <div id="blog">
      <div class="content">
        <div class="frame">
          <div class="has-clear-fix">
            <div class="main-blog">
              <div class="blog-listing">
                <ul>
                  <li  v-for="(item,index) in blogsList.slice().reverse()" :key="'A' + index">
                    <router-link :to="{name:'SpecificBlog',params:{id:item.id}}">
                      <img :src="require(`@/assets/images/blog/${item.img}`)" alt=""/>
                      <div class="static-layer">
                        <h4>{{item.title}}</h4>
                        <p>{{item.summaries}}</p>
                        <strong>مقاله</strong>
                        <span>{{ item.date }}</span>
                      </div><!-- static-layer end -->
                    </router-link>
                  </li>
                </ul>
              </div><!-- blog-listing end -->

            </div><!-- main-blog end -->
            <div class="side-blog">
              <div class="most-viewed">
                <h5>پربازدیدترین بلاگ ها</h5>
                <ul>
                  <li v-for="(item,index) in blogsList" :key="index">
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
      blogsList: [],
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
          })
          .catch((error) => {
            console.log(error);
          });
    },
  },
}
</script>

<style scoped>

</style>