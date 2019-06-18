function Student (name, surName, birthDate, scores) {
    this.name = name;
    this.surName = surName;
    this.birthDate = birthDate;
    this.scores = scores;
    this.attendanceReport = new Array(25);
    this.attendanceCounter = 0;
}

Student.prototype = {
    get age() {
        var now = new Date();
        var year = now.getFullYear();
        if (+year > +this.birthDate) {
            return +year - +this.birthDate;
        }
        return `Студент указал неверный год рождения!`;
    },
    get averageScore() {
        var sum = this.scores.reduce(function(prev, curr) {
            return prev + curr;
        });
        return Math.round(sum / this.scores.length);
    },
    get averageAttendance() {
        return this.attendanceReport.filter(function(el) {
            return el }).length / this.attendanceReport.length;
    },
    present() {
        if (this.attendanceCounter >= this.attendanceReport.length) {
            console.log(`Все занятия уже пройдены`);
            return;
        }
        this.attendanceReport[this.attendanceCounter] = true;
        this.attendanceCounter++;
    },
    absent() {
        if (this.attendanceCounter === this.attendanceReport.length) {
            console.log(`Все занятия уже пройдены`);
            return;
        }
        this.attendanceReport[this.attendanceCounter] = false;
        this.attendanceCounter++;
    },
    summary() {
        switch (true) {
            case (this.averageAttendance >= 0.9 && this.averageScore >= 90) :
                console.log(`Ути какой умничка!`);
                break;
            case (this.averageAttendance >= 0.9 || this.averageScore >= 90) :
                console.log(`Норм, но можно было лучше!`);
                break;
            default:
                console.log(`Редиска!`);
                break;
        }
    }
}

var petya = new Student('p', 'i', 2000, [1, 3, 5]);
var kolya = new Student('k', 'p', 1999, [5, 3, 5]);
// console.log(petya.summary());
// console.log(petya.present());
// console.log(petya.absent());
// console.log(petya.averageAttendance);


// Задание 2

function Group() {
    
}

Group.prototype = Object.create(Array.prototype);

Group.prototype.attendance = function() {
    if (!arguments.length) {
        var averageAttendanceSum = 0;
        for (var i = 0; i < this.length; i++) {
            averageAttendanceSum += this[i].averageAttendance;
        }
        console.log(`средний коефициент посещаемости по всей группе -- ${averageAttendanceSum / this.length}`);
        return;
    }
    var averageAttendanceRating = [];
    var neededRating = 0;
    for (var i = 0; i < this.length; i++) {
        averageAttendanceRating.push(this[i].averageAttendance);
        if (arguments[0] === this[i].surName) {
            neededRating = this[i].averageAttendance;
        }
    }
    var ratingsArr = Array.from(new Set (averageAttendanceRating)); // для того, что бы у студентов с одинаковым рейтингом была одинаковая позиция
    var sortedRatings = ratingsArr.sort(function(a, b) {return a -b}).reverse();
    console.log(`рейтинг посещений студента ${arguments[0]} ${sortedRatings.indexOf(neededRating) + 1}`);
    return;

}

Group.prototype.performance = function() {
        if (!arguments.length) {
            var averageScoresSum = 0;
            for (var i = 0; i < this.length; i++) {
                averageScoresSum += this[i].averageScore;
            }
            console.log(`средний бал успеваемости по всей группе -- ${averageScoresSum / this.length}`);
            return;
        }
        var averageScoreRating = [];
        var neededAverageScore = 0;
        for (var i = 0; i < this.length; i++) {
            averageScoreRating.push(this[i].averageScore);
            if (arguments[0] === this[i].surName) {
                neededAverageScore = this[i].averageScore;
            }
        }
        var scoresRating = Array.from(new Set (averageScoreRating)); // для того, что бы у студентов с одинаковым рейтингом была одинаковая позиция
        var sortedScoresRating = scoresRating.sort(function(a, b) {return a -b}).reverse();
        console.log(`рейтинг по успеваемости студента ${arguments[0]} -- ${sortedScoresRating.indexOf(neededAverageScore) + 1}`);
        return;
    }

var group = new Group();
group.push(petya);
group.push(kolya);
console.log(group);
console.log(group.performance('p'));