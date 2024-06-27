// DOM 요소와 관련된 변수 선언
const yearField = document.getElementById('year');
const monthField = document.getElementById('month');
const dayField = document.getElementById('day');
const calculateButton = document.getElementById('calculate-age');
const display = document.getElementById('display');
const today = new Date();

let selectedYear = today.getFullYear(),
    selectedMonth = today.getMonth() + 1,
    selectedDay = today.getDate(),
    daysOfMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

window.addEventListener('DOMContentLoaded', () => {
    updateDaysOfMonths(today.getFullYear());
    fillYearField();
    updateDayField(today.getFullYear(), today.getMonth() + 1);
    selectMonth(today.getMonth() + 1);
    selectDay(today.getDate());

    yearField.addEventListener('change', handleYearChange);
    monthField.addEventListener('change', handleMonthChange);
    dayField.addEventListener('change', handleDayChange);
    calculateButton.addEventListener('click', handleAgeCalcultion);
});

/*
윤년인지 여부 확인

@param {number} year
@returns boolean 윤년이면 true, 아니면 false 반환
*/

function isLeapYear(year) {
    if (year % 400 === 0) return true;
    if (year % 100 === 0) return false;
    if (year % 4 === 0) return true;
    return false;
}

/*
년도가 변경될 때 2월의 날짜를 업데이트
윤년이면 2월은 29일, 그렇지 않으면 28일

@param {number} year
*/

function updateDaysOfMonths(year) {
    daysOfMonths[1] = isLeapYear(year) ? 29 : 28;
}

/*
월 필드 값을 업데이트

@param {number} month
*/

function selectMonth(month) {
    monthField.value = month;
}

/*
일 필드 값을 업데이트

@param {number} day
*/

function selectDay(day) {
    dayField.value = day;
}

// 지난 100년의 년도를 년도 필드에 채움

function fillYearField() {
    const numberOfYears = 100;
    const currentYear = today.getFullYear();
    const startYear = currentYear - numberOfYears;

    for (let i = startYear; i <= currentYear; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;

        i === currentYear && option.setAttribute('selected', 'selected');
        yearField.appendChild(option);
    }
}

/*
년도와 월 값이 변경될 때 일 필드를 업데이트
월의 변경에 따라 일 필드 목록을 업데이트 해야 함
윤년에 따라 일수가 변경되므로 년도 변경 시에도 필요함

@param {number} year
@param {number} month
*/

function updateDayField(year, month) {
    updateDaysOfMonths(year);
    const totalDays = daysOfMonths[month - 1];
    clearList(dayField);
    console.log({
        selectedDay
    });

    for (let i = 1; i <= totalDays; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;

        if (i === selectedDay) option.setAttribute('selected', 'seleted');
        dayField.appendChild(option);
    }
}

// 선택 요소의 옵션을 지움

function clearList(element) {
    for (let i = element.options.length - 1; i >= 1; i--) {
        element.remove(i);
    }
}

/*
선택된 년, 월, 일로 Date 객체를 생성

@returns {Date}
*/

function makeDate() {
    return new Date(selectedYear, selectedMonth - 1, selectedDay);
}

/*
년도 필드 변경 이벤트 핸들러 함수

@param {ChangeEvent} event
*/

function handleYearChange(event) {
    event.prevenDefault();
    const {
        value
    } = event.target;
    selectedYear = +value;
    updateDayField(value, selectedMonth);
}

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// 나이를 계산하는 함수

function ageCalculate() {
    let today = new Date();
    let inputDate = new Date(document.getElementById("date-input").value);
    let birthMonth, birthDate, birthYear;
    let birthDetails = {
        date: inputDate.getDate(),
        month: inputDate.getMonth() + 1,
        year: inputDate.getFullYear()
    };
    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth() + 1;
    let currentDate = today.getDate();

    leapChecker(currentYear);

    if (
        birthDetails.year > currentYear ||
        (birthDetails.month > currentMonth && birthDetails.year == currentYear) ||
        (birthDetails.date > currentDate && birthDetails.month == currentMonth && birthDetails.year == currentYear)
    ) {
        alert("Not Born Yet");
        displayResult("-", "-", "-");
        return;
    }
    birthYear = currentYear - birthDetails.year;

    if (currentMonth >= birthDetails.month) {
        birthMonth = currentMonth - birthDetails.month;
    } else {
        birthYear--;
        birthMonth = 12 + currentMonth - birthDetails.month;
    }

    if (currentDate >= birthDetails.date) {
        birthDate = currentDate - birthDetails.date;
    } else {
        birthMonth--;
        let days = months[currentMonth - 2];
        birthDate = days + currentDate - birthDetails.date;
        if (birthMonth < 0) {
            birthMonth = 11;
            birthYear--;
        }
    }

    displayResult(birthDate, birthMonth, birthYear);
}