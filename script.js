const accordion = document.getElementsByClassName("content-cont");

for(let i = 0 ; i < accordion.length; i++){
    accordion[i].addEventListener("click",function(){
        this.classList.toggle('active')
    });
};