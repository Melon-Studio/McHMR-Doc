<template>
  <div style="width: 640px; height: 215px; display: flex; flex-direction: column;" background="#000000" class="afadian">
    <img style="height: 133px; object-fit: cover;"
      src="https://pic1.afdiancdn.com/user/1ab631ea2ec111ea856452540025c377/common/6d003f33f9b68a4873a2f6d1268dc525_w1440_h360_s94.png?imageView2/1/w/625/h/160"
      alt="爱发电宣传图" />
    <div
      style="height: 88px; display: flex; flex-direction: row; background-color: white; color: black; padding: 10px; overflow: hidden; border-radius: 0 0 10px 10px;">
      <div class="cover" style="height: 68px; width: 68px; padding: 10px; margin-left: 1px">
        <img style="width: 40px; height: 40px;"
          src="https://pic1.afdiancdn.com/user/1ab631ea2ec111ea856452540025c377/avatar/f768b095ba3ebfccad5b50b54197cb3b_w224_h224_s3.jpg?imageView2/1/w/120/h/120"
          alt="cover" />
      </div>
      <div class="item_content" style="height: 68px; padding: 10px; width: 330px;">
        <p style="font-size: 16px; font-weight: 600; margin: 0; line-height: 18px;">Melon Studio</p>
        <p style="font-size: 14px; margin: 0;">正在创作 Minecraft 服务器客户端热更新解决方案</p>
      </div>
      <div style="height: 68px; width: 220px; display: flex; flex-direction: row-reverse;">
        <a class="afd_link"
          href="https://afdian.com/a/Melon_Studio?utm_source=https://doc.dooper.top/sponsors.html">赞助</a>
      </div>
    </div>
  </div>
  <div class="sponsors_outer">
    <h2>❤ 赞助名单 ❤</h2>
    <div style="display: flex; flex-direction: column; align-items: center">
      <div class="demo-fit">
        <div v-for="fit in fits" :key="fit.user.name" class="block">
          <el-avatar shape="square" class="avatar" fit="fill" :src="fit.user.avatar" />
          <span class="title">{{ fit.user.name }}</span>
        </div>
      </div>
      <el-pagination small background class="pagination" :current-page="page" layout="prev, pager, next"
        :page-count="maxTotal" @current-change="pageChange($event)" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ElAvatar, ElPagination } from 'element-plus'
import { ref } from 'vue'
import axios from 'axios'

interface FitData {
  user: {
    name: string;
    avatar: string;
  };
}

const fits = ref<FitData[] | null>(null);
const page = ref(1);
const maxTotal = ref(1);
axios.get("https://api.dooper.top/afdian/sponsors?pageNo=" + page.value).then(res => {
  fits.value = res.data.data.data.list;
  maxTotal.value = res.data.data.data.total_page;
});

const pageChange = (event: number) => {
  page.value = event
  axios.get("https://api.dooper.top/afdian/sponsors?pageNo=" + page.value).then(res => {
    fits.value = res.data.data.data;
    maxTotal.value = res.data.data.data.total_page;
  });
}
</script>

<style scoped>
.sponsors_outer {
  text-align: center;
  padding: 35px 40px 45px;
  background-color: var(--vp-c-bg-accent);
  /* transition when toggling dark mode */
  transition: background-color 300ms ease-in-out, color 300ms ease-in-out;
}

.afadian {
  border: 1px solid #ffffff11;
  border-radius: 10px;
  margin: 0 auto;
}

.sponsors_title {
  font-size: 20px;
  font-weight: 800;
}

.demo-fit {
  display: flex;
  text-align: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  max-width: 840px;
}

.demo-fit .block {
  flex: 1;
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  margin: 10px 10px 0px 10px;
}

.demo-fit .title {
  font-size: 14px;
  color: var(--el-text-color-secondary);
  width: 100px;
  height: 48px;
  display: flex;
  justify-content: center;
  line-height: 16px;
  margin-top: 4px;
}

.block .avatar {
  width: 100px;
  height: 100px;
  border-radius: 5px;
}

.avatar {
  width: 100px;
  height: 100px;
}

