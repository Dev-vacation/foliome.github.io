const portfolioContainer = document.querySelector('.portfolio-items')

portfolioContainer.addEventListener('click', e =>{
  //comsloe.log(e)
  e.preventDefault()

  const modalToggle = e.target.closest('.portfolio-link')
  //comsloe.log(modalToggl)
  if (! modalToggle) return

  const modal = modalToggle.parentNode.nextElementSibling
  const closeButton = modal.querySelector('.modal-close')

  const modalOpen = _ =>{
     modal.classList.add('is-open')
     modal.style.animation ='modalIn 500ms forwards'
  }

  closeButton.addEventListener('click', _ =>{
    modal.classList.remove('is-open')
  })


  modalOpen()

})




//////////////////// Begin Open and Close///////////////////////////////
  //const modalOpen = _ => {
  //  modal.classList.add('is-open')
  //  modal.style.animation ='modalIn 500ms forwards'
  //  }

 //  const modalClose = _ =>{
 //    modal.classList.remove('is-open')
//     modal.removeEventListener('animationend', modalClose)
//  }

//  closeButton.addEventListener('click', _ =>{
//    modal.style.animation ='modalOut 500ms forwards'
//    modal.addEventListener('animationend', modalClose)
//  })

//  modalOpen()
