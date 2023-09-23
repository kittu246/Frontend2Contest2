// fetching data from json and adding in table
fetch("./demo-json-data.json")
.then(response => {
    return response.json();
 })
 .then(data => getData(data));

 let table = document.getElementById("table");

function getData (data){
    

 for(let i=0;i<data.length;i++){

    let tr = document.createElement("tr");

    tr.innerHTML = `<td>${data[i].id} </td>
    <td> ${data[i].first_name} ${data[i].last_name} </td>  
    <td> ${data[i].gender} </td> 
    <td> ${data[i].class} </td> 
    <td> ${data[i].marks} </td> 
    <td> ${data[i].passing} </td> 
    <td> ${data[i].email} </td>`  ;

    table.appendChild(tr);

 }
}


// search functionality
let input =document.getElementById("myInput");


let Searchbutton = document.getElementById("SearchBtn");
Searchbutton.addEventListener("click",search);

function search(){
    
 let inputValue = input.value.toUpperCase();


 let row = document.getElementsByTagName("tr");
 
 for(let i=1;i<row.length;i++){
    let tableData = row[i].getElementsByTagName("td");  
   
    

    if(tableData[1].innerText.toUpperCase().indexOf(inputValue) > -1 || tableData[6].innerText.toUpperCase().indexOf(inputValue) > -1 ){
 
        row[i].style.display = "";


    }
    else{

        row[i].style.display = "none";
    }
   }

}

// Sort A->Z means ascending order of full name

let ZA = document.getElementById("az");

ZA.addEventListener("click",sortAZ);

function sortAZ(){
    console.log("hey there");

    let row = document.getElementsByTagName("tr");
    let arr = [];

    for(let i=1;i<(row.length-1);i++){
        let tableData = row[i].getElementsByTagName("td")[1];
       
        let tableDataNext = row[i+1].getElementsByTagName("td")[1];
        // console.log(row[i].parentNode);

        if(tableData.innerText.toUpperCase() > tableDataNext.innerText.toUpperCase() ){
            row[i].parentNode.insertBefore(row[i+1],row[i]);
        }
        
        
        // console.log(row[i+1].tableData[1]);
        // arr.push(tableData[1]);

        // row.sort(row[i].tableData[1],row[i+1].tableData[1]);

    }

    


}


// marks sorting

let marks = document.getElementById("marks");

marks.addEventListener("click",sortMarks);

function sortMarks(){
    console.log("hey there");

    let row = document.getElementsByTagName("tr");
    
    

    for(let i=1;i<(row.length-1);i++){
        let tableData = row[i].getElementsByTagName("td")[3];
       
        let tableDataNext = row[i+1].getElementsByTagName("td")[3];
        // console.log(typeof parseInt(tableData.innerText));

        if(parseInt(tableData.innerText) > parseInt(tableDataNext.innerText) ){
            row[i].parentNode.insertBefore(row[i+1],row[i]);
        }
        
        
       

    }

    


}