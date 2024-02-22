'use client'
import { Box } from '@mui/material';
import styles from './stepper.module.css';
import { useState } from 'react';

type iStepper = {
    allStep: number,
    nowStep: number,
    color: string
}

export default function Stepper(props:iStepper){

    let per = (props.nowStep / props.allStep) * 100;

    return(
        <Box>
            <Box
                className={styles.stepper}
                sx={{
                    background:props.color,
                    width:`${per}%`,
                }}
            />
        </Box>
    )
}