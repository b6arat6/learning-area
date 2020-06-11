function operators() {
    console.log('operators:')
    console.log(6 + 9)
    console.log('hello' + 'world')
    console.log(9 - 3)
    console.log(8 * 2)
    console.log(9 / 3)
    console.log(3 === 3)
    console.log(!(3 === 5))
    console.log(3 !== 5)
    console.log(3 === 5)
}

function conditionals() {
    console.log('conditionals:')
    let icecream = 'vanilla'
    if (icecream === 'vanilla') {
        console.log('i love')
    } else {
        console.log('i hate')
    }
}

function mul(num1, num2) {
    return num1 * num2
}

function output() {
    console.log('output:')
    console.log(mul(0.5, .6))
}

// alt1
function events() {
    document.querySelector('html').onclick = function () {
        console.log('poke!')
    }

    let myHtml = document.querySelector('html')
    myHtml.onclick = function (e) {
        e.stopPropagation();
        console.log('touch!')
    }
}

function imageClick() {
    let myImage = document.querySelector('img');
    myImage.onclick = function () {
        let mySrc = myImage.getAttribute('src');
        if (mySrc === 'images/firefox.png') {
            myImage.setAttribute('src', 'images/firefox_400x400.png')
        } else {
            myImage.setAttribute('src', 'images/firefox.png')
        }
    }
}

