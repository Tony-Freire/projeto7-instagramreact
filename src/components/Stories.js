export default function Stories({srcs}){
    return (
        <div class="storie-capsula">
        {srcs.map(s => <Story src = {s} />)}
        <div class="seta">
          <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
      </div>
    )
}
    
function Story({src}){
    const user = src;
    return (
        <div class="storie-card">
        <img src="assets/images/stories_background.jpg" alt=""></img>
        <p class="username"> 
            {user}
        </p>
        <div class="perfil-img">
            <img src={`assets/images/${src}.svg`} />
        </div>
       
    </div>
    )
}

                        
                        
                       