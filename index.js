document.getElementById('timer').innerHTML =
  02 + ":" + 30;
startTimer();


function startTimer() {
  var presentTime = document.getElementById('timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  if(m<0){
    return
  }
  
  document.getElementById('timer').innerHTML =
    m + ":" + s;
  console.log(m)
  setTimeout(startTimer, 1000);
  
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  return sec;
}


function crazyTabs() {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley', '_blank');
    window.open('https://www.addictinggames.com', '_blank');
    window.open('https://www.facebook.com/hyrumgary/', '_blank')
    window.open('https://www.minecraft.net/en-us/download', '_blank')
    window.open('https://leagueoflegends.fandom.com/wiki/Tutorial_(League_of_Legends)', '_blank')
    
    alert('Warning! A virus has been installed on your device!')
}
document.querySelector('#thumbs').addEventListener('click', crazyTabs);