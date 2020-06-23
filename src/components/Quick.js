import React, { Component } from 'react';
import Navbar from './myNavbar'
import image from '../images/image1.jpeg';
export default class Quick extends Component {
    render() {
        return (
            <div>
                <Navbar name="quick"></Navbar>
                <h1>Welcome to Quick Sort</h1>
                <img src={image} alt="hello"></img>
            </div>
        )
    }
}
