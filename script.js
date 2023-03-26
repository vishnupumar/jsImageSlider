let imageSlides = document.querySelectorAll('.slide')
let arrowLeft = document.querySelector('#arrow-left')
let arrowRight = document.querySelector('#arrow-right')
let counter = 0;

console.log(imageSlides)

    function reset(){
        for(let i=0;i<imageSlides.length;i++){
            imageSlides[i].style.display = 'none';
        }
    }

    function startSlide(){
        reset()
        imageSlides[0].style.display = 'block'
    }   

    function showPrev(){
        reset()
        imageSlides[counter - 1].style.display = 'block'
        counter--;
    }

    arrowLeft.addEventListener('click', function(){
        if(counter === 0){
            counter = imageSlides.length;
        }
        showPrev()
    });

    function showNext(){
        reset();
        imageSlides[counter + 1].style.display = "block";
        counter++;
    }

    arrowRight.addEventListener('click', function(){
        if(counter === imageSlides.length-1){
            counter = -1;
        }
        showNext();
    })

    startSlide()