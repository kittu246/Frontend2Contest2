// fetching data from json and adding in table
let tableBody = document.getElementById("tablebody");
let maleTableBody = document.getElementById("MaleTablebody");
let femaleTableBody = document.getElementById("FemaleTablebody");
let student = [];
fetch(
  "https://gist.githubusercontent.com/harsh3195/b441881e0020817b84e34d27ba448418/raw/c4fde6f42310987a54ae1bc3d9b8bfbafac15617/demo-json-data.json"
)
  .then((response) => response.json())
  .then((data) => {
    student = data;
    displaydata(student, tableBody);  //as we can access data inside then so we are calling disaplydata here;
  });

//display data
function displaydata(student, tableBody) {
  tableBody.innerHTML = "";

  student.forEach((element) => {
    let row = tableBody.insertRow();
    const id = row.insertCell(0);
    const name = row.insertCell(1);
    const gender = row.insertCell(2);
    const Class = row.insertCell(3);
    const marks = row.insertCell(4);
    const passing = row.insertCell(5);
    const email = row.insertCell(6);

    id.innerText = `${element.id}`;
    name.innerHTML = `<img src="${element.img_src}" width=25px >  ${element.first_name} ${element.last_name} `;
    gender.innerText = `${element.gender}`;
    Class.innerText = `${element.class}`;
    marks.innerText = `${element.marks}`;
    passing.innerText = `${element.passing}`;
    email.innerText = `${element.email}`;
  });
}


//search functionality

let search = document.getElementById("SearchBtn");

search.addEventListener("click",Search);

function Search(){
 

const userInput = document.getElementById("myInput").value.toLowerCase();


const filtereddata = student.filter((element) =>{
  // element.first_name.toUpperCase() == UserInput
  // we can't use this as lhs can not be always equal to userInput
  return element.first_name.toLowerCase().includes(userInput) || element.last_name.toLowerCase().includes(userInput) || element.email.toLowerCase().includes(userInput)

}
//when we are using curly braces we need to use return keyword to et the return value, and if usingsingleline no return keywordis required
  
);
displaydata(filtereddata, tableBody);
}

// sort Functionality
function sort(type){

  switch (type){
    case"ased":
  student.sort((a,b) => a.first_name.localeCompare(b.first_name))
  displaydata(student,tableBody);
    break;

    case "desc":
      student.sort((a,b) => b.first_name.localeCompare(a.first_name))
      displaydata(student,tableBody);
      break;

    case "marks":
      student.sort((a,b) =>
      a.marks-b.marks)
      displaydata(student,tableBody);
      break;

    case "passing":
      const pass = student.filter((ele) => ele.passing== true )
     displaydata(pass,tableBody);
     break;

    case "Class":
      student.sort((a,b)=>
      a.class-b.class)
      displaydata(student,tableBody);
      break;

    case "gender":

      let Female = student.filter((ele) =>
      ele.gender == 'Female'
      )
      console.log(Female);

      displaydata(Female,femaleTableBody);

      let Male = student.filter((ele) =>
      ele.gender == 'Male'
      )
      displaydata(Male,maleTableBody);


      tableBody.style.display= 'none';

     break;

     default:break;

    
  }
  
}


