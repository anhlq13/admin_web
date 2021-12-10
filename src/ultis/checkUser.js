export const User = {
    user: null,

    checkUser() {
        const check = JSON.parse(localStorage.getItem('user'))
        if (!check) {
            return false
        }
        return check    
    },

    setUser(user) {
        if (this.checkUser) {
            return localStorage.setItem('user', JSON.stringify(user))
        }
    },

    getUser() {
        return this.checkUser() ? this.checkUser() : null
    },

    logOut() {
        return localStorage.removeItem('user')
    }
}