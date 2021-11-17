// show cart
(function(){

    let cartInfo=document.querySelector('#cartInfo');
    let cart=document.querySelector('#cart');
    cartInfo.addEventListener('click',function(){
        cart.classList.toggle('show-cart')
        
    })

})();
var num='';
(function(){
    let cartInfo=document.querySelector('.cart-info-count');
    let emty=document.querySelector('.emty');
    let cartBtn=document.querySelectorAll('.cart-btn');
     cartBtn.forEach(function(btn){
         btn.addEventListener('click',function(event){
             num++;
             cartInfo.innerHTML=num;
             emty.style.display='none'
             if(event.target.parentElement){
                //  Img path start
 let fullPat=event.target.parentElement.parentElement.children[0].src;
let position=fullPat.indexOf('img');
let partPath=fullPat.slice(position)
                //  img path end
let allItem={};
             allItem.img=partPath;
             console.log(allItem);
                // name path start
 let name=event.target.parentElement.parentElement.children[1].textContent;
                allItem.name=name;
                // name path end
                // price path start
 let price=event.target.parentElement.parentElement.children[2].textContent
            allItem.price=price;
      
            // create b element
            
let cartItem=document.createElement('div')
cartItem.classList.add('cart-item')
  cartItem.innerHTML=`
  <img src="${allItem.img}">
  <input type="button" value="1" id="quality">
            <div class="price">${allItem.price}</div>
            
  
  `
  let checkout=document.querySelector('.checkout')
  checkout.onclick=function(){
    if(cartItem){
        window.location.href='http://127.0.0.1:5500/checkoutpage/checkout.html'
    }
  }
 
  let b=document.createElement('b')
            cartItem.appendChild(b)
            b.innerHTML='X'
            console.log(b);
            allItem.del=b;
            b.addEventListener('click',function(){
               let aler= confirm('Are you sure you want to delete is?')
            if(aler){
                window.location.href='http://amazon.com'
            }else{
                alert('thanks')
            }
                
            })
let cart=document.querySelector('#cart')
let cartTotal=document.querySelector(".cart-total")
cart.insertBefore(cartItem,cartTotal)
 alert("Your cart is added")

 totals()

                }
            
        
         })
     })
   function totals(){
       let total=[];
       let itemsPrice=document.querySelectorAll(".price")
       itemsPrice.forEach(function(items){
           total.push(parseFloat(items.innerHTML))
       })

       let totalMoney=total.reduce(function(total,items){
           total+=items
        return total;
    })
    document.querySelector('#cart-total').textContent=totalMoney;
   }
})();
