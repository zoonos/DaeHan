'use client'

import { Box, TextField, Button } from "@mui/material";
import { WrapMobile } from "../../../../../component/wrap/wrap";
import Image from 'next/image';
import logo from '../../../../../public/icons/pwa-icons/icon-512x512.png';
import { useRouter } from "next/navigation";

export default function SignInPage(){
    const router = useRouter();

    function login(){
        router.push('./main')
    }

    return(
        <WrapMobile>
            <Box sx={{p:2, height:'100%', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                <Box sx={{fontSize: '1.2rem', width:'100%', p:5, fontWeight:'bold', color:'#232e59'}}>
                    <Box sx={{mb:1}}>DAEHAN JUDO &</Box>
                    <Box sx={{textAlign:'right'}}>JOHN FRANKL JIU JITSU</Box>
                </Box>
                <TextField
                    required
                    fullWidth
                    id="id"
                    label="휴대폰 번호"
                    placeholder="휴대폰 번호를 입력해주세요."
                    sx={{mb:2}}
                />
                <TextField
                    required
                    fullWidth
                    id="pw"
                    label="비밀번호"
                    type="password"
                    placeholder="비밀번호를 입력해주세요."
                    sx={{mb:2}}
                />
                <Button variant="contained" sx={{width:'100%', mt:3, p:2}} onClick={() => login()}>로그인</Button>
                <Box sx={{display:'flex', mt:3, width:'100%', justifyContent:'space-between'}}>
                    <Button onClick={() => router.push('./signup')}>회원가입</Button>
                    <Box sx={{display:'flex'}}>
                        <Button onClick={() => router.push('./resetPw')}>비밀번호 재설정</Button>
                    </Box>
                </Box>
            </Box>
        </WrapMobile>
    )
}