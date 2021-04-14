
function change() {
    $("#hid123").html("CSIE@CGU");
    $("#pid123").html("怎麼那麼棒")
    /*var header = document.getElementById("hid123");
    header.innerHTML = "CSIE@CGU";
    var para = document.getElementById("pid123");
    para.innerHTML = "怎麼那麼棒";*/
}

function new_button() {
    var btn="<button id='change'>Change this document</button>";
    $("body").append(btn);
    $("#change").click(change);
    /*var btn = document.createElement("BUTTON");
    btn.innerHTML = "Change this document";
    document.body.appendChild(btn);
    btn.addEventListener("click", change);*/
}
$("#btn").click(new_button);