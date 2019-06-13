const makeNewStudent = require('./task'); // импортировал создание экземпляра класса в функцию

const kolya = makeNewStudent('kolya', 'petrov', 2000, [100, 100, 100, 100]);
const tolya = makeNewStudent('tolya', 'ivanov', 2001, [80, 60, 70, 50]);
const olya = makeNewStudent('olya', 'sidorova', 2002, [100, 90, 100, 100]);
const galya = makeNewStudent('galya', 'petrova', 2001, [30, 40, 50, 60]);
const yulya = makeNewStudent('yulya', 'chernova', 2002, [100, 90, 90, 100]);

function fullFillAttendance(student, status, days) { // создал функцию для более удобного добавления посещения занятий студентами
    let dayCounter = 1;
    while (dayCounter <= days) {
        student[status]();
        dayCounter++;
    }
}

// заполнил посещаемость студентам

fullFillAttendance(kolya, 'present', 20);
fullFillAttendance(tolya, 'present', 18);
fullFillAttendance(olya, 'present', 10);
fullFillAttendance(galya, 'present', 23);
fullFillAttendance(yulya, 'present', 15);
fullFillAttendance(kolya, 'absent', 5);
fullFillAttendance(tolya, 'absent', 7);
fullFillAttendance(olya, 'absent', 15);
fullFillAttendance(galya, 'absent', 2);
fullFillAttendance(yulya, 'absent', 10);

class Group extends Array { //создал класс группы
    attendance() {
        if (!arguments.length) {
            let averageAttendanceSum = 0;
            for (let i = 0; i < this.length; i++) {
                averageAttendanceSum += this[i].averageAttendance;
            }
            console.log(`средний коефициент посещаемости по всей группе -- ${averageAttendanceSum / this.length}`);
            return;
        }
        const averageAttendanceRating = [];
        let neededRating = 0;
        for (let i = 0; i < this.length; i++) {
            averageAttendanceRating.push(this[i].averageAttendance);
            if (arguments[0] === this[i].surName) {
                neededRating = this[i].averageAttendance;
            }
        }
        const ratingsArr = Array.from(new Set (averageAttendanceRating)); // для того, что бы у студентов с одинаковым рейтингом была одинаковая позиция
        const sortedRatings = ratingsArr.sort(function(a, b) {return a -b}).reverse();
        console.log(`рейтинг посещений студента ${arguments[0]} ${sortedRatings.indexOf(neededRating) + 1}`);
        return;

    }
    performance() {
        if (!arguments.length) {
            let averageScoresSum = 0;
            for (let i = 0; i < this.length; i++) {
                averageScoresSum += this[i].averageScore;
            }
            console.log(`средний бал успеваемости по всей группе -- ${averageScoresSum / this.length}`);
            return;
        }
        const averageScoreRating = [];
        let neededAverageScore = 0;
        for (let i = 0; i < this.length; i++) {
            averageScoreRating.push(this[i].averageScore);
            if (arguments[0] === this[i].surName) {
                neededAverageScore = this[i].averageScore;
            }
        }
        const scoresRating = Array.from(new Set (averageScoreRating)); // для того, что бы у студентов с одинаковым рейтингом была одинаковая позиция
        const sortedScoresRating = scoresRating.sort(function(a, b) {return a -b}).reverse();
        console.log(`рейтинг по успеваемости студента ${arguments[0]} -- ${sortedScoresRating.indexOf(neededAverageScore) + 1}`);
        return;
    }
}

const students = new Group();

students.push(kolya);
students.push(tolya);
students.push(olya);
students.push(galya);
students.push(yulya);

students.attendance(`petrov`);
students.attendance();
students.performance(`petrov`);
students.performance();