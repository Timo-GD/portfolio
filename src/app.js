function switchImage(n) {
    let mainImage = 0
    switch (n)
    {
        case 1:
            document.getElementById("0").style.display = "none";
            document.getElementById("1").className = "main-image";
            document.getElementById(mainImage).className = "side-image";
            document.getElementById(mainImage).style.display = "block";
            mainImage = 1;
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