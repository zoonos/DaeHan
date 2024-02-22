'use client'
import { Box, Button } from '@mui/material';
import * as React from 'react';

interface iStep1{
    nextAction: () => void,
    agreeYn: boolean,
    checkAction: (e:React.ChangeEvent<HTMLInputElement>) => void
}

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function SignInStep1(props: iStep1){

    const step1Next = () => {
        if(props.agreeYn){
            props.nextAction();
        } else {
            alert('동의를 먼저 해주세요.')
        }
    }

    return(
        <>
            <Box>
                반갑습니다!<br/>
                <br/>
                본 서비스는 개인정보 일부를 수집합니다.<br/>
                수집 항목은 다음과 같습니다.<br/>
                <br/>
                이름, 휴대폰번호<br/>
                <br/>
                출석체크와 사용자를 특정하기 위한 정보입니다.<br/>
                <br/>
                수집하는 정보들은 서비스를 위한 최소한의 정보이고,<br/>
                입관원서에 포함된 정보입니다.<br/>
                <br/>
                가입절차 및 수집정보는 시기에 따라 달라질 수 있습니다.
            </Box>
            <FormControlLabel 
                control={
                    <Checkbox 
                        checked={props.agreeYn}
                        onChange={props.checkAction}    
                    />
                } 
                label="개인정보 수집에 동의합니다." 
                sx={{mt:2}}
            />
            <Button 
                variant="contained" 
                sx={{width:'100%', mt:3, p:2}}
                onClick={step1Next}
                disabled={!props.agreeYn}
            >다음단계</Button>
        </>
    )
}