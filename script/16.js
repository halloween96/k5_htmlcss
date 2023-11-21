// 일일박스오피스 데이터 가져오기
const getBoxOffice = (dt, tbdiv, gubun) =>{
    let apikey = "f5eef3421c602c6cb7ea224104795888";
    let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${apikey}&targetDt=${dt}`
    if(gubun == '2') url = url + `&multiMovieYn=Y`;
    else if (gubun == '3') url = url + `&multiMovieYn=N`;
    let boxList;
    let tags = `
    <table>
                    <tr>
                      <th>순위</th>
                      <th>영화명</th>
                      <th>개봉일</th>
                      <th>매출액</th>
                      <th>관객수</th>
                    </tr>
    `
    console.log(url)
    fetch(url)
    .then(resp => {return resp.json()})
    .then((data) => {
        boxList = data.boxOfficeResult.dailyBoxOfficeList;
        /*boxList.map(item => {console.log(item.rank, item.movieNm, item.openDt, item.salesAmt, item.audiCnt)
        tags = tags + `<tr>`;
        tags = tags + `<td class = "sp1">${item.rank}</td>`;
        tags = tags + `<td class = "sp2">${item.movieNm}</td>`;
        tags = tags + `<td class = "sp1">${item.openDt}</td>`;
        tags = tags + `<td class = "sp3">${parseInt(item.salesAmt).toLocaleString('ko-KR')}원</td>`;
        tags = tags + `<td class = "sp3">${parseInt(item.audiCnt).toLocaleString('ko-KR')}명</td>`;
        tags = tags + `</tr>`;
    });*/
    let trs = boxList.map(item =>
        `<tr>
        <td class = "sp1">${item.rank}</td>
        <td class = "sp2">${item.movieNm}</td>
        <td class = "sp1">${item.openDt}</td>
        <td class = "sp3">${parseInt(item.salesAmt).toLocaleString('ko-KR')}원</td>
        <td class = "sp3">${parseInt(item.audiCnt).toLocaleString('ko-KR')}명</td>
        </tr>`
    );
    trs = trs.join('');
        tags = tags + trs + `</table>`;   
        tbdiv.innerHTML = tags;
        console.log(boxList)
    })

}
document.addEventListener("DOMContentLoaded", ()=>{
    //날짜 input 가져오기
    //const inputDt = document.querySelector("#dt");
    const tbdiv = document.querySelector("#tbdiv");
    const bt =document.querySelector("#bt")
    //조회 처리
    bt.addEventListener("click", (e)=>{
        e.preventDefault();
        const dt = inform.dt.value.replaceAll('-', '');
        const gubun = inform.gubun.value;
        if(dt === '' || dt === undefined){
            alert("날짜를 선택해 주세요.")
            return;
        }
        getBoxOffice(dt, tbdiv, gubun)
        //console.log(dt)
        //console.log(inform.gubun.value);
        //날짜형식으로 변경
        //const dt = e.target.value.replaceAll('-', '');
        //해당하는 날짜 조회
        //getBoxOffice(dt, tbdiv);
    })
})