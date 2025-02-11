export class Player {

  level: number;
  experience: number;

  // Rules :
  // Default level et experience are at 0.
  // Each day, the player wins 10 points of experience.
  // 100 points of experience corresponds to 1 level.
  // Player keep its experience excess when he wins a level.
  // Level stops growing when he's at 10.
  // Player stops to win experience when he's at level 10.

  constructor(level: number = 0, experience: number = 0) {
    this.level = level;
    this.experience = experience;
  }


  newDay(){
    if (this.level >= 10) {
      return;
    }

    if(this.experience < 0){
      this.experience = 0;
    }
    if(this.level < 0){
      this.level = 0
    }

    this.updateExperience();

    while(this.experience >= 100 && this.level < 10){
      this.updateLevel();
    }
  }

  updateExperience(){
    this.experience += 10;
  }

  updateLevel(){
    this.level += 1;
    this.experience = this.experience % 100;
  }
}
