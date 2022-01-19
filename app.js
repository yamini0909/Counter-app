//set intial value
let count = 0;

//select value and buttons
let value = document.querySelector("#span");
let buttons = document.querySelectorAll(".btn")

buttons.forEach(function (btn){
    btn.addEventListener("click", function(e){
        console.log(e.currentTarget);
       const styles = e.currentTarget.classList;
       if (styles.contains("decrease")){
           count--;
       }
       else if( styles.contains("increase")){
           count++;
       }
       else {
           count = 0;
       }

       if ( count > 0){
           value.style.color = "blue";
       }
       if ( count < 0){
        value.style.color = "red";
    }
    if ( count == 0){
        value.style.color = "black";
    }

       value.textContent = count;
    })
})