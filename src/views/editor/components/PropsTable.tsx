import { PropType, defineComponent } from 'vue'
import componentMap from './propsMap'

export default defineComponent({
  name: 'PropsTable',
  props: {
    props: {
      type: Object as PropType<Record<string, any>>,
      required: true
    }
  },
  setup(props, { emit }) {
    return () => {
      return (
        <div>
          {Object.keys(props?.props).map(key => {
            const propValue = props?.props[key]
            const form = componentMap[key]
            if (!form) {
              return null
            }
            console.log('key', key, 'propValue', propValue)
            const { component, label, extraProps, afterTransform, initialTransform } = form
            const Component = component as any
            const value = initialTransform ? initialTransform(propValue) : propValue
            const onChange = (e: any) => {
              const value = afterTransform ? afterTransform(e) : e
              console.log(value)
              emit('onChange', { ...props.props, [key]: value })
            }
            return (
              <div class="prop-item" key={key}>
                <label>{label}</label>
                <Component value={value} onChange={onChange} {...extraProps} />
              </div>
            )
          })}
        </div>
      )
    }
  }
})
