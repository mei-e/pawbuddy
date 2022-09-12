//retrieving all inputs
let formInputs=document.querySelectorAll("#registration-form input:not(#submit)");

function showModal(){
    //disables auto-refresh upon submission
    var form = document.querySelector("#registration-form");

    function handleForm(e) { 
        e.preventDefault(); 
    }
    
    for (item of formInputs){
        //empty input validation
        if(item.value.length!=0){ 
        
            form.addEventListener('submit', handleForm);

            //display modal
            document.querySelector("#main-modal").style.display="block";

            gsap.to("#modal",{
                y:'0%',
                duration:1,
                ease:"back.out(0.75)"
            });
        }
    }
    
}

function closeModal(){
    //close modal
    document.querySelector("#main-modal").style.display="none";

    //to repeat animation on click
    gsap.set("#modal",{
        y:'100%'
    });

    //erase form input value
    for (item of formInputs){
        item.value="";
    }
}