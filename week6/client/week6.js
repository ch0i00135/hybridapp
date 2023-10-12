const btn=document.getElementById('btn');
const txt=document.getElementById('text');

btn.addEventListener('click', function () {
    fetch('http://localhost:3000/hi')
    .then(response => response.text())
    .then(data => {
        txt.innerText = data;
    })
    .catch(error => {
        console.error('데이터 가져오기 실패:', error);
    });
});