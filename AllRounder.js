

class allRounder {
    constructor(level, stage){
        this.level = level;
        this.stage = stage;

        this.health = 3;
        this.attack = 3;
        this.defence = 2;
        this.spattack = 3;
        this.spdefence = 2;
        this.speed = 2;

        this.healthRate = 16;
        this.attackRate = 33;
        this.defenceRate = 49;
        this.spattackRate = 66;
        this.spdefenceRate = 84;
        this.speedRate = 100;
    }

    levelUp(){
        console.log("levelling up1");
        var points = this.level * 2;
        var pointsMore = parseInt(points) + parseInt(this.stage);
        console.log("points: "+ points);
        console.log("pointsMore: "+ pointsMore);
        for (let i = 0; i < pointsMore; i++){
            console.log("levelling up2");
            var randomInt = Math.floor(Math.random() * 100);
            console.log(randomInt);
            if (randomInt < this.healthRate){
                if (this.health == 10){
                    i--;
                } else {
                    this.health++;
                }
                console.log("Health Up!")
            } else if (randomInt < this.attackRate){
                if (this.attack == 10){
                    i--;
                } else {
                    this.attack++;
                }
                console.log("Attack Up!")
            } else if (randomInt < this.defenceRate){
                if (this.defence == 10){
                    i--;
                } else {
                    this.defence++;
                }
                console.log("Defence Up!")
            } else if (randomInt < this.spattackRate){
                if (this.spattack == 10){
                    i--;
                } else {
                    this.spattack++;
                }
                console.log("Sp Atk Up!")
            } else if (randomInt < this.spdefenceRate){
                if (this.spdefence == 10){
                    i--;
                } else {
                    this.spdefence++;
                }
                console.log("Sp Def Up!")
            } else if (randomInt < this.speedRate){
                if (this.speed == 10){
                    i--;
                } else {
                    this.speed++;
                }
                console.log("Speed Up!")
            }
        }
    }

}

export default allRounder;

