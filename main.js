const footer = document.querySelector('.card__footer')
const buttonSwitch = document.querySelector('button')
const shareImage = document.getElementById('share_img')
const authorDisable = document.querySelector('.card__footer_author')
const shareSpan = document.querySelector('.share_text')
const socialDrawer = document.querySelector('#drawer')
const shareFloat = document.querySelector('.card__share')

function classSwitch(){

    buttonSwitch.addEventListener('click', () => {
        buttonSwitch.classList.toggle('click');
        shareImage.classList.toggle('click');
        authorDisable.classList.toggle('disabled');
        shareSpan.classList.toggle('disabled');
        socialDrawer.classList.toggle('disabled');
        shareFloat.classList.toggle('disabled')
        footer.classList.toggle('active');
        socialDrawer.classList.toggle('card__social_drawer')
    })

}

window.addEventListener('DOMContentLoaded', () => {
    classSwitch()
})


