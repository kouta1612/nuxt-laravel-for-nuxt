<template>
    <div>
        <h1>Admin画面</h1>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent ({
    middleware: 'unAuthenticatedRedirect'
})
</script>