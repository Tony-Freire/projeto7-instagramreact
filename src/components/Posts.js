import Post from './Post'

export default function Posts({posts}){

    posts = [ { 
                user: 'meowed',
                conteudo:'gato-telefone',
                bottombar:{follower:'respondeai', qtd:'101.523'}
              },
              { 
                user: 'barked', 
                conteudo:'dog',
                bottombar:{follower:'adorable_animals', qtd:'99.159'}},
                { 
                    user: 'meowed', 
                    conteudo:'BqL',
                    bottombar:{follower:'adorable_animals', qtd:'99.159'}}
            ]
  
  
  
    return (
      
        posts.map(e => <Post post = {e}/>)
    
    )
}