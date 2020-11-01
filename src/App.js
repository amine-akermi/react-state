import React from "react";
class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        counter: 0,
      };
    }
  state = {
  fullName: "amine akermi",
  bio: "web developper",
  profession:"web developper",
  imgSrc:"",
  show:false
 };
 handleClick=()=>this.setState({show:!this.state.show})

 render() {

   return <div>
     {
    this.state.show ?
    (<div>
      <p> fullName: {this.state.fullName}</p>
      <p>  bio: {this.state.bio}</p>
        <p> profession: {this.state.profession}</p>
      <p> imgSrc:{this.state.imgSrc}</p>
    </div>) : ''
  }
     <button onClick={this.handleClick}> ClickMe</button>
     </div>

 }
}
export default App;