document.addEventListener("DOMContentLoaded", () => {
const yt = document.querySelector('#ytbtn');
const hdbtn = document.querySelector('#hdbtn');
const ntbtn = document.querySelector('#ntbtn');
var home = document.querySelector('#homebtn');
const links = ["https://c.mandela.h.sabishare.com/dl/rFJsJcwZd03/41f30f066b5985d6cf73caea81eaa5374cc65c16b30187d98f3b97364d9ec09d/Encanto_(2021)_(NetNaija.com).mp4"];
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