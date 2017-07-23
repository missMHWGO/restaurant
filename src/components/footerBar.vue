<template>
  <div id="footer-bar">
    <router-link :to="item.links" class="tabbar-item" v-for="(index, item) in tabbarItems" :key="index">
      <div class="item-icon">
        <icon :name="item.icon"></icon>
      </div>
      <span class="label">{{ item.label }}</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'footer-bar',
  data () {
    return {
      tabbarItems: [
        { icon: 'university', label: '口味', links: '/main/flavor' },
        { icon: 'star', label: '推荐', links: '/main/recommend' },
        { icon: 'user', label: '我的', links: '/main/my' }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
#footer-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 70px;
  box-shadow: 0 -1px 1px #e0e0e0;

  .tabbar-item {
    display: block;
    text-decoration: none;
    color: #808080;
    width: 33.3%;
    height: 100%;
    position: relative;
    float: left;

    .item-icon {
      text-align: center;
      padding-top: 8px;
      svg {
        width: 28px;
        height: 28px;
      }
    }

    .label {
      font-size: 16px;
    }
  }
}
</style>
