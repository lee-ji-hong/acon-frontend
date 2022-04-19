import { flushPromises, mount } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router';
// import IntroPage from '@/views/Intro.vue';
import Header from '@/components/layouts/Header.vue';
import App from '@/App.vue';
import IntroRoute from '@/router/routes/intro';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [].concat(IntroRoute),
});

describe('Header', () => {
  const wrapper = mount(Header);
  it('renders Header', () => {
    expect(wrapper.find('.header').exists()).toBe(true);
  });
  it('Header에 로고가 있다.', () => {
    expect(wrapper.find('[data-test="logo-name"]').exists()).toBe(true);
  });
  it('Header에 로고가 있다.', () => {
    expect(wrapper.find('[data-test="logo-name"]').exists()).toBe(true);
  });
  it('Header에 input이 있다.', () => {
    expect(wrapper.find('[data-test="input"]').exists()).toBe(true);
  });
  it('Header에 로그인/회원가입이 있다.', () => {
    expect(wrapper.find('[data-test="login"]').exists()).toBe(true);
  });

  it('에이콘3D 소개를 클릭했을 때 /intro로 이동하는지', async () => {
    router.push('/intro');
    await router.isReady();

    const wrapper = mount(App, {
      global: {
        plugins: [router],
      },
    });

    await wrapper.find('[data-test="intro-btn"]').trigger('click');
    await flushPromises();

    expect(wrapper.find('[data-test="intro-page"]').exists()).toBe(true);
  });
});
