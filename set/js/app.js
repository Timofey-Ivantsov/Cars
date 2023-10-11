const addCar = document.getElementById('addCar')
const container = document.getElementById('container')
const intro = document.getElementById('intro')

//localStorage.clear()

let carData = JSON.parse(localStorage.getItem('car'))

if(carData !== null){
    console.log(carData[carData.length - 1].image)
    function init(){
        for(let i = 0; i < carData.length; ++i){
            renderNewCar(i)
        }
    }
}

function carDesc(carPhoto, carName, index = carData[carData.length - 1].id)
{
    return `<div class = "data" id = "data${index}">
    <div class = "image">
        <img src = "${carPhoto}" class = "photo">
    </div>
    <div class = "name">
        <h1>${carName}</h1>
    </div>
</div>`
}



if(localStorage.getItem('key') !== null){
    intro.style.display = 'none'
}

addCar.addEventListener('click', function(){
    window.location.href = './html/carForm.html'
})

function renderNewCar(index = carData[carData.length - 1]){
    const carName = carData[index].name
    const id = carData[index].id
    const carImage = carData[index].image
    const carIntro = document.createElement('div')
    carIntro.setAttribute("id", `car${id}`)
    carIntro.innerHTML = carDesc(carImage, carName)
    container.appendChild(carIntro)
}

init()