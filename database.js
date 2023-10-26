const body=document.getElementById('student-info');
document.addEventListener('DOMContentLoaded', loadStudents);

function loadStudents(){
    const current=JSON.parse(localStorage.getItem("students"));
    current.forEach(element => {
        let row=document.createElement('tr');
        row.innerHTML=`
                <td>${element.rollNumber}</td>
                <td>${element.firstName}</td>
                <td>${element.lastName}</td>
                <td>${element.phoneNumber}</td>
                <td>${element.email}</td>
                <td>${element.cgpa}</td>
                <td>
                    <button class="delete btn btn-danger" >Delete</button>
                </td>
        `;
        body.appendChild(row);
    });
}

const table=document.getElementById('student-info');
 
table.addEventListener('click', (e)=>{
    target=e.target;
    const rollNumber=target.parentElement.parentElement.getElementsByTagName('td')[0].innerHTML;
    const old_data=JSON.parse(localStorage.getItem("students"));
    console.log(old_data);
    let new_data=[];
    for(let ele of old_data){
        if(rollNumber === ele.rollNumber){
            continue;
        }else{
            new_data.push(ele);
        }
    }
    localStorage.setItem('students',JSON.stringify(new_data));
    removeTableContent();
    loadStudents();
    showAlert(`Student with Roll Number ${rollNumber} deleted.`,'danger');
});

function removeTableContent(){
    while(body.childNodes.length != 0) {
        body.removeChild(body.childNodes[0]);
    }
}

function showAlert(message,type){
    const div=document.createElement('div');
    div.className=`pop pop-${type}`;
  
    div.appendChild(document.createTextNode(message));
    const container=document.querySelector('.container');
    const main=document.querySelector('.main');
    container.insertBefore(div,main);
  
    setTimeout( () => document.querySelector('.pop').remove() , 3000 );
}

document.getElementById('revert').addEventListener('click',()=>{
    removeTableContent();
    loadStudents();
    showAlert('Data is Reverted back to its original state.','revert');
});

document.getElementById('sortRnumber').addEventListener('click',()=>{
    const data=JSON.parse(localStorage.getItem('students'));
    data.sort((a,b) => a.rollNumber - b.rollNumber);
    removeTableContent();
    data.forEach(element => {
        let row=document.createElement('tr');
        row.innerHTML=`
                <td>${element.rollNumber}</td>
                <td>${element.firstName}</td>
                <td>${element.lastName}</td>
                <td>${element.phoneNumber}</td>
                <td>${element.email}</td>
                <td>${element.cgpa}</td>
                <td>
                    <button class="delete btn btn-danger" >Delete</button>
                </td>
        `;
        body.appendChild(row);
    });
    showAlert('Data has been Sorted on the basis of Roll Number.','sort');

});

document.getElementById('sortFname').addEventListener('click',()=>{
    const data=JSON.parse(localStorage.getItem('students'));
    data.sort((a,b) => a.firstName.localeCompare(b.firstName));
    removeTableContent();
    data.forEach(element => {
        let row=document.createElement('tr');
        row.innerHTML=`
                <td>${element.rollNumber}</td>
                <td>${element.firstName}</td>
                <td>${element.lastName}</td>
                <td>${element.phoneNumber}</td>
                <td>${element.email}</td>
                <td>${element.cgpa}</td>
                <td>
                    <button class="delete btn btn-danger" >Delete</button>
                </td>
        `;
        body.appendChild(row);
    });
    showAlert('Data has been Sorted on the basis of First Name.','sort');

});

document.getElementById('sortLname').addEventListener('click',()=>{
    const data=JSON.parse(localStorage.getItem('students'));
    data.sort((a,b) => a.lastName.localeCompare(b.lastName));
    removeTableContent();
    data.forEach(element => {
        let row=document.createElement('tr');
        row.innerHTML=`
                <td>${element.rollNumber}</td>
                <td>${element.firstName}</td>
                <td>${element.lastName}</td>
                <td>${element.phoneNumber}</td>
                <td>${element.email}</td>
                <td>${element.cgpa}</td>
                <td>
                    <button class="delete btn btn-danger" >Delete</button>
                </td>
        `;
        body.appendChild(row);
    });
    showAlert('Data has been Sorted on the basis of Last Name.','sort');

});

document.getElementById('sortCgpaUp').addEventListener('click',()=>{
    const data=JSON.parse(localStorage.getItem('students'));
    data.sort((a,b) => b.cgpa - a.cgpa);
    removeTableContent();
    data.forEach(element => {
        let row=document.createElement('tr');
        row.innerHTML=`
                <td>${element.rollNumber}</td>
                <td>${element.firstName}</td>
                <td>${element.lastName}</td>
                <td>${element.phoneNumber}</td>
                <td>${element.email}</td>
                <td>${element.cgpa}</td>
                <td>
                    <button class="delete btn btn-danger" >Delete</button>
                </td>
        `;
        body.appendChild(row);
    });
    showAlert('Data has been Sorted on the basis of CGPA(Up).','sort');

});

document.getElementById('sortCgpaDown').addEventListener('click',()=>{
    const data=JSON.parse(localStorage.getItem('students'));
    data.sort((a,b) => a.cgpa - b.cgpa);
    removeTableContent();
    data.forEach(element => {
        let row=document.createElement('tr');
        row.innerHTML=`
                <td>${element.rollNumber}</td>
                <td>${element.firstName}</td>
                <td>${element.lastName}</td>
                <td>${element.phoneNumber}</td>
                <td>${element.email}</td>
                <td>${element.cgpa}</td>
                <td>
                    <button class="delete btn btn-danger" >Delete</button>
                </td>
        `;
        body.appendChild(row);
    });
    showAlert('Data has been Sorted on the basis of CGPA(Down).','sort');

});

