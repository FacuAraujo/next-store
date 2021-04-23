import {useEffect, useRef} from 'react';

import {TweenMax, TimelineLite, Power3} from 'gsap';

const Alert = ({text, success, id, removeAlert}) => {
    let alertRef = useRef(null);

    useEffect(() => {
        // GSAP
        const tlEnter = new TimelineLite();

        TweenMax.to(alertRef, 0, {css: {visibility: 'visible'}});

        tlEnter
            .from(alertRef, {duration: 0.8, x: 500, ease: Power3.easeInOut})
            .to(alertRef, {duration: 0.8, x: 500, ease: Power3.easeInOut, delay: 3});

        // Timer
        const timer = setTimeout(() => removeAlert(id), 4500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            className={'alert ' + (success ? 'success' : 'error')}
            ref={(el) => (alertRef = el)}
            onClick={() => removeAlert(id)}
        >
            {text}
        </div>
    );
};

export default Alert;
