<template>
  <div>
    <GlobalHeader />
    <Nuxt />
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import GlobalHeader from '@/components/organisms/GlobalHeader'

export default defineComponent({
  components: {
    GlobalHeader
  }
})
</script>
