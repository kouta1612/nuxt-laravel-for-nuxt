import { authenticationStore } from '@/store'

export default async function () {
    if (process.server) {
        await authenticationStore.checkAuthenticated()
    }
}