import React, { Component } from 'react'
import {InputGroup, Button} from 'react-bootstrap';
import './css/style.css';
export default class InputArray extends Component {
    constructor(props){
        super(props)

        this.state = {
            value : '',
            arr : [],
            msg : ''
        };

        this.getInput = this.getInput.bind(this);
        this.storeInput = this.storeInput.bind(this);    
    }
    
    
    getInput(e){        
        this.setState({
            value : e.target.value
        });
    }

    storeInput(){
        let strArr = this.state.value.split(",");
        let intArr = [];
        this.setState({
            msg : ''
        });
        for(let i=0;i<strArr.length;i++){            
            let element = strArr[i].trim();
            let intval = parseInt(element);
            if((intval.toString().length === element.length) && (intval >=1 && intval<=50) && intArr.length<20){
                intArr.push(intval);
            }else{
                let tail = '';
                if(intval <1 || intval>50){
                    tail = 'Enter Number Between (1-50)';
                }else if(intArr.length>=20){
                    tail = 'Enter atmost 20 elements.';
                }
                this.setState({
                    msg : 'Error at input: ' + element + '. ' + tail
                });
                intArr = [];
                break;
            }
        }
        this.setState({
            arr : intArr
        },()=>{
            if(this.props.onChange){
                this.props.onChange(this.state);
            } 
        });               
    }

    render() {
        return (
            <div className="container jumbotron">
                <p className="input-error-msg">{this.state.msg}</p>
                <InputGroup size="sm" className="mb-3">
                    <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-sm">Enter the Elements</InputGroup.Text>
                    </InputGroup.Prepend>                    
                    <input type="text" className="form-control" onChange={this.getInput}/>
                    <InputGroup.Append>
                        <Button variant="success" onClick={this.storeInput} disabled={this.props.disBtn}>&nbsp;Go&nbsp;</Button>
                    </InputGroup.Append>
                </InputGroup>
                <br />
            </div>
        )
    }
}
