

class fastSpecialAttacker {
    constructor(level, stage){
        this.level = level;
        this.stage = stage;

        this.health = 2;
        this.attack = 2;
        this.defence = 2;
        this.spattack = 4;
        this.spdefence = 2;
        this.speed = 3;

        this.healthRate = 10;
        this.attackRate = 18;
        this.defenceRate = 33;
        this.spattackRate = 61;
        this.spdefenceRate = 75;
        this.speedRate = 100;
    }

    levelUp(){
        console.log("levelling up1");
        for (let i = 0; i < (this.level * 2) + stage; i++){
            console.log("levelling up2");
            var randomInt = Math.floor(Math.random() * 100);
            console.log(randomInt);
            if (randomInt < this.healthRate){
                if (this.health == 8){
                    i--;
                } else {
                    this.health++;
                }
                console.log("Health Up!")
            } else if (randomInt < this.attackRate){
                if (this.attack == 8){
                    i--;
                } else {
                    this.attack++;
                }
                console.log("Attack Up!")
            } else if (randomInt < this.defenceRate){
                if (this.defence == 8){
                    i--;
                } else {
                    this.defence++;
                }
                console.log("Defence Up!")
            } else if (randomInt < this.spattackRate){
                if (this.spattack == 8){
                    i--;
                } else {
                    this.spattack++;
                }
                console.log("Sp Atk Up!")
            } else if (randomInt < this.spdefenceRate){
                if (this.spdefence == 8){
                    i--;
                } else {
                    this.spdefence++;
                }
                console.log("Sp Def Up!")
            } else if (randomInt < this.speedRate){
                if (this.speed == 8){
                    i--;
                } else {
                    this.speed++;
                }
                console.log("Speed Up!")
            }
        }
    }

}

export default fastSpecialAttacker;

