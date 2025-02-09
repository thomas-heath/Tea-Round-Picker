export default async function GetUsers(): Promise<string[]> {
    const response = await fetch(`/api/v1/Users/`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json;charset=UTF-8',
        }
    })

    const data = await response.json()
    if (response.ok) {
        const users = data
        if (Array.isArray(users)) {
            return users.map((user: { id: string }) => (user.id))
        } else {
            return Promise.reject(new Error())
        }
    } else {
        return Promise.reject(new Error())
    }
}