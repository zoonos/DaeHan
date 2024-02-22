'use client'
import * as React from 'react';
import { Box, Button, TextField, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { get } from '../../../../util/get';
interface iStep2{
    nextAction: () => void,
}

export default function SignInStep2(props: iStep2){

    function phoneNumberCheck(number:string){
        let result = /^(01[016789]{1})[0-9]{3,4}[0-9]{4}$/;
        return result.test(number);
    }

    const [num, setNum] = React.useState();
    const handleChange = (e:any) => {
        const regex = /^[0-9\b]+$/;
        if (e.target.value === "" || regex.test(e.target.value)) {
          setNum(e.target.value);
        }
      };

    const step2Next = () => {
        let name = (get('#name') as HTMLInputElement).value;
        let phone = (get('#number') as HTMLInputElement).value;
        let pw = (get('#pw') as HTMLInputElement).value;
        let pwchk = (get('#pwchk') as HTMLInputElement).value;


        console.log(name)
        console.log(phone)
        console.log(pw)
        console.log(pwchk)

        if(name && phone && pw && pwchk){
            // 휴대폰 번호 정규식이 맞는지
            console.log(phoneNumberCheck(phone))
        } else {
            // 비어있는 값이 있음.
            alert('모든 항목을 작성해주세요.')
        }
        
        
        // 휴대폰 번호 있어야 하고, 휴대폰 번호는 정규식에 맞춰서
        // 비밀번호가 있어야하고,
        // 비밀번호 정규식에 맞춰야 하고
        // 비밀번호 체크 있어애ㅑ하고
        // 두 값이 같아야 하고,
        // 핀번호 값이 있어야하고,
        // 핀번호 정규식 있어야 하고
        // 모두 통과하면 가입 요청 ㄱㄱ
    }

    const [showPw, setShowPw] = React.useState(false);
    const [showPwchk, setShowPwchk] = React.useState(false);

    const handleClickShowPw = () => setShowPw((show) => !show);
    const handleClickShowPwchk = () => setShowPwchk((show) => !show);
  
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    };

    return(
        <>
            <Box>
                <Box>
                    기본 정보를 작성해주세요.
                </Box>
                <TextField
                    required
                    fullWidth
                    id="name"
                    label="이름"
                    placeholder="이름을 입력해주세요."
                    sx={{mt:2}}
                    helperText="본명으로 기입해주세요."
                />
                <TextField
                    // error
                    required
                    fullWidth
                    id="number"
                    label="휴대폰 번호"
                    type="string"
                    placeholder="휴대폰 번호를 입력해주세요."
                    onChange={(e) => handleChange(e)}
                    value={num}
                    sx={{mt:2}}
                    inputProps={{ inputMode: 'numeric' }}
                    helperText="하이픈(-)을 제외하고 입력해주세요."
                />
                <TextField
                    required
                    fullWidth
                    id="pw"
                    label="비밀번호"
                    placeholder="비밀번호를 입력하세요."
                    sx={{mt:2}}
                    helperText="영문+숫자 조합 8자리 이상으로 입력해주세요."
                    variant="outlined"
                    type={showPw ? "text" : "password"}
                    InputProps={{
                        endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPw}
                            onMouseDown={handleMouseDownPassword}
                            >
                            {showPw ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                        )
                    }}
                />
                <TextField
                    required
                    fullWidth
                    id="pwchk"
                    label="비밀번호 확인"
                    placeholder="비밀번호를 다시 입력하세요."
                    sx={{mt:2}}
                    helperText="영문+숫자 조합 8자리 이상으로 입력해주세요."
                    variant="outlined"
                    type={showPwchk ? "text" : "password"}
                    InputProps={{
                        endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPwchk}
                            onMouseDown={handleMouseDownPassword}
                            >
                            {showPwchk ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                        )
                    }}
                />
                {/* <TextField
                    required
                    fullWidth
                    id="pin"
                    label="PIN 번호"
                    type="number"
                    placeholder="PIN 번호를 입력해주세요."
                    // sx={{mb:0}}
                    inputProps={{ inputMode: 'numeric' }}
                    helperText="본인확인을 위해 사용하는 6자리로 이루어진 숫자입니다."
                /> */}
            </Box>
            <Button 
                variant="contained" 
                sx={{width:'100%', mt:3, p:2}}
                onClick={step2Next}
            >다음단계</Button>
        </>
    )
}