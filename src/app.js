function switchImage(n) {
    let mainImage = document.getElementsByClassName("main-image")
    mainImage.className = "side-image"
    switch (n)
    {
        case 1:
            document.getElementById("1").className = "main-image"
        break;
        case 2:
            document.getElementById("2").className = "main-image"
        break;
        case 3:
            document.getElementById("3").className = "main-image"
        break;
        case 4:
            document.getElementById("4").className = "main-image"
        break;
    }
}