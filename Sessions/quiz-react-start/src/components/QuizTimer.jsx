import { useEffect, useState } from "react";

export default function QuizTimer() {
    const [timer, setTimer] = useState(100);
    
    useEffect(() => {
        const timerBar = () => {
            setTimer(prev => (prev > 0 ? prev - 1 : 0));
        };

        const timerInt = setInterval(timerBar, 100);

        
        return () => clearInterval(timerInt);
    }, []);
    return (
        <div>
            <progress id="question-time" max="100" value={timer} />
        </div>
    );
}
