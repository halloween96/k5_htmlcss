// 일일박스오피스 데이터 가져오기
const getBoxOffice = () =>{
    let url = "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20231119"
    let boxList;
    
    fetch(url)
    .then(resp => resp.json())
    .then((data) => {
        boxList = data.boxOfficeResult.dailyBoxOfficeList;
        console.log(boxList)
    })
}
document.addEventListener("DOMContentLoaded", ()=>{
    getBoxOffice();
})