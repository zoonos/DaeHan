import { atom } from "recoil";

// 출석체크 입력 번호
export const attendNum = atom({
    key:'attendNum',
    default:''
});

// 하단 탭
export const tab = atom({
    key:'tab',
    default:'main'
})