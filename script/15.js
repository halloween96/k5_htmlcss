let arr = [0,0,0,0,0,0,0,0,1];
let isShuffle = false;
document.addEventListener("DOMContentLoaded", ()=>{
    const bt = document.querySelector("#d2 > button");

    bt.addEventListener("click", ()=>{
        if(!isShuffle){
            console.log("변경전", arr);
            // 배열 섞기
            arr = arr.sort(() => Math.random() - 0.5);
            /* 배열 정렬
            sort() : 알파벳 정렬
            sort((a,b) => a - b) : 숫자 오름차순
            sort((a,b) => b - a) : 숫자 내림차순
            */
            console.log("변경후", arr);
            isShuffle = true;
        }
    });
})