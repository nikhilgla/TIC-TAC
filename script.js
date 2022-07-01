console.log("Welcome to the game");

let turn = 'X'
let gameover = false;
let jankari = document.getElementsByClassName("infor")[0].innerText;
console.log(jankari);
document.getElementsByClassName("infor")[0].innerText ="ahhahhahaha"
const changeturn = () => {
    return turn === 'X' ? 'O' : 'X';
}
const checkwin = ()=> {
    let boxt = document.getElementsByClassName('boxtext');
    let wins =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    wins.forEach(e =>{
        if((boxt[e[0]].innerText===boxt[e[1]].innerText) && (boxt[e[1]].innerText===boxt[e[2]].innerText) && (boxt[e[0]].innerText!=='')){
            console.log("jeeta");
            document.getElementsByClassName("infor")[0].innerText=turn + " WON";
            gameover=true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "350px";
        }
    })
}

let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element => {
    let boxt = element.querySelector(".boxtext");
    element.addEventListener('click', () => {
        console.log("daba");
        if (boxt.innerText === '' && !gameover) {
            console.log("khali");
            boxt.innerText = turn;
            checkwin();
            if (!gameover) {
                turn = changeturn();
                document.getElementsByClassName("infor")[0].innerText = "turn for " + turn;
            }
        }


    })
})