import { $axios } from "~/utils/api"

// https://typescript.nuxtjs.org/ja/cookbook/store
// import { Store } from 'vuex'
// import { initialiseStores } from '~/utils/store-accessor'

// const initializer = (store: Store<any>) => initialiseStores(store)

// export const plugins = [initializer]
// export * from '~/utils/store-accessor'

export const state = () => ({
    isAuthenticated: false
})

export const mutations = {
    setIsAuthenticated(state: { isAuthenticated: boolean }, isAuthenticated: boolean) {
        state.isAuthenticated = isAuthenticated
    }
}

export const actions = {
    async nuxtServerInit (context: { commit: (arg0: string, arg1: boolean) => void }) {
        await $axios.$get('/api/authenticated-check')
            .then((response) => {
                context.commit('setIsAuthenticated', response.isAuthenticated)
            })
            .catch((error) => {
                context.commit('setIsAuthenticated', false)
                console.log(error)
            })
    },
    async signin(context: { commit: (arg0: string, arg1: boolean) => void }, LoginForm: { email: string, password: string }) {
        const result = await $axios.$post('/api/signin', LoginForm)
            .then(() => {
                context.commit('setIsAuthenticated', true)
                return true
            })
            .catch(error => {
                context.commit('setIsAuthenticated', false)
                console.log(error)
                return false
            });
        return result
    },
    async logout(context: { commit: (arg0: string, arg1: boolean) => void }) {
        await $axios.$post('/api/logout')
            .then(() => {
                context.commit('setIsAuthenticated', false)
            })
            .catch(error => {
                context.commit('setIsAuthenticated', false)
                console.log(error)
            })
    }
}
