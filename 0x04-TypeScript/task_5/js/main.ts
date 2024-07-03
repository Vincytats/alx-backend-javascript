// task_5/js/main.ts

// Define interfaces
interface MajorCredits {
  credits: number;
  brand: 'MajorCredits'; // Brand property
}

interface MinorCredits {
  credits: number;
  brand: 'MinorCredits'; // Brand property
}

// Functions to sum credits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'MajorCredits'
  };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'MinorCredits'
  };
}

// Example usage
const majorSubject1: MajorCredits = { credits: 50, brand: 'MajorCredits' };
const majorSubject2: MajorCredits = { credits: 70, brand: 'MajorCredits' };

const minorSubject1: MinorCredits = { credits: 5, brand: 'MinorCredits' };
const minorSubject2: MinorCredits = { credits: 8, brand: 'MinorCredits' };

console.log(sumMajorCredits(majorSubject1, majorSubject2)); // Output: { credits: 120, brand: 'MajorCredits' }
console.log(sumMinorCredits(minorSubject1, minorSubject2)); // Output: { credits: 13, brand: 'MinorCredits' }
