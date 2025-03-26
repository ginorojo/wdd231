const openButton=document.querySelector('#openButton');
const dialogBox = document.querySelector('#dialogBox');
const closeButton= document.querySelector('#closeButton');
const dialogBoxText= document.querySelector('#dialogBox div');

//show the dialogs button

openButton1.addEventListener("click",() =>{
    dialogBox.showModal();
    dialogBoxText.innerHTML = 'one apple contains 95 calories'
});

openButton2.addEventListener("click",() =>{
    dialogBox.showModal();
    dialogBoxText.innerHTML = 'one apple contains 95 calories'
});

openButton3.addEventListener("click",() =>{
    dialogBox.showModal();
    dialogBoxText.innerHTML = 'one apple contains 95 calories'
});
//close button 
closeButton.addEventListener("click", () =>{
    dialogBox.close();
});
