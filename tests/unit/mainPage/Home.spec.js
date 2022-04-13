import { mount } from '@vue/test-utils';
import Home from '@/components/views/Home.vue';

describe('MainPage', () => {
  const wrapper = mount(Home);
  it('renders Home', () => {
    expect(wrapper.find('[data-test="main-page"]').exists()).toBe(true);
  });
});
