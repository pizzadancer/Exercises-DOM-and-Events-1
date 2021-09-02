function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    // Put your code for the exercises here.
    function liftOff() {
        document.getElementById("statusReport").innerHTML = "Houston, we have liftoff!";
    }
   
    function clearButton() {
        document.getElementById("abortMission").style.backgroundColor = "";
    }
    button.addEventListener("click", liftOff);
    missionAbort.addEventListener("mouseover", function() {
        this.style.backgroundColor = "red";
    });
    missionAbort.addEventListener("mouseleave", clearButton);
    missionAbort.addEventListener("click", function (event) {
        let ele = window.confirm("Are you sure you want to abort the mission?");
        // console.log(ele)
        if (ele) {
            document.getElementById("statusReport").innerHTML = "Mission aborted! Space shuttle returning home.";
        }
    })
}

window.addEventListener("load", init);