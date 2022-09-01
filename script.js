let harm = document.querySelector('.harm')
let list = document.querySelector('.list')
let hello = document.querySelector('.close')

harm.addEventListener('click', function(){
  harm.classList.add('mine');
  list.classList.add('mine');
})

hello.addEventListener('click', function (){
    list.classList.remove('mine')
})
