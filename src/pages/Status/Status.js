import './Status.styles.css'
import {useEffect} from 'react';

const NotFound = () => {
    useEffect(() => {
        document.body.style.backgroundColor = "blueviolet";
        return () => {
            document.body.style.backgroundColor = "white";
        };
    }, []);

return (
<div className='fourofour status'>
    <h3 className='ohoh'>Oh oh Oh oh Oh oh</h3>
    <h3 className='ohoh'>Oh oh Oh oh Oh oh</h3>
    <h1>
        404 Page Not Found/Doesn't Exist
    </h1>
    <h3 className='ohoh'>Oh oh Oh oh Oh oh</h3>
    <h2>
        Please try retyping it or typing in a different page!
    </h2>
    <h3 className='ohoh'>Oh oh Oh oh Oh oh</h3>
    <h3 className='ohoh'>Oh oh Oh oh Oh oh</h3>

</div>
)
};

export default NotFound;