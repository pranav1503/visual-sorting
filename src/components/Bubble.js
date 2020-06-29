import React, { Component } from 'react';
import Navbar from './myNavbar';
import Input from './InputArray';
import ArrBars from './BubbleCanvas'
import {Button} from 'react-bootstrap';
import './css/style.css';

export default class Bubble extends Component {
    constructor(props){
        super(props);
        // stateArr = [selElement1,selElement2,length of Array, completion point,isSwapped(true/false)]
        this.state = {
            arr : [],            
            max : 0,
            stateArr : [],
            goBtn : '',
            rangeSlide : '',
            speed : 500,
        }        
        this.getData = this.getData.bind(this);        
        this.sortData = this.sortData.bind(this);
        this.getSpeed = this.getSpeed.bind(this);
    }

    getData(data){        
        let maxe = 0;
        for(let i=0;i<data.arr.length;i++){
            if(maxe < data.arr[i]){
                maxe = data.arr[i];
            }
        }
        this.setState({
            arr : data.arr,
            max : maxe,            
            stateArr : [-1,-1,data.arr.length,-1,false]
        })        
    }
    
    
    sortData(){              
        this.setState({
            goBtn : 'true',
            rangeSlide : 'true',
        });         
        if(this.state.arr.length<=0){
            alert("Enter elements to sort.");
        }else{
            // let speed = this.state.speed;         
            let arr1 = this.state.arr;
            let loop_counter = 0 ;
            for (let i = 0; i < arr1.length; i++) {  
                if(loop_counter === 0){
                    loop_counter = loop_counter - (arr1.length-i)*this.state.speed + 2 ;                
                }
                loop_counter = loop_counter + (arr1.length-i)*this.state.speed;                 
                setTimeout(() => {                    
                    for (let j = 0; j < arr1.length-1-i; j++) {                        
                        setTimeout(() => {
                            if (arr1[j]>arr1[j+1]) {
                                let temp = arr1[j];
                                arr1[j] = arr1[j+1];
                                arr1[j+1] = temp;
                                this.setState({
                                    arr : arr1,
                                    stateArr : [j,j+1,this.state.arr.length,arr1.length-1-i,true]
                                })  
                            }else{
                                this.setState({
                                    arr : arr1,
                                    stateArr : [j,j+1,this.state.arr.length,arr1.length-1-i,false]
                                })  
                            }                                                                 
                        }, j*this.state.speed);                                        
                    } 
                    
                }, loop_counter); 
                                     
            }
            setTimeout(() => {
                // alert("They array is sorted.");
                this.setState({
                    goBtn : '',
                    rangeSlide: '',
                    stateArr : [-1,-1,arr1.length,-1,false]
                });
            }, loop_counter+10);   
        }
    }

    getSpeed(e){        
        this.setState({
            speed : e.target.value
        });
    }
    
    render() {
        return (
            <div>
                <Navbar name="Bubble Sort"></Navbar>
                <Input onChange={this.getData} key={this.state.goBtn} disBtn={this.state.goBtn}/>
                <div className="container row">
                    <div className="col-lg-5"></div>
                    <div className="col-lg-3">
                        <Button className="btn-primary btn-block" onClick={this.sortData} disabled={this.state.goBtn}>&nbsp;&nbsp;Sort&nbsp;&nbsp;</Button>
                    </div>
                    <div className="col-lg-1"><p>Slow</p></div>
                    <div className="col-lg-2">
                        <div className="form-group">
                           <input type="range" className="form-control-range range-angle" id="formControlRange" onChange={this.getSpeed} min="500" max="1500"  disabled={this.state.rangeSlide}/>
                        </div> 
                    </div>
                    <div className="col-lg-1"><p>Fast</p></div>
                </div>
                               
                <br/><br/>
                <ArrBars key={this.state.stateArr} colorState={this.state.stateArr} arr={this.state.arr} max={this.state.max}></ArrBars>                
                <div className="container">
                </div>                    
            </div>
        )
    }
}
