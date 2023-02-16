const btn=document.querySelector('.btn')
const rateCard= document.querySelector('.rateCard')
const thanksCard= document.querySelector('.thanksCard')
const rateSpan=document.querySelector('.selectedScore')
const s1=document.querySelector('#s1')
const s2=document.querySelector('#s2')
const s3=document.querySelector('#s3')
const s4=document.querySelector('#s4')
const s5=document.querySelector('#s5')
let options=[]
options.push(s1, s2, s3, s4, s5)
let userRateObject
let userRate


btn.addEventListener('click', ()=>{
    thanksCard.classList.remove('inactive')
    rateCard.classList.add('inactive')
    selectRate()
})

function selectRate(){
    options.forEach((option)=>{
    if(option.checked){
        userRateObject=option
    }})
    userRate=userRateObject.name
    writeRate()
}

function writeRate(){
    rateSpan.innerHTML=`${userRate} `
}
