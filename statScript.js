import AllRounder from './allrounder.js'

function update() {
    var build = document.getElementById("build").value;
    var stage = document.getElementById("stage").value;
    var level = document.getElementById("level").value;

    if (build == "ar"){
        console.log(build);
        let stats = new AllRounder(level, stage);
    }
    stats.levelUp();


}
document.getElementById("button").addEventListener("click", update);