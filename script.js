function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    // Put your code for the exercises here.
    function liftOff() {
        document.getElementById("statusReport").innerHTML = "Houston, we have liftoff!";
    }
    button.addEventListener("click", liftOff);
    missionAbort.addEventListener("mouseover", function(event) {
        let element = document.getElementById("abortMission");
        element.style.backgroundColor = "red";
    })
}

window.addEventListener("load", init);