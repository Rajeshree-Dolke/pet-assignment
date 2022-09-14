export const addPet = async (newPet) => {
    try {
        const response = await fetch('http://localhost:3000/pets',
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
                ,
                body: JSON.stringify( newPet )
            })
        if (response.status !== 201) {
            throw new Error(response.statusText)
        }
    } catch (error) {
        throw new Error(error.message)
    }

}