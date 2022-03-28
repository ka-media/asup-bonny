var slidePosition = 1;
     SlideShow(slidePosition);

     // forward/Back controls
     function plusSlides(n) {
          SlideShow(slidePosition += n);
     }

     // Images control
     function currentSlide(n) {
          SlideShow(slidePosition = n);
     }

     function SlideShow(n) {
          var i;
          var slides = document.getElementsByClassName('containers');
          var cicles = document.getElementsByClassName('dots');

          if(n > slides.length) {
               slidePosition = 1;
          }

          if(n < 1) {
               slidePosition = slides.length;
          }

          for(i = 0; i < slides.length; i++) {
               slides[i].style.display = 'none';
          }

          for(i = 0; i < cicles.length; i++) {
               cicles[i].className = cicles[i].className.replace(' enable', '');
          }

          slides[slidePosition-1].style.display = 'block';
          cicles[slidePosition-1].className = ' enable';
     }

     var slidePosition = 0;
     SlideShow();
     function SlideShow() {
          var i;
          var slides = document.getElementsByClassName('containers');
          for(i = 0; i < slides.length; i++) {
               slides[i].style.display = 'none';
          }
          slidePosition++;
          if(slidePosition > slides.length) {
               slidePosition = 1;
          }
          slides[slidePosition-1].style.display = 'block';
          setTimeout(SlideShow, 2000);
     }