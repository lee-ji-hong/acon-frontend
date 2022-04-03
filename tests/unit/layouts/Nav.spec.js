import { mount } from '@vue/test-utils';
import Nav from '@/components/layouts/Nav.vue';

describe('Header', () => {
  const wrapper = mount(Nav);
  it('renders Nav', () => {
    expect(wrapper.find('[data-test="Nav"]').exists()).toBe(true);
  });
  it('contains 9 locations', () => {
    const testLocationText = ['카테고리', '이벤트', '베스트', '신작', '혜택관', '우주최저가', '즐기기', '제작의뢰', '입점신청'];

    for (let i = 0; i < testLocationText.length; i += 1) {
      const localWrapper = wrapper.get(`li:nth-child(${i + 1})`);

      expect(localWrapper.text()).toEqual(testLocationText[i]);
    }
  });
});
