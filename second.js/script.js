
let student_data = [
    "ali abbas",21, ["maths", "physics", "CS"],[ ["quiz1", "physics", 20],["quiz2", "CS", 40],["quiz3", "Maths", 29]
],
    "Total marks = 89"
]
console.log(`i am`, student_data[0]);
console.log(`my age is` ,student_data[1] ,`years`);
console.log(`my subjects are`, student_data[2][0],`,`, student_data[2][1] ,`&`,  student_data[2][2] );
console.log(`i have `,student_data[3][0][2], `marks in physics`); 
console.log(`i have `,student_data[3][1][2], `marks in maths`); 
console.log(`i have `,student_data[3][2][2], `marks in CS`); 
console.log(`my total marks are `,student_data[3][2][2] + student_data[3][1][2] + student_data[3][0][2]); 


