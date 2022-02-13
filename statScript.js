import './build.js';

function updateStats(stats){
    document.getElementById("health").innerHTML = "Health: " + stats.health;
    document.getElementById("attack").innerHTML = "Attack: " + stats.attack;
    document.getElementById("defence").innerHTML = "Defence: " + stats.defence;
    document.getElementById("spattack").innerHTML = "Special Attack: " + stats.spattack;
    document.getElementById("spdefence").innerHTML = "Special Defence: " + stats.spdefence;
    document.getElementById("speed").innerHTML = "Speed: " + stats.speed;
}

function update() {
    var build = document.getElementById("build").value;
    var stage = document.getElementById("stage").value;
    var level = document.getElementById("level").value;

    if (build == "ar"){
        console.log("build found");
        let stats = new allRounder(level, stage);
        stats.levelUp();
        updateStats(stats);
    } else if (build == "fpa"){
        console.log("build found");
        let stats = new fastPhysicalAttacker(level, stage);
        stats.levelUp();
        updateStats(stats);
    }



}
document.getElementById("button").addEventListener("click", update);