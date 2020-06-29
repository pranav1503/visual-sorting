import React, { Component } from 'react';
import Navbar from '../myNavbar'
import Input from '../InputArray';
import {Button} from 'react-bootstrap';
import ArrBars from './MergeCanvas'
export default class Merge extends Component {
    constructor(props){
        super(props);
        // stateArr = [selElement1,selElement2,length of Array, completion point,isSwapped(true/false)]
        this.state = {
            arr : [],            
            max : 0,
            stateArr : [],
            goBtn : '',
            rangeSlide : '',
            speed : 1000,   
            i : 0         
        }        
        this.getData = this.getData.bind(this);    
        this.mergeSort = this.mergeSort.bind(this);
        this.merge = this.merge.bind(this);    
        this.sortData = this.sortData.bind(this);
        this.delay = this.delay.bind(this);
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
            stateArr : [-1,-1,data.arr.length,-1,false,[]]
        })        
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve,ms));        
    }

    async mergeSort(array, leftIndex, rightIndex) {
        let length = rightIndex - leftIndex
        if (length < 2) {
            return array;
        }
        var mid = leftIndex + Math.floor(length / 2);
    
        this.mergeSort(array, leftIndex, mid)
        this.mergeSort(array, mid, rightIndex)      
        await this.delay(2500*Math.sqrt(rightIndex-leftIndex));
        this.setState({
            stateArr : [leftIndex,rightIndex,array.length,-1,false,array]
        })
        this.merge(array, leftIndex, mid, rightIndex)
    
    }
    
    merge(array, leftIndex, mid, rightIndex) {
        var result = [];
        var l = leftIndex,
            r = mid;
        while (l < mid && r < rightIndex) {
            if (array[l] < array[r]) {
                result.push(array[l++]);
            } else {
                result.push(array[r++]);
            }
        }
        result = result.concat(array.slice(l, mid)).concat(array.slice(r, rightIndex));
        for (let i = 0; i < rightIndex - leftIndex; i++) {
            array[leftIndex + i] = result[i]
        }
    }

    async sortData(){        
        await this.mergeSort(this.state.arr,0,this.state.arr.length);                        
        await this.delay(1500)
        this.setState({
            stateArr : [-1,-1,this.state.arr.length,-1,true,this.state.arr]
        })
    }

    render() {
        return (
            <div>
                <Navbar name="Merge Sort"></Navbar>
                <Input onChange={this.getData} key={this.state.goBtn} disBtn={this.state.goBtn}/>
                <div className="container row">
                    <div className="col-lg-5"></div>
                    <div className="col-lg-3">
                        <Button className="btn-primary btn-block" onClick={this.sortData} disabled={this.state.goBtn}>&nbsp;&nbsp;Sort&nbsp;&nbsp;</Button>
                    </div>
                    {/* <div className="col-lg-1"><p>Slow</p></div>
                    <div className="col-lg-2">
                        <div className="form-group">
                           <input type="range" className="form-control-range range-angle" id="formControlRange" onChange={this.getSpeed} min="500" max="1500"  disabled={this.state.rangeSlide}/>
                        </div> 
                    </div>
                    <div className="col-lg-1"><p>Fast</p></div> */}
                </div>
                               
                <br/><br/>
                <ArrBars key={this.state.stateArr} colorState={this.state.stateArr} arr={this.state.arr} max={this.state.max}></ArrBars>                                
            </div>
        )
    }
}
