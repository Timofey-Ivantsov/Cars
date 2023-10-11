const toMain = document.getElementById('toMain')
const carName = document.getElementById('carName')
const desc = document.getElementById('description')
const price = document.getElementById('price')
const addCar = document.getElementById('addCar')
const carImage = document.getElementById('carImage')
const loadPhoto = document.getElementById('loadCarPhoto')

//localStorage.clear()

let cars = []
let id = 1

carImage.style.display = 'none'

toMain.addEventListener('click', function(){
    window.location.href = "../index.html"
})

function addPhoto(){
    let file = carPhoto.files[0]
    if(file){
        carImage.src = URL.createObjectURL(file)
        localStorage.setItem('carImage', carImage.src)
    }

    loadPhoto.style.display = 'none'
    carImage.style.display = 'block'
}

carImage.src = localStorage.getItem('carImage')

addCar.addEventListener('click', function(){

    if(JSON.parse(localStorage.getItem('car')) !== null)
    {
        cars = JSON.parse(localStorage.getItem('car'))
    }

    if(localStorage.getItem('id') !== null){
        id = Number(localStorage.getItem('id'))
    }
    
    let car = {
        image: carImage.src,
        name: carName.value,
        description: desc.value,
        price: price.value,
        id: id
    }

    cars.push(car)
    localStorage.setItem('car', JSON.stringify(cars))
    localStorage.setItem('key', 1)

    alert('Машина была успешно добавлена')

    carName.value = ''
    desc.value = ''
    price.value = ''

    ++id
    localStorage.setItem('id', id)
    window.location.href = "../index.html"
})