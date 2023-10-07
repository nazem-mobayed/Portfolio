 function showMenu() {
    $("#bmb").fadeToggle(1200)
    $("#bm").slideToggle(1000)
}

function closeMenu() {
    showMenu()
}

$(document).ready(function(){
    $("#bm").hide()
    $("#bmb").hide()
})
$(document).ready(function(){
    $("#bm").hide()
    $("#bmb").hide()
})
    window.onload = () => {
        var now = new Date()
        var birth = new Date(2008,6,12)
        var result = Math.floor((now - birth) / 1000 / 60 / 60 / 24 / 30 / 12);
        document.getElementById("age").innerHTML=result
    }
function showCertificates() {
window.open("https://drive.google.com/drive/folders/1yJh1bt12DMh8VFDdEKQU7ihYgjBBohdv","_target")
}