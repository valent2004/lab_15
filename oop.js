console.log("Task 1"); //task 1
let mentor = {
    course: "JS fundamental",
    duration: 3,
    direction: "web-development"
};

function propsCount(mentor)
{
    console.log(mentor.duration);
}

propsCount(mentor);

console.log("Task 2"); //task 2
let Valentyn_and_friends = {
    dimension: "2D",
    main_character: "Valentyn Pike",
    characters: 41,
    ACTs: 6,
    antagonist: "Misunderstanding"
};
let main = ["Dimension:", "Main character:", "Characters:", "ACTs:", "Antagonist:"];
let obj = [Valentyn_and_friends.dimension, Valentyn_and_friends.main_character, Valentyn_and_friends.characters, Valentyn_and_friends.ACTs, Valentyn_and_friends.antagonist];
function showProps(obj)
{
    for(let i = 0; i < 5; i++)
    {
        console.log(main[i] + " " + obj[i]);
    }
}
showProps(obj);

console.log("Task 3"); //task 3
class Person
{
    constructor(name, surname)
    {
        this.name = name;
        this.surname = surname;
    }
    showFullName()
    {
        return this.name + " " + this.surname;
    }
}

class Student extends Person
{
    constructor(name, surname, year)
    {
        super(name, surname);
        this.year = year;
    }
    showFullName(midleName)
    {
        return super.showFullName() + " " + midleName;
    }
    showCourse()
    {
        let current_year = 2023;
        if(current_year -  this.year > 6)
        {
            return 6;
        }
        return current_year -  this.year;
    }
}
const stud1 = new Student("Petro", "Petrenko", 2015);
console.log(stud1.showFullName("Petrovych"));
console.log("Current course: " + stud1.showCourse());

console.log("Task 4"); //task 4
class Worker
{
    showExp = 1.2;
    constructor(fullName, dayRate, workingDays)
    {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
    }
    showSalary()
    {
        console.log(this.fullName + " salary " + this.workingDays * this.dayRate);
    }
    showSalaryWithExperience()
    {
        console.log(this.fullName + " salary " + this.workingDays * this.dayRate * this.showExp);
    }
    set setExp(value)
    {
        this.showExp = value;
    }
    get setExp()
    {
        return this.showExp;
    }
    Salary()
    {
        return this.workingDays * this.dayRate * this.showExp;
    }
}

let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);
worker1.showSalary();
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();
worker1.setExp = 1.5;
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();

let worker2 = new Worker("Tom Tomson", 48, 22);
console.log(worker2.fullName);
worker2.showSalary();
console.log("New experience: " + worker2.showExp);
worker2.showSalaryWithExperience();
worker2.setExp = 1.5;
console.log("New experience: " + worker2.showExp);
worker2.showSalaryWithExperience();

let worker3 = new Worker("Andy Ander", 29, 23);
console.log(worker3.fullName);
worker3.showSalary();
console.log("New experience: " + worker3.showExp);
worker3.showSalaryWithExperience();
worker3.setExp = 1.5;
console.log("New experience: " + worker3.showExp);
worker3.showSalaryWithExperience();

let salary = [worker1, worker2, worker3];
for(let i = 0; i < 3; i++)
{
    for(let j = i + 1; j < 3; j++)
    {
        if(salary[i].Salary() > salary[j].Salary())
        {
            let temp = salary[i];
            salary[i] = salary[j];
            salary[j] = temp;
        }
    }
}

console.log(salary[0].fullName + ": " + salary[0].Salary());
console.log(salary[1].fullName + ": " + salary[1].Salary());
console.log(salary[2].fullName + ": " + salary[2].Salary());

console.log("Task 5"); //task 5
class GeometricFigure {
    getArea() {
        return 0;
    }
    toString() {
        return Object.getPrototypeOf(this).constructor.name;
    }
}

class Triangle extends GeometricFigure
{
    constructor(a, b, c)
    {
        super();
        this.a = a;
        this.b = b;
        this.c = c;
    }
    getArea()
    {
        if(this.a == this.b && this.b == this.c)
        {
            return (this.a * this.a * Math.sqrt(3))/4;
        }
        let p = (this.a + this.b + this.c)/2;
        return Math.sqrt(p * (p-this.a) * (p-this.b) *(p-this.c));
    }
}

class Square extends GeometricFigure
{
    constructor(a)
    {
        super();
        this.a = a;
    }
    getArea()
    {
        return this.a * this.a;
    }
}

class Circle extends GeometricFigure
{
    constructor(r)
    {
        super();
        this.r = r;
    }
    getArea()
    {
        return Math.PI * this.r * this.r;
    }
}

function handleFigures(figures)
{
    for(let i = 0; i < 3; i++)
    {
        console.log("Geometric figure: " + figures[i].toString() + " -> " + figures[i].getArea());
    }
}
const figures = [new Triangle(4, 5, 6), new Square(7), new Circle(5)];
handleFigures(figures);
function reduce()
{
    let total = 0;
    for(let i = 0; i < 3; i++)
    {
        total += figures[i].getArea();
    }
    return total;
}
console.log("Total: " + reduce());
