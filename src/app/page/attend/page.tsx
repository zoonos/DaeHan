'use client'

import { AttendBtn } from "../../../../component/button/button";

import { useRecoilState } from 'recoil';
import { attendNum } from '../../../../store/atoms';
import { WrapMobile } from '../../../../component/wrap/wrap';
import { Box } from '@mui/material';

export default function AttendPage() {

    const [number, setNumber] = useRecoilState(attendNum);

    return (
        <WrapMobile>
            <Box sx={{
                flex: 2,
                display: 'flex',
                justifyContent: 'center',
                alignItems:'center',
                fontSize: '10vw',
                color: '#000'
            }}>
                <div>{number}</div>
            </Box>
            <Box sx={{
                flex: 6,
                display:'flex',
                flexWrap:'wrap'
            }}>
                <AttendBtn align="end" value="1" />
                <AttendBtn align="center" value="2" />
                <AttendBtn align="start" value="3" />
                <AttendBtn align="end" value="4" />
                <AttendBtn align="center" value="5" />
                <AttendBtn align="start" value="6" />
                <AttendBtn align="end" value="7" />
                <AttendBtn align="center" value="8" />
                <AttendBtn align="start" value="9" />
                <AttendBtn align="end" value="*" />
                <AttendBtn align="center" value="0" />
                <AttendBtn align="start" value="#" />
                <AttendBtn align="end" value="blank" />
                <AttendBtn align="center" value="check" />
                <AttendBtn align="start" value="delete" />
            </Box>
            <Box sx={{flex:1}}></Box>
        </WrapMobile>
    )
}