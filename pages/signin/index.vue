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
import { defineComponent, reactive } from '@vue/composition-api'

export default defineComponent({
    setup(props, { root }) {
        const user = reactive({
            email: '',
            password: ''
        })
        const handleLogin = async () => {
            const result = await root.$store.dispatch('signin', user)
            user.email = ''
            user.password = ''
            console.log(result ? 'login success' : 'not login')
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
