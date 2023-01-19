const calculateTotalScore = (rolls) => {
    let totalScore = 0
    for (let it = 0; it < rolls.length - 1; it += 2){
        //strike or spare
        if(rolls[it]==10||rolls[it]+rolls[it+1]==10) totalScore+=rolls[it]+rolls[it+1]+rolls[it+2]
        else totalScore+=rolls[it]+ rolls[it+1]
    }

    return totalScore
} 

module.exports = {calculateTotalScore}
