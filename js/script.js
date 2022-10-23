const images = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];


const sliderDiv = document.querySelector('.slider');

// stampa row contenente un div per ogni elemento dell'array images:
function printRow(){
    const row = document.createElement('div');
    row.className= 'my-row';
// per ogni elemento dell'array (country) stampa il suo div con la sua img tramite funzione printCard():
    images.forEach((country) => {
        const template = printCard(country);
        row.innerHTML += template;
    });
    sliderDiv.appendChild(row);
}
printRow();

// stampa singolo div "image-container" contenente l'immagine e con classe d-none:
function printCard(country){
    const templateHtml = `
        <div class="img-container d-none">
        <div class="bg-overlay">
            <div class="img-title">${country.title}</div>
            <div class="img-cap">${country.description}</div> 
        </div>    
            <img class="img-slide" src="${country.url}" alt="${country.title}">
        </div>
    `
    return templateHtml;
}

//funzione per aggiungere/togliere classe d-none sulle slide attive alternativamente:

function activateSlider(country){
    let activeSlide = 0;
    const countrySlide = document.querySelectorAll('.img-container');

    countrySlide[activeSlide].classList.toggle('d-none');

//slide successive tramite button next:
    const nextBtn = document.getElementById('next-btn');
    nextBtn.addEventListener('click', function nextImage(){
        countrySlide[activeSlide].classList.toggle('d-none');
        
        activeSlide++;
        console.log(activeSlide);
        countrySlide[activeSlide].classList.toggle('d-none')
        if(activeSlide == images.length - 1){
            activeSlide == 0;
        }
    })

//slide precedenti tramite button previous:
    const previousBtn = document.getElementById('previous-btn');
    previousBtn.addEventListener('click', function previousImage(){
        countrySlide[activeSlide].classList.toggle('d-none');
        activeSlide--;
        countrySlide[activeSlide].classList.toggle('d-none')
    }); 


    //    if(activeSlide[i] == images.length - 1){
    //         activeSlide[i] == 0;
    //     };

        // if(activeSlide[i] == images.length){
        //     activeSlide++;
        // }

        
        // for(let i = 0; i <= countrySlide.length; i++){
        //     if(activeSlide[i] == countrySlide.length){ 
        //         activeSlide = 0
        //         // activeSlide.classList.toggle('d-none');            
        //         console.log(activeSlide);             
        //     }           
        // }

    //     const resetActiveElements = () => {
    //        countrySlide.forEach((activeSlide, i) => {
    //           if (activeSlide[i] >= countrySlide.length) {
    //             activeSlide.classList.toggle('d-none');
    //           } else {
    //             activeSlide.classList.toggle('d-none');
    //           }
    //       });
    //       resetActiveElements();
    //   }

        // images.forEach((country, i) => {
        //     if(activeSlide[i] == (images.length - 1)){
        //         activeSlide++;
        //     }
        //     console.log(images.length);
        //     console.log([i]);
        // });
    // });

//slide precedenti tramite button previous:

    let overlayDiv = document.querySelectorAll('.overlay');
    const thumbDiv = document.querySelectorAll('.thumb');
     
    for(let i = 0; i < thumbDiv.length; i++){
        thumbDiv[i].addEventListener('click', function preview(){
            let activeThumb = [i];
            overlayDiv[activeThumb].classList.toggle('d-none');
            activeThumb++;
            countrySlide[activeSlide].classList.add('d-none');
            countrySlide[i].classList.remove('d-none');
        })
    }

    // previousBtn.addEventListener('click', function previousThumb(){
    //     let activeThumb = 0;
    //     if(activeSlide[1]){
    //         activeThumb++;
    //     }
    // })    

    // const nextBtn = document.getElementById('next-btn');
    // nextBtn.addEventListener('click', function nextImage(){
    // countrySlide[activeSlide].classList.toggle('d-none');
        
    // activeSlide++;
   
    // countrySlide[activeSlide].classList.toggle('d-none')
    // })

    return activeSlide;
}
activateSlider();

