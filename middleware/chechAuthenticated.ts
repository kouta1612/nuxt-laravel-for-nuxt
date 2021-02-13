import { authenticationStore } from '@/store'

export default async function () {
    await authenticationStore.checkAuthenticated()
}