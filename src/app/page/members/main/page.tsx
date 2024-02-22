'use client'

import { useRecoilState } from 'recoil';

import { Box } from "@mui/material";

import { WrapMobile } from "../../../../../component/wrap/wrap";

import BottomNav from '../../../../../component/bottomNav/bottomNav';
import { tab } from '../../../../../store/atoms';
import { JudoBelts, JiujitsuBelts } from '../../../../../component/belt/belt';
import MainScreen from '../../../../../component/screen/main/main';
import TimeTableScreen from '../../../../../component/screen/timeTable/timeTable';


export default function MainPage(){

    const [tabVal, setTabVal] = useRecoilState(tab);

    return(
        <WrapMobile>
            <Box sx={{p:2, pb: 11, minHeight:'100vh'}}>
                {
                    (tabVal === 'main') ? 
                        <MainScreen/> : 
                        (tabVal === 'video') ? 
                            <TimeTableScreen/> :
                            (tabVal === 'more') ? 
                                <></> : <></>
                }
                <BottomNav />
            </Box>
        </WrapMobile>
    )
}