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
    <section id='home' className='home'>
        <div className='bg-opacity'>
            <h1 className='presentation-h1'>
                {text}
                <span className='span-h1'></span>
            </h1>
            <p className='presentation-p'>
                This blog was created as a project for The Odin Project. It involves knowledge about NodeJS and React, in which the former
                is used as the backend and the latter as the frontend. Likewise, both of them talk to each other by means of an API.
            </p>
        </div>
    </section>
    )
}

export default Presentation