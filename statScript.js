import allRounder from './AllRounder.js';
import fastPhysicalAttacker from './FastPhysicalAttacker.js';
import bulkyPhysicalAttacker from './BulkyPhysicalAttacker.js';
import fastSpecialAttacker from './FastSpecialAttacker.js';
import bulkySpecialAttacker from './BulkySpecialAttacker.js';
import tank from './Tank.js';

function updateStats(stats){
    document.getElementById("health").innerHTML = "HP: " + parseInt(Math.ceil(parseInt(stats.health) * 1.5))+parseInt(stats.level);
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
    var level = document.getElementById("level").value - 1;

    if (build == "ar"){
        console.log(build);
        let stats = new allRounder(level, stage);
        stats.levelUp();
        updateStats(stats);
    } else if (build == "fpa"){
        console.log(build);
        let stats = new fastPhysicalAttacker(level, stage);
        stats.levelUp();
        updateStats(stats);
    } else if (build == "bpa"){
        console.log(build);
        let stats = new bulkyPhysicalAttacker(level, stage);
        stats.levelUp();
        updateStats(stats);
    } else if (build == "fsa"){
        console.log(build);
        let stats = new fastSpecialAttacker(level, stage);
        stats.levelUp();
        updateStats(stats);
    } else if (build == "bsa"){
        console.log(build);
        let stats = new bulkySpecialAttacker(level, stage);
        stats.levelUp();
        updateStats(stats);
    } else if (build == "t"){
        console.log(build);
        let stats = new tank(level, stage);
        stats.levelUp();
        updateStats(stats);
    }
}

function addImage(){
    var randomMon = Math.floor(Math.random() * 898) + 1;

    var APIEndpoint = "https://pokeapi.co/api/v2/pokemon/" + randomMon;

    var userAction = async () => {
      document.getElementById("imagebutton").innerHTML = "Picking Random Pokemon...";
      var response = await fetch(APIEndpoint);
      var myJson = await response.json();
      var newimage = myJson.sprites.other["official-artwork"].front_default;
      document.getElementById("image").src = newimage;
      document.getElementById("imagebutton").innerHTML = "Random Pokemon";
    }
    console.log(userAction());


}

document.getElementById("button").addEventListener("click", update);
addImage();
document.getElementById("imagebutton").addEventListener("click", addImage);