export const goToHome = (history) => {
    history.push('/')
}

export const goToPokedex = (history) => {
    history.push('/pokedex')
}

export const goToDetails = (history, name) => {
    history.push(`/details/${name}`)
}

export const goBack = (history) => {
    history.goBack()
}
