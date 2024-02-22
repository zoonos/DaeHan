'use client'

import { Box, TextField, Button } from "@mui/material";
import { Header } from "../../../../../../component/header/header";
import { WrapMobile } from "../../../../../../component/wrap/wrap";

export default function NotiListPage(){
    return(
        <WrapMobile>
            <Header title="공지사항"/>
            <Box>공지사항</Box>
        </WrapMobile>
    )
}