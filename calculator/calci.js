let buttons = document.querySelectorAll("button");
let input = document.querySelector(".text");

let string ="";

let array = Array.from(buttons);
array.forEach(button =>{
    button.addEventListener('click', (b) =>{
        if(b.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }
        else if(b.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(b.target.innerHTML == 'DEL'){
            string = string.slice(0 , -1);
            input.value = string;
        }
        else{
            string += b.target.innerHTML;
            input.value = string;
        }
    })
})