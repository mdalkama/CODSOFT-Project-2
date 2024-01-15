let hamburger = document.querySelector(".material-symbols-outlined");
        hamburger.onclick = function(){
            let navMenu = document.querySelector(".nav_bar");
            navMenu.classList.toggle("active");
        }

        const btn = document.querySelectorAll('.question_main');
        btn.forEach(question_main => {

                const arrow = question_main.querySelector('.icon');
                const answr = question_main.querySelector('.ans');
                question_main.onclick = function(){
                arrow.classList.toggle('rotate');
                answr.classList.toggle('hide');
            }
        })