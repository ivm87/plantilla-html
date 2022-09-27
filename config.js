        let d=document;
        d.addEventListener("DOMContentLoaded", function() {
            let myTopButton = d.getElementById("myTop");
            window.addEventListener("scroll", function() {
                if (d.body.scrollTop > 20 || d.documentElement.scrollTop > 20) {
                    myTopButton.style.display = "block";
                } else {
                    myTopButton.style.display = "none";
                }
            });
        });