class Person {
    constructor(name, startYear) {
        this.name = name
        this.startYear = startYear
        this.courses = []
    }

    addCourse(course) {
        this.courses.push(course)
    }
}
class Student extends Person {
    constructor(name, startYear) {
        super(name, startYear)
        this.grades = []
    }

    receiveGrade(courseName, finalGrade) {
        this.grades.push({
            course: courseName,
            grade: finalGrade
        })
    }
}
class Teacher extends Person{
    constructor(name, startYear, salary){
        super(name, startYear)
        this.salary = salary
    }

    giveGrade(student, courseName, grade){
        student.receiveGrade(courseName, grade)
    }
}
class Principal extends Person
{
    constructor(name,startYear)
    {
   super(name,startYear)
   this.teachers=[]
   this.students=[]
    }
    hireTeacher (teacher)
    {
this.teachers.push(teacher)
console.log(this.name +" just hired "+teacher.name);
    }
    recruitStudent(student)
    {
this.students.push(student)
    }
    expelStudent(st)
    {
        this.students=  this.students.filter(student=>student.name!=st.name)
    }
    transferStudent(st,principal)
    {
        this.students=  this.students.filter(student=>student.name!=st.name)
           principal.students.push(st)
    }
}


