import { Card, CardContent, Typography } from "@mui/material"

export default function TimeTableScreen(){
    const dayList = [ '일','월','화','수','목','금','토' ];
    const timeList = ['4시 ~ 5시', '5시 30분 ~ 6시 30분', '7시 ~ 8시', '8시 ~ 9시', '9시 ~ 10시'];
    const timeTable = ['유도', '주짓수', '유도', '유도 (입시반)', '주짓수'];

    let today = new Date;
    let day = today.getDay();

    return(
        <>
            <Typography sx={{mb:2, fontWeight: 'bold'}}>시간표</Typography>
            <Card variant="outlined">
                <CardContent>{dayList[day]}요일</CardContent>
            </Card>
            {
                day === 0 ? 
                    <Card sx={{mt:1}} variant="outlined">
                        <CardContent>오늘은 수업이 없습니다.</CardContent>
                    </Card> : 
                    day === 6 ? 
                        <Card sx={{mt:1, flex:1}} variant="outlined">
                            <CardContent sx={{display:'flex', justifyContent:'space-between'}}>
                                <Typography>2시 ~ 4시</Typography>
                                <Typography>오픈매트</Typography>
                            </CardContent>
                        </Card> : 
                        timeList.map((val, key) => {
                            return(
                                <Card sx={{mt:1, flex:1}} variant="outlined">
                                    <CardContent sx={{display:'flex', justifyContent:'space-between'}}>
                                        <Typography>{val}</Typography>
                                        <Typography>{timeTable[key]}</Typography>
                                    </CardContent>
                                </Card>
                            )
                        })
            }
        </>
    )
}