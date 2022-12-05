
const englishIncrease=document.getElementById('english-increase')
const englishDecrease=document.getElementById('english-decrease')
const englishCount = document.getElementById('english-count')

const persianIncrease=document.getElementById('persian-increase')
const persianDecrease=document.getElementById('persian-decrease')
const persianCount = document.getElementById('persian-count')

const sportIncrease=document.getElementById('sport-increase')
const sportDecrease=document.getElementById('sport-decrease')
const sportCount=document.getElementById('sport-count')

const biologyIncrease=document.getElementById('biology-increase')
const biologyDecrease=document.getElementById('biology-decrease')
const biologyCount=document.getElementById('biology-count')

const physicsIncrease=document.getElementById('Physics-increase')
const physicsDecrease=document.getElementById('Physics-decrease')
const physicsCount=document.getElementById('physics-count')


const total=document.getElementById('total')



//english
englishIncrease.addEventListener('click', () => {
    increase (englishCount)
})
englishDecrease.addEventListener('click', () => {
    decrease (englishCount)
})

//persian
persianIncrease.addEventListener('click', () => {
    increase (persianCount)
})
persianDecrease.addEventListener('click', () => {
    decrease (persianCount)
})

//sport
sportIncrease.addEventListener('click', () => {
    increase (sportCount)
})
sportDecrease.addEventListener('click', () => {
    decrease (sportCount)
})

//biology
biologyIncrease.addEventListener('click', () => {
    increase (biologyCount)
})
biologyDecrease.addEventListener('click', () => {
    decrease (biologyCount)
})

//Physics
physicsIncrease.addEventListener('click', () => {
    increase (physicsCount)
})
physicsDecrease.addEventListener('click', () => {
    decrease (physicsCount)
})


function increase(id){
    if (getTotal() < 10){
        id.innerText = parseInt(id.innerText) + 1
        updateTotal()
    }
    else{
        alert('حد مجاز مجموع واحد ها 10 واحد است')
    }  
}

function decrease(id){
    if (id.innerText > 0){
        id.innerText = parseInt(id.innerText) - 1
        updateTotal()
    }
    }

function updateTotal(){
    total.innerText=getTotal()
}

function getTotal()
{
    return (parseInt(englishCount.innerText)+
            parseInt(persianCount.innerText)+
            parseInt(sportCount.innerText)+
            parseInt(biologyCount.innerText)+
            parseInt(physicsCount.innerText)
            )
}
