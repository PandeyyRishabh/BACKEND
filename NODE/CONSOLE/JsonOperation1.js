
        let jsonArrayData = [
            {
                "Name": "Royal",
                "Location": "Ahmedabad"
            },
            {
                "Courses": [
                    "DSA",
                    "C++",
                    "Java"
                ],
                "Topics": [
                    "Web development",
                    "Artificial Intelligence",
                    "Machine Learning",
                    "Data Science",
                    "Algorithms"]
            },
        ];

// 1. Get the location if it is Ahmedabad // 

// const GetLoac = jsonArrayData.reduce((x)=> x.Location == "Ahmedabad" ? x.Location : x)
// console.log(GetLoac)


// 2. Get all course names in uppercase //

// const ConvertUpper = jsonArrayData.reduce((x)=> x.Name = x.Name.toUpperCase())
// console.log(ConvertUpper)


// 3. Filter topics that contain the word "Data" //

// const FindData = jsonArrayData.filter((x)=> includes(x.Topics) == "Data")
// console.log(FindData)


// 4. Find total number of courses using reduce //

// const FindData = jsonArrayData.reduce((total,x)=> total+x.Courses , 0)
// console.log(FindData)


// 5. Find length of each topic //

// const LenTopic = jsonArrayData.filter(()=> x.Courses = x.Courses.length())
// console.log(LenTopic)


// 6. Check if any course is Java

// const FindTopic = jsonArrayData.map((x)=> x.Courses == "Java" ? Courses[x]:"")
// console.log(FindTopic)


// 7. Count total characters in all course names
// const CountTotal = jsonArrayData.map((x)=> x.Courses )
// console.log(CountTotal)


// 8. Get all topics in lowercase

// const LowerTopic = jsonArrayData.filter((x)=> x.Topics = x.Topics.toLowerCase())
// console.log(LowerTopic)


// 9. Filter courses with name length > 3 //

// const NameLen = jsonArrayData.filter((x)=> x.Courses >3)
// console.log(NameLen)


// Home Work

//         var Emp = [
//     {
//         id : 111,
//         name : 'Siya',
//         age : 30,
//         subject:['Maths','Eng','Sci']
//     },
//     {
//         id : 222,
//         name : 'Ram',
//         age : 31,
//         subject:['Maths','Eng','Sci']
//     },
//     {
//         id : 333,
//         name : 'Laxman',
//         age : 33,
//         subject:['Maths','Eng','Sci']
//     },
//     {
//         id : 444,
//         name : 'Bharat',
//         age : 29,
//         subject:['History','Civics','Geo']
//     },
//     {
//         id : 555,
//         name : 'Shatrughna',
//         age : 28,
//         subject:['Maths','Comp','Eng']
//     },
//     {
//         id : 666,
//         name : 'Hanuman',
//         age : 35,
//         subject:['Sci','PE','Eng']
//     },
//     {
//         id : 777,
//         name : 'Sugriv',
//         age : 40,
//         subject:['History','Maths','Geo']
//     },
//     {
//         id : 888,
//         name : 'Vibhishan',
//         age : 38,
//         subject:['Eng','Sci','Philosophy']
//     }
// ];

// 1. Get names of all employees
// 2. Employees older than 30
// 3. Find employee by ID = 555
// 4. Get all ages in an array
// 5. Average age of employees
// 6. Get list of all subjects (flat list)
// 7. Count total number of subjects taught
// 8.  Employees who study "Maths"
// 9. Oldest employee
