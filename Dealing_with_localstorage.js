////////////////////////////////
// Dealing with LocalStorage
////////////////////////////////
function UpdateLocalStorageAuthUser (key, value) {
    const authUser = JSON.parse(localStorage.getItem('authUser'))
    authUser[key] = value
    localStorage['authUser'] = JSON.stringify(authUser)
}

