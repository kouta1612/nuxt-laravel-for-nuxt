<template>
    <div>
        <nuxt-link to="/">HOME</nuxt-link>
        <nuxt-link to="/signin" v-if="!isAuthenticated">ログイン</nuxt-link>
        <button @click.prevent="logout" v-else>ログアウト</button>
    </div>
</template>

<script>
import { computed } from '@vue/composition-api'
export default {
    setup(props, { root }) {
        const logout = async () => {
            await root.$store.dispatch('logout')
            root.$router.push('/')
        }
        const isAuthenticated = computed(() => root.$store.state.isAuthenticated)
        return {
            logout,
            isAuthenticated
        }
    }
}
</script>