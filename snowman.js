var body = document.body;

function backgroundColor(event) {
    if (event.key === "d") {
        body.style.background = "blue";
    } else if (event.key === "o") {
        body.style.background = "red";
    } else {
        body.style.background = "white";
    }
}
window.addEventListener("keypress", backgroundColor);



var sg = document.createElement("IMG");
var sm = document.getElementById("snowman");
sm.addEventListener('click', (event) => {
    sunGlasses(event);
});

function sunGlasses() {
    var sgimgs = ["https://lh3.googleusercontent.com/proxy/KKr72CUphNPH0Al89S7QMsbf-bYTo6aFno8txbykj7TDDNKz0Q0NkSV0gGsITcO544m7iU0eEaJFZbNDiihcMal6fsyc9AUXS-SLKTxpO2Mssu41clAQesc", "https://lh3.googleusercontent.com/proxy/nkRn4w-0bTnItjfIbTuRa3okkx8icNAz-yJ3AKD3l3fuv8QMl_DGiCtlAZBtdV4CLEYvSabLKCymUfzTDlvOhmbGVIOqcZkbHE1H7M9HywvMn0QqAuZ7YWnSb4k"]
    var place = document.getElementById("snowman").appendChild(sg);

    document.body.append(sg);

    var random = Math.floor(Math.random() * 2)
    sg.setAttribute("src", sgimgs[random])
    document.body.appendChild(sg)
}
