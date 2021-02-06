<template>
    <div>
        <h1>Admin画面</h1>
        <p>ログイン成功</p>
    </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent ({
    middleware: 'unAuthenticatedRedirect'
})
</script>