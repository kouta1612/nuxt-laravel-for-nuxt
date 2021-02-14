<template>
  <div>
    <!-- View -->
    <div>{{ state.count }}</div>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api"
import useCounter from '@/composables/counter'

export default defineComponent({
  setup() {
    const { state, increment, decrement } = useCounter()
    return {
      state,
      increment,
      decrement,
    }
  }
})
</script>