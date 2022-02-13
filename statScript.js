import AllRounder from './allrounder.js'

function updateStats(stats){
    document.getElementById("health").innerHTML = stats.health;
}

function update() {
    var build = document.getElementById("build").value;
    var stage = document.getElementById("stage").value;
    var level = document.getElementById("level").value;

    if (build == "ar"){
        console.log("build found");
        let stats = new AllRounder(level, stage);
        stats.levelUp();
        updateStats(stats);
    }




}
document.getElementById("button").addEventListener("click", update);