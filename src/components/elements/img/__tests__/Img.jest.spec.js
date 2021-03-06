import { shallowMount, mount } from '@vue/test-utils';

import VsImg from '../Img';

const slotText = 'Image text';

const factoryShallowMount = (propsData) => shallowMount(VsImg, {
    slots: {
        default: slotText,
    },
    propsData: {
        ...propsData,
        src: 'https://cimg.visitscotland.com/cms-images/attractions/outlander/claire-standing-stones-craigh-na-dun-outlander?size=sm',
        alt: 'Claire standing stones',
    },
});

const factoryMount = (propsData) => mount(VsImg, {
    slots: {
        default: slotText,
    },
    propsData: {
        ...propsData,
        src: 'https://cimg.visitscotland.com/cms-images/attractions/outlander/claire-standing-stones-craigh-na-dun-outlander?size=sm',
        alt: 'Claire standing stones',
    },
});

describe('VsImg', () => {
    it('should render a bimg-stub', () => {
        const wrapper = factoryShallowMount();

        expect(wrapper.element.tagName).toBe('BIMG-STUB');
    });

    describe(':props', () => {
        it('should accept and render a `src` property', () => {
            const wrapper = factoryShallowMount();

            expect(wrapper.attributes('src')).toBe('https://cimg.visitscotland.com/cms-images/attractions/outlander/claire-standing-stones-craigh-na-dun-outlander?size=sm');
        });

        it('should accept and render an `alt` property', () => {
            const wrapper = factoryShallowMount();

            expect(wrapper.attributes('alt')).toBe('Claire standing stones');
        });

        it('should set an `img-fluid` class if the `fluid` property is truthy', () => {
            const wrapper = factoryMount({
                fluid: true,
            });

            expect(wrapper.classes('img-fluid')).toBe(true);
        });

        it('should set an `img-fluid` class and a `w-100` class if the `fluid-grow` property is truthy', () => {
            const wrapper = factoryMount({
                fluidGrow: true,
            });

            expect([
                wrapper.classes('img-fluid'),
                wrapper.classes('w-100'),
            ]).toEqual([
                true, true,
            ]);
        });
    });

    describe(':slots', () => {
        it('renders content inserted into default `slot`', () => {
            const wrapper = factoryShallowMount();

            expect(wrapper.text()).toContain(slotText);
        });
    });
});
