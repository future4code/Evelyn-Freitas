export const goToLogin = (history) => {
    history.push('/login')
}

export const goToSignUp = (history) => {
    history.push('/cadastro')
}

export const goToFeed = (history) => {
    history.push('/feed')
}

export const goToPosts = (history, id) => {
    history.push(`/posts/${id}`)
}