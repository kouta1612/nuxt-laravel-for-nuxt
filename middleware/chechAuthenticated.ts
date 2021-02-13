import { getModule } from "vuex-module-decorators";
import { store } from "@/store";
import Authentication from "@/store/modules/authentication";

export default async function () {
    const AuthModule = getModule(Authentication, store)
    await AuthModule.checkAuthenticated()
}