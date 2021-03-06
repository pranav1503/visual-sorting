import React, { Component } from 'react'

export default class BubbleCanvas extends Component {

    componentDidMount() {
        this.updateCanvas();
    }
    componentDidUpdate() {
        this.updateCanvas();
    }
    updateCanvas() {
        let arr = this.props.arr;
        let max = this.props.max;
        let colorState = this.props.colorState;
        let selColor1 = colorState[0];
        let selColor2 = colorState[1];      
        let arrLength = colorState[2];        
        let completionPoint = colorState[3];
        let isSwapped = colorState[4];
        let ratio = 230 / max;
        let startingPoint = (920 - (45*arrLength))/2;
        const ctx = this.refs.canvas.getContext('2d');
        ctx.clearRect(0,0, 950, 300);
        ctx.beginPath();
        for(var i=0;i<arr.length;i++){
            let height = ratio*arr[i];
            let textHeight = 220;
            if(height<35){
                textHeight = 220 - height;
            }
            let barColor = "#ADD8E6";
            if(selColor1>-1){
                if(i === selColor1 && !isSwapped){
                    barColor = "green";
                }else if (i === selColor1 && isSwapped){
                    barColor = "red";
                }
            }
            if(selColor2>-1){
                if(i === selColor2 && !isSwapped){
                    barColor = "green";
                }else if (i === selColor2 && isSwapped){
                    barColor = "red";
                }
            }
            if(completionPoint>-1){
                if(i > completionPoint){
                    barColor = "yellow";
                }
            }

            ctx.fillStyle = barColor;
            ctx.fillRect(startingPoint+(45*i), 230, 40, -height);
            ctx.font = "20px sans-serif";
            ctx.fillStyle = "black";
            ctx.textAlign = "center";
            ctx.fillText(arr[i].toString(), startingPoint+20+(45*i) , textHeight);
        }
        ctx.stroke();
    }
    render() {
        return (
            <div className="canvasContainer">
                <canvas ref="canvas" width={950} height={250}/> 
            </div>
        )
    }
}
