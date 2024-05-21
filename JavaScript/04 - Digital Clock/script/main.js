
// "hour"라는 ID를 가진 HTML 요소를 가져와 변수 hour에 할당
const hour = document.getElementById("hour");

// "minute"라는 ID를 가진 HTML 요소를 가져와 변수 minute에 할당
const minute = document.getElementById("minute");

// "seconds"라는 ID를 가진 HTML 요소를 가져와 변수 seconds에 할당
const seconds = document.getElementById("seconds");

// "ampm"라는 ID를 가진 HTML 요소를 가져와 변수 ampm에 할당
const ampm = document.getElementById("ampm");


// 10보다 작은 숫자 앞에 0을 추가하는 함수
function formatTime(time) { // formatTime 함수 선언 - 숫자 앞에 0을 채워주는 함수
  return time.toString().padStart(2, "0"); // time 변수를 문자열로 변환하고 앞에 0을 채워서 길이를 2로 만든 후 반환
}

// 시간이 12시 이상인지 여부를 판별하여 오전(AM) 또는 오후(PM) 반환
function isAmPm(hours) { // isAmPm 함수 선언 - 12시간제 표기 여부 판별 함수
  return hours >= 12 ? "오후" : "오전"; // hours가 12 이상이면 "오후" 문자열 반환, 아니면 "오전" 문자열 반환
}

function clock() { // clock 함수 선언 - 현재 시간을 표시하는 함수
  const date = new Date(); // 현재 날짜 및 시간 정보를 담는 Date 객체 생성

  let h = date.getHours();  // 현재 시 (24시간제) || date 객체에서 현재 시 (24시간제) 추출하여 변수 h에 할당
  let m = date.getMinutes();  // 현재 분 || date 객체에서 현재 분 추출하여 변수 m에 할당
  let s = date.getSeconds();  // 현재 초 || date 객체에서 현재 초 추출하여 변수 s에 할당

  hour.textContent = formatTime(h); // hour 요소의 내용을 formatTime(h) 함수를 사용하여 갱신 (시 표시)
  minute.textContent = formatTime(m); // minute 요소의 내용을 formatTime(m) 함수를 사용하여 갱신 (분 표시)
  seconds.textContent = formatTime(s); // seconds 요소의 내용을 formatTime(s) 함수를 사용하여 갱신 (초 표시)
  ampm.textContent = isAmPm(h); // ampm 요소의 내용을 isAmPm(h) 함수를 사용하여 갱신 (오전/오후 표시)
}
setInterval(clock, 1000);
