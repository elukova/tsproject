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
        throw new Error('local storage has no user')
    }
}

export function getFavoritesAmount() : number {
    const favouritesAmount : unknown = window.localStorage.getItem('favoritesAmount')
    if (+favouritesAmount) {
        return +favouritesAmount
    }
    else {return 0}
}