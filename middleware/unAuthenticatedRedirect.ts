export default function (context: { store: { state: { isAuthenticated: any; }; }; redirect: (arg0: string) => void; }) {
    if (!context.store.state.isAuthenticated) {
        return context.redirect('/signin')
    }
}