export const addPet = async (newPet) => {
    const url = process.env.NODE_ENV === 'development' ? process.env.REACT_APP_LOCAL_BACKEND : process.env.REACT_APP_PROD_BACKEND
    try {
        const response = await fetch(url + '/pets',
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
                ,
                body: JSON.stringify(newPet)
            })
        if (response.status !== 201) {
            throw new Error(response.statusText)
        }
    } catch (error) {
        throw new Error(error.message)
    }

}