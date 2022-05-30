document.getElementById("app-form-button").addEventListener("click", fun);

function fun() {
    let wd = document.getElementById("wd").value;
    let maths = document.getElementById("maths").value;
    let comp = document.getElementById("comp").value;
    let phy = document.getElementById("phy").value;
    let grades = "";
    let totalGrade =
        parseFloat(wd) + parseFloat(maths) + parseFloat(phy) + parseFloat(comp);
    alert(totalGrade);

    let perc = (totalGrade / 400) * 100;
    alert(perc);

    if (perc <= 100 && perc >= 80) {
        grades = "A";
    } else if (perc <= 79 && perc >= 60) {
        grades = "B";
    } else if (perc <= 59 && perc >= 40) {
        grades = "c";
    } else {
        grades = "F";
    }
    if (perc >= 39.5) {
        document.getElementById(
            "showData"
        ).innerHTML = `Out of 400  your total  is ${totalGrade} and percentage is ${perc}%. <br> Your is${grades} Your Pass`;
    } else {
        document.getElementById(
            "showData"
        ).innerHTML = `Out of 400  your total  is ${totalGrade} and percentage is ${perc}%. <br> Your is${grades} Your Fail`;
    }
}