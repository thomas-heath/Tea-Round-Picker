export default async function AddDrink(name: string, type: string, userId: string): Promise<void> {
    const addDrinkBody = {
        name: name,
        type: type,
        userId: userId
    }

    const response = await fetch(`/api/v1/DrinkOrder`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json;charset=UTF-8',
        },
        body: JSON.stringify(addDrinkBody)
    })

    if (!response.ok) {
        return Promise.reject(new Error())
    }
}