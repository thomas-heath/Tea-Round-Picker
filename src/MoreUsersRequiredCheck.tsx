import { TeaRoundPickerStage } from './CurrentStage';

type Props = {setStage: React.Dispatch<React.SetStateAction<TeaRoundPickerStage>>}

export default function MoreUsersRequiredCheck({setStage}: Props) {

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
                onClick={() => setStage('DisplayResult')}
            />
        </>
    )
}