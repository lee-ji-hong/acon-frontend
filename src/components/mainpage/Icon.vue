<template>
  <div class="icon-page" data-test="icon-page">
    <div class="icon-page-wrapper">
      <!-- 1-start -->
      <li class="icon-list" v-for="category in categorys" :key="category.category_id">
        <div class="icon-border" data-test="clickIcon" @click="clickIcon">
          <div class="icon-image-wrapper">
            <div class="icon-image">
              <span class="icon-image-span">
                <html data-test="icon-image" v-html="category.image"></html>
              </span>
            </div>
          </div>
        </div>
        <div class="icon-text" data-test="icon-name">{{ category.name }}</div>
      </li>
      <!-- 1-end -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Icon',
  data() {
    return {
      categorys: [
        {
          category_id: 'c1',
          name: '판타지/중세',
          image: '<img src="https://www.acon3d.com/icons/category/main/fantasy.png" />',
        },
        {
          category_id: 'c2',
          name: '동양/사극/무협',
          image: '<img src="https://www.acon3d.com/icons/category/main/eastern.png" />',
        },
        {
          category_id: 'c3',
          name: 'SF/아포칼립스',
          image: '<img src="	https://www.acon3d.com/icons/category/main/sf.png" />',
        },
        {
          category_id: 'c4',
          name: '느와르/범죄/재벌',
          image: '<img src="https://www.acon3d.com/icons/category/main/noir.png" />',
        },
        {
          category_id: 'c5',
          name: '일상/현대물',
          image: '<img src="https://www.acon3d.com/icons/category/main/modern.png" />',
        },
        {
          category_id: 'c6',
          name: '엑스트라/소재',
          image: '<img src="https://www.acon3d.com/icons/category/main/extra.png" />',
        },
      ],
    };
  },
  methods: {
    clickIcon() {
      alert('동작하지 않는 버튼입니다');
    },
  },
};
</script>

<style scope>
.icon-page {
  width: 900px;
  margin: 56px auto 0px;
}
.icon-page-wrapper {
  margin: 64px 0px 64px;
  display: flex;
  justify-content: space-between;
}
.icon-list {
  text-align: center;
  cursor: pointer;
}
.icon-border {
  width: 64px;
  height: 64px;
  border: 1px solid rgb(238, 238, 238);
  border-radius: 12.4444px;
  background-color: rgb(246, 246, 251);
  margin: 0px auto;
  box-shadow: rgb(234 234 234) 0px 1px 1px;
  transition: all 0.15s ease 0s;
  position: relative;
}
.icon-border:hover {
  background-color: rgb(255, 226, 255);
  border: 1px solid rgb(255, 179, 247);
}
.icon-image-wrapper {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 80%;
  position: absolute !important;
}
.icon-image {
  width: 100%;
  height: 100%;
  position: relative;
  display: block;
  margin-left: 0px;
}
.icon-image-span {
  box-sizing: border-box;
  display: block;
  overflow: hidden;
  width: initial;
  height: initial;
  background: none;
  opacity: 1;
  border: 0px;
  margin: 0px;
  padding: 0px;
  position: absolute;
  inset: 0px;
}
.icon-image-span img {
  position: absolute;
  inset: 0px;
  box-sizing: border-box;
  padding: 0px;
  border: none;
  margin: auto;
  display: block;
  width: 0px;
  height: 0px;
  min-width: 100%;
  max-width: 100%;
  min-height: 100%;
  max-height: 100%;
}
.icon-text {
  font-size: 13px;
  letter-spacing: -0.02em;
  margin-top: 12px;
  color: rgb(51, 51, 51);
}
</style>
