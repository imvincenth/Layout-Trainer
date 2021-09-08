import { resetTimer } from "./metrics.js";

const textDisplayElement = document.getElementById("textDisplay");
const textInputElement = document.getElementById("textInput");

export const KOREAN_PHRASES_API = [
    "제 눈에 안경이다", "꿩 먹고 알 먹는다", "로마는 하루아침에 이루어진 것이 아니다",
    "보기 좋은 떡이 먹기도 좋다", "과부 설움은 홀아비가 안다", "낮말은 새가 듣고 밤말은 쥐가 듣는다",
    "눈에서 멀어지면, 마음에서도 멀어진다", "말을 냇가에 끌고 갈 수는 있어도 억지로 물을 먹일 수는 없다",
    "백지장도 맞들면 낫다", "뜻이 있는 곳에 길이 있다", "엎질러진 물이다",
    "장님이 코끼리 만지는 격이다", "다 된 밥에 재 뿌리지 마라", "웃음은 최고의 명약이다", "누워서 떡 먹기", "될성부른 나무는 떡잎부터 알아본다",
    "나무에서 떨어질 때가 있다", "내일 일을 오늘 내가 어떻게 아는데",
    "외로운 서킷 위로 시작된 주행", "지금 이 느낌 난 믿을 거야", "다시 한번 더 나 힘을 내볼게 기다려준 너를 위해서",
    "뭐가 널 행복하게 하는지", "이젠 얼굴 한 번 보는 것도 힘들어진 우리가", "아무것도 바꿀 필요 없이 예쁘다고", 
    "널 만나 몇 번의 계절을 지나 그 어딘가 헤매고 있는 게 아닐까", 
    "같이했던 모든 건 멋진 드라마 같은 걸", "하나도 안 어색해 혼자 있는 게",
    "근데 좀 허전해 난 여전히 거기 있나 봐", "너를 그리워하다 일 년이 가버렸어", "깊이 숨겼던 낡은 생각들 가끔 나를 잡고 괴롭히지만",
    "저 빛이 더 밝아질수록 내 그림자도 길어지는데", "안돼 그만해 꽃은 넣어둬 그냥 좀 바람이 불게 놔줘",
    "눈치 없이 밖을 나가는 걸까", "완벽한 하루를 사실 너와 걸을 수 있다면 얼마나 좋을까?",
    "날 바라보는 눈빛이 말해주잖아", "아름다운 그녀는 아직까지 누구와 진실 된 사랑의 맛을 본 적이 없는 게 분명해",
    "끝나지 않을 이야기가 되어 빛날 거야", "같은 꿈 속을 함께 거닐 테니까", "달아나고 싶어 저 멀리",
    "또 취하게 해 깊이", "기억 속의 모든 날이 울고 웃던 시간들이 지금의 우리를 다 만들어 준거라", "우린 지금처럼 하나니까",
    "무엇을 원해 원해 뭐든 다 줄게", "이런 악몽이라면 영영 깨지 않을게", "우리는 오렌지 태양 아레 그림자 없이 함께 춤을 춰",
    "어제는 어떤 날이었나 특별한 게 있었던가", "할 수 있는 것도 가진 것도 없어 보여", "꿈꾸고 싶어도 아무것도 하지 못해",
    "한 발쯤 뒤에 섰던 우리는 언제쯤 센치 해질까요", "멈추지 말고 계속 해나가기만 한다면 늦어도 상관없다",
    "어디든 가치가 있는 곳으로 가려면 지름길은 없다", "세상에서 보고싶은 변화가 있다면 당신 스스로 그 변화가 되어라",
    "성공에 대한 의지를 품는 것은 무엇보다 중요하다", 
    "동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세. 무궁화 삼천리 화려 강산 대한 사람, 대한으로 길이 보전하세. 남산 위에 저 소나무, 철갑을 두른 듯 바람 서리 불변함은 우리 기상일세. 무궁화 삼천리 화려 강산 대한 사람, 대한으로 길이 보전하세.",
    "가을 하늘 공활한데 높고 구름없이 밝은 달은 우리 가슴 일편단심일세. 무궁화 삼천리 화려 강산 대한사람, 대한으로 길이 보전하세. 이 기상과 이 맘으로 충성을 다하여 괴로우나 즐거우나 나라 사랑하세. 무궁화 삼천리 화려 강산 대한 사람, 대한으로 길이 보전하세.",
    "화낼 줄 모르는 것은 어리석다. 그렇지만 화를 참는 사랑은 현명하다.", "대부분의 사람들에게 있어 가장 위험한 일은 목표를 너무 높게 잡아서 그것을 이루지 못하는 것이 아니라 목표를 너무 낮게 잡아서 그것을 달성해 버리는 것이다.",
    "나무를 심는데 가장 좋았던 때는 20년 전이었다. 두 번째로 좋은 때는 지금이다.", "해안이 보이지 않는 것을 이겨낼 용기가 없다면 절대로 바다를 건널 수 없다.",
    "꿈을 꾸고 믿을 수 있다면 이룰 수도 있다.", "행복은 이미 완성된 것이 아니라, 당신의 행동으로부터 오는 것이다.",
    "굼벵이가 지붕에서 떨어질 때는 생각이 있어서 떨어진다.", "죽을 고비에 빠진 사람은 살 구멍을 찾아낸다.",
    "고양이 목에 방울 달기", "청년이여 일하라. 좀 더 일하라. 끝까지 열심히 일하라.", "염불에는 마음이 없고 잿밥에만 마음이 있다.",
    "지위가 높을수록 마음은 낮추어 먹어라.", "부자의 겸손은 가난한 사람의 벗이 된다.", "세 살 적 버릇이 여든까지 간다.",
    "어린이는 부모의 행위를 비추는 거울이다.", "오이는 씨가 있어도 도둑은 씨가 없다.", "자다가 봉창 두드린다.",
    "까마귀 제아무리 흰 칠을 하여도 백조로 될 수 없다.", "딱딱하기는 삼 년 묵은 박달나무 같다.", 
    "문제는 어떻게 죽느냐는 것이 아니고 어떻게 사느냐 하는 것이다.", "나의 웃음을 만드신 후에 새로이 나의 눈물을 지어 주시다.",
    "좋은 약은 입에 쓰지만 병에 이롭고, 충고는 귀에 거슬려도 행함에 이롭다.", "노력은 설명하는 것이 아닌 증명하는 것",
    "성공하기 위해서는 입을 닫고 귀를 열어라", "아무것도 하지 않으면 아무 일도 일어나지 않는다",
    "인생은 지긋지긋한 일의 반복이 아니라 지긋지긋한 일의 연속이다", "아주 많은 실수를 저지른 것이 아니라면, 옳은 선택 몇 개만으로도 인생은 성공할 수 있다", "빈센트는 열심히 프로젝트를 만들었다"
]

function getRandomKRQuote() {
    return KOREAN_PHRASES_API[Math.floor(Math.random()*KOREAN_PHRASES_API.length)];
}

export let charCount;

export async function renderKRQuote () {
    const quote = await getRandomKRQuote();
    charCount = quote.split("").length;
    textDisplayElement.innerHTML = "";
    quote.split("").forEach(char => {
        const charSpan = document.createElement("span");
        charSpan.innerText = char;
        textDisplayElement.appendChild(charSpan);
    })
    textInputElement.value = null;
    resetTimer();
}