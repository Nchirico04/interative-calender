const calender = document.querySelector("#app-calender");

for (let day = 1; day < 31; day++) {
    console.log(day)

 const date = date.now()

const options = {weekday: "long"}

const dayName = getDayName (day);
    
    
calender.insertAdjacentHTML("beforeend", <div class="day" ${weekend ? "weekend" : ""}>${day}</div>);




    const weekend = isWeekend(day) ==> {
    return day % 7 
}
}


const isWeekend = day => {
    return true;
}

