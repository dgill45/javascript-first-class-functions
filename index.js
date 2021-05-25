function exerciseRoutine(postRunActivity){
    runFiveMiles();
    postRunActivity();
}

function runFiveMiles(){
    console.log('Go for a five-mile run');
}
function liftWeights(){
    console.log("Pump iron.")
}

function swim40Laps(){
    console.log('Swim 40 laps.')
}
function Monday() {
    exerciseRoutine(liftWeights)
  }
  
  function Tuesday() {
    runFiveMiles()
    swim40Laps()
  }
  
  function Wednesday() {
    runFiveMiles()
    runFiveMiles()
  }
  
  function Thursday() {
    runFiveMiles()
    liftWeights()
  }
  
  function Friday() {
    runFiveMiles()
    swim40Laps()
  }
  
  exerciseRoutine(() => {
      console.log('Stretch! Work that core!');
  });

  function morningRoutine(exercise) {
    var breakfast = null;
  
    if (exercise === liftWeights) {
      breakfast = 'protein bar';
    } else if (exercise === swimFortyLaps) {
      breakfast = 'kale smoothie';
    } else {
      breakfast = 'granola';
    }
  
    exerciseRoutine(exercise);
  
    // we could give this function a name if we wanted to,
    // but since it's only available _inside_ morningRoutine(),
    // we don't need to
    return function() {
      console.log(`Nom nom nom, this ${breakfast} is delicious!`);
    }
  }
  morningRoutine()