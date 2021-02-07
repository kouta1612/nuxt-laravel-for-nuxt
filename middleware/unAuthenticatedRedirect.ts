import { Context } from "@nuxt/types"
import { getModule } from "vuex-module-decorators"
import { store } from "@/store"
import Authentication from "@/store/modules/authentication"

export default function(context: Context) {
    const AuthModule = getModule(Authentication, store)
    if (!AuthModule.isAuthenticated) {
        return context.redirect('/signin')
    }
}
