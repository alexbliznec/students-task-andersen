
//сформировал класс студентов добавил все необходимые свойства и методы, обернул 
//создание экземпляра класса в функцию и экспортировал в файл такс2

class Student {
    constructor(name, surName, birthDate, scores) {
        this.name = name;
        this.surName = surName;
        this.birthDate = birthDate;
        this.scores = scores;
        this.attendanceReport = new Array(25);
        this.attendanceCounter = 0;
    }
    get age() {
        const now = new Date();
        const year = now.getFullYear();
        if (+year > +this.birthDate) {
            return +year - +this.birthDate;
        }
        return `Студент указал неверный год рождения!`;
    }
    get averageScore() {
        const sum = this.scores.reduce((prev, curr) => {
            return prev + curr;
        });
        return Math.round(sum / this.scores.length);
    }
    get averageAttendance() {
        return this.attendanceReport.filter((el) => el).length / this.attendanceReport.length;
    }
    present() {
        if (this.attendanceCounter >= this.attendanceReport.length) {
            console.log(`Все занятия уже пройдены`);
            return;
        }
        this.attendanceReport[this.attendanceCounter] = true;
        this.attendanceCounter++;
    }
    absent() {
        if (this.attendanceCounter === this.attendanceReport.length) {
            console.log(`Все занятия уже пройдены`);
            return;
        }
        this.attendanceReport[this.attendanceCounter] = false;
        this.attendanceCounter++;
    }
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

module.exports = function(name, surName, birthDate, scores) {
    return new Student(name, surName, birthDate, scores);
}
