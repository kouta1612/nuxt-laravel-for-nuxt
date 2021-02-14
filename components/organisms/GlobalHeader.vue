<template>
    <div>
        <nuxt-link to="/">HOME</nuxt-link>
        <nuxt-link to="/admin">Admin</nuxt-link>
        <div v-if="isLoggedIn">
            <nuxt-link to="/admin">Admin</nuxt-link>
            <ActionButton value="ログアウト" :onClick="logout" />
        </div>
        <div v-else>
            <nuxt-link to="/signin">ログイン</nuxt-link>
            <a href="http://localhost:8000/api/google">Google</a>
        </div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@vue/composition-api'
import { authenticationStore } from '~/store'
import ActionButton from '../atoms/ActionButton.vue'

export default defineComponent({
  components: { ActionButton },
    setup(_, { root }) {
        const logout = async () => {
            await authenticationStore.logout()
            root.$router.push('/')
        }
        const isLoggedIn = computed(() => authenticationStore.isAuthenticated)
        return {
            logout,
            isLoggedIn
        }
    },
})
</script>