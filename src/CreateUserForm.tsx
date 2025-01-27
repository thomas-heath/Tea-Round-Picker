import { useState } from 'react';
import { TeaRoundPickerStage } from './CurrentStage';

type Props = { setStage: React.Dispatch<React.SetStateAction<TeaRoundPickerStage>> }

export default function CreateUserForm({ setStage }: Props) {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
    });

    return (
        <>
            <form onSubmit={() => setStage('AddDrink')}>
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