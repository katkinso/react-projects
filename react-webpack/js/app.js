import React from 'react'
import ReactDOM from 'react-dom'

var HelloMsg = React.createClass({
    render function(){
      return <div>Hello {this.props.name}</div>
    }

})

var mountNode = document.getElementById('root')

ReactDOM.render(<HelloMsg name='john' />, mountNode)
