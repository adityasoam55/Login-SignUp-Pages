import React, { useCallback, useMemo, useState } from 'react'
import Message from './Message'
import Button from './Button'

function Donate() {
    const [amount, setAmount] = useState(2);
    const [count, setCount] = useState(1);

    const square = useMemo(function () {
        console.log('Calculating Square')
        return count * count;
    }, [count]);


    const handleCount = useCallback(function () {
        const newCount = count + 1;
        setCount(newCount);
    }, [count]);

    return (

        <div className='text-xl w-3/5 flex flex-col items-center gap-5 py-10'>
            <Message amount={amount} />
            <input className='border rounded-md'
                type="text"
                value={amount}
                onChange={(e) => (setAmount(+e.target.value))}
            />
            <Button >Donate Now</Button>

            <p>Square of {count} is {square}</p>
            <Button onClick={handleCount}
            >
                Count
            </Button>
        </div>

    )
}

export default Donate;;
