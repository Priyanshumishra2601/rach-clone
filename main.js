const username = document.getElementById("mail");
const password = document.getElementById("password");
const submibtn = document.getElementById("submit");
submibtn.style.background="#b3dbff";

password.addEventListener("keyup" , (e) =>{
    const value = e.currentTarget.value;

    if (value === ""){
        submibtn.disabled = true;
        submibtn.style.background="#b3dbff";
    }
    else{
        submibtn.disabled = false;
        submibtn.style.background="";
    }
})
