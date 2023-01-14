const clickSaveCoupon = document.getElementById('btn-savecode');
const showNotifySuccess = document.querySelector('.show-notify__success');
const closeNotifySuccess = document.getElementById('btn-notify-success__close');

// cách :1 
clickSaveCoupon.addEventListener('click', (e)=>{
    let notifySuccess = true
    if(notifySuccess){
        showNotifySuccess.classList.add('active');
    }
    else;

    return clickSaveCoupon;
})
// cách 2

// function show(showNotifySuccess){
//     clickSaveCoupon.addEventListener('click', (e)=>{
//             let notifySuccess = true
//             if(notifySuccess){
//                 showNotifySuccess.classList.add('active');
//             }
//             else;
//     }
//     )
//     return;
// }

closeNotifySuccess.addEventListener('click', (e) =>{
    let closeSuccess = true
    if(closeSuccess){
        showNotifySuccess.classList.remove('active');
    }
    else;
});

// const clickBtnLoadmore = document.querySelector('loadmore');
// const showLoadmore = document.querySelector('product-grid-column hidden');
// let showproducts = true;
// function showLoadmoreProducts () {
//     showproducts = !showproducts;
//     showLoadmore.classList.remove('hidden', showproducts);
// }

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