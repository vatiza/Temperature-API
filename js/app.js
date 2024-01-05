const API_KEY = `67b0257bddfb823c6416bf1e54732767`;

const loadTemperature=async city=>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const res=await fetch(url);
    const data=await res.json();
    displayTemperature(data)
}
const displayTemperature=data=>{
    console.log(data);  
    setInnerTextById('temperature',data.main.temp);
    setInnerTextById('condition',data.weather[0].main);
   
}
const setInnerTextById=(id,text)=>{
    const temperature = document.getElementById(id);
    temperature.innerText =text;

}
document.getElementById('search-btn').addEventListener('click',function(data){
    const getSearchField=document.getElementById('search-field');
    const city=getSearchField.value;
    document.getElementById('city').innerText=city;
   
    loadTemperature(city);
 
    
})

loadTemperature('dhaka');