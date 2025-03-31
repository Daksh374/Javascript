//FORIN LOOP
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

//FORIN for arrays
const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(key);     //This is print all the keys(indexes)
    console.log(programming[key]);  //This is print all the values
}

