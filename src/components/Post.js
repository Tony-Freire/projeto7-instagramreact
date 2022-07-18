import Icons from './Icons'
import React from 'react';

export default function Post({post:{user, conteudo, bottombar}}){
   
      return(
          <div class="post">
          <Topo user = {user}/>
          <Conteudo conteudo = {conteudo} />
          <Bottombar follower={bottombar.follower} qtd = {bottombar.qtd}/>
          <Comentario/>
          </div>
      )
  }
  
  function Topo({user}){
      return (
        <div class="info">
          <div class="user">
          <div class="perfil-pic"> <img src={`assets/images/${user}.svg`} alt=""/></div>   
          <p class="username">{user}</p>         
          </div>
          <div class="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>
      )
  }
  function Conteudo({conteudo}){
      return (
          
              <img class="post-img" src={`assets/images/${conteudo}.svg`} />
          
      )
  }
  function Bottombar({follower,qtd}){
      return (
          <div class="post-conteudo">
          <Acoes />
          <Curtidas follower={follower} qtd={qtd} />
          </div>
      )
  }     
  function Acoes({liked}){
    const [like, setLike] = React.useState(liked);
  
  function likePost (event) {
   
    if (!like && event.detail === 2) {
      setLike(true);
    }}
      return(
        <div class="reacoes">
          <ion-icon name={like? 'heart':'heart-outline'} color={like ? 'danger':'black'} onClick={() => setLike(!like)}></ion-icon>
          <Icons icons= {[ 'chatbubble-outline', 'paper-plane-outline']} />
          <ion-icon name="bookmark-outline" class="salvar" role="img" aria-label="bookmark outline"></ion-icon>
        </div>
        
      )
  }
  function Curtidas({follower, qtd}){
      return(
      <div class="curtidas">
          <img src={`assets/images/${follower}.svg`} />
          <div class="texto">
          Curtido por <strong>{follower}</strong> e <strong>outras {qtd} pessoas</strong>
          </div>
          
      </div>
      )
  }
  function Comentario()
  {return(
    <div class="comentario">
    <ion-icon name="happy-outline" class="smile"></ion-icon>
    <input type="text" class="caixa-comentario" placeholder="Adicionar um comentário"/>
    <button class="btn-comentario">publicar</button>
    </div>
  )
  }
 