import { Action, Module, Mutation, VuexModule } from "vuex-module-decorators";
import { $axios } from "~/utils/api"

@Module({ name: 'authentication', stateFactory: true, namespaced: true })
export default class Authentication extends VuexModule {
    isAuthenticated = false

    @Mutation
    setIsAuthenticated(isAuthenticated: boolean) {
        this.isAuthenticated = isAuthenticated
    }

    @Action
    async checkAuthenticated() {
        await $axios.$get('/api/authenticated-check')
            .then((response) => {
                this.setIsAuthenticated(response.isAuthenticated)
            })
            .catch((error) => {
                this.setIsAuthenticated(false)
                console.log(error)
            })
    }

    @Action
    async socialLogin(payload: any) {
        const result = await $axios.$get('/api/google/callback', { params: payload })
            .then(() => {
                this.setIsAuthenticated(true)
                return true
            })
            .catch(error => {
                this.setIsAuthenticated(false)
                console.log(error)
                return false
            })
        return result
    }

    @Action
    async signin(LoginForm: { email: string, password: string }) {
        const result = await $axios.$post('/api/signin', LoginForm)
            .then(() => {
                this.setIsAuthenticated(true)
                return true
            })
            .catch(error => {
                this.setIsAuthenticated(false)
                console.log(error)
                return false
            });
        return result
    }

    @Action
    async logout() {
        await $axios.$post('/api/logout')
            .then(() => {
                this.setIsAuthenticated(false)
            })
            .catch(error => {
                this.setIsAuthenticated(false)
                console.log(error)
            })
    }
}
