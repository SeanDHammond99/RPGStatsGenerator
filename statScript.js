function AllRounder(level, stage) {
  this.level = level;
  this.stage = stage;
  this.health = 3;
  this.attack = 3;
  this.defence = 2;
  this.spattack = 3;
  this.spdefence = 2;
  this.speed = 2;
}

function myFunction() {
    var build = document.getElementById("build");
    document.getElementById("health").innerHTML = "Health: " + 5;
}