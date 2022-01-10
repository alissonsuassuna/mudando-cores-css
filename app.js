const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];

const btn = document.getElementById('btn')
const color = document.querySelector('.span-color')

console.log(btn, color)


btn.addEventListener('click', function(){
    console.log('clicou no botão')
    const randomNumber = 2
        // backgrond-color
    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]
})