// Your code goes here

const navScale = document.querySelectorAll('.nav-link');

navScale.forEach(element => {
    element.style.fontFamily = 'Indie Flower, cursive';
    element.style.fontSize = '2.5rem';

    element.addEventListener('mouseover', (event) => {
    element.style.transform = 'scale(1.1)';
    element.style.transition = ' transform .25s';
    })

    element.addEventListener('mouseout', (event) => {
    element.style.transform = 'scale(1)';
    element.style.transition = ' transform .25s';   
    })
})

const scaling = document.querySelectorAll('p');
    scaling.forEach(element => {
        element.addEventListener('mouseenter', (event) => {
        element.style.transform = 'scale(1.1)';
        element.style.transition = ' transform .5s';
        })

        element.addEventListener('mouseleave', (event) => {
        element.style.transform = 'scale(1)';
        element.style.transition = ' transform .5s';   
        })
})

const scalingHead = document.querySelectorAll('h2');
    scalingHead.forEach(element => {
        element.addEventListener('mouseenter', (event) => {
        element.style.transform = 'scale(1.1)';
        element.style.transition = ' transform .5s';
        })

        element.addEventListener('mouseleave', (event) => {
        element.style.transform = 'scale(1)';
        element.style.transition = ' transform .5s';   
        })
})

//  2. FUN BUS LOGO 

const logoHead = document.querySelector('.logo-heading');
logoHead.addEventListener('mouseover', (event) => {
    console.log('Hover over Logo');
    logoHead.style.transform = 'scale(1.5)';
    logoHead.style.transition = ' transform .5s';
    logoHead.style.color = 'grey';
})

logoHead.addEventListener('mouseout', (event) => {
    console.log('Hover over Logo Off');
    logoHead.style.transform = 'scale(1)';
    logoHead.style.transition = ' transform .5s';   
    logoHead.style.color = 'black';
})

// 3. FUN BUS TOP IMAGE

const topImg = document.querySelector('.intro img');
topImg.addEventListener('dblclick', (event) => {
    console.log('Who clicked on this?');
    alert('Planes get you there faster, but the bus has better scenery!! ');
})

// 4. IMAGES

const swipeImg = document.querySelectorAll('img');
swipeImg.forEach(image => {
    image.addEventListener('contextmenu', (event) => {
        image.src = '/img/swiper.jpg';
        console.log('Swiper Alert')
    })
})

// 5. DRAG

const dragImg = document.querySelectorAll('img');
dragImg.forEach(image => {
    image.addEventListener('drag', (event) => {
        image.src = '/img/nonono.jpg';
        console.log("Really!!! smh!")
    })
})

// 6. COPY COPYRIGHT

const footerCopy = document.querySelector('.footer p');
footerCopy.addEventListener('copy', (event) => {
    const selection = document.getSelection();
    event.clipboardData.setData('text/plain', selection.toString().toUpperCase());
    event.preventDefault();
});
 
// stopPropagation

const destinationFunc = document.querySelectorAll('.destination');
const buttonFunc = document.querySelectorAll('.btn');

buttonFunc.forEach(element => {
    element.addEventListener('click', (event) => {
        console.log('Button Clicked');
        element.style.backgroundColor = 'red';
        event.stopPropagation();
    })
})

destinationFunc.forEach(element => {
    element.addEventListener('click', (event)=> {
        element.style.transform = 'scale(1.2)';
        element.style.transition = 'transform 0.25s';
        console.log('Click to Enlarge')
    })
});

destinationFunc.forEach(element => {
    element.addEventListener('dblclick', (event) => {
        element.style.transform = 'scale(1.0)';
        element.style.transition = 'transform 0.25s';
        console.log('Dblclick to Shrink')
    })
});