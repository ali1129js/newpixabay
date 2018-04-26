/**
 * @Author: Ali
 * @Date:   2018-04-26T20:06:29+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-04-26T21:34:00+02:00
 */
import React,{Component,Fragment} from 'react'

class Input extends Component {
  constructor(){
    super()
    this.state = {}
    this.onSubmit = this.onSubmit.bind(this)
  }
  onSubmit(e){
    e.preventDefault()
    this.setState({
      inputText:this.refs.input.value
    },() =>
  this.props.handleInput({term:this.refs.input.value})
  )
  }
  render(){
    return (
      <Fragment>
        <form
          className="form-group"
          onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Enter your search"
            ref='input'
            className="form-control"
          />
          <button type='submit' className="btn btn-success"> Search PixaBay </button>
        </form>
      </Fragment>
    )
  }
}
export default Input
