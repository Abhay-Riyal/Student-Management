const form = document.getElementById('student-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const rNumber = document.getElementById('rollNumber').value;
  const fName = document.getElementById('firstName').value;
  const lName = document.getElementById('lastName').value;
  const pNumber = document.getElementById('phoneNumber').value;
  const mail = document.getElementById('email').value;
  const marks = document.getElementById('cgpa').value;

  if (
    rollNumberAlert(rNumber) &&
    firstNameAlert(fName) &&
    lastNameAlert(lName) &&
    phoneNumberAlert(pNumber) &&
    emailAlert(mail) &&
    cgpaAlert(marks)) 
  {

    const student = {
      rollNumber: rNumber,
      firstName: fName,
      lastName: lName,
      phoneNumber: pNumber,
      email: mail,
      cgpa: marks,
    };

    let flag = true;

    if (localStorage.getItem('students') == null) {
      localStorage.setItem('students', '[]');
    } else {
      const old_data = JSON.parse(localStorage.getItem('students'));

      for (let element of old_data) {
        if (element.rollNumber === rNumber) {
          document.getElementById('rollNumberAlert').innerHTML = `${rNumber} roll number already exists. Please choose a different Roll number.`;
          document.getElementById('alertRollNumber').style.display = 'block';
          flag = false;
          break;
        }
      }
    }
    const old_data = JSON.parse(localStorage.getItem('students'));
    if (flag) {
      document.getElementById('alertRollNumber').style.display = 'none';
      old_data.push(student);
      localStorage.setItem('students', JSON.stringify(old_data));
      showAlert('Student Data Added Successfully.','success');
      clearFields();
    }
  }
});


function rollNumberAlert(rollNumber) {
  if (rollNumber >= 1 && rollNumber <= 4000) {
    document.getElementById('alertRollNumber').style.display = 'none';
    return true;
  } else {
    document.getElementById('rollNumberAlert').innerHTML = `${rollNumber} is not a valid Roll Number. Please enter a Roll Number in the range [1-4000].`;
    document.getElementById('alertRollNumber').style.display = 'block';
    return false;
  }
}

function firstNameAlert(firstName) {
  const reg = /^[a-zA-Z]*$/;
  if (
    reg.test(firstName) &&
    !firstName.includes(' ') &&
    firstName.length >= 2 &&
    firstName.length <= 30
  ) {
    document.getElementById('alertFirstName').style.display = 'none';
    return true;
  } else {
    document.getElementById('firstNameAlert').innerHTML = `${firstName} is not a valid first name. Valid first name consists of alphabets only.`;
    document.getElementById('alertFirstName').style.display = 'block';
    return false;
  }
}

function lastNameAlert(lastName) {
  const reg = /^[a-zA-Z]*$/;
  console.log(lastName);
  if (
    reg.test(lastName) &&
    !lastName.includes(' ') &&
    lastName.length >= 2 &&
    lastName.length <= 30
  ) {
    document.getElementById('alertLastName').style.display = 'none';
    return true;
  } else {
    document.getElementById('lastNameAlert').innerHTML = `${lastName} is not a valid last name. Valid last name consists of alphabets only.`;
    document.getElementById('alertLastName').style.display = 'block';
    return false;
  }
}

function phoneNumberAlert(phoneNumber) {
  const reg = /^[0-9]{10}$/;
  if (reg.test(phoneNumber)) {
    document.getElementById('alertPhoneNumber').style.display = 'none';
    return true;
  } else {
    document.getElementById('phoneNumberAlert').innerHTML = `${phoneNumber} is not a valid phone number. Valid phone number consists of numbers and 10 digits only.`;
    document.getElementById('alertPhoneNumber').style.display = 'block';
    return false;
  }
}

function emailAlert(email) {
  const reg = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/;
  if (reg.test(email)) {
    document.getElementById('alertEmail').style.display = 'none';
    return true;
  } else {
    document.getElementById('emailAlert').innerHTML = `${email} is not a valid email.`;
    document.getElementById('alertEmail').style.display = 'block';
    return false;
  }
}

function cgpaAlert(cgpa) {
  const reg = /^[0-9]\.[0-9]{2}$/;
  if (cgpa === '10.00') {
    document.getElementById('alertCgpa').style.display = 'none';
    return true;
  } else if (reg.test(cgpa)) {
    document.getElementById('alertCgpa').style.display = 'none';
    return true;
  } else {
    document.getElementById(
      'cgpaAlert'
    ).innerHTML = `${cgpa} is not a valid CGPA. Valid CGPA is in the range and of the form [0.00 - 10.00]`;
    document.getElementById('alertCgpa').style.display = 'block';
    return false;
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

function clearFields(){
  document.getElementById('rollNumber').value='';
  document.getElementById('firstName').value='';
  document.getElementById('lastName').value='';
  document.getElementById('phoneNumber').value='';
  document.getElementById('email').value='';
  document.getElementById('cgpa').value='';
}
