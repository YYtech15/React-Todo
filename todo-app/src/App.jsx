import React, { useState, useEffect } from 'react';
import ColorFullMessage from './components/ColorFullMessage';

const App = () => {
    const [num, setNum] = useState(0);
    const [faceShowFlag, setFaceShowFlag] = useState(true);

    const countUp = () => {
        setNum(num + 1);
    };

    const showFace = () => {
        setFaceShowFlag(!faceShowFlag);
    }

    useEffect(() => {
        if (num > 0) {
            if (num % 3 === 0)
                faceShowFlag || setFaceShowFlag(true);
            else {
                faceShowFlag && setFaceShowFlag(false);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [num]);

    return (
        <>
            <h1 style={{ color: 'red' }}>こんにちは</h1>
            <ColorFullMessage color="blue">
                お元気ですか？
            </ColorFullMessage>
            <ColorFullMessage color="red">
                元気です
            </ColorFullMessage>
            <button onClick={countUp}>ボタン</button>
            <button onClick={showFace}>on/off</button>
            <p>{num}</p>
            {faceShowFlag && <p>（＞＿＜）</p>}
        </>
    );
};
export default App;