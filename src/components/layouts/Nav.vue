<template>
  <!-- nav-start -->
  <div class="bottom-header-wrapper" data-test="Nav">
    <div class="bottom-header-wrapper-inner" data-test="nav-category">
      <div><a>카테고리</a></div>
      <div><a>이벤트</a></div>
      <div><a>베스트</a></div>
      <div><a>신작</a></div>
      <div><a>혜택관</a></div>
      <div><a>우주최저가</a></div>
      <div><a>즐기기</a></div>
      <div><a>제작의뢰</a></div>
      <div><a>입점신청</a></div>
    </div>
  </div>
  <!-- nav-end -->
</template>

<script>
export default {
  name: 'Nav',
};
</script>

<style scope>
/* ******************/
/* bottom-header * /
/* ******************/
.bottom-header-wrapper {
  width: 100%;
  /* height: 36px; */
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  z-index: 11;
  box-sizing: border-box;
  background-color: white;
  border-bottom: 1px solid rgb(227, 227, 227);
  padding: 0 3em;
}
.bottom-header-wrapper-inner {
  -webkit-box-pack: justify;
  justify-content: space-between;
  align-items: flex-start;
  text-align: center;
  width: 100%;
  display: flex;
  flex-direction: row;
  font-weight: 600;
  padding: 10px 0;
  margin: 15px 0;
}
</style>
