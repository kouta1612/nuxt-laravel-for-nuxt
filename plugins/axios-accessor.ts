import { Plugin } from '@nuxt/types'
import each from 'lodash.foreach'
import { initializeAxios } from '@/utils/api'

const parseCookie = (cookies: string[]): { [key: string]: string } => {
    const result: { [key: string]: string } = {}
    each(cookies, (cookie: string) => {
        const cookieKey = cookie.match(/([^=]+)/)
        if (cookieKey) {
            result[cookieKey[0]] = cookie
        }
    })
    return result
}

const mergeCookie = (
    baseCookie: string | number | string[] | undefined,
    addCookie: string | number | string[] | undefined
): string[] => {
    const result: string[] = [];
    const parseBaseCookie = Array.isArray(baseCookie) ? parseCookie(baseCookie) : {}
    const parsedAddCookie = Array.isArray(addCookie) ? parseCookie(addCookie) : {}
    const mergeCookie = { ...parseBaseCookie, ...parsedAddCookie }
    each(mergeCookie, (cookie) => result.push(cookie))
    return result
}

const accessor: Plugin = ({ $axios, req, res }) => {
    initializeAxios($axios)
    $axios.onRequest(() => {
        if (process.client) return
        $axios.defaults.headers = req.headers
    })
    $axios.onResponse((response) => {
        if (process.client) return
        if (response.headers['set-cookie']) {
            const mergedCookie = mergeCookie(
                res.getHeader('set-cookie'),
                response.headers['set-cookie']
            )
            res.setHeader('set-cookie', mergedCookie)
        }
    })
}

export default accessor
