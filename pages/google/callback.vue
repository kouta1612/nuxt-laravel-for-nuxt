<template>
    <div>
        コールバックではvuexのactionでsocialログイン処理をしてから
        ログイン状態をコミットする
        dispatch自体はこのscriptタグで呼び出す
    </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { authenticationStore } from '@/store'

export default defineComponent({
    async asyncData({query, redirect}) {
        const result = await authenticationStore.socialLogin(query)
        if (result) {
            await authenticationStore.checkAuthenticated()
            return redirect('/admin')
        }
    },
})
</script>