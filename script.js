// ==========================
// Chargement de la page
// ==========================

document.addEventListener("DOMContentLoaded", () => {

    const documentPage = document.querySelector(".document");

    // Animation d'apparition du document
    if (documentPage) {

        setTimeout(() => {

            documentPage.classList.add("loaded");

        }, 200);

    }


    // ==========================
    // Apparition des sections au scroll
    // ==========================

    const chapters = document.querySelectorAll(".chapter");


    const observer = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    // Evite de refaire l'animation
                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );


    chapters.forEach(chapter => {

        observer.observe(chapter);

    });



    // ==========================
    // Bouton retour en haut
    // ==========================

    const topButton = document.getElementById("topButton");


    if (topButton) {

        window.addEventListener("scroll", () => {


            if (window.scrollY > 600) {

                topButton.classList.add("show");

            } else {

                topButton.classList.remove("show");

            }


        });



        topButton.addEventListener("click", () => {

            window.scrollTo({

                top: 0,
                behavior: "smooth"

            });

        });

    }


});



// ==========================
// Barre de progression de lecture
// ==========================

window.addEventListener("scroll", () => {


    const readingBar = document.getElementById("readingBar");


    if (!readingBar) return;



    const pageHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;



    const progress =
        (window.scrollY / pageHeight) * 100;



    readingBar.style.width = progress + "%";


});



// ==========================
// Effet léger sur le titre
// ==========================

const title = document.querySelector("h1");


if (title) {


    title.addEventListener("mouseenter", () => {


        title.style.letterSpacing = "3px";


    });



    title.addEventListener("mouseleave", () => {


        title.style.letterSpacing = "1px";


    });


}