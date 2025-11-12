let input_value = document.getElementById("inputvalue");
let searchbtn = document.getElementById("input-btn");
let location_name = document.getElementById("name");
let temp = document.getElementById("temp");
let desc = document.getElementById("description");

// let url = `https://api.openweathermap.org/data/2.5/weather?q=${input_value.value}&appid=543b9169b7380d79ba6dcb740781ddef`;
// fetch(url)
// .then(res=> res.json())
// .then(data=>console.log(data))
// .catch(err => console.log("Error: ", err))

searchbtn.addEventListener("click", ()=>{
    console.log("loading...")
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${input_value.value}&appid=543b9169b7380d79ba6dcb740781ddef&units=metric`;
    fetch(url)
    .then(res=> res.json())
    .then(data=> {
        
        let temp_value = data['main']['temp'];
        let city_name = data['name'];
        let descr = data['weather'][0]['description'];

        location_name.innerHTML = city_name;
        temp.innerHTML = `${temp_value}°`;
        desc.innerHTML = descr;


})
    .catch(err => console.log("Error: ", err))
})


