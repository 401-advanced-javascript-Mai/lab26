import React from 'react';
import './App.scss';  
import Header from './modules/header.js'
import Footer from './modules/footer.js'
import Main from'./modules/main.js'


class App extends React.Component{
  render(){
    return(
      <React.Fragment>
        <Header/>
        <Main/>
        <Footer/>
      </React.Fragment>
    )
  }
}
export default App;