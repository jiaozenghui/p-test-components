import {shallowMount } from '@vue/test-utils'
import { describe, expect, it, afterEach, beforeEach } from 'vitest'
import LText from '@/components/LText'
import { textDefaultProps } from '@/defaultProps'

describe('LText.vue',()=>{
    const {location} = window
    beforeEach(()=>{
        Object.defineProperty(window, 'location', {
            writable: true,
            value:{
                href: ''
            }
        })
    })
    afterEach(()=>{
        window.location = location
    })
    it('default LText render',()=>{
        const msg = 'test'
        const props = {
            ...textDefaultProps,
            text: msg
        }
        const wrapper = shallowMount(LText, {props})
        expect(wrapper.text()).toBe(msg)
        expect(wrapper.element.tagName).toBe('DIV')
        const style = wrapper.attributes().style
        console.log(style)
        expect(style.includes('font-size')).toBeTruthy()
        expect(style.includes('actionType')).toBeFalsy()
    })
    it('LText with actionType and URL should trigger location href change', async()=>{
        const props ={
            ...textDefaultProps,
            actionType: 'url',
            url: 'http://dummy.url',
            tag: 'h2'
        }
        const wrapper = shallowMount(LText, {props})
        await wrapper.trigger('click')
        expect(window.location.href).toBe('http://dummy.url')
    })
    it('LText with isEditing should not trigger location href change', async ()=>{
        const props ={
            ...textDefaultProps,
            actionType: 'url',
            url: 'http://dummy.url',
            tag: 'h2',
            isEditing: true
        }
        const wrapper = shallowMount(LText, {props})
        await wrapper.trigger('click')
        expect(window.location.href).not.toBe('http://dummy.url')
    })
})