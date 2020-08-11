import React from "react";

class InputNumber extends React.Component {

constructor(props){
  super(props);
  this.state= {
    number: 0
  }
}

submit = (e) => {
e.preventDefault ()
console.log ("Presionando el botón")
}

onChange = (e) => {
this.setState ({
  number: e.target.value
})

console.log ("this.state.number")

}
  
  render () {
    return (
<form onSubmit = {this.submit}>
<label> Número inicial del contador </label>
<input  type ="number" 
name = "number"
placeholder="Ingrese un número" 
value = {this.state.number}
nChange = {this.onChange}
  /> <br/> <br/>
<button> {this.state.number}</button>
</form>
    )
  }
}
export default InputNumber