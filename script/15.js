/*
1. 폭탄섞기
 - 배열이용 => 배열에 1이 있는 위치가 폭탄위치
 - 1의 위치를 suffle기능을 구현
 - 폭탄이 섞였는지 issuffle flage변수를 활용

2. 박스 클릭 처리
 - 폭탄이 섞여야 박스가 클릭이 됨 => issuffle == ture
  - 이미 이미지가 있으면 더이상 
*/

let arr = [0,0,0,0,0,0,0,0,1];
let isShuffle = false;
let cnt = 0;

const init = (box, msg) => {
    msg.innerHTML = "";
    box.forEach(element => {
        element.innerHTML = element.getAttribute("id").slice(-1);
    });
    cnt = 0;
}

document.addEventListener("DOMContentLoaded", ()=>{
    const bt = document.querySelector("#d2 > button");
    const box = document.querySelectorAll(".box");
    const msg = document.querySelector("#msg");

    bt.addEventListener("click", ()=>{
        if(!isShuffle){
            init(box, msg);
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

    for(let bb of box) {
        bb.addEventListener("click", ()=>{
            if (!isShuffle) {
                msg.innerHTML = "<h2>폭탄을 섞어주세요.</h2>";
                return ;
            }
            if (isNaN(bb.innerHTML)){
                console.log("섞여있음");
                return;
            }
            let idx = bb.getAttribute("id").slice(-1) -1;
            //console.log(box.getAttribute("id").slice(-1));
            if (arr[idx] === 0) {
                bb.innerHTML = '<img src = "./images/hart.png">'
                cnt++;
                console.log("cnt=", cnt)
                /*
                if (cnt === 8){
                    let idx1 = arr.indexOf(1) +1;
                    console.log("idx1 =", idx1);
                    document.querySelector(`.box${idx1}`).innerHTML = '<img src = "./images/hart.png">';
                    isShuffle = false;
                    msg.innerHTML = "<h2>성공</h2>"
                }
                */
            }
            else{
                bb.innerHTML = '<img src = "./images/boom.png">';
                isShuffle = false;
                msg.innerHTML = "<h2>실패</h2>"
            }
            if(cnt === 8) {
                    bb.innerHTML = '<img src = "./images/hart.png">'
                    msg.innerHTML = "<h2>성공</h2>"
            }
            //console.log(idx);
        });
    }
})