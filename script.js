function login() {
    let name = document.getElementById("name").value;

    if (name == "") {
        alert("Enter name");
    } else {
        document.getElementById("exam").style.display = "block";
    }
}



