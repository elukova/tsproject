export class User {
    userName: string
    avatarUrl: string
  
    constructor(userName: string, avatarUrl: string) {
        this.userName = userName
        this.avatarUrl = avatarUrl
    }
}

export function getUserData() : User | Error {
    const user: unknown = JSON.parse(window.localStorage.getItem('user'))
    Object.setPrototypeOf(user, User.prototype)
  
    if (user instanceof User) {
        return user
    } else {
        throw new Error('Local storage has no valid user data')
    }
}

export function getFavoritesAmount() : number | Error {
    const favouritesAmount : unknown = window.localStorage.getItem('favoritesAmount')
    if (typeof favouritesAmount == 'number') {
        return favouritesAmount
    } else {
        throw new Error('Local storage has no valid favouritesAmount')
    }
}