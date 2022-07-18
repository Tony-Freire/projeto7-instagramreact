import Stories from './Stories'
import Posts from './Posts'
import SideBar from './SideBar';

export default function Content()
{ 
    return(
   <div class="content">
      <div class ="capsula">
      <Left /> 
      <SideBar/>
      </div>
   </div>)
}

function Left(){
    return(
      <div class="coluna-esquerda">
            <Stories srcs = {['9gag', 'meowed', 'barked', 'nathanwpylestrangeplanet', 'wawawicomics', 'respondeai', 'filomoderna', 'memeriagourmet']} />
            <Posts />
      </div>
    )
  }