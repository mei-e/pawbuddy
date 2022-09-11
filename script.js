//retrieving all inputs
let formInputs=document.querySelectorAll("#registration-form input:not(#submit)");

function showModal(){
    
    for (item of formInputs){
        //empty input validation
        if(item.value.length!=0){

            //disables auto-refresh upon submission
            var form = document.querySelector("#registration-form");
            function handleForm(e) { 
                e.preventDefault(); 
            } 
            form.addEventListener('submit', handleForm);

            //display modal
            document.querySelector("#main-modal").style.display="block";
        }
    }
    
}

function closeModal(){
    //close modal
    document.querySelector("#main-modal").style.display="none";


    //erase form input value
    for (item of formInputs){
        item.value="";
    }
}