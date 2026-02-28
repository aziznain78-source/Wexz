let users = JSON.parse(localStorage.getItem("users") || "[]");
let currentUser = localStorage.getItem("currentUser");

function login(){
  let u = user.value;
  let p = pass.value;
  let found = users.find(x=>x.u===u && x.p===p);
  if(!found) return alert("Login gagal!");
  localStorage.setItem("currentUser",u);
  location.reload();
}

function register(){
  let u = user.value;
  let p = pass.value;
  if(p.length<6) return alert("Password minimal 6 karakter");
  if(users.find(x=>x.u===u)) return alert("Akun sudah ada");
  users.push({u,p});
  localStorage.setItem("users",JSON.stringify(users));
  alert("Akun berhasil dibuat");
}

function logout(){
  localStorage.removeItem("currentUser");
  location.reload();
}

if(currentUser){
  loginBox.style.display="none";
}