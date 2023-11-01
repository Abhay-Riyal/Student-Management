# Student-Management
This is a very basic web project made using HTML,CSS,Javascript and Bootstrap.

## Project Description
- Student Management as the name suggests is a website that maintains and performs
basic operations on student records.
- The whole idea revolves around data and how to make sure that user puts in valid data.
- It consists of 2 HTML pages.
  1. index.html
    - This page is the entry point for our project.
  2. Database.html
    - This page shows us the records of students that are
      present in local storage.
- Both of these HTML pages get their own script files name script.js and database.js
  respectively.
  1. script.js
    - This file handles all the validations and checks that should be put on data
      to maintain its consistency and validity.
    - It ensures only valid data get put in the local storage. 
  2. database.js
    - This file brings all the data from local storage and makes it visible to
      the user.
    - It also performs all the sorting and delete operation on the data.
## Challenges Faced
1. As there are 2 different HTML files exchange of data is not really that simple
   due to existence of 2 different document object.
2. Here Roll Number is treated as a primary key to prevent redundancy of data
   but implementing it was quite a challenge.
3. By default, the sort() function sorts values as strings.
   This works well for strings ("Apple" comes before "Banana").
   However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
   Because of this, the sort() method will produce incorrect result when sorting numbers.

## Solutions
1. What we require was an intermediatary storage which is accessbile to both the script files
   and local storage fulfills our requirements.
3. Before submission of data we need to check if the current roll number already exists in the records.
   If yes, then we need to prompt the user to choose a different roll number.
4. This problem can solved by providing a compare funtion.
   (a,b) => a-b;
   This function is sent as a call back function to sort function.
   array.sort((a,b)=>a-b);
