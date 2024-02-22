import { Paper, BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useRecoilState } from "recoil";
import { tab } from "../../store/atoms";

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PhotoIcon from '@mui/icons-material/Photo';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
export default function BottomNav(){

    const [tabVal, setTabVal] = useRecoilState(tab)

    return(
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation
                showLabels
                sx={{height:72}}
                value={tabVal}
                onChange={(event, newValue) => {
                    setTabVal(newValue);
                }}
            >
                <BottomNavigationAction label="메인" icon={<HomeRoundedIcon />} value="main" sx={{justifyContent:'flex-start', p:1}} />
                <BottomNavigationAction label="사진" icon={<PhotoIcon />} value="photo" sx={{justifyContent:'flex-start', p:1}} />
                <BottomNavigationAction label="출석" icon={<EventAvailableIcon />} value="attend" sx={{justifyContent:'flex-start', p:1}} />
                <BottomNavigationAction label="더보기" icon={<MoreHorizRoundedIcon />} value="more" sx={{justifyContent:'flex-start', p:1}} />
            </BottomNavigation>
        </Paper>
    )
}