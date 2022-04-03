import { mount } from '@vue/test-utils';
import Nav from '@/components/layouts/Nav.vue';

describe('Header', () => {
  const wrapper = mount(Nav);
  it('renders Nav', () => {
    expect(wrapper.find('[data-test="Nav"]').exists()).toBe(true);
  });
  it('카테고리가 있다.', () => {
    expect(wrapper.find('[data-test="nav-category"]').exists()).toBe(true);
  });
});
