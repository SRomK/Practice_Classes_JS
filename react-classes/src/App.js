import React from "react"

// export default function App(props) {
//     return (
//         <h1>{props.type} component</h1>
//     )
// }

/* in a function component we would accept the props as a parameter
to the function app and then use props.type (type the name of the props we are calling)
*/

export default class App extends React.Component {
    render() {
        return (
        <> 
        
          <Header username="Sofia" />
            <h1>{this.props.type} component</h1>
        
        </>
        )
    }
}

class Header extends React.Component{
  render() {
      return(
          <header>
          <p>Welcome, {this.props.username}!</p>
      </header>
      )
  }
}