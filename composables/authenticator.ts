import { reactive } from "@vue/composition-api"
import { authenticationStore } from "@/store"

export default function authenticator() {
    const user = reactive<{
        email: string,
        password: string
    }>({
        email: '',
        password: ''
    })
    const login = async () => {
        const result = await authenticationStore.signin(user)
        user.email = ''
        user.password = ''
        return result
    }
    return {
        user,
        login
    }
}