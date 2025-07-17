let s1 = "I love coding.";
let s2 = "Node.js is great.";
let s3 = "Let's build apps.";

function noOfCharacter(s){
    let cnt = 0;
    for(let i=0;i<s.length;i++){
        cnt++;
    }
    return cnt;
}

console.log("No. of charscter's in 1st sentence: ",noOfCharacter(s1));
console.log("No. of charscter's in 2nd sentence: ",noOfCharacter(s2));
console.log("No. of charscter's in 3rd sentence: ",noOfCharacter(s3));