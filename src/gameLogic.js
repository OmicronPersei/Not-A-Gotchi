// Game State

class GameStateMachine {
    /*take in Character
    respond to stimuli, feeding etc
    recieve ticks
    needs to die
    */
    constuctor(initialGameState) {
        this.hunger = initialGameState.hunger;
        this.sleepiness = initialGameState.sleepiness;
        this.boredom = initialGameState.boredom;

        this.age = 0;
        this.happiness = 50;
        this.tick = 0;

        let tickPeriod = 0;
        if (initialGameState.speed == "fast") {
            tickPeriod = 2000;
        } else if (initialGameState.speed == "medium") {
            tickPeriod = 15000;
        } else {
            tickPeriod = 30000;
        }

        this.startTick(tickPeriod);
    }

    startTick(tickPeriod) { 
        this.timerHandle = setInterval(this.handleTick, tickPeriod);
    }

    stopTick() {
        clearInterval(this.timerHandle);
    }

    handleTick() {
        every 1 tick, run handleNeeds
        every 10 ticks, run handleAge
    }

    handleNeeds() {
        you get hungier
        you get sleepier
        you get more bored
    }

    handleAge() {
        if (this.tick % 10 === 0) {
            this.age++;
        }

        if (this.age > 5) {
            chance = Math.random();
            //chance factor = (age - 4) * 10%
            if (chance <= this.age - 4 * 10% {
                this.death();
            }
        }
        
        if (this.age > 6) {
            chance = Math.random();
            if (chance <= .2) {
                this.death();
            }
        }
        
        if (this.age > 7) {
            chance = Math.random();
            if (chance <= .3) {
                this.death();
            }
        }
        
        if (this.age > 8) {
            chance = Math.random();
            if (chance <= .4) {
                this.death();
            }
        }
        
        if (this.age > 9) {
            chance = Math.random();
            if (chance <= .5) {
                this.death();
            }
        }

        if this.death > then death()
    }


    handleBirthdayGift() {
        if happiness >= 50 {
            +10% odds of living longer
        }
    }


    death() {
        "You have died"
        stop timer
        stop handleNeeds()
        stop handleAge()
    }
}


// Base Stats

let hunger = 100;

let sleepiness = 100;

let boredom = 100;

let age = 0;

let happiness = 50;

let timeSetting = "fast" || "medium" || "slow"



if timeSetting == "fast" {
    let tick = 2 seconds;

    } else {
        if timeSetting == "medium";
        {
            let tick = 15 seconds;
        }

    } else {
        if timeSetting == "slow";
        {
            let tick = 30 seconds;
        }
    }
}



// Needs Mechanism
let tick = timeSetting;

each tick - 10 hunger

each tick - 10 sleepiness

each tick - 10 boredom




// Tick & Age & Birthday Gift

let age = 10 ticks;

each age = 1 birthday gift chance


// Happiness Mechanism

if hunger && sleepiness && boredom >= 50 every age{
    happiness += 10;
    } else if {
        hunger || sleepiness || boredom <= 20 every age {
            happiness -= 10;
    } else {
        nothing
}


happiness > 50 {
    +10% odds of longer life
}

happiness > 70 {
    +15% odds of longer life
}

happiness > 90 {
    +20% odds of longer life
}




// Age Mechanism
age =+ 1 every 10 ticks;

if age > 5 {
    10% odds of death on birthday
}

if age > 6 {
    20% odds of death on birthday
}

if age > 7 {
    30% odds of death on birthday
}

if age > 8 {
    40% odds of death on birthday
}

if age > 9 {
    50% odds of death on birthday
}