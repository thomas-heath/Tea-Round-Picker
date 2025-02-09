import { DrinkRun } from '../CurrentStage'

export default async function CreateDrinkRun(userIds: string[]): Promise<DrinkRun> {
    type CreateDrinkRunBody = {
        participants: { userId: string }[]
    }

    const createDrinkRunBody = {
        participants: userIds.map((Id) => ({userId: Id}))
    } satisfies CreateDrinkRunBody

    const response = await fetch(`/api/v1/DrinkRun`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json;charset=UTF-8',
        },
        body: JSON.stringify(createDrinkRunBody)
    })

    const data = await response.json()

    if (response.ok) {
        return data
    } else {
        return Promise.reject(new Error())
    }
}