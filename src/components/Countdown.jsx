import { useEffect, useState } from 'react'
import '../App.css'

function Countdown({ initialNumber }) {
    const [timeLeft, setTimeLeft] = useState(initialNumber)

    useEffect(() => {
        setInterval(() => {
            setTimeLeft(time => time - 1)
        }, 1000)
    }, [])

    return (
        <div className="countdown font-mono text-6xl flex flex-col items-center">
            <span style={{ "--value": timeLeft }}></span>
        </div>
    )
}

export default Countdown