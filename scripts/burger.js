function burger() {
    var x = document.getElementsByClassName("navbar-vertical")[0];
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}