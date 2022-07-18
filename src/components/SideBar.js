export default function SideBar(){
    const sugestoes =[
        {user:'bad.vibes.memes'},
        {user:'chibirdart'},
        {user:'razoesparaacreditar', isNew: true},
        {user:'adorable_animals'},
        {user:'smallcutecats'} 
        ];

    return(
    <div class="coluna-direita">
        <Usuario user ='catanacomics' nameUser='Catana' />
        <Sugestoes users={sugestoes} />

        <div class="tags">
                    <p>Sobre •</p>
                    <p>Ajuda •</p>
                    <p>Imprensa •</p>
                    <p>API •</p>
                    <p>Carreiras •</p> 
                    <p>Privacidade •</p>  
                    <p>Termos •</p>  
                    <p>Localizações •</p> 
                    <p>Contas mais relevantes •</p> 
                    <p>Hashtags •</p> 
                    <p>Idioma</p>
                </div>
    </div>
    )
}

function Usuario({user, nameUser}){
    return(     
    <div class="perfil-card">
        <div class="perfil-img2"> 
        <img src={`assets/images/${user}.svg`} />
        </div>
        <div>
           <p class="username">{user}</p>
           <p class="subtitulo">{nameUser}</p>
        </div>
       
    </div>
    )
}
function Sugestoes({users}){
    return( 
        <div class="sidetitles">
         <p class="sugestao">Sugestões para você</p>
                    <p class="ver-tudo">Ver tudo</p>
        {users.map(s => <Sugestao user={s.user} isNew={s.isNew} />)}
        </div>
        ,
        users.map(s => <Sugestao user={s.user} isNew={s.isNew} />)
    )
} 
function Sugestao({user, isNew}){
    return(
        <div class="perfil-card">
        <div class="perfil-img2"> 
            <img src={`assets/images/${user}.svg`} />
        </div>
        <div>
                        <p class="username">{user}</p>
                        <p class="subtitulo">Segue você</p>        
        </div>
        <button class="btn-seguir">
                           Seguir
                    </button>
    </div>
    )
}  
