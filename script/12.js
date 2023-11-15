const show = (txt1, arr) => {
    txt1.value = arr.join(" ");
}
document.addEventListener("DOMContentLoaded", ()=>{
    // 입력버튼
    const bt11 = document.querySelectorAll(".bt11");
    // 삭제버튼
    const bt12 = document.querySelectorAll(".bt12");
    // 변경버튼
    const bt13 = document.querySelectorAll(".bt13");
    // txt input
    const txt1 = document.querySelector("#txt1");
    //배열(array) 선언
    let arr = [];
    // 오브젝트(object)
    const emoji = {"사과":'🍎', "바나나":'🍌', "오렌지":'🍊', "수박":'🍉', "당근":'🥕', "오이":'🥒', "아보카도":'🥑', "브로콜리":'🥦'}
    //입력 처리
    for(let bt of bt11){
        bt.addEventListener("click", (e)=> {
            e.preventDefault();

            // let emoji 
            // switch (bt.innerHTML) {
            //     case '사과': emoji = '🍎'; break;
            //     case '바나나': emoji = '🍌'; break;
            //     case '오렌지': emoji = '🍊'; break;
            //     case '수박': emoji = '🍉'; break;
            // }
            // 조건식 처리가 아닌 오브젝트로 처리
            arr.push(emoji[bt.innerHTML]);
            console.log(arr);
            txt1.value = arr.join(" ");
            
        })
    }
    //삭제 처리
    for(let bt of bt12){
        bt.addEventListener("click", (e)=>{
            e.preventDefault();
            // arr = arr.filter((item)=>{
            //     let key = bt.innerHTML.slice(0,-3);

            //     return item != emoji[key];
            // });
            arr = arr.filter( item => item != emoji[bt.innerHTML.slice(0, -3)]);
            // txt1.value = arr.join(" ");
            show(txt1, arr);
        })
    }
    //변경 처리
    for(let bt of bt13){
        bt.addEventListener("click", (e) =>{
            e.preventDefault();
            let key = bt.innerHTML;
            key = key.split("→");
           // console.log(emoji[key[0]], emoji[key[1]])
            arr = arr.map(item => item == emoji[key[0]] ? emoji[key[1]] : item);
            txt1.value = arr.join(" ");
        })
    }
});