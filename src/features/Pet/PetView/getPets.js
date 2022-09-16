export async function getPets() {
    const url = process.env.NODE_ENV === 'development' ? process.env.REACT_APP_LOCAL_BACKEND : process.env.REACT_APP_PROD_BACKEND
    try {
        const response = await fetch(url + '/pets')
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error(response.statusText)
        }
    } catch (error) {
        throw new Error(error.message)
    }

}