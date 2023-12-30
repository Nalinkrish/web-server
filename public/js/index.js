// alert("hello world")
// alert function not in backend



 // select the form 
 const form = document.querySelector("form");
 const locationInput = document.querySelector("input[type=text")
 const message1 = document.querySelector("#message1");


 form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const location = locationInput.value;
    console.log(location)

    fetch("/weather?location=" +location).then((response)=>{
        // console.log(response) // go to inspect and check
            response.json().then((data)=>{
                // console.log(data)  // go to inspect and check
                message1.textContent = data.forecast;
                });
    
     }); 
 });

 //35
