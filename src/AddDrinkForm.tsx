import { useState } from 'react';
import { TeaRoundPickerStage } from './CurrentStage';

type Props = { setStage: React.Dispatch<React.SetStateAction<TeaRoundPickerStage>> }

export default function AddDrinkForm({ setStage }: Props) {
    const [form, setForm] = useState({
        name: '',
        type: '',
    });

    return (
        <>
            <form onSubmit={() => setStage('MoreUserRequired')}>
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