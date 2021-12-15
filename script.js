console.log("it works")
function changeName(){
    document.getElementById("userName").innerText = "James Daughtery"
}
function acceptRequest(id){
    var element = document.querySelector(id)
    element.remove()
    document.getElementById("requestNumber").innerHTML--
    document.getElementById("connectionNumber").innerHTML++
}
function rejectRequest(id){
    var element = document.querySelector(id)
    element.remove()
    document.getElementById("requestNumber").innerHTML--
}
