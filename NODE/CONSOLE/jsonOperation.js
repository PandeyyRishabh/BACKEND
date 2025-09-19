const students = [
        { "id": 1, "name": "Ram", "age": 20, "marks": 85, "course": "Math" },
        { "id": 2, "name": "Shyam", "age": 22, "marks": 92, "course": "Science" },
        { "id": 3, "name": "Laxman", "age": 21, "marks": 78, "course": "Math" },
        { "id": 4, "name": "Dev", "age": 23, "marks": 88, "course": "English" },
        { "id": 5, "name": "Danav", "age": 20, "marks": 95, "course": "Science" },
        { "id": 6, "name": "Bharat", "age": 22, "marks": 74, "course": "English" },
        { "id": 7, "name": "Balram", "age": 21, "marks": 90, "course": "Math" },
        { "id": 8, "name": "Kaushlya", "age": 23, "marks": 87, "course": "Science" },
        { "id": 9, "name": "Subhna", "age": 20, "marks": 82, "course": "English" },
        { "id": 10, "name": "Jamvan", "age": 22, "marks": 89, "course": "Math" }
    ];


// 1. Filter students who scored more than 80 marks

// let max = students.filter((x)=> x.marks>=80)
// console.log(max)    


// 2. Filter students enrolled in "Math" course

// let enroll = students.filter((x)=> x.course == "Math")
// console.log(enroll)  


// 3. Get an array of student names

// let nm = students.map((x)=> x.name)
// console.log(nm)  


// 4. Create an array of objects with only names and marks //

// let nmMarks = {}
// const nmMarks = students.map((x)=> ("name"= x.name,"marks"=x.marks))
// console.log(nmMarks) 

// let nmMarks = [{}]
// for(let x in students.name){
//        console.log(students[x]) 
// }


// 5. Calculate the total marks of all students

// const TotalMarks = students.reduce((sum,x)=> sum+x.marks,0)
// console.log(TotalMarks) 

   
// 6. Find the highest mark among students

//Marks
// const highMarks = students.reduce((high,x)=> high>x.marks ? high:x.marks,[0])
// console.log(highMarks)

//Marks With Object 
// const highMarks = students.reduce((high,x)=> high>x.marks ? high:x,[0])
// console.log(highMarks) 

 
// 7. Count the number of students in each course

//  const courseCount = students.reduce((acc, student) => {
//         acc[student.course] = (acc[student.course] || 0) + 1;
//         return acc;
//     }, {});
//     console.log(courseCount);


// 8. Find the average marks of students //

// const AvgMarks = students.reduce((sum,x) => (sum+x.marks)/10,0)
// console.log(AvgMarks)


// 9. Filter students who are younger than 22

// const graterAge = students.filter((x)=> x.age>22)
// console.log(graterAge)


// 10. Convert student names to uppercase //

// const ConvertUpper = students.filter((x)=> x.name = x.name.toUpperCase())
// console.log(ConvertUpper)


