import React from 'react'
class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            number:0
        }
    }

decrementClicker = e =>{
    e.preventDefault();
    let number = this.state.number -1 ;
    
    this.setState({number});
}

incrementClicer = e =>{
    e.preventDefault();
    let number = this.state.number +1 ;
    this.setState({number })

}
updateNumber(number) {
    let polarity = '';
    if (number > 0) {
      polarity = 'positive';
    } else if (number < 0) {
      polarity = 'negative';
    }
    this.setState({ number, polarity });
  }

render(){
    return(
        <div>
            <section>
            <h3>the number is : {this.state.number} </h3>
            <h3> polarity : {this.state.polarity}</h3>
            <button onClick={this.incrementClicer}>Click Me To Increase</button>
            </section>

          <section>
              <h3> this.number is : {this.state.number } </h3>
              <h3> polarity : {this.state.polarity}</h3>
           <button onClick= {this.decrementClicker}>Click Me To decrease</button>

          </section>


        </div>
    )
}

}
export default Main