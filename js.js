const alles = document.querySelectorAll('.vlak');
const rimpel = document.createElement('div');
rimpel.classList = 'rimpel';

function maakRipple(e) {
    console.log(e);
    let x = parseInt(e.pageX - this.offsetLeft -50);
    let y = parseInt(e.pageY - this.offsetTop -50);
    rimpel.style.left = x + 'px'; 
    rimpel.style.top = y + 'px';
    e.target.append(rimpel);
    rimpel.classList.add('groeien');
}
for(let i=0; i<alles.length; i++) {
    alles[i].addEventListener('click', maakRipple);
}