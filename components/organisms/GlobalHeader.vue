<template>
    <div>
        <nuxt-link to="/">HOME</nuxt-link>
        <nuxt-link to="/signin" v-if="!isAuthenticated">ログイン</nuxt-link>
        <div  v-else>
            <nuxt-link to="/admin">Admin</nuxt-link>
            <button @click.prevent="logout">ログアウト</button>    
        </div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@vue/composition-api'
import { getModule } from 'vuex-module-decorators'
import Authentication from '@/store/modules/authentication'
import { store } from '@/store'

export default defineComponent({
    setup(props, { root }) {
        const logout = async () => {
            const AuthModule = getModule(Authentication, store)
            await AuthModule.logout()
            root.$router.push('/')
        }
        const AuthModule = getModule(Authentication, store)
        AuthModule.checkAuthenticated()
        const isAuthenticated = computed(() => AuthModule.isAuthenticated)
        return {
            logout,
            isAuthenticated
        }
    },
})
</script>