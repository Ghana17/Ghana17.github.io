function Login() {

    var username = document.login.username.value;
    username = username.toLowerCase();
    var password = document.login.password.value;
    password = password.toLowerCase();

    if (username == "oke" && password == "java") {
        alert("Selamat anda berhasil login");
    } else {
        alert("Username dan password anda salah!");
    }
}