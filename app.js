const sideBar = document.querySelector('.sideBar');
const menuBtn = document.querySelector('.menuBtn');
const cross = document.querySelector('.cross');



menuBtn.addEventListener('click', () => {
    console.log("hello")
    sideBar.classList.toggle('showSidebar')
});

cross.addEventListener('click', () => {
    sideBar.classList.remove('showSidebar')
})