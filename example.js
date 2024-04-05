const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const address = document.getElementById("address");
const gender = document.getElementsByName("gender");

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
<td><button onclick="editScholar('${scholars[i].id}')">Edit</button>
<button onclick="deleteScholar('${scholars[i].id}')">Delete</button></td>
   </tr> 
 `;
  }
  tbody.innerHTML = html;
  fullName.value = "";
  email.value = "";
  phone.value = "";
  address.value = "";
  gender[0].checked = true;
}
displayData();

// function displaySelectedValue() {
//   let selected = document.querySelector(
//     "input[type=radio][name=gender]:checked"
//   );
//   localStorage.setItem("gender", selected.value);
// }
// window.onload = function () {
//   localStorage.removeItem("gender");
// };

function addStudent() {
  for (let i in gender) {
    if (gender[i].checked) genderValue = gender[i].value;
  }
  const newScholar = {
    id: Math.floor(Math.random() * 1000),
    fullName: fullName.value,
    email: email.value,
    phone: phone.value,
    address: address.value,
    gender: genderValue,
  };
  scholars.push(newScholar);
  //   Lưu dữ liệu vào localStorage
  localStorage.setItem("scholars", JSON.stringify(scholars));
  displayData();
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
  let index = scholars.findIndex((scholar) => scholar.id == scholarId);
  // console.log(scholarId, "ID");
  localStorage.setItem("scholarId", scholarId);
  document.getElementById("add").style.display = "none";
  document.getElementById("save").style.display = "block";
  // console.log(scholars[index]);

  for (let i in gender) {
    if (gender[i].value == scholars[index].gender) gender[i].checked = true;
  }
  fullName.value = scholars[index].fullName;
  email.value = scholars[index].email;
  phone.value = scholars[index].phone;
  address.value = scholars[index].address;
  // gender.value = scholars[index].gender;
  // console.log(id);
}

function saveScholar() {
  document.getElementById("add").style.display = "flex";
  document.getElementById("save").style.display = "none";
  const gender = document.querySelector('input[name="gender"]:checked').value;
  let index = scholars.findIndex(
    (scholar) => scholar.id == localStorage.getItem("scholarId")
  );
  console.log(index, "index");
  scholars[index] = {
    id: scholars[index].id,
    fullName: fullName.value,
    email: email.value,
    phone: phone.value,
    address: address.value,
    gender: gender,
  };

  // localStorage.setItem("scholars", JSON.stringify(scholars));
  displayData();
  // alert("Chỉnh sửa thông tin thành công!!!");
}
console.log(scholars);

function sortScholar() {
  scholars.sort((a, b) => {
    if (a.fullName < b.fullName) return -1; // `a` đứng trước `b`
    if (a.fullName > b.fullName) return 1; // // `a` đứng sau `b`
    return 0; // Hai chuỗi bằng nhau
  });
  displayData();
}

// Tìm kiếm sinh viên theo tên:
let filterScholar = document.getElementById("filterScholar");

function searchScholars() {
  let searchQuery = filterScholar.value.trim().toLowerCase(); // trim(): loại bỏ khoảng trắng ở đầu và cuối chuỗi, toLowerCase(): chuyển chuỗi thành chữ thường

  // Lọc danh sách sinh viên theo tên, includes(): kiểm tra chuỗi có chứa chuỗi con không
  let filteredScholars = scholars.filter((scholar) =>
    scholar.fullName.toLowerCase().includes(searchQuery)
  );

  let html = "";
  for (let i = 0; i < filteredScholars.length; i++) {
    let scholars = filteredScholars[i];
    html += `
      <tr>
        <td>${scholars.id}</td>
       <td>${scholars.fullName}</td>
       <td>${scholars.email}</td>
       <td>${scholars.phone}</td>
       <td>${scholars.address}</td>
       <td>${scholars.gender}</td>

        <td><button onclick="editScholar('${scholars.id}')">Edit</button><button onclick="deleteScholar('${scholars.id}')">Delete</button></td>
      </tr>
    `;
  }

  // Hiển thị kết quả lọc trực tiếp trong tbody
  document.getElementById("tbody2").innerHTML = html;
}
