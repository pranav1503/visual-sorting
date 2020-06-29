import React, { Component } from 'react'
import '../css/style.css'
export default class MergeCanvas extends Component {
    constructor(props){
        super(props);
        this.bars = this.bars.bind(this);
    }

    bars(){
        let arr = this.props.arr;
        let max = this.props.max;
        let ratio = 230 / max;
        let item = [];
        arr.forEach((element,index) => {
            let h = element*ratio;     
            let txt_mar = 0;
            if(h<50){
                txt_mar = h-20;
            }
            let background = "#ADD8E6";
            let colorState = this.props.colorState;
            let selColor1 = colorState[0];
            let selColor2 = colorState[1];            
            if(selColor1 <= index && selColor2 >= index){
                background = "green";
            }
            item.push(<div style={{height:h,"background-color":background}}><p style={{"margin-top":txt_mar}}>{element}</p></div>);            
        });
        return item;
    }

    render() {
        let items = this.bars();
        let arr = this.props.arr;
        let x = 45*arr.length+10;
        return (
            <div className="container">
                <div className="flex-container" style={{"width":x}}>                                        
                    {items}
                </div>
            </div>
        )
    }
}
