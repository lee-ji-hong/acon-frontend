import { mount } from '@vue/test-utils';
import Header from '@/components/layouts/Header.vue';

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
});
