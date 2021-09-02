function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    // Put your code for the exercises here.
    function liftOff() {
        document.getElementById("statusReport").innerHTML = "Houston, we have liftoff!";
    }
    function redButton() {
        document.getElementById("abortMission").style.backgroundColor = "red";
    }
    function clearButton() {
        document.getElementById("abortMission").style.backgroundColor = "";
    }
    button.addEventListener("click", liftOff);
    missionAbort.addEventListener("mouseover", redButton);
    missionAbort.addEventListener("mouseleave", clearButton);
}

window.addEventListener("load", init);