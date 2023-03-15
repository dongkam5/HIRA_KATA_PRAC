const Kata= document.querySelector('.HIRA');
const answer = document.querySelector('.answer');
const ans1 = document.querySelector('.answer #ans1');
const ans2 = document.querySelector('.answer #ans2');
const ans3 = document.querySelector('.answer #ans3');
const ans4 = document.querySelector('.answer #ans4');
const ans5 = document.querySelector('.answer #ans5');
const Condition = document.querySelector('.condition');
const hiraArr = ['あ','い','う','え','お',      'か' ,'き' ,'く','け','こ',     'さ' , 'し'  ,'す' , 'せ' , 'そ',       'た' , 'ち' , 'つ' , 'て'  ,'と',       'な','に','ぬ','ね','の',       'は','ひ','ふ','へ','ほ',       'ま','み','む','め','も',   'や','ゆ','よ',     'ら','り','る','れ','ろ', 'わ','を','ん'];
const PronunceArr = ['아','이','우','에','오',  '카','키','쿠','케','코',       '사','시','스','세','소',               '타','치','츠','테','토',                 '나','니','누','네','노',        '하','히','후','헤','호',      '마','미','무','메','모',     '야','유','요',     '라','리','루','레','로' ,  '와','오','응'];
const ArrLen = hiraArr.length;
let CorrectAns =0;
let AnswerOrd= 0;
let CorrectAnsOrd = 0;

Reset();

function Reset(){
    AnswerOrd= parseInt((Math.random() * ArrLen))
    CorrectAnsOrd = parseInt((Math.random()* 5))+1;
    Kata.innerHTML= hiraArr[AnswerOrd];
    ans1.innerHTML= PronunceArr[parseInt((Math.random()*ArrLen))];
    ans2.innerHTML= PronunceArr[parseInt((Math.random()*ArrLen))];
    ans3.innerHTML= PronunceArr[parseInt((Math.random()*ArrLen))];
    ans4.innerHTML= PronunceArr[parseInt((Math.random()*ArrLen))];
    ans5.innerHTML = PronunceArr[parseInt((Math.random()*ArrLen))];
    CorrectAns=document.getElementById(`ans${CorrectAnsOrd}`);
    CorrectAns.innerHTML=PronunceArr[AnswerOrd];
    Condition.innerHTML="정답을 골라주세요!";
}
answer.addEventListener('click',(event) =>{
    console.log(CorrectAns.innerHTML);
    console.log(event.target.innerHTML);
    if(event.target.innerHTML== PronunceArr[AnswerOrd]){
        Condition.innerHTML="정답입니다!";  
        setTimeout(Reset,3000);
    }
    else{
        Condition.innerHTML='틀렸습니다 다시 정답을 골라주세요!';
        }
})