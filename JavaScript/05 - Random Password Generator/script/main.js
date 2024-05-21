// 단어 리스트 (사용자 정의 가능)
const words = ['seat', 'pen', 'broad', 'vapor', 'ocean',
	'red', 'plate', 'late', 'that', 'ring', 'swim', 'shown',
	'path', 'law', 'list', 'hard', 'plate', 'block', 'two',
	'pupil', 'were', 'lot', 'pay', 'would', 'tired', 'dull',
	'mud', 'sky', 'grew', 'hard', 'ill', 'frame',
	'sport', 'did', 'many', 'been', 'page', 'year', 'trail',
	'earth', 'are', 'while', 'off', 'town', 'doing', 'size',
	'steel', 'sale', 'swam', 'put', 'zero', 'week', 'mill',
	'past', 'aside', 'her', 'cent', 'box', 'fuel', 'block',
	'those', 'late', 'sun', 'map', 'silk', 'lady', 'meant',
	'still', 'shine', 'range', 'loud', 'fox', 'gate', 'slide',
	'each', 'nails', 'flag', 'exist', 'door', 'luck', 'down',
	'poem', 'depth', 'press', 'crowd', 'herd', 'drink', 'worry',
	'dried', 'dig', 'new', 'rest', 'play', 'win', 'strong'];


  // getPassword 함수 선언 - 비밀번호 생성 함수
  function getPassword() {
  // 1. 비밀번호 길이 설정
  let length = document.getElementById('length').value; // 'length'라는 ID를 가진 요소의 값을 가져와 변수 length에 할당 (비밀번호 길이)

  // 길이가 입력되지 않았으면 기본값 8을 설정
  if (length === '') {
	length = 8;  // 기본 길이 8로 설정
  }

  // 2. 옵션 설정 (문자 포함 여부)
  const includeLowercase = document.getElementById('includeLowercase').checked; // 'includeLowercase' 등의 체크박스 요소의 선택 여부 확인 (소문자, 대문자, 특수문자, 숫자 포함 여부)
  const includeUppercase = document.getElementById('includeUppercase').checked;
  const includeSymbols = document.getElementById('includeSymbols').checked;
  const includeNumbers = document.getElementById('includeNumbers').checked;


  // 3. 사용 가능한 문자열 생성
  let chars = ''; // 사용 가능한 문자열 저장 변수
  if (includeLowercase) chars += 'abcdefghijklmnopqrstuvwxyz'; // 선택된 옵션에 따라 문자열 추가
  if (includeUppercase) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (includeSymbols) chars += '!@#$%&';
  if (includeNumbers) chars += '0123456789';

  // 4. 비밀번호 생성
  let password = '';
  for (let i = 0; i < length; i++) {
	password += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  // 5. 생성된 비밀번호 표시
  document.getElementById('password').value = password;
}
