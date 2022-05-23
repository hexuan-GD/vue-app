<template>
  <div class="about">
    <s-header :name="'关于我们'"></s-header>
    <div class="about-body">
      <van-divider
        :style="{
          color: '#1baeae',
          borderColor: '#1baeae',
          fontSize: '20px',
          fontWeight: 500,
        }"
        >简介</van-divider
      >
      <div>
        mall-vue
        商城系统包含首页门户、商品分类、新品上线、首页轮播、商品推荐、商品搜索、商品展示、购物车、订单结算、订单流程、个人订单管理、会员中心、帮助中心等模块。
      </div>
      <van-divider
        :style="{
          color: '#1baeae',
          borderColor: '#1baeae',
          fontSize: '20px',
          fontWeight: 500,
        }"
        >地址</van-divider
      >
    </div>
  </div>
</template>

<script>
import sHeader from "@/components/SimpleHeader";
export default {
  components: {
    sHeader,
  },
};
</script>

<style lang="less" scoped>
.about {
  box-sizing: border-box;
  padding: 20px;
  .about-body {
    margin-top: 44px;
    font-size: 16px;
    a {
      color: #007fff;
    }
  }
}
</style>
