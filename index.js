document.addEventListener("DOMContentLoaded", () => {
const yt = document.querySelector('#ytbtn');
const hdbtn = document.querySelector('#hdbtn');
const ntbtn = document.querySelector('#ntbtn');
var home = document.querySelector('#homebtn');
const optionbtn = document.querySelector('.Optionbtn');
function showContentYt(){
    var ytcnt = document.querySelector('#ytcnt');
    yt.onclick = () => {
    ytcnt.style.display = "block";
    optionbtn.style.display = 'none';
    home.style.display = 'block';

    }
}
function showContentHd(){
    var hdcnt = document.querySelector('#hdcnt');
    hdbtn.onclick = () => {
        hdcnt.style.display = 'block';
        optionbtn.style.display = 'none';
        home.style.display = 'block';
    }
}
function showContentNt(){
    var ntcnt = document.querySelector('#ntcnt');
    ntbtn.onclick = () => {
        ntcnt.style.display = 'block';
        optionbtn.style.display = 'none';
        home.style.display = 'block';
    }
}
showContentNt();
showContentHd();
showContentYt();

});