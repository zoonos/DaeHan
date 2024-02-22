'use client'

import styles from './button.module.css';

import { useRecoilState } from 'recoil';
import { attendNum } from '../../store/atoms';

import BackspaceRoundedIcon from '@mui/icons-material/BackspaceRounded';
import EventAvailableRoundedIcon from '@mui/icons-material/EventAvailableRounded';

type iAttendBtn = {
    align: string
    value: string
}

function AttendBtn(props:iAttendBtn){

    const {align, value} = props;
    const [number, setNumber] = useRecoilState(attendNum);

    const delNum = () => {
        // 삭제 버튼
        let tempNum = number;
        setNumber(tempNum.slice(0,-1).replace(/-/g,''));
    }

    const chkNum = () => {
        // 출석 버튼
        alert('출석완료')
    }

    const plusNum = (val:string) => {
        let tempNum = number;
        tempNum += value;
        if((tempNum.length > 13) || (value === '*') || (value === '#')){
            return false;
        } else {
            setNumber(tempNum.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
        }

    }

    return(
        <div
            className={`${styles.attendBtnWrap}`}
            style={
                align === 'start' ? 
                    {
                        justifyContent: 'flex-start'
                    } : 
                    align === 'end' ?
                        {
                            justifyContent: 'flex-end'
                        } : 
                        {
                            justifyContent: 'center'
                        }
            }
        >
            {
                (value !== 'blank') &&
                <button
                    className={`${styles.attendBtn}`}
                    style={
                        value === 'delete' ? 
                            { backgroundColor: 'transparent' } :
                            value === 'check' ? 
                                { backgroundColor:'#4ADA63', color:'#ffffff' } :
                                { backgroundColor:'#dddddd' }
                                
                    }
                    onClick={
                        value === 'delete' ? 
                            () => delNum() : 
                            value === 'check' ? 
                                () => chkNum() : 
                                () => plusNum(value)
                    }
                >
                {
                    value === 'delete' ? 
                        <BackspaceRoundedIcon/> :
                        value === 'check' ?
                        <EventAvailableRoundedIcon/> :
                        <span>{value}</span>
                }
            </button>
            }

        </div>
    )
}

export { AttendBtn }