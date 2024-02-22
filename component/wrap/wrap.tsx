'use client'

import { ReactNode } from 'react';
import styles from './wrap.module.css';

type iChild = {
    children: ReactNode,
    bg? :string
    
}

function WrapMobile(props:iChild){
    const { children, bg } = props;

    return(
        <div
            className={`${styles.wrap}`}
            style={
                (bg === 'dark') ? ({backgroundColor:'#000'}) : {}
            }
        >{children}</div>
    )
}

export {WrapMobile}