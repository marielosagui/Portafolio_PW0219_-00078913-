window.onload = function(){

    var days = document.querySelectorAll(".links");
    var arts = document.querySelectorAll(".art");

    days.forEach((item)=>{

        item.addEventListener("click",()=>{

            arts.forEach((item)=>{

                item.classList.add("off");

            });

            var on = item.id;

            var arton = document.querySelector(".art." + on);

            arton.classList.toggle("off");

        })

    });

};