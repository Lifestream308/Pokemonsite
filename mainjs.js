// Javascript Pokemon website that takes in JSON from my own API

let obj

async function getText() {
    let x = await fetch('https://pokemondb308.herokuapp.com/getposts');
    let y = await x.text();
    obj = JSON.parse(y)
    console.log(obj)
  }

function chooseImages() {
    input = document.getElementById('1stinput')
    image = document.getElementById('1stimage')
    image.src = 'images/' + input.value + '.gif'
    title1 = document.getElementById('title1')
    title1.innerHTML = obj[input.value - 1].title
    content1 = document.getElementById('content1')
    content1.innerHTML = obj[input.value - 1].content
    number1 = document.getElementById('number1')
    number1.innerHTML = '# ' + obj[input.value - 1].number
    type1 = document.getElementById('type1')
    type1.innerHTML = 'Type - ' + obj[input.value - 1].type
    weakness1 = document.getElementById('weakness1')
    weakness1.innerHTML = 'Weaknesses - ' + obj[input.value - 1].weakness


    input = document.getElementById('2ndinput')
    image = document.getElementById('2ndimage')
    image.src = 'images/' + input.value + '.gif'
    title2 = document.getElementById('title2')
    title2.innerHTML = obj[input.value - 1].title
    content2 = document.getElementById('content2')
    content2.innerHTML = obj[input.value - 1].content
    number2 = document.getElementById('number2')
    number2.innerHTML = '# ' + obj[input.value - 1].number
    type2 = document.getElementById('type2')
    type2.innerHTML = 'Type - ' + obj[input.value - 1].type
    weakness2 = document.getElementById('weakness2')
    weakness2.innerHTML = 'Weaknesses - ' + obj[input.value - 1].weakness


    input = document.getElementById('3rdinput')
    image = document.getElementById('3rdimage')
    image.src = 'images/' + input.value + '.gif'
    title3 = document.getElementById('title3')
    title3.innerHTML = obj[input.value - 1].title
    content3 = document.getElementById('content3')
    content3.innerHTML = obj[input.value - 1].content
    number3 = document.getElementById('number3')
    number3.innerHTML = '# ' + obj[input.value - 1].number
    type3 = document.getElementById('type3')
    type3.innerHTML = 'Type - ' + obj[input.value - 1].type
    weakness3 = document.getElementById('weakness3')
    weakness3.innerHTML = 'Weaknesses - ' + obj[input.value - 1].weakness
}

function hitEnter() {
    if (event.key === "Enter") {
        chooseImages()
    }
   }
//    figure.addEventListener("mousemove", zoom);

getText()