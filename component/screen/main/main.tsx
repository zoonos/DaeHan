'use cient'
import * as React from 'react';

import { Box, Card, CardContent, Typography, IconButton, Badge, Modal } from "@mui/material";
import CampaignIcon from '@mui/icons-material/Campaign';
import TableChartIcon from '@mui/icons-material/TableChart';
import { JiujitsuBelts, JudoBelts } from "../../belt/belt";
import TimeTableScreen from '../timeTable/timeTable';
import { useRouter } from 'next/navigation';

export default function MainScreen(){
    const router = useRouter();

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80%',
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 2,
      };

    return(
        <>
            <Box sx={{textAlign: 'right'}}>
                <IconButton size='large' onClick={handleOpen}>
                    <TableChartIcon color="action" fontSize="inherit"/>
                </IconButton>
                <IconButton size='large' onClick={() => router.push('./noti/list')}>
                    <Badge variant="dot" invisible={false} color="primary">
                        <CampaignIcon color="action" fontSize="inherit"/>
                    </Badge>
                </IconButton>
            </Box>
            <Box sx={{fontWeight:'bold', fontSize:'1.3rem'}}>
                <Box>심준호님</Box>
                <Box>안녕하세요!</Box>
            </Box>
            <Box sx={{display:'flex', mt:3, mb:3}}>
                <Box sx={{flex: 1, display:'flex', justifyContent:'center'}}>
                    <JudoBelts grade='JD01' date='2023. 12. 11'/>
                </Box>
                <Box sx={{flex: 1, display:'flex', justifyContent:'center'}}>
                    <JiujitsuBelts grade='JJBK4' date='2023. 12. 11'/>
                </Box>
            </Box>
            <Card variant="outlined" sx={{mb:2, p:2, display: 'flex', alignItems:'flex-end', justifyContent:'space-between'}}>
                <Typography sx={{ fontWeight:'bold', fontSize:'1.1rem' }}>
                    12월 출석
                </Typography>
                <Box sx={{fontWeight:'bold'}}>3회</Box>
            </Card>
            <Card variant="outlined">
                <CardContent>
                    <Typography sx={{ fontWeight:'bold', fontSize: '1.1rem' }} gutterBottom>
                        공지사항
                    </Typography>
                    <Box sx={{display:'flex', alignItems:'flex-end', justifyContent: 'space-between'}}>
                        <Typography sx={{fontWeight:'bold', overflow:'hidden', whiteSpace:'nowrap', textOverflow:'ellipsis', wordBreak:'break-all', flex: 1}}>공지사항 제목제목제목ㅁㅈㅈasdasdasdsadsadasdㅈㅈㅈ</Typography>
                        <Typography sx={{fontSize: 14, pl:2}} color="text.secondary">23. 12. 22</Typography>
                    </Box>
                </CardContent>
            </Card>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <TimeTableScreen/>
                </Box>
            </Modal>
        </>
    )
}