displayCurrentTime = () => {
      let currDate = new Date();
      let hours = currDate.getHours();
      let minutes = currDate.getMinutes();
      let seconds = currDate.getSeconds();
      session = "AM"
      if (hours > 12) {
            hours = hours - 12;
            session = "PM";
      }
      if (hours == 0) {
            hours = 12;
      }
      hours = hours < 10 ? `0${hours}` : `${hours}`;
      minutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
      seconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
      let time = `${hours}:${minutes}:${seconds} ${session}`;
      document.getElementById("timeDisp").innerHTML = `${time}`;
}
displayCurrentDate = () => {
      let currDate = new Date();
      const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      const daysInAWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
      let date = currDate.getDate();
      let day = daysInAWeek[currDate.getDay()];
      let month = monthNames[currDate.getMonth()];
      let year = currDate.getFullYear();
      let dateDisplay = `${date} ${day} ${month} ${year}`;
      document.getElementById("dateDisp").innerHTML = `${dateDisplay}`;
}
let liveTime = setInterval(function () {
      displayCurrentTime();
      displayCurrentDate();
}, 1000)