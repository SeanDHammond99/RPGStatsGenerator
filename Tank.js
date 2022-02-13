

class tank {
    constructor(level, stage){
        this.level = level;
        this.stage = stage;

        this.health = 4;
        this.attack = 2;
        this.defence = 3;
        this.spattack = 2;
        this.spdefence = 3;
        this.speed = 1;

        this.healthRate = 20;
        this.attackRate = 30;
        this.defenceRate = 55;
        this.spattackRate = 65;
        this.spdefenceRate = 90;
        this.speedRate = 100;
    }

    levelUp(){
        console.log("levelling up1");
        var points = this.level * 2;
        var pointsMore = points + this.stage;
        for (let i = 0; i < pointsMore; i++){
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

export default tank;

