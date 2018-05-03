/**
 * @Author: Ali
 * @Date:   2018-04-26T20:06:29+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-05-03T20:54:51+02:00
 */
import React,{Component,Fragment} from 'react'
class Input extends Component {
  constructor(){
    super()
    this.state = {}
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(e){
    const pixaBayApi = "https://pixabay.com/api/?key="
    const API_KEY = '8804245-155ed4ab1b84647eeb9fbf6ad'
    const searchTerm = encodeURIComponent(this.refs.input.value)
    const endpoint =pixaBayApi+API_KEY+"&q="+searchTerm
    console.log(endpoint)
    const fetchOption = {
      method:'GET'
    }
    e.preventDefault()
    e.target.reset()
    fetch(endpoint, fetchOption)
    .then(d => d.json())
    .then(d => {
      // setState takes a second parameter , a callback function!
      this.setState({pixaBay:d},() => {
        this.props.handleSubmit(this.state.pixaBay)
      })
    })
    .catch(err => {
      console.error(err);
    })
  }
  render(){
    return (
      <Fragment>
        <form
          className="form-group"
          onSubmit={this.onSubmit}
        >
          <input
            type="text"
            placeholder="search Term e.g: cars, dogs "
            ref='input'
            className="form-control"
            onChange={this.props.handleInput}
          />
          <button type='submit' className="btn btn-success">
            Search PixaBay
          </button>
        </form>
      </Fragment>
    )
  }
}
export default Input
/*
this.setState({
  term:this.refs.input.value
},() =>
this.props.handleInput({term:this.refs.input.value})
)
*/
