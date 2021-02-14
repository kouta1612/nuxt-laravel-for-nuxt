<template>
    <button
        type="type"
        v-text="value"
        @click="onClick"
    ></button>
</template>

<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
    props: {
        type: {
            type: String,
        },
        value: {
            type: String,
            required: true
        },
        onClick: {
            type: Function,
            default: () => {}
        }
    }  
})
</script>
