<template>
    <div>
        <form @submit.prevent="handleLogin">
            <div>
                <label for="email">メールアドレス</label>
                <input type="email" id="email" v-model="user.email">
            </div>
            <div>
                <label for="password">パスワード</label>
                <input type="password" id="password" v-model="user.password">
            </div>
            <button type="submit">ログイン</button>
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import useAuthentication from '@/composables/authenticator'

export default defineComponent({
    middleware: 'authenticatedRedirect',
    setup(_, { root }) {
        const { user, login } = useAuthentication()
        const handleLogin = async () => {
            const result = await login()
            if (result) {
                root.$router.push('/admin')
            }
        }
        return {
            user,
            handleLogin
        }
    }
})
</script>
