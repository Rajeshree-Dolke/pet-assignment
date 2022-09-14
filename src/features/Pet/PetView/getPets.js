export async function getPets() {
    try {
        const response = await fetch(process.env.REACT_APP_BACKEND + '/pets')
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error(response.statusText)
        }
    } catch (error) {
        throw new Error(error.message)
    }

}