import { useState } from 'react'
import CreateUserForm from './CreateUserForm.tsx'
import AddDrinkForm from './AddDrinkForm.tsx'
import MoreUsersRequiredCheck from './MoreUsersRequiredCheck.tsx'

export type TeaRoundPickerStage = 'CreateUser' | 'AddDrink' | 'MoreUserRequired' | 'DisplayResult'

export default function CurrentStage() {
    const [pickerStage, setStage] = useState<TeaRoundPickerStage>('CreateUser')

    if (pickerStage === 'CreateUser') {
        return (
            <>
                <CreateUserForm setStage={setStage} />
            </>
        )
    }
    if (pickerStage === 'AddDrink') {
        return (
            <>
                <AddDrinkForm setStage={setStage} />
            </>
        )
    }
    if (pickerStage === 'MoreUserRequired') {
        return (
            <>
                <MoreUsersRequiredCheck setStage={setStage} />
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