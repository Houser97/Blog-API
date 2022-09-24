import React, { useEffect, useState } from 'react'
import '../styles/presentation.css'

const Presentation = () => {

    const sentences = ['Welcome to my Blog!', 'Enjoy your stay!'];
    const [delta, setDelta] = useState(200);
    const [isWriting, setIsWriting] = useState(true);
    const [text, setText] = useState('');
    const [loopNum, setLoopNum] = useState(0);

    useEffect(() => {
        let tick = setInterval(() => {
            writeOrDelete();
        }, delta)

        return () => {clearInterval(tick)}
    }, [text])

    const writeOrDelete = () => {
        let index = loopNum % sentences.length;
        let fullText = sentences[index];
        let currentText = isWriting ? fullText.substring(0, text.length+1) : fullText.substring(0, text.length-1)

        setText(currentText);

        if(!isWriting){
            setDelta(prev => prev/2);
        }
        if(!isWriting && currentText === ''){
            setIsWriting(true);
            setLoopNum(prev => prev + 1);
            setDelta(200);
        }
        if(isWriting && currentText === fullText){
            setIsWriting(false);
            setDelta(2000);
        }
    }

    return (
    <section className='presentation'>
        <h1 className='presentation-h1'>
            {text}
            <span className='span-h1'></span>
        </h1>
        <p>
            This blog was created as a project for The Odin Project. It involves knowledge about NodeJS as the backend and React as the Frontend.
        </p>
    </section>
    )
}

export default Presentation