import React, { Component } from 'react';
import {Button} from 'reactstrap'

export class AddTodo extends Component {
         state = {
           title: "",
           key: '',
           disabled: true
         };

      

         onSubmit = (e)=> {
           e.preventDefault();
           
            
            this.props.addTodo(this.state.title)
            
            this.setState({ title: "" })
            this.setState({ disabled: true });
            
         };

          onChange = e =>
            this.setState({
              [e.target.name]: e.target.value,
              disabled: false,
               key: Date.now(),

            });
         

               

         render() {
           return (
             <form
               key={this.props.key}
               id="form"
               onSubmit={this.onSubmit}
               style={{ display: "flex" }}
             >
               <input
               key=''
                 type="text"
                 name="title"
                 style={{ flex: "10px", padding: "5px" }}
                 placeholder="Add Todo..."
                 value={this.state.title}
                 onChange={this.onChange}
               />
               <Button
                 placeholder="Click here"
                 type="submit"
                 value="Submit"
                 className="btn"
                 onClick={this.onClick}
                disabled={this.state.disabled}
               >
                 Enter...
               </Button>
             </form>
           );
         }
       }

export default AddTodo
