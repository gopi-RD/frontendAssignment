
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PostContent from "./context/PostContext"

import RegisterForm from "./components/RegisterForm"
import LoginForm from "./components/LoginForm"
import PostList from './components/PostList'
import PostItemDetails from './components/PostItemDetails'
import Upload from './components/Upload'
import NotFound from './components/NotFound'
import ProtectedRoute from "./components/ProtectedRoute"

import './App.css'
import { Component } from 'react'


class App extends Component {
  state={isSignUp:false}


  onToggleSignUp=()=>{
    this.setState(prevState=>({isSignUp:!prevState.isSignUp}))
  }


  render(){
    const {isSignUp}=this.state
    return (
      <>

      
<PostContent.Provider value={{isSignUp,onToggleSignUp:this.onToggleSignUp}}>
<BrowserRouter>
    <Switch>
      <Route path="/register" component={RegisterForm}/>   
      <Route path="/login" component={LoginForm}/> 
     <Route exact path="/" component={PostList}/>
      <ProtectedRoute exact path="/blogs/:id" component={PostItemDetails}/> 
      <ProtectedRoute exact path="/upload" component={Upload}/>
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
    
     </PostContent.Provider> 
 
      
      </>

    )
  }
  
}
  

  


export default App 
