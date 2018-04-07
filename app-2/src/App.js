import React, {Component} from 'react'

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      data: [
        'word',
        'more hfdsjkah',
        'fdfhdal',
        'dhajsklhf',
        'djkahf'
      ]
    }
  }

  render() {
    let list = this.state.data.map((element, index) => {
      return (
        <h1 key={index}>{element}</h1>
      )
    })
    return(
      <div>
      {list}
      </div>
    )
  }
}