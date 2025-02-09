import { useState } from 'react';
import { TeaRoundPickerStage } from './CurrentStage';
import CreateUser from './Functions/CreateUser';

type Props = {
    setStage: React.Dispatch<React.SetStateAction<TeaRoundPickerStage>>,
    setUserId: React.Dispatch<React.SetStateAction<string>>
}

export default function CreateUserForm({ setStage, setUserId }: Props) {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
    });

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const userId = await CreateUser(form.firstName, form.lastName)
        setUserId(userId)
        setStage('AddDrink')
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    First Name:
                    <input
                        className="inputBox"
                        type="text"
                        name="firstName"
                        required
                        value={form.firstName}
                        onChange={event => {
                            setForm({
                                ...form,
                                firstName: event.target.value
                            })
                        }}
                    />
                </label>
                <br />
                <label>
                    Last Name:
                    <input
                        className="inputBox"
                        type="text"
                        name="secondName"
                        required
                        value={form.lastName}
                        onChange={event => {
                            setForm({
                                ...form,
                                lastName: event.target.value
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