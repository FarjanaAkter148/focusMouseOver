// $(document).on("click", function(){
//     $("h1").text("HEllo");
// })

var cursor = document.getElementById
("cursor");
document.addEventListener("mousemove", function(e){
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
})
