// function hello1(n){
//     alert("Hello! 버튼" + n);
// }

const hello = (n) => {
    // alert("Hello! 버튼" + n);
    // document.getElementById('msg').innerHTML = "<h2>Hello! 버튼" + n +"</h2>";
    // document.querySelector('#msg').innerHTML = "<h2>Hello! 버튼" + n +"</h2>";
    // switch (n) {
    //     case 1:
    //         document.querySelector('#msg1').innerHTML = "<h2>Hello! 버튼" + n + "</h2>"; break;
    //     case 2:
    //         document.querySelector('#msg1').innerHTML = "<h2>Hello! 버튼" + n + "</h2>"; break;
    //     case 3:
    //         document.querySelector('#msg2').innerHTML = "<h2>Hello! 버튼" + n + "</h2>"; break;
    //     case 4:
    //         document.querySelector('#msg2').innerHTML = "<h2>Hello! 버튼" + n + "</h2>"; break;
    // }

    //백틱(`)사용
    let cnt ;
    
    //삼항 연산
    // if (n <=2) nt = 1;
    // else cnt = 2;
    n <= 2 ? cnt = 1 : cnt = 2;
    console.log("cnt", cnt);
    document.querySelector(`#msg${cnt}`).innerHTML = "<h2>Hello! 버튼" + n + "</h2>";

};

// DOM이 생성 되고 난 후 실행
document.addEventListener("DOMContentLoaded", () => {
    //버튼 생성
    const bt1 = document.createElement("button");
    const bt1Text = document.createTextNode("버튼3을 눌러주세요.");

    bt1.appendChild(bt1Text);
    bt1.setAttribute("id", "bt3");

    const bt2 = document.createElement("button");
    const bt2Text = document.createTextNode("버튼4를 눌러주세요.");

    bt2.appendChild(bt2Text);
    bt2.setAttribute("id", "bt4");
    document.getElementById("btdiv2").append(bt1);
    document.getElementById("btdiv2").append(bt2);

    document.getElementById("bt3").addEventListener("click", () => {
        hello(3);
    });
    bt2.addEventListener("click", () => {
        hello(4);
    });
});