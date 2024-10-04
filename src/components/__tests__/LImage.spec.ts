import {shallowMount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import LImage from '@/components/LImage'
import { imageDefaultProps } from '@/defaultProps'

describe('LImage.vue',()=>{
    it('default LImage render',()=>{
        const props = {
            ...imageDefaultProps,
        }
        const wrapper = shallowMount(LImage, {props})
        const style = wrapper.attributes().style
        const src = wrapper.attributes().src

        expect(src).toBe(imageDefaultProps.imgSrc)
        expect(wrapper.element.tagName).toBe('IMG')
        expect(style.includes('imgSrc')).toBeFalsy()
    })
})