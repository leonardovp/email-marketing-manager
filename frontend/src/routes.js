import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
} from 'react-router-dom'
import SignIn from './pages/public/SignIn'
import SignUp from './pages/public/SignUp'

function Home(){
  return(
    <div>
      <Menu /> 
      <h2>Dasboard</h2>     
    </div>
  )
}

function Contacts(){ 

  return(
    <div>
      <Menu /> 
      <h2>Contatos</h2>
      <ul>
        <li>
        <Link to="/contacts/1">Contato A</Link> 
        </li>
        <li>        
          <Link to="/contacts/2">Contato B</Link>         
        </li>
        <li>         
          <Link to="/contacts/3">Contato C</Link>
        </li>
      </ul>

      <Routes>
        <Route path=":contactId" element={<Contact />} />
      </Routes>

    </div>




  )
}

function Contact(){

  let { contactId } = useParams();

  return(

      <div>
        <h3>Contato ID: {contactId}</h3>
      </div>

  )

}

function Messages(){ 

  return(
    <div>
      <Menu /> 
      <h2>Mensagens</h2>
      <ul>
        <li>
        <Link to="/messages/1">Mensagen A</Link> 
        </li>
        <li>        
          <Link to="/messages/2">Mensagen B</Link>         
        </li>
        <li>         
          <Link to="/messages/3">Mensagen C</Link>
        </li>
      </ul>

      <Routes>
        <Route path=":messageId" element={<Message />} />
      </Routes>

    </div>
  )
}

function Message(){

  let { messageId } = useParams();

  return(
    <div>
      <h3>Mensagem ID: {messageId}</h3>
  </div>
  )
}


function Menu() {
  return (
    <div>     
      <nav>
        <Link to="/">Home</Link>
        <Link to="/contacts">Contatos</Link>
        <Link to="/messages">Mensagens</Link>
        <Link to="/signin">Sair</Link>       
      </nav>     
    </div>
  );
}

export default function Rotas(){
  return(
      <BrowserRouter>
      <Routes>     
        <Route index element={<Home />} />
        <Route path='contacts/*' element={<Contacts />} />
        <Route path='messages/*' element={<Messages />} />
        <Route path='signin' element={<SignIn />} />
        <Route path='signup' element={<SignUp />} />
      </Routes>
      </BrowserRouter>
    
 
  )
}