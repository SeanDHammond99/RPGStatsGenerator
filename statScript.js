import AllRounder from './allrounder.js'

function update() {
    var build = document.getElementById("build").value;
    var stage = document.getElementById("stage").value;
    var level = document.getElementById("level").value;

    let stats = new AllRounder(level, stage);

    if (build == "ar"){
        console.log("build found");
        stats.levelUp();
    }



}
document.getElementById("button").addEventListener("click", update);