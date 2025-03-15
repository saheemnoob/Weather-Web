function notice(){
    alert("Note : If the website isnot responding then the API key may have expired...");
}

function find(){
    let city = document.getElementById("city").value;
    if(city==""){
        alert("Please enter the name of the city");
    }
    fetch(`http://api.weatherapi.com/v1/current.json?key=0ffa80165d60409797d184642251403&q=${city}&aqi=no`)
    .then(response=>{
        return response.json()
    }).then(data=>{
        let res = document.getElementById("result");
        res.innerHTML=`The temprature in ${city} is  : ${data.current.temp_c} degree cel`;
    })
}