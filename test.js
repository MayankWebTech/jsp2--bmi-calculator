const form = document.querySelector("form");

form.addEventListener("submit",function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value);
    const weight= parseInt(document.querySelector("#weight").value);
    const result = document.querySelector("#result");
    console.log(result.innerHTML)
    if (height === "" || height < 0 || isNaN(height)) {
        result.innerHTML = `Please give a valid height. ${height} is invalid`;
    
    
    }
    else if (weight === "" || weight < 0 || isNaN(weight)){
        result.innerHTML = `Please enter a valid weight. ${weight} is invalid`;
        
    }
   else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2); 
    if(bmi < 18.6){
    result.innerHTML = `BMI: ${bmi} , Under Weight`;
    }
    else if( 18.6 < bmi < 24.9 ){
        result.innerHTML = `BMI: ${bmi} , Normal Weight`;  
    }
    else{
        result.innerHTML = `BMI: ${bmi} ,Over Weight`;
    }
   }
    
})

