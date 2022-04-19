import { mount } from '@vue/test-utils';
import IconPage from '@/components/mainpage/Icon.vue';

describe('IntroPage', () => {
  const wrapper = mount(IconPage);

  it('renders IconPage', () => {
    expect(wrapper.find('[data-test="icon-page"]').exists()).toBe(true);
  });
  it('contains 6 categories', () => {
    const testLocationText = ['판타지/중세', '동양/사극/무협', 'SF/아포칼립스', '느와르/범죄/재벌', '일상/현대물', '엑스트라/소재'];

    for (let i = 0; i < testLocationText.length; i += 1) {
      const localWrapper = wrapper.get(`li:nth-child(${i + 1})`);

      expect(localWrapper.text()).toEqual(testLocationText[i]);
    }
  });
});
