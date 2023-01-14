let userClickBtnFeatures = document.querySelector('.product-features__heading');
let isShowContent = true;
function ShowContent(){
    userClickBtnFeatures.classList.toggle("is-active", isShowContent)
    document.getElementById("features-listing").style.display = 'block';
}

function removeShowContent(){
    userClickBtnFeatures.classList.remove("is-active", isShowContent)
    document.getElementById("features-listing").style.display = 'none';
}

// 
const toTop = document.querySelector(".scrollToTop");

window.addEventListener("scroll", () =>{
    if(window.pageYOffset > 1500){
        toTop.classList.add("active");
    }
    else{
        toTop.classList.remove("active");
    }
})

const scrollToTop = document.getElementById('btnScrollToTop');
scrollToTop.addEventListener('click', () =>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
});

//
let mainImg = document.getElementById("mainImg");
let smallImg = document.getElementsByClassName("smallImg");

smallImg[0].onclick = function(){
    mainImg.src = smallImg[0].src;
}

smallImg[1].onclick = function(){
    mainImg.src = smallImg[1].src;
}

smallImg[2].onclick = function(){
    mainImg.src = smallImg[2].src;
}

smallImg[3].onclick = function(){
    mainImg.src = smallImg[3].src;
}

smallImg[4].onclick = function(){
    mainImg.src = smallImg[4].src;
}