<template>
  <!-- header-start -->
  <header class="header">
    <!-- mid-header-start -->
    <div class="mid-header-wrapper">
      <div class="mid-header-wrapper-inner">
        <div class="mid-header-left">
          <div style="margin-right: 10px"><h2 style="line-height: 0">Acon</h2></div>
          <div class="mid-header-left-search">
            <div class="mid-header-left-search-text">검색어를 입력해주세요.</div>
            <input />
            <div><img src="	https://www.acon3d.com/_next/image?url=%2Ficons%2Fmagnifying-glass-icon.svg&w=16&q=75" /></div>
          </div>
        </div>
        <nav class="mid-header-right">
          <div class="mid-header-right-wrapper">
            <div><a>에이콘3D 소개</a></div>
            <div><a>로그인</a></div>
            <div>/</div>
            <div><a>회원가입</a></div>
          </div>
        </nav>
      </div>
    </div>
    <!-- mid-header-end -->

    <!-- bottom-header-start -->
    <div class="bottom-header-wrapper">
      <div class="bottom-header-wrapper-inner">
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
    <!-- bottom-header-end -->
  </header>
  <!-- header-end -->
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style>
.header {
  /* background: linear-gradient(15deg, #ee9ca7, #ffdde1); */
  background-color: white;
}
.header h2 {
  color: black;
}
.header p {
  font-size: 12px;
  color: black;
}

/* ***************************/
/* mid-header               * /
/* ***************************/
.mid-header-wrapper {
  background: linear-gradient(15deg, #ee9ca7, #ffdde1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 92px;
  position: initial;
  padding: 0 3em;
}
.mid-header-left {
  display: flex;
  justify-content: center;
  align-items: center;
}
.mid-header-wrapper-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.mid-header-left-search {
  background-color: rgb(245, 245, 251);
  border: 1px solid rgb(240, 240, 240);
  padding: 0px 20px;
  border-radius: 17px;
  height: 34px;
  width: 380px;
  position: relative;
  text-align: left;
  justify-content: space-between;
  display: flex;
  align-items: center;
}
.mid-header-left-search-text {
  pointer-events: none;
  position: absolute;
  font-size: 12px;
  color: rgb(124, 124, 124);
  line-height: 100%;
  top: 10px;
  padding-top: 1px;
}
.mid-header-left-search input {
  flex: 1 1 0%;
  margin-right: 20px;
  background-color: transparent;
  line-height: 100%;
  border: 0px;
  font-size: 14px;
  padding: 0px;
  height: 100%;
  width: 100%;
  color: rgb(0, 0, 0);
}
.mid-header-left-search img {
  display: inline-block;
  max-width: 100%;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
  margin: 0;
}
.mid-header-right-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
}
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
