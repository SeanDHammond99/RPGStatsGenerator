import AllRounder from './allrounder.js'

function update() {
    var build = document.getElementById("build");
    document.getElementById("health").innerHTML = build;
}
document.getElementById("button").addEventListener("click", update);