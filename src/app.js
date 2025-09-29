let mainImage = 0;
let sideImage = 5
function switchImage(n) {
    switch (n)
    {
        case 1:
            document.getElementById(mainImage).style.display = "none";
            document.getElementById("1").className = "main-image";
            document.getElementById(sideImage).style.display = "";
            sideImage = 6;
            mainImage = 1;
        break;
        case 2:
            document.getElementById(mainImage).style.display = "none";
            document.getElementById("2").className = "main-image";
            document.getElementById(sideImage).style.display = "";
            sideImage = 7;
            mainImage = 2;
        break;
        case 3:
            document.getElementById(mainImage).style.display = "none";
            document.getElementById("3").className = "main-image";
            document.getElementById(sideImage).style.display = "";
            sideImage = 8;
            mainImage = 3;
        break;
        case 4:
            document.getElementById(mainImage).style.display = "none";
            document.getElementById("4").className = "main-image";
            document.getElementById(sideImage).style.display = "";
            sideImage = 9;
            mainImage = 4;
        break;
        case 5:
            document.getElementById(mainImage).style.display = "none";
            document.getElementById("5").className = "main-image";
            document.getElementById(sideImage).style.display = "";
            sideImage = 5;
            mainImage = 0;
        break;
        case 6:
            document.getElementById(mainImage).style.display = "none";
            document.getElementById("6").className = "main-image";
            document.getElementById(sideImage).style.display = "";
            sideImage = 6;
            mainImage = 1;
        break;
        case 7:
            document.getElementById(mainImage).style.display = "none";
            document.getElementById("7").className = "main-image";
            document.getElementById(sideImage).style.display = "";
            sideImage = 7;
            mainImage = 2;
        break;
        case 8:
            document.getElementById(mainImage).style.display = "none";
            document.getElementById("8").className = "main-image";
            document.getElementById(sideImage).style.display = "";
            sideImage = 8;
            mainImage = 3;
        break;
        case 9:
            document.getElementById(mainImage).style.display = "none";
            document.getElementById("9").className = "main-image";
            document.getElementById(sideImage).style.display = "";
            sideImage = 9;
            mainImage = 4;
        break;
    }
}