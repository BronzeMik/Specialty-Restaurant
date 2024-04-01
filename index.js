        navBtn = document.getElementById('hamburger-menu')
        exitBtn = document.getElementById('exit-menu')
        mobileMenu = document.getElementById('mobile')
        popUpExit = document.getElementById('pop-up-exit')
        popUp = document.getElementById('pop-up')
        bookEventBtn = document.getElementById('pop-up-open')
        bookReservationBtn = document.getElementById('pop-up-open-two')

        navBtn.addEventListener('click', function() {
            mobileMenu.classList.remove('slideUp')
            mobileMenu.classList.remove('hidden')
            exitBtn.classList.remove('hidden')
            navBtn.classList.add('hidden')
            navBtn.classList.remove('inline')
        })

        exitBtn.addEventListener('click', function() {
            navBtn.classList.remove('hidden')
            navBtn.classList.add('inline')
            exitBtn.classList.add('hidden')
            mobileMenu.classList.add('slideUp')
            setTimeout(() => {
                mobileMenu.classList.add('hidden')
            }, 200)
            
        })

        bookEventBtn.addEventListener('click', function() {
            popUp.classList.remove('hidden')
        })

        bookReservationBtn.addEventListener('click', function() {
            popUp.classList.remove('hidden')
        })

        popUpExit.addEventListener('click', function() {
            popUp.classList.add('hidden')
        })



        document.addEventListener("DOMContentLoaded", function(){
    
                    //fade in
                const fadeInAnimation = (entries) => {
                    for(const entry of entries) {
                        if(entry.isIntersecting) {
                            entry.target.classList.add('fadeIn');
                        }
                    }
                }

                const observer = new IntersectionObserver(fadeInAnimation)

                
                const formSection = document.querySelector('.become-member-background');
                observer.observe(formSection);
                observer.observe(document.querySelector('.hero'))

                
                //slide in left
                const slideInLeftAnimation = (entries) => {
                    for(const entry of entries) {
                        if(entry.isIntersecting) {
                            entry.target.classList.add('slideInLeft')
                        }
                    }
                }

                const observerLeft = new IntersectionObserver(slideInLeftAnimation)

                observerLeft.observe(document.querySelector('.special-one'));

                //slide in right
                const slideInRightAnimation = (entries) => {
                    for(const entry of entries) {
                        if(entry.isIntersecting) {
                            entry.target.classList.add('slideInRight')
                        }
                    }
                }

                const observerRight = new IntersectionObserver(slideInRightAnimation);
                observerRight.observe(document.querySelector('.special-two'));
          
          });

        
        