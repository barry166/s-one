<template>
  <div class="card-list">
    <div class="title">
      <h3>{{ title }}</h3>
      <div>
        <Pagination
          v-model:current="current"
          simple
          :total="data.length"
          :defaultPageSize="defaultPageSize"
        />
      </div>
    </div>
    <Row :gutter="24" class="list-content">
      <Col
        @click="itemClick(item)"
        :span="4"
        class="list-item"
        v-for="(item, index) in currentList"
        :key="index"
      >
        <img :src="item.coverImg" />
        {{ item.title }}
      </Col>
    </Row>
  </div>
</template>

<script setup lang="ts">
import { Pagination, Row, Col } from 'ant-design-vue'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'

interface CardItem {
  id: number
  title: string
  desc: string
  coverImg: string
  copiedCount?: number
  isHot?: boolean
  createAt?: string
}
interface CardListProps {
  title: string
  data: CardItem[]
}
const props = withDefaults(defineProps<CardListProps>(), {})

const current = ref<number>(1)
const defaultPageSize = ref<number>(7)
const router = useRouter()
const currentList = computed(() => {
  return props.data?.slice(
    (current.value - 1) * defaultPageSize.value,
    current.value * defaultPageSize.value
  )
})

const itemClick = (item: CardItem) => {
  console.log(item)
  router.push(`/editor/${item.id}`)
}
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
