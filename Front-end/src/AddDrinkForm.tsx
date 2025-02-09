import { useState } from 'react';
import { TeaRoundPickerStage } from './CurrentStage';
import AddDrink from './Functions/AddDrink';

type Props = {
    setStage: React.Dispatch<React.SetStateAction<TeaRoundPickerStage>>,
    userId: string
}

export default function AddDrinkForm({ setStage, userId }: Props) {
    const [form, setForm] = useState({
        name: '',
        type: '',
    });

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        await AddDrink(form.name, form.type, userId)
        setStage('MoreUserRequired')
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    Drink:
                    <input
                        className="inputBox"
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={event => {
                            setForm({
                                ...form,
                                name: event.target.value
                            })
                        }}
                    />
                </label>
                <br />
                <label>
                    Type:
                    <input
                        className="inputBox"
                        type="text"
                        name="type"
                        required
                        value={form.type}
                        onChange={event => {
                            setForm({
                                ...form,
                                type: event.target.value
                            })
                        }}
                    />
                </label>
                <br />
                <input
                    type="submit"
                    value="Submit"
                />
            </form>
        </>
    )
}