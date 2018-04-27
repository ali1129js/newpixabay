/**
 * @Author: Ali
 * @Date:   2018-04-26T20:06:29+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-04-27T14:32:34+02:00
 */
import React,{Component,Fragment} from 'react'
const pixabayapi = "https://pixabay.com/api/?key="
const API_KEY = '8804245-155ed4ab1b84647eeb9fbf6ad'
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
  this.props.handleInput({endpoint:
    pixabayapi+API_KEY+"&q="+encodeURIComponent(this.refs.input.value)
    })
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
          <button type='submit' className="btn btn-success"> Query PixaBay Database</button>
        </form>
      </Fragment>
    )
  }
}
export default Input
