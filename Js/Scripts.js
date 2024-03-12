const controls= document.querySelectorAll('.control');
let currentItem = 0;
const items = document.querySelectorAll('.item');

const maxItems = items.length;

function setaEsquerda(){
    
    if(true){ currentItem -=1; }
    else{currentItem +=1;}
    if(currentItem >=maxItems){
        currentItem=0;
    }
    if( currentItem< 0) {
           currentItem =0;
    }
    items.forEach(item => item.classList.remove('current-item'));
    items[currentItem].scrollIntoView({
     inline:"center"
    });  
}

function setaDireita(){

    if(true){ currentItem +=1;  }
    else{ currentItem +=1; }

    if(currentItem >=maxItems){
        currentItem=0;
    }
    if( currentItem< 0) {
           currentItem =0;
    }
    items.forEach(item => item.classList.remove('current-item'));
    items[currentItem].scrollIntoView({
     inline:"center"
    }); 
}