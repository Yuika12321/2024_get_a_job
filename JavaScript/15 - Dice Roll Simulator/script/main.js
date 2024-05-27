// "roll-button" ID를 가진 버튼 요소를 선택합니다.
const buttonEl = document.getElementById("roll-button");

// "dice" ID를 가진 주사위 요소를 선택합니다.
const diceEl = document.getElementById("dice");

// "roll-history" ID를 가진 롤 기록 요소를 선택합니다.
const rollHistoryEl = document.getElementById("roll-history");

// 주사위 굴림 결과를 저장하는 배열을 초기화합니다.
let historyList = []

// 주사위를 굴리는 함수입니다.
function rollDice() {
    // 1부터 6까지의 무작위 정수를 생성합니다.
    const rollResult = Math.floor(Math.random() * 6) + 1;

    // 생성된 숫자에 해당하는 주사위 면을 가져옵니다.
    const diceFace = getDiceFace(rollResult);

    // 주사위 요소의 내용을 주사위 면으로 업데이트 합니다.
    diceEl.innerHTML = diceFace;

    // 굴림 결과를 기록 리스트에 추가합니다.
    historyList.push(rollResult);

    // 롤 기록을 업데이트합니다.
    updateRollHistory();
}

// 롤 기록을 업데이트하는 함수입니다.
function updateRollHistory() {

    // 롤 기록 요소의 내용을 초기화합니다.
    rollHistoryEl.innerHTML = "";

    // 기록된 모든 굴림 결과를 반복합니다.
    for (let i = 0; i < historyList.length; i++) {
        // 새 리스트 아이템 요소를 생성합니다.
        const listItem = document.createElement("li");
        // 새 리스트 아이템의 내용을 설정합니다.
        listItem.innerHTML = `Roll ${i + 1}: <span>${getDiceFace(historyList[i])}</span>`
        // 롤 기록 요소에 리스트 아이템을 추가합니다.
        rollHistoryEl.appendChild(listItem);
    }
}

// 주사위 면을 반환하는 함수입니다. 
function getDiceFace(rollResult) {
    switch (rollResult) {
        case 1:
            return "&#9856;";
        case 2:
            return "&#9857;";
        case 3:
            return "&#9858;";
        case 4:
            return "&#9859;";
        case 5:
            return "&#9860;";
        case 6:
            return "&#9861;";
        default:
            return "";
    }
}
// 버튼 요소에 클릭 이벤트 리스너를 추가합니다. 
buttonEl.addEventListener("click", () => {

    // 주사위 요소에 "roll-animation" 클래스를 추가합니다. 
    diceEl.classList.add("roll-animation");

    // 1초 후에 애니메이션을 제거하고 주사위를 굴립니다.
    setTimeout(() => {
        diceEl.classList.remove("roll-animation");
        rollDice();
    }, 1000);

});

// "reset-button" ID를 가진 버튼 요소를 선택합니다.
const resetButtonEl = document.getElementById("reset-button");

// 리셋 버튼에 클릭 이벤트 리스너를 추가합니다.
resetButtonEl.addEventListener("click", reset);

// 리셋 함수입니다.
function reset() {
    // 주사위 굴림 결과 배열을 초기화합니다.
    historyList = [];

    // 롤 기록 요소의 내용을 초기화합니다.
    rollHistoryEl.innerHTML = "";
}
