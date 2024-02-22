'use client'

import * as React from 'react';
import { Button, Box } from "@mui/material";

import { WrapMobile } from '../../../../../component/wrap/wrap';
import { Header } from '../../../../../component/header/header';
import Stepper from '../../../../../component/stepper/stepper';

import SignInStep1 from '../../../../../component/screen/signup/step1/step1';
import SignInStep2 from '../../../../../component/screen/signup/step2/step2';
import SignInStep3 from '../../../../../component/screen/signup/step3/step3';

export default function SignUpPage() {

    const [activeStep, setActiveStep] = React.useState(1);
    const nextStep = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      };
    
    const backStep = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const [agree, setAgree] = React.useState(false);
    const changeCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAgree(event.target.checked);
    };
    return (
        <WrapMobile>
            <Header title="회원가입" />
            <Stepper allStep={3} nowStep={activeStep} color='#232e59'/>
            <Box sx={{
                    p:2, flex: 1, pb: 4,               
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'space-between'
                }}>
                {
                    activeStep === 1 ? <SignInStep1 nextAction={nextStep} agreeYn={agree} checkAction={changeCheck}/>
                    : activeStep === 2 ? <SignInStep2 nextAction={nextStep}/>
                    : activeStep === 3 ? <SignInStep3/>
                    : ''
                }
            </Box>
        </WrapMobile>
    )
}