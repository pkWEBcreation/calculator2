function buttonClick(action) {
    document.getElementById("screen").innerHTML += action
    return action

}

function answer() {
    var a = document.getElementById("screen").innerHTML
    var b = eval(a)
    document.getElementById("screen").innerHTML = b
    return b
}

function reset() {
    document.getElementById("screen").innerHTML = ''
}
function back(){
    var a = document.getElementById("screen").innerHTML
    var b = a.length
    var c = b-1
    document.getElementById("screen").innerHTML = a.slice(0,c)
}
