import React, {Component} from 'react'

export default class App extends Component {
  constructor() {
    super()
    
    this.state = {
      filterString: '',
      data: [
        "spaghetti",
        "ice cream",
        "sushi",
        "bologna",
        "cheese"
      ]
    }
  }
  handleChange( filter ) {
    this.setState({
      filterString: filter
    })
  }
  render() {
    let list = this.state.data.filter( (element, index) => {
      return element.includes(this.state.filterString)
    }).map((element, index) => {
      return <h2 key={index}>{element}</h2>
    })
    return(
      <div>
      <input onChange={(e) => {this.handleChange(e.target.value)}} type='text' />
      {list}
      </div>
    )
  }
}



