export default function Navbar()
{ 
    return(
      <div class="navbar">
        <div class="nav-capsula">
               <div class="logomarca">
                <div class="logo-instagram" >
                    <ion-icon name="logo-instagram" class="insta-logo"></ion-icon>
                </div>    
                   <img src="assets/images/logo.png" class="logo-img" alt=""/>
               </div>
           
               <input type="text" class="caixa-pesquisa" placeholder="pesquisar"/>
               <div class="nav-itens">
                <ion-icon name="paper-plane-outline"></ion-icon>
                <ion-icon name="compass-outline" class="esconde"></ion-icon>
                <ion-icon name="heart-outline"class="esconde"></ion-icon>
                <ion-icon name="person-outline"class="esconde"></ion-icon>
               </div>
           </div>
         
      </div>
    )
}