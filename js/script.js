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


const wrapperDiv = document.querySelector('.wrapper');

// stampa row contenente un div per ogni elemento dell'array images:
function printRow(){
    const row = document.createElement('div');
    row.className= 'row';
// per ogni elemento dell'array (country) stampa il suo div con la sua img tramite funzione printCard():
    images.forEach((country) => {
        console.log(country);
        const template = printCard(country);
        row.innerHTML += template;
        console.log(row);
    });
    wrapperDiv.appendChild(row);
}
printRow();

// stampa singolo div "image-container" contenente l'immagine e con classe d-none:
function printCard(country){
    const templateHtml = `
        <div class="img-container d-none">
            <img src="${country.url}" alt="${country.title}">
        </div>        
    `
    return templateHtml;
}

//funzione per aggiungere/togliere classe d-none sulle slide attive alternativamente:
function activateSlider(country){
    let activeSlide = 0;
    const countryImage = document.querySelectorAll('.img-container');
    console.log(countryImage);
    countryImage[activeSlide].classList.toggle('d-none');
//stampa proprietà title e description sull'img in quel momento attiva:
    countryImage[activeSlide].innerHTML = `
    ${country.title} + ${country.description}
    `;
    
    const nextBtn = document.getElementById('next-btn');

    nextBtn.addEventListener('click', function showImage(){
        countryImage[activeSlide].classList.toggle('d-none');
        activeSlide++;
        console.log(activeSlide);
        countryImage[activeSlide].classList.toggle('d-none')
    });
}
activateSlider();

