//O46002083 Bonadonna Stefano

const preferito=document.querySelector('.preferiti');
const mainblock=document.querySelector('.mainblock');
const vendita =document.querySelector('.vendita');
const input=document.querySelector('input');
input.addEventListener('keyup',cerca);
vendita.classList.add('hidden');
for(let i=0;i<title.length;i++){
    const div=document.createElement('div');
    const titolo=document.createElement('h4');
    const mainimg=document.createElement('img');
    const costo=document.createElement('p'); 
    const carrello=document.createElement('img');
    const descrizione=document.createElement('p');
    const dettagli=document.createElement('p');
    
    carrello.src='https://banner2.cleanpng.com/20180320/hhw/kisspng-shopping-cart-computer-icons-online-shopping-websi-files-free-grocery-cart-5ab09145b5dd11.5012096615215209657449.jpg';
    dettagli.textContent='Mostra altro';
    titolo.textContent=title[i];
    mainimg.src=image[i];
    costo.textContent='Prezzo:'+prezzo[i];
    descrizione.textContent=desrciption[i];


    div.classList.add('block');
    titolo.classList.add('titolo');
    mainimg.classList.add('mainimg');
    costo.classList.add('testo');
    carrello.classList.add('classcar');
    descrizione.classList.add('description');
    dettagli.classList.add('dettagli');
    descrizione.classList.add('hidden');
   
    
    div.appendChild(titolo);
    div.appendChild(mainimg);
    div.appendChild(costo);
    div.appendChild(carrello);
    div.appendChild(descrizione);
    div.appendChild(dettagli);
    mainblock.appendChild(div);

    dettagli.addEventListener('click',more);
    carrello.addEventListener('click',preferiti);

}




 
function more(event){
    const block=document.querySelectorAll('.mainblock .block');
    const dettagli=document.querySelectorAll('.block .dettagli');
    const nascondi=document.querySelectorAll('.description');

    for(let i=0;i<block.length;i++){
        if(dettagli[i].textContent==='Riduci'){
            dettagli[i].textContent='Mostra Altro';
            dettagli[i].removeEventListener('click',minus);
            dettagli[i].addEventListener('click',more);
            block[i].classList.remove('selezionato');
            nascondi[i].classList.add('hidden');
  
            
        }
    }
   
    const mostra=event.currentTarget.parentNode.querySelector('.description');
    mostra.classList.remove('hidden');
    
    event.currentTarget.textContent='Riduci';
    event.currentTarget.parentNode.classList.add('selezionato');
    event.currentTarget.removeEventListener('click',more);
    event.currentTarget.addEventListener('click',minus);
    
    }

function minus(event){

    
    event.currentTarget.textContent='Mostra altro';
    const block=document.querySelectorAll('.mainblock .block');
    
    event.currentTarget.removeEventListener('click',minus);
    event.currentTarget.addEventListener('click',more);
    const nascondi=event.currentTarget.parentNode.querySelector('.description');
    event.currentTarget.parentNode.classList.remove('selezionato');
    nascondi.classList.add('hidden');
    
}






function preferiti(event){
const div2=document.createElement('div');   
const titolo2=document.createElement('h4');
titolo2.textContent=event.currentTarget.parentNode.querySelector('.titolo').textContent;
const mainimg2=document.createElement('img');
mainimg2.src=event.currentTarget.parentNode.querySelector('.mainimg').src;
const costo2=document.createElement('p');
costo2.textContent=event.currentTarget.parentNode.querySelector('.testo').textContent;
const carrello2=document.createElement('img');
carrello2.src='http://www.educational.rai.it/materiali/italiano/immagini_esercizi/Punt7cartelloD.jpg'
div2.appendChild(titolo2);
div2.appendChild(mainimg2);
div2.appendChild(costo2);
div2.appendChild(carrello2);
div2.classList.add('block');
div2.classList.add('standard');
titolo2.classList.add('titolo');
mainimg2.classList.add('mainimg');
carrello2.classList.add('classcar');
costo2.classList.add('testo');
carrello2.addEventListener('click',remove);
preferito.appendChild(div2);
event.currentTarget.removeEventListener('click',preferiti);
const blockp=document.querySelectorAll('.preferiti .block');

if(blockp!==null){
    vendita.classList.remove('hidden');
}
}


function remove(event){
    const block=document.querySelectorAll('.block');
    for(let i=0;i<block.length;i++){
        if(event.currentTarget.parentNode.querySelector('h4').textContent===block[i].querySelector('.titolo').textContent){
            block[i].querySelector('.classcar').addEventListener('click',preferiti);
        }
    
    }
    preferito.removeChild(event.currentTarget.parentNode);
    event.currentTarget.removeEventListener('click',remove);
    const blockp= document.querySelector('.preferiti .block');
    if(blockp===null){
           vendita.classList.add('hidden');
    }
   }

  
   function cerca(event){
 const parola=event.target.value.toLowerCase();
 const block=document.querySelectorAll('.mainblock .block');
 const titleb=document.querySelectorAll('.titolo');
let t=0;

for(let i=0;i<block.length;i++){
     if(titleb[i].textContent.toLowerCase().indexOf(parola)!==-1 ){
        block[i].classList.remove('hidden');
      
         
        }
     else{
        block[i].classList.add('hidden');
      
       
     }

 }  
        if(parola!==''){
            mainblock.classList.add('height');
        }
     if(parola===''){
       mainblock.classList.remove('height');
     }


}
