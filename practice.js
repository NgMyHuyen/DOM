const fullName = document.getElementById("fullName");
const date = document.getElementById("date");
const gender = document.getElementById("gender");
const classmate = document.getElementById("classmate");
const image = document.getElementById("image");
let students = JSON.parse(localStorage.getItem("students")) || [];
console.log(JSON.parse(localStorage.getItem("students")));
let tbody = document.getElementById("tbody1");

function displayData() {
  let html = "";
  for (let i in students) {
    html += `
 <tr>
   <td>${students[i].fullName}</td>
   <td>${students[i].date}</td>
   <td>${students[i].gender}</td>
   <td>${students[i].classmate}</td>
   <td>${students[i].image}</td>
   <td><button onclick="editStudent('${students[i].id}')">Edit</button></td>
   <td><button onclick="deleteStudent('${students[i].id}')">Delete</button></td>
   </tr> 
 `;
  }
  tbody.innerHTML = html;
  // Set giá trị value thành chuỗi rỗng
  // Sau khi submit form cần reset lại các giá trị ô input
  fullName.value = "";
  date.value = "";
  gender.value = "";
  classmate.value = "";
  image.value = "";
}

// Delete student:
function deleteStudent(studentId) {
  console.log(studentId);
  // 2 bước để xóa
  // B1: Tìm được vị trí của phần tử có id trong mảng
  const index = students.findIndex((student) => student.id == studentId);
  students.splice(index, 1);
  // B2: Xóa phần. tử bằng splice
  //   Lưu dữ liệu vào localStorage
  localStorage.setItem("students", JSON.stringify(students));
  displayData();
  alert("Xóa student thành công!");
  console.log(index);
}
displayData();
function addStudent() {
  const newStudent = {
    id: Math.floor(Math.random() * 1000),
    fullName: fullName.value,
    date: date.value,
    gender: gender.value,
    classmate: classmate.value,
    image: image.value,
  };
  students.push(newStudent);
  //   Lưu dữ liệu vào localStorage
  localStorage.setItem("students", JSON.stringify(students));
  displayData();
  console.log(students);
  alert("Thêm học sinh mới thành công!!!!");
}
// tbody.innerHtml = ...

// Edit student
function editStudent(studentId) {
  console.log(studentId, "ID");
  localStorage.setItem("studentId", studentId);
  document.getElementById("add").style.display = "none";
  document.getElementById("save").style.display = "block";
  let index = students.findIndex((student) => student.id == studentId); // 1
  console.log(students[index]);
  fullName.value = students[index].fullName;
  date.value = students[index].date;
  gender.value = students[index].gender;
  classmate.value = students[index].classmate;
  image.value = students[index].image;
}

function saveStudent() {
  document.getElementById("add").style.display = "block";
  document.getElementById("save").style.display = "none";
  let index = students.findIndex(
    (student) => student.id == localStorage.getItem("studentId")
  );
  console.log(index, "index");
  students[index] = {
    id: students[index].id,
    fullName: fullName.value,
    date: date.value,
    gender: gender.value,
    classmate: classmate.value,
    image: image.value,
  };

  localStorage.setItem("students", JSON.stringify(students));
  displayData();
  alert("Chỉnh sửa thông tin thành công!!!");
}
