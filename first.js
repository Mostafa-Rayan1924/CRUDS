// crud
// 1-نخلي زرار التوتال يجمع حساب

let title = document.getElementById("title");
let count = document.getElementById("count");
let create = document.getElementById("submit");
let price = document.getElementById("price");
let taxes = document.getElementById("taxes");
let ads = document.getElementById("ads");
let discount = document.getElementById("discount");
let category = document.getElementById("category");
let total = document.getElementById("total");
let mode = "create";
let tmp;
function getTotal() {
  if (price.value != "") {
    let result = +price.value + +taxes.value + +ads.value - discount.value;
    total.innerHTML = result;
    total.style.background = "green";
  } else {
    total.innerHTML = "";
    total.style.background = "red";
  }
}

// لما ادوس علي كريات ينشا اوبجيكت في اراي
let dataPro;
if (localStorage.product != null) {
  dataPro = JSON.parse(localStorage.getItem("product"));
} else {
  dataPro = [];
}

submit.addEventListener("click", function () {
  let newObj = {
    title: title.value.toLowerCase(),
    price: price.value,
    taxes: taxes.value,
    ads: ads.value,
    discount: discount.value,
    total: total.innerHTML,
    count: count.value,
    category: category.value,
  };

  if (title.value != "" && price.value != "") {
    if (mode === "create") {
      if (count.value > 1) {
        for (i = 0; i < count.value; i++) {
          dataPro.push(newObj);
        }
      } else {
        dataPro.push(newObj);
      }
    } else {
      dataPro[tmp] = newObj;
      mode = "create";
      submit.innerHTML = "create";
    }
    let kalam = document.getElementById("kalam");
    kalam.style.display = "none";
    let kalamp = document.getElementById("kalamp");
    kalamp.style.display = "none";
  } else {
    let kalam = document.getElementById("kalam");
    kalam.innerHTML = "at least enter 1 character here";
    kalam.style.color = "red";
    let kalamp = document.getElementById("kalamp");
    kalamp.innerHTML = "please enter price";
    kalamp.style.color = "red";
  }

  localStorage.setItem("product", JSON.stringify(dataPro));
  showData();
  clearData();
});

// لما ادوس علي كرييت دي بتفضي الداتا اللي مكتوبه
function clearData() {
  title.value = "";
  price.value = "";
  taxes.value = "";
  ads.value = "";
  discount.value = "";
  total.innerHTML = "";
  count.value = "";
  category.value = "";
  total.style.background = "red";
}

function showData() {
  let tbody = document.getElementById("tbody");
  let table = ``;
  for (let i = 0; i < dataPro.length; i++) {
    table += `
    <tr>
    <td>${[i + 1]}</td>
    <td>${dataPro[i].title}</td>
    <td>${dataPro[i].price}</td>
    <td>${dataPro[i].taxes}</td>
    <td>${dataPro[i].ads}</td>
    <td>${dataPro[i].discount}</td>
    <td>${dataPro[i].total}</td>
    <td>${dataPro[i].category}</td>
   <td><button onclick="updateData(${i})" id="update">update</button></td>
   <td><button onclick="deleteItem(${i})" id="delete">delete</button></td>

    </tr>
      `;
  }
  tbody.innerHTML = table;
  let btnDelete = document.getElementById("deleteAll");
  if (dataPro.length > 0) {
    btnDelete.innerHTML = `<button onclick="deleteAll()">deleteALL(${dataPro.length})</button>`;
  } else {
    btnDelete.innerHTML = "";
  }
}
showData();

// function delete one item
function deleteItem(i) {
  dataPro.splice(i, 1);
  localStorage.product = JSON.stringify(dataPro);
  showData();
}
function deleteAll() {
  localStorage.clear();
  dataPro.splice(0);
  showData();
}
function updateData(i) {
  title.value = dataPro[i].title;
  price.value = dataPro[i].price;
  taxes.value = dataPro[i].taxes;
  ads.value = dataPro[i].ads;
  discount.value = dataPro[i].discount;
  category.value = dataPro[i].category;
  getTotal();
  submit.innerHTML = "update";
  mode = "update";
  tmp = i;
}
// search operation by title

function searchData(value) {
  let table = "";
  for (let i = 0; i < dataPro.length; i++) {
    if (dataPro[i].title.includes(value.toLowerCase())) {
      table += `
      <tr>
      <td>${[i + 1]}</td>
      <td>${dataPro[i].title}</td>
      <td>${dataPro[i].price}</td>
      <td>${dataPro[i].taxes}</td>
      <td>${dataPro[i].ads}</td>
      <td>${dataPro[i].discount}</td>
      <td>${dataPro[i].total}</td>
      <td>${dataPro[i].category}</td>
     <td><button onclick="updateData(${i})" id="update">update</button></td>
     <td><button onclick="deleteItem(${i})" id="delete">delete</button></td>
  
      </tr>
        `;
    }
    tbody.innerHTML = table;
  }
}
