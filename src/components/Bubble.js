import React, { Component } from 'react';
import Navbar from './myNavbar';
import Input from './InputArray';
import ArrBars from './BubbleCanvas'
import {Button} from 'react-bootstrap';

export default class Bubble extends Component {
    constructor(props){
        super(props);
        // stateArr = [selElement1,selElement2,length of Array, completion point]
        this.state = {
            arr : [],            
            max : 0,
            stateArr : [],
            goBtn : '',
        }        
        this.getData = this.getData.bind(this);        
        this.sortData = this.sortData.bind(this);
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
            stateArr : [-1,-1,data.arr.length,-1]
        })        
    }
    
    
    sortData(){       
        this.setState({
            goBtn : 'true'
        });         
        if(this.state.arr.length<=0){
            alert("Enter elements to sort.");
        }else{
            let speed = 1000;         
            let arr1 = this.state.arr;
            let loop_counter = 0 ;
            for (let i = 0; i < arr1.length; i++) {  
                if(loop_counter === 0){
                    loop_counter = loop_counter - (arr1.length-i)*speed + 2 ;                
                }
                loop_counter = loop_counter + (arr1.length-i)*speed                 
                setTimeout(() => {                    
                    for (let j = 0; j < arr1.length-1-i; j++) {                        
                        setTimeout(() => {
                            if (arr1[j]>arr1[j+1]) {
                                let temp = arr1[j];
                                arr1[j] = arr1[j+1];
                                arr1[j+1] = temp;
                            }
                            this.setState({
                                arr : arr1,
                                stateArr : [j,j+1,this.state.arr.length,arr1.length-1-i]
                            })                                       
                        }, j*speed);                                        
                    } 
                    
                }, loop_counter); 
                                     
            }
            setTimeout(() => {
                alert("They array is sorted.");
                this.setState({
                    goBtn : '',
                    stateArr : [-1,-1,arr1.length,-1]
                });
            }, loop_counter+10);   
        }
    }
    
    render() {
        return (
            <div>
                <Navbar name="Bubble Sort"></Navbar>
                <Input onChange={this.getData} key={this.state.goBtn} disBtn={this.state.goBtn}/>
                <ArrBars key={this.state.stateArr} colorState={this.state.stateArr} arr={this.state.arr} max={this.state.max}></ArrBars>
                <Button className="btn-primary" onClick={this.sortData} disabled={this.state.goBtn}>&nbsp;&nbsp;Sort&nbsp;&nbsp;</Button>
            </div>
        )
    }
}
