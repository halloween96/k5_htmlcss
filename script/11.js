let s = "Hello Javascript!!";

console.log("문자열=", s)
console.log("문자열길이 =", s.length)
console.log("첫번째문자 =", s[0])
console.log("5문자 추출 = ", s.substring(0,5))
console.log("5문자 추출 = ", s.slice(0,6))
console.log("마지막문자 추출 = ", s.slice(-1))

let result = "";
for(let c of s){
    if(c >= "a" && c <= "z") result = result + c.toUpperCase();
    else result = result + c.toLowerCase();
}
console.log("대소문자 변환 =", result);

//s= "12";
//isNaN(s) : 숫자로 이루어진 문자열은 false
console.log("숫자확인 =", isNaN(s));
console.log("대문자 변환 =", s.toUpperCase());
console.log("소문자 변환 =", s.toLowerCase());
console.log("J의 위치", s.indexOf("J"))
console.log("x의 위치", s.indexOf("x"))
console.log("J의 유무 =", s.includes("J"))
console.log("X의 유무 =", s.includes("X"))
//------------------------------------------------//
document.addEventListener("DOMContentLoaded", ()=> {
    const txt1 = document.querySelector("#txt1");
    const txt2 = document.querySelector("#txt2");
    
    const bt1 = document.querySelector("#bt1");
    const bt2 = document.querySelector("#bt2");
    //회문 처리
    bt1.addEventListener("click", (e)=>{
        e.preventDefault();
        let result = "";
        
        for(let i = txt1.value.length - 1; i >=0; i--){
            result = result + txt1.value[i];
        }
        console.log(result);
        if (result == txt1.value) txt2.value = "회문입니다."
        else txt2.value = "회문이 아닙니다."
    });

    //숫자 합계
    bt2.addEventListener("click", (e)=>{
        e.preventDefault();

    });


});