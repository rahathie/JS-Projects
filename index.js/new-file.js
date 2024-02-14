const email = document.getElementById("email");

// step-1---  OnClick

email.addEventListener("change", function(e) {
    console.log("change", e.target.value);
});

designation.addEventListener("change", function(e){
    console.log(e,target.value);
});

password.addEventListener("focus", function(e){
    console.log(e);
    e.target.style.background = "blue";
});

password.addEventListener("blur", function(e){
    console.log(e.target.value);
    e.target.style.background = "";
});

window.addEventListener("load", function(){
    console.log('Window loading....');
    this.alert('Please wait...');
});