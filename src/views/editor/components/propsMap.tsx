import { Input, Slider } from 'ant-design-vue'
import { Component } from 'vue'

interface PropsToForm {
  component: Component
  label: string
  extraProps?: { [key: string]: any }
  afterTransform?: (e: any) => any
  initialTransform?: (v: any) => any
}

interface PropsForm {
  [key: string]: PropsToForm
}

const commonNumberHandler = {
  component: Input,
  extraProps: { type: 'number' },
  initialTransform: (v: string) => (v ? parseInt(v) : 0),
  afterTransform: (e: Event) =>
    (e.target as HTMLInputElement)?.value ? `${(e.target as HTMLInputElement).value}px` : ''
}

const componentMap: PropsForm = {
  text: {
    label: '文本', //显示的label
    component: Input.TextArea,
    extraProps: { row: 3 },
    afterTransform: (e: any) => e.target.value
  },
  fontSize: {
    label: '字号',
    ...commonNumberHandler
  },
  lineHeight: {
    label: '行高',
    component: Slider,
    extraProps: { min: 0, max: 3, step: 0.1 },
    initialTransform: (v: string) => parseFloat(v),
    afterTransform: (e: number) => e.toString()
  }
}

export default componentMap