.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
}

.el-pager {
  padding: 0 !important;
}

.vm-avatar.flex-box.lhi.flex-wrap.wh48.p16 {
  width: 60px;
}

.afd_link {
  display: inline-block;
  color: white !important;
  text-decoration: none;
  background-color: #946CE6;
  width: 100px;
  height: 35px;
  text-align: center;
  line-height: 35px;
  font-size: 14px;
  border-radius: 5px;
  margin: 10px;
}

.el-pagination{--el-pagination-font-size:14px;--el-pagination-bg-color:var(--el-fill-color-blank);--el-pagination-text-color:var(--el-text-color-primary);--el-pagination-border-radius:2px;--el-pagination-button-color:var(--el-text-color-primary);--el-pagination-button-width:32px;--el-pagination-button-height:32px;--el-pagination-button-disabled-color:var(--el-text-color-placeholder);--el-pagination-button-disabled-bg-color:var(--el-fill-color-blank);--el-pagination-button-bg-color:var(--el-fill-color);--el-pagination-hover-color:var(--el-color-primary);--el-pagination-font-size-small:12px;--el-pagination-button-width-small:24px;--el-pagination-button-height-small:24px;--el-pagination-item-gap:16px;white-space:nowrap;color:var(--el-pagination-text-color);font-size:var(--el-pagination-font-size);font-weight:400;display:flex;align-items:center}.el-pagination .el-input__inner{text-align:center;-moz-appearance:textfield}.el-pagination .el-select{width:128px}.el-pagination button{display:flex;justify-content:center;align-items:center;font-size:var(--el-pagination-font-size);min-width:var(--el-pagination-button-width);height:var(--el-pagination-button-height);line-height:var(--el-pagination-button-height);color:var(--el-pagination-button-color);background:var(--el-pagination-bg-color);padding:0 4px;border:none;border-radius:var(--el-pagination-border-radius);cursor:pointer;text-align:center;box-sizing:border-box}.el-pagination button *{pointer-events:none}.el-pagination button:focus{outline:0}.el-pagination button:hover{color:var(--el-pagination-hover-color)}.el-pagination button.is-active{color:var(--el-pagination-hover-color);cursor:default;font-weight:700}.el-pagination button.is-active.is-disabled{font-weight:700;color:var(--el-text-color-secondary)}.el-pagination button.is-disabled,.el-pagination button:disabled{color:var(--el-pagination-button-disabled-color);background-color:var(--el-pagination-button-disabled-bg-color);cursor:not-allowed}.el-pagination button:focus-visible{outline:1px solid var(--el-pagination-hover-color);outline-offset:-1px}.el-pagination .btn-next .el-icon,.el-pagination .btn-prev .el-icon{display:block;font-size:12px;font-weight:700;width:inherit}.el-pagination>.is-first{margin-left:0!important}.el-pagination>.is-last{margin-right:0!important}.el-pagination .btn-prev{margin-left:var(--el-pagination-item-gap)}.el-pagination__sizes{margin-left:var(--el-pagination-item-gap);font-weight:400;color:var(--el-text-color-regular)}.el-pagination__total{margin-left:var(--el-pagination-item-gap);font-weight:400;color:var(--el-text-color-regular)}.el-pagination__total[disabled=true]{color:var(--el-text-color-placeholder)}.el-pagination__jump{display:flex;align-items:center;margin-left:var(--el-pagination-item-gap);font-weight:400;color:var(--el-text-color-regular)}.el-pagination__jump[disabled=true]{color:var(--el-text-color-placeholder)}.el-pagination__goto{margin-right:8px}.el-pagination__editor{text-align:center;box-sizing:border-box}.el-pagination__editor.el-input{width:56px}.el-pagination__editor .el-input__inner::-webkit-inner-spin-button,.el-pagination__editor .el-input__inner::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.el-pagination__classifier{margin-left:8px}.el-pagination__rightwrapper{flex:1;display:flex;align-items:center;justify-content:flex-end}.el-pagination.is-background .btn-next,.el-pagination.is-background .btn-prev,.el-pagination.is-background .el-pager li{margin:0 4px;background-color:var(--el-pagination-button-bg-color)}.el-pagination.is-background .btn-next.is-active,.el-pagination.is-background .btn-prev.is-active,.el-pagination.is-background .el-pager li.is-active{background-color:var(--el-color-primary);color:var(--el-color-white)}.el-pagination.is-background .btn-next.is-disabled,.el-pagination.is-background .btn-next:disabled,.el-pagination.is-background .btn-prev.is-disabled,.el-pagination.is-background .btn-prev:disabled,.el-pagination.is-background .el-pager li.is-disabled,.el-pagination.is-background .el-pager li:disabled{color:var(--el-text-color-placeholder);background-color:var(--el-disabled-bg-color)}.el-pagination.is-background .btn-next.is-disabled.is-active,.el-pagination.is-background .btn-next:disabled.is-active,.el-pagination.is-background .btn-prev.is-disabled.is-active,.el-pagination.is-background .btn-prev:disabled.is-active,.el-pagination.is-background .el-pager li.is-disabled.is-active,.el-pagination.is-background .el-pager li:disabled.is-active{color:var(--el-text-color-secondary);background-color:var(--el-fill-color-dark)}.el-pagination.is-background .btn-prev{margin-left:var(--el-pagination-item-gap)}.el-pagination--small .btn-next,.el-pagination--small .btn-prev,.el-pagination--small .el-pager li{height:var(--el-pagination-button-height-small);line-height:var(--el-pagination-button-height-small);font-size:var(--el-pagination-font-size-small);min-width:var(--el-pagination-button-width-small)}.el-pagination--small button,.el-pagination--small span:not([class*=suffix]){font-size:var(--el-pagination-font-size-small)}.el-pagination--small .el-select{width:100px}.el-pager{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;list-style:none;font-size:0;padding:0;margin:0;display:flex;align-items:center}.el-pager li{display:flex;justify-content:center;align-items:center;font-size:var(--el-pagination-font-size);min-width:var(--el-pagination-button-width);height:var(--el-pagination-button-height);line-height:var(--el-pagination-button-height);color:var(--el-pagination-button-color);background:var(--el-pagination-bg-color);padding:0 4px;border:none;border-radius:var(--el-pagination-border-radius);cursor:pointer;text-align:center;box-sizing:border-box}.el-pager li *{pointer-events:none}.el-pager li:focus{outline:0}.el-pager li:hover{color:var(--el-pagination-hover-color)}.el-pager li.is-active{color:var(--el-pagination-hover-color);cursor:default;font-weight:700}.el-pager li.is-active.is-disabled{font-weight:700;color:var(--el-text-color-secondary)}.el-pager li.is-disabled,.el-pager li:disabled{color:var(--el-pagination-button-disabled-color);background-color:var(--el-pagination-button-disabled-bg-color);cursor:not-allowed}.el-pager li:focus-visible{outline:1px solid var(--el-pagination-hover-color);outline-offset:-1px}
.el-avatar{--el-avatar-text-color:var(--el-color-white);--el-avatar-bg-color:var(--el-text-color-disabled);--el-avatar-text-size:14px;--el-avatar-icon-size:18px;--el-avatar-border-radius:var(--el-border-radius-base);--el-avatar-size-large:56px;--el-avatar-size:40px;--el-avatar-size-small:24px;--el-avatar-size:40px;display:inline-flex;justify-content:center;align-items:center;box-sizing:border-box;text-align:center;overflow:hidden;color:var(--el-avatar-text-color);background:var(--el-avatar-bg-color);width:var(--el-avatar-size);height:var(--el-avatar-size);font-size:var(--el-avatar-text-size)}.el-avatar>img{display:block;width:100%;height:100%}.el-avatar--circle{border-radius:50%}.el-avatar--square{border-radius:var(--el-avatar-border-radius)}.el-avatar--icon{font-size:var(--el-avatar-icon-size)}.el-avatar--small{--el-avatar-size:24px}.el-avatar--large{--el-avatar-size:56px}


</style>
