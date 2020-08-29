// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory= (number, dataBases) => {
	return {
		specimenNum:number,
		dna: dataBases,
		mutate(){
			const ranNum=Math.floor(Math.random()*14);
			let newBase= returnRandBase();
			while (newBase===this.dna[ranNum]){
				newBase= returnRandBase();
			};
			this.dna.splice(ranNum, 1, newBase);
		},//end of mutate function

		compareDNA(pAequor) {
			let same=0;
			let diff=0;
			for (i=0; i<=14; i++){
				if (pAequor.dna[i]===this.dna[i]){
					same++;
				}//end of if
				else if (pAequor.dna[i]!==this.dna[i]){
					diff++;
				}//end of else if
			}//end of for loop
			const percentage=Math.floor((same / 15)*100);
			console.log(`Specimen #${pAequor.specimenNum} and Specimen #${this.specimenNum} have ${percentage}% DNA in common.`);
		},//end of CompareDNA function
		willLikelySurvive(){
			let COrG=0;
			for (i=0;i<=14; i++){
				if (this.dna[i]==="C" || this.dna[i]==="G"){
					COrG++;
				}//end of if
			}//end of for loop
			let survivalPercentage= Math.floor((COrG/15)*100);
			if (survivalPercentage>=60){
				return true;
			}
			else {
				return false;
			}
		},//end of willLikelySurvive();
	}//end of return
};//end of pAequor

//pAequorFactory(1,mockUpStrand()).mutate();


//pAequorFactory(2,mockUpStrand()).compareDNA(pAequorFactory(3,mockUpStrand()));

//console.log(pAequorFactory(3,mockUpStrand()).willLikelySurvive());

const survivalPAequor=[];
let idCounter=0;
let tempPAequor;

while (survivalPAequor.length<=30){
	idCounter++;
	tempPAequor=pAequorFactory(idCounter,mockUpStrand());
	if (tempPAequor.willLikelySurvive()===true){
		survivalPAequor.push(tempPAequor);
	}
}


console.log(survivalPAequor);