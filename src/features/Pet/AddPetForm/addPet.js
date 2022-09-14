export const addPet = async (newPet) => {
    try {
        const response = await fetch(process.env.REACT_APP_BACKEND + '/pets',
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