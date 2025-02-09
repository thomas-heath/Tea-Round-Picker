import { DrinkRun } from './CurrentStage';

type Props = {
    drinkRun: DrinkRun
}

export default function DisplayResult({ drinkRun }: Props) {

    return (
        <>
            <h2>The drink run will be done by {drinkRun.drinkMaker.firstName} {drinkRun.drinkMaker.lastName}</h2>
            <h3>List of drinks:</h3>
            {drinkRun.orders.map((order) => <p>{order.type}, {order.name}</p>)}
        </>
    )
}