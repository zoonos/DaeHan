import { Box, IconButton, Badge } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import { useRouter } from 'next/navigation';


type iHeader= {
    title : string
}

function Header(props:iHeader){
    const {title} = props;
    const router = useRouter();

    return(
        <Box sx={{pt:1, display:'flex', alignItems:'center'}}>
            <IconButton size='large' onClick={() => router.back()}>
                <ArrowBackIosNewIcon fontSize="inherit"/>
            </IconButton>
            <Box sx={{fontWeight: 'bold', fontSize:'1.2rem'}}>{title}</Box>
        </Box>
    )
}

export {Header}