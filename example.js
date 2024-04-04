const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const address = document.getElementById("address");
const gender = document.getElementById("gender");

let scholars = JSON.parse(localStorage.getItem("scholars")) || [];
console.log(JSON.parse(localStorage.getItem("scholars")));
let tbody = document.getElementById("tbody2");

function displayData() {
  let html = "";
  for (let i in scholars) {
    html += `
 <tr>
   <td>${scholars[i].id}</td>

   <td>${scholars[i].fullName}</td>
   <td>${scholars[i].email}</td>
   <td>${scholars[i].phone}</td>
   <td>${scholars[i].address}</td>
   <td>${scholars[i].gender}</td>
<td><button onclick="editScholar('${scholars[i].id}')">Edit</button><button onclick="deleteScholar('${scholars[i].id}')">Delete</button></td>
   </tr> 
 `;
  }
  tbody.innerHTML = html;
  fullName.value = "";
  email.value = "";
  phone.value = "";
  address.value = "";
}
displayData();

function handleSubmit(event) {
  event.preventDefault();
  const newScholar = {
    id: Math.floor(Math.random() * 1000),
    fullName: fullName.value,
    email: email.value,
    phone: phone.value,
    address: address.value,
    // gender: gender.value,
  };
  scholars.push(newScholar);
  //   Lưu dữ liệu vào localStorage
  localStorage.setItem("scholars", JSON.stringify(scholars));
  displayData();
  console.log(scholars);
  alert("Thêm học sinh mới thành công!!!!");
}

function deleteScholar(scholarId) {
  console.log(scholarId);
  // 2 bước để xóa
  // B1: Tìm được vị trí của phần tử có id trong mảng
  const index = scholars.findIndex((scholar) => scholar.id == scholarId);
  scholars.splice(index, 1);
  // B2: Xóa phần. tử bằng splice
  //   Lưu dữ liệu vào localStorage
  localStorage.setItem("scholars", JSON.stringify(scholars));
  displayData();
  alert("Xóa scholar thành công!");
  console.log(index);
}

function editScholar(scholarId) {
  console.log(scholarId, "ID");
  localStorage.setItem("scholarId", scholarId);
  document.getElementById("add").style.display = "none";
  document.getElementById("save").style.display = "block";
  let index = scholars.findIndex((scholar) => scholar.id == scholarId); // 1
  console.log(scholars[index]);
  fullName.value = scholars[index].fullName;
  email.value = scholars[index].email;
  gender.value = scholars[index].gender;
  phone.value = scholars[index].phone;
  address.value = scholars[index].address;
}

function saveScholar() {
  document.getElementById("add").style.display = "block";
  document.getElementById("save").style.display = "none";
  let index = scholars.findIndex(
    (scholar) => scholar.id == localStorage.getItem("scholarId")
  );
  console.log(index, "index");
  scholars[index] = {
    id: Math.floor(Math.random() * 1000),
    fullName: fullName.value,
    email: email.value,
    phone: phone.value,
    address: address.value,
  };

  localStorage.setItem("scholars", JSON.stringify(scholars));
  displayData();
  alert("Chỉnh sửa thông tin thành công!!!");
}
