<template>
  <component :is="tag" :style="styleProps" @click="handleClick">
    {{ text }}
  </component>
</template>

<script setup lang="ts">
import { TextComponentProps, textDefaultProps, textStylePropNames } from '../../types'
import useComponentCommon from './hooks'

type TextProps = {
  tag: string
}
const props = withDefaults(defineProps<TextProps & TextComponentProps>(), { ...textDefaultProps })

const { styleProps, handleClick } = useComponentCommon(props, textStylePropNames)
</script>

<style></style>
