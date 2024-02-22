import styles from './belt.module.css';

type iJudoBelts = {
    grade: string,
    date: string
}

function JudoBelts(props:iJudoBelts){
    const {grade, date} = props

    let tempGrade = Number(grade.slice(2,4));
    let bg, border;

    if(tempGrade === 1){
        // 흰띠
        bg = 'white';
        border = 'black';
    } else if(tempGrade === 2){
        // 노랑띠
        bg = 'yellow';
        border = 'yellow';
    } else if(tempGrade === 3){
        // 초록띠
        bg = 'green';
        border = 'green';
    } else if(tempGrade === 4){
        // 파랑띠
        bg = 'blue';
        border = 'blue';
    } else if(tempGrade === 5){
        // 갈색띠
        bg = 'brown';
        border = 'brown';
    } else if((tempGrade >= 6) && (tempGrade <= 10)){
        // 검정띠 (1단, 2단, 3단, 4단, 5단)
        bg = 'black';
        border = 'black';
    } else if((tempGrade >= 11) && (tempGrade <= 13)){
        // 용띠 (6단, 7단, 8단)
        bg = 'white';
        border = 'red';
    } else if((tempGrade >= 14)){
        // 빨강띠 (9단 이상)
        bg = 'red';
        border = 'red';
    }

    return(
        <div className={`${styles.beltWrap}`}>
            <div className={`${styles.belts}`} style={{backgroundColor:bg, borderColor: border}}>
                {
                    // 홍백띠를 위한 배경
                    (tempGrade >= 11) && (tempGrade <= 13) ?
                        <div className={`${styles.hb}`}></div> : 
                        <></>
                }
                {
                    // 1단 넘어가면 각인이 생김
                    tempGrade >= 6 ? 
                        <div className={`${styles.jdText}`}>
                            <div>{tempGrade - 5}</div>
                            <div>단</div>
                        </div> : 
                        <></>
                }
            </div>
            <div className={`${styles.date}`}>{date}</div>
        </div>
    )
}

type iJiujitsuBelts = {
    grade: string,
    date: string
}
function JiujitsuBelts(props:iJiujitsuBelts){
    const {grade, date} = props;

    let beltColor = grade.slice(2,4);
    let gral = Number(grade.slice(4,5));
    let bg, border;
    let pretaBg = 'black';

    if(beltColor === 'WT'){
        // 화이트
        bg = 'white';
        border = 'black';
    } else if(beltColor === 'BU'){
        // 블루
        bg = 'blue';
        border = 'blue';
    } else if(beltColor === 'PU'){
        // 퍼플
        bg = 'purple';
        border = 'purple';
    } else if(beltColor === 'BN'){
        // 브라운
        bg = 'brown';
        border = 'brown';
    } else if(beltColor === 'BK'){
        // 블랙
        bg = 'black';
        border = 'black';
        pretaBg = 'red';
    }

    const gralLoop = () => {
        const tempArr = [];
        for(let i=0; i<gral; i++){
            tempArr.push(<div className={`${styles. gral}`}></div>);
        }
        return tempArr;
    }

    return(
        <div className={`${styles.beltWrap}`}>
            <div className={`${styles.belts}`} style={{backgroundColor:bg, borderColor:border}}>
                <div className={`${styles.preta}`} style={{backgroundColor:pretaBg}}>
                    { gralLoop() }
                </div>
            </div>
            <div className={`${styles.date}`}>{date}</div>
        </div>
    )
}

export {JudoBelts, JiujitsuBelts}