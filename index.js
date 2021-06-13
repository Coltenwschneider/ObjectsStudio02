// Code your orbitCircumference function here:

let r = 2000
let orbitalSpeed = 28000
function orbitCircumference(radius){
  let circumferenceOfOrbit = 2*Math.PI*(radius);
  return Math.round(circumferenceOfOrbit);
}
console.log(orbitCircumference(r));

// Code your missionDuration function here:

function missionDuration(orbitsCompleted, radius, speed){
  let timeOfOrbits = orbitsCompleted * (orbitCircumference(radius)) / speed;
  return timeOfOrbits.toFixed(2);
}
console.log(`The mission will travel ${orbitCircumference(r)} km around the planet, and it will take ${missionDuration(5, r, orbitalSpeed)} hours to complete.`);

// Copy/paste your selectRandomEntry function here:

function selectRandomEntry(arr){
   let index = Math.floor(Math.random()*arr.length);
   return arr[index];
}

// Code your oxygenExpended function here:

function oxygenExpended(candidate){
  let spaceWalk = missionDuration(3, r, orbitalSpeed);
  let o2Used = candidate.o2Used(spaceWalk);
  return (`${candidate.name} will perform the spacewalk, which will last ${spaceWalk} hours and require ${o2Used.toFixed(3)} kg of oxygen.`)
}

// Candidate data & crew array.

let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};

let crew = [candidateA,candidateC,candidateE];

console.log (oxygenExpended(selectRandomEntry(crew)));