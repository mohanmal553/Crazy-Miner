let set_mine = Math.ceil(Math.random()*9);
let boxes = document.querySelectorAll(".btn");
let set_mine_box = `box-${set_mine}`;

document.getElementById("play-again").addEventListener('click',()=>{
    location.reload();
})

let win_msg=()=>{
    document.getElementById("status").innerHTML = "You Win";
    document.getElementById("play-again").style.display="block";
}
let lose_msg=()=>{
    document.getElementById("status").innerHTML = "Game Over";
    document.getElementById("play-again").style.display="block";
}

let count = 0;
boxes.forEach((elem)=>{
    elem.addEventListener('click',()=>{
        if(elem.id != set_mine_box){
            elem.style.backgroundImage="url('coin.png')";
            count = count + 1;
            console.log(count)
        }
        else{
            elem.style.backgroundImage="url('mine.jpg')";
            boxes.forEach((e)=>{
                e.disabled=true;
            })
            lose_msg();
        }
        if(count == 8){
            // boxes.forEach((e)=>{
            //     e.disabled=true;
            // })
            win_msg();
        }
    })
})