import { DrinkRun, TeaRoundPickerStage } from './CurrentStage';
import GetUsers from './Functions/GetUsers';
import CreateDrinkRun from './Functions/CreateDrinkRun';

type Props = {
    setStage: React.Dispatch<React.SetStateAction<TeaRoundPickerStage>>,
    setDrinkRun: React.Dispatch<React.SetStateAction<DrinkRun | undefined>>
}

export default function MoreUsersRequiredCheck({ setStage, setDrinkRun }: Props) {
    const fetchDrinkRun = async (event: React.FormEvent<HTMLInputElement>) => {
        event.preventDefault()
        const userIds = await GetUsers()
        const drinkRun = await CreateDrinkRun(userIds)
        setDrinkRun(drinkRun)
        setStage('DisplayResult')
    }

    return (
        <>
            <p>Do you require more drinkers?</p>
            <br />
            <input
                type="submit"
                value="Yes"
                onClick={() => setStage('CreateUser')}
            />
            <input
                type="submit"
                value="No"
                onClick={fetchDrinkRun}
            />
        </>
    )
}