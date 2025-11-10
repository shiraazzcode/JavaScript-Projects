
let userInput = document.getElementById("date");
let result = document.getElementById("result");
let calculate_btn = document.getElementById("btn");
userInput.max = new Date().toISOString().split("T")[0];

const calculate_age = ()=>{
    let birthdate = new Date(userInput.value);

    let d1 = birthdate.getDate();
    let m1 = birthdate.getMonth() + 1;
    let y1 = birthdate.getFullYear();

    let today = new Date();
    
    let d2 = today.getDate();
    let m2 = today.getMonth() + 1; 
    let y2 = today.getFullYear();

    // store diff in date
    let d3, m3, y3;
    y3 = y2 - y1;
    if(m2 >= m1){
        m3 = m2 - m1;
    }else{
        y3--;
        m3 = 12 + m2 - m1;
    }

    if(d2 >= d1){
        d3 = d2 - d1;

    }else{
        m3--;
        //day diff
        d3 = getDaysInMonth(y1, m1) + d2 - d1;
    }

    if(m3 < 0){
        m3 = 11;
        y3--;
    }
    result.innerHTML = `You are ${y3} years ${m3} months and ${d3} days old.`;
    console.log(`You are ${y3} years ${m3} months and ${d3} days old.`);
}

function getDaysInMonth(year, month){
    return new Date(year, month, 0).getDate();
}
calculate_btn.addEventListener("click", calculate_age);
