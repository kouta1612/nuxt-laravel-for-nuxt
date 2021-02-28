<template>
    <div>
        setCookieされないからソーシャルログインうまく行かない
        ID/PWログインの方はCSRでやっているからうまくいき、Socialログインの方はSSRでやっているからうまく行かない可能性あり
        nuxt/axiosのBaseURL(SSR時に採用),BrowserBaseURL(CSR時に採用)に関して考慮が必要そう
        SSRではリロード時に起動されない(redirectで遷移されたら起動される)
        => Set-Cookieしたらうまくいった
    </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { authenticationStore } from '@/store'

export default defineComponent({
    async asyncData({query, redirect}) {
        const result = await authenticationStore.socialLogin(query)
        if (result) {
            return redirect('/admin')
        }
    },
})
</script>