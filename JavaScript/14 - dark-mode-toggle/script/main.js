
// input 클래스를 가진 요소를 선택합니다.
const inputEl = document.querySelector(".input");
// body 요소를 선택합니다.
const bodyEl
    =
    document.querySelector("body");
// localStorage에서 "mode" 값을 가져와서 JSON으로 변환한 후 inputEl의 checked 속성에 설정합니다.
inputEl.checked = JSON.parse(localStorage.getItem("mode"));

// body의 배경색을 업데이트하는 함수입니다.
updateBody();

// body의 배경색을 inputEl의 상태에 따라 업데이트합니다.
function updateBody() {
    if (inputEl.checked) {
        // inputEl이 체크되어 있으면 body의 배경색을 검정으로 설정합니다.
        bodyEl.style.background = "black";
    } else {
        // inputEl이 체크되어 있지 않으면 body의 배경색을 흰색으로 설정합니다.
        bodyEl.style.background = "white";
    }
}
// inputEl에 'input' 이벤트 리스너를 추가합니다.
inputEl.addEventListener("input", () => {
    // body의 배경색을 업데이트합니다.
    updateBody();
    // localStorage를 업데이트합니다.
    updateLocalStorage();
});
// localStorage에 inputEl의 현재 상태를 저장합니다.
function updateLocalStorage() {
    // inputEl의 checked 상태를 JSON 문자열로 변환하여 localStorage에 "mode" 키로 저장합니다.
    localStorage.setItem("mode", JSON.stringify(inputEl.checked));

}