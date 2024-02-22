'use client'

import { ReactNode } from "react";
import { RecoilRoot } from "recoil";
import theme from './theme';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

type iChild = {
    children: ReactNode
}

export default function WrapApp(props:iChild){
    
    const { children } = props;
    
    return(
        <RecoilRoot>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <body>{children}</body>
                </ThemeProvider>
            </LocalizationProvider>
        </RecoilRoot>
    )
}