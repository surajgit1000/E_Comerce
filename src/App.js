import React from 'react';

class App extends React.Component{
  constructor(props){
   super(props);
   this.state={
     name:'Subham'
   }
  }
  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        name:'Manoj'
      });
    },3000)
   
  }
  render(){
    return(
      <div>
          <center>
              <h1>This is {this.state.name}</h1>
              <button onClick={this.handleClick}>ClickTOChange</button>
          </center>
      </div>
    )
  }
}

export default App;