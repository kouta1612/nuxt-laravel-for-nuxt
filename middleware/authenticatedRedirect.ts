import { Context } from "@nuxt/types"
import { authenticationStore } from '@/store'

export default function(context: Context) {
    if (authenticationStore.isAuthenticated) {
        return context.redirect('/')
    }
}
