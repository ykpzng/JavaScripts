

// Definition
let students = ['Ali', 'Veli', 'Temel', 'Dursun', 'Fadime'];
let studentsWithdrawn = [];

let student1 = students.shift();
let student2 = students.shift();

studentsWithdrawn.push(student1, student2);

// Ali ve Veliyi tekrardan studentsWithdrawn'dan alip students'a ekleyecek kodu ekleyin.



console.log(students);
console.log(studentsWithdrawn);
students.unshift(studentsWithdrawn[0], studentsWithdrawn[1]);
console.log(students);

let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// yukardaki diziden aşağıdaki tekti elde edelim
// “Programming is not about what you know it is about what you can figure out. -2015, Chris Pine, Learn to Program”



secretMessage.splice(7, 5);
secretMessage[0] = 'Programming';
secretMessage[6] = 'know';
secretMessage.pop();
secretMessage.push('to Program');

secretMessage = secretMessage.join(" ");
secretMessage = `'${secretMessage}'`;

console.log(secretMessage);

