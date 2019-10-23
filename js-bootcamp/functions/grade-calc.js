// student score, total possible score
// 15/20 -> You got a C (75%)!
// A 90-100%, B 80-89%, C 70-79%, D 60-69%, F 0-59%

const studentGrade = function (studentScore, totalPossibleScore) {
    const percent = (studentScore / totalPossibleScore) * 100
    let gradeLetter = ''

    if (percent >= 90) {
        gradeLetter = 'A'
    } else if (percent >= 80) {
        gradeLetter = 'B'
    } else if (percent >= 70) {
        gradeLetter = 'C'
    } else if (percent >= 60) {
        gradeLetter = 'D'
    } else {
        gradeLetter = 'F'
    }

    return `You got a ${gradeLetter} (${percent}%)`
}

const studentOneGrade = studentGrade(15, 100)
console.log(studentOneGrade)