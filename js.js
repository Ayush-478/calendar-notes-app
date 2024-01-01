const overlay = document.getElementById('overlay')
const journal = document.getElementById('journal')




document.addEventListener('click', (e)=>{
    if (e.target.id =='expand_button'){
        overlay.classList.add('active');
        journal.classList.add('active');
    }

    if (e.target.id == 'overlay'){
        overlay.classList.remove('active')
        journal.classList.remove('active')
    }
})