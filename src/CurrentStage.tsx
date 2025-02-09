import { useState } from 'react'
import CreateUserForm from './CreateUserForm.tsx'
import AddDrinkForm from './AddDrinkForm.tsx'
import MoreUsersRequiredCheck from './MoreUsersRequiredCheck.tsx'
import DisplayResult from './DisplayResult.tsx'

export type TeaRoundPickerStage = 'CreateUser' | 'AddDrink' | 'MoreUserRequired' | 'DisplayResult'

export type DrinkRun = {
    drinkMaker: {
        firstName: string,
        lastName: string
    },
    orders: Order[]
}

type Order = {
    name: string,
    type: string
}

export default function CurrentStage() {
    const [pickerStage, setStage] = useState<TeaRoundPickerStage>('CreateUser')
    const [drinkRun, setDrinkRun] = useState<DrinkRun>()
    const [userId, setUserId] = useState<string>('')

    if (pickerStage === 'CreateUser') {
        return (
            <>
                <CreateUserForm setStage={setStage} setUserId={setUserId} />
            </>
        )
    }
    if (pickerStage === 'AddDrink') {
        return (
            <>
                <AddDrinkForm setStage={setStage} userId={userId} />
            </>
        )
    }
    if (pickerStage === 'MoreUserRequired') {
        return (
            <>
                <MoreUsersRequiredCheck setStage={setStage} setDrinkRun={setDrinkRun} />
            </>
        )
    }
    if (pickerStage === 'DisplayResult' && drinkRun != undefined) {
        return (
            <>
                <DisplayResult drinkRun={drinkRun} />
            </>
        )
    }
    
    return (
        <>
            <p>I have no mouth and I must scream.</p>
            <input 
                type="submit"  
                value="Submit"
                onClick={() => setStage('CreateUser')}
            />
        </>
    )
}