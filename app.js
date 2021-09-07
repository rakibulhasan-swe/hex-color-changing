const searchBtn = document.getElementById('click-btn');
const hexCodeContainer = document.getElementById('hex-code');

const colorChange = () =>{
    const hexNumbers = ['0', '1', '2','3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    let hexCode = [];
    for(let i=0; i<6; i++){
        let randomIndex = Math.floor(Math.random()*hexNumbers.length);
        console.log(randomIndex);
        hexCode+=hexNumbers[randomIndex];
        console.log(hexCode);
    }
    hexCodeContainer.innerHTML = hexCode;
    document.getElementsByTagName('body')[0].style.background = '#'+hexCode;   
}
searchBtn.addEventListener('click', colorChange);