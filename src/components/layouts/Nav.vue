<template>
  <!-- nav-start -->
  <nav class="bottom-header-wrapper" data-test="Nav">
    <ul class="bottom-header-wrapper-inner">
      <li>카테고리</li>
      <li>이벤트</li>
      <li>베스트</li>
      <li>신작</li>
      <li>혜택관</li>
      <li>우주최저가</li>
      <li>즐기기</li>
      <li>제작의뢰</li>
      <li>입점신청</li>
    </ul>
  </nav>
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
