const btn=document.querySelector('btn')
const rateCard= document.querySelector('rateCard')
const thanksCard= document.querySelector('rateCard')

btn.addEventListener('click', ()=>{
    thanksCard.classList.remove('inactive')
    rateCard.clasList.add('inactive')
})