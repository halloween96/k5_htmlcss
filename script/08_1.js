// 버튼처리
const handleBtClick = (comImg, meImg, me, msg) => {
// 1. 컴퓨터 랜덤수 생성
//1 ~ 6까지
    const com = Math.floor(Math.random() * 6) + 1;
    console.log("com=", com, "me=", me);
// 2. 주사위 이미지 변경
    comImg.setAttribute("src", `./images/${com}.png`);
    meImg.setAttribute("src", `./images/${me}.png`);
// 3. 결과만들기
    if (com === me) msg.innerHTML = "비겼습니다.";
    else if (com > me) msg.innerHTML = "졌습니다.";
    else msg.innerHTML = "이겼습니다.";
}
document.addEventListener("DOMContentLoaded", () => {
   //구성요소 찾기
    const comImg = document.querySelector("#com");
    const meImg = document.querySelector("#me");

    const bts = document.querySelectorAll("#msg1 > button");
    const msg = document.querySelector("#sec3 > h1");
  
    //기본 for 문장
    // for(let i=0 ; i < bts.length ; i++) {
    //     console.log(bts[i]);
    // }

    // for in 문장
    // for(let i in bts) {
    //     console.log(bts[i]);
    // }

    // for each 문장
    // bts.forEach((item, idx) => {
    //     console.log(item, idx)});

    // for of 문장
    //[구조분해]
    // for(let [idx, item] of bts.entries()) {
    //     console.log(idx, item);
    // }
    for(let bt of bts) {
        bt.addEventListener("click", ()=>{
            const me = parseInt(bt.getAttribute("id").slice(-1));
            handleBtClick(comImg, meImg, me, msg);
            console.log(bt.getAttribute("id").slice(-1));
        })
    }
});
