function playerWon() {
    document.querySelector("#wonmsg").style.display = "inline"
    document.querySelector("#gamebutton").style.display = "none"
}

function moveButton() {
    let top_offset  = Math.floor(Math.random() * 100)
    let left_offset = Math.floor(Math.random() * 100)
    document.querySelector("#gamebutton").style.top  = top_offset  + "%"
    document.querySelector("#gamebutton").style.left = left_offset + "%"
}

moveButton()
