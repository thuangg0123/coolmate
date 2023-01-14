const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')
const tabLines = document.querySelector('[data-link]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        })
        target.classList.add('active')
    })
}
)

// tabLines.addEventListener('click', () =>{
//     tabLines.classList.add('active');
// })

// tabLines.addEventListener('click', () =>{
//     tabLines.classList.remove('active');
// })


// Show table content sale for user if user click on .is-new-user 

let userClickBtn = document.querySelector(".is-new-user");
let btnCloseUser = document.getElementById('btn-is-new-user__close');
let isShow = true;
let closeShow = true;

function showHideUsers(){
    isShow = !isShow;
    userClickBtn.classList.toggle("active-btn-user", isShow);
}

function closeShowHideUsers(){
    closeShow =! closeShow;
    userClickBtn.classList.remove("active-btn-user", closeShow);
}

// Show input search
let userClickIconSearch = document.querySelector(".header-search");
let isShowInputSearch = true;

function showInputSearch(){
    isShowInputSearch = !isShowInputSearch;
    userClickIconSearch.classList.toggle("is-active", isShowInputSearch);
    
};

//show notifications note
const clickSeeMore = document.getElementById('btn-seemore');
const showNotify = document.querySelector('.show-notify__nothing');
const closeSeeMore = document.getElementById('btn-notify__close');

// console.log(showNotify);

clickSeeMore.addEventListener('click', (e) =>{
    let notify = true
    if(notify){
        showNotify.classList.add('active');
    }
    else;
})

closeSeeMore.addEventListener('click', (e) =>{
    let close = true;
    if(close){
        showNotify.classList.remove('active');
    }
    else;
});

// Button Scroll To Top

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