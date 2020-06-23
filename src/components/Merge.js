import React, { Component } from 'react';
import Navbar from './myNavbar'
import image from '../images/image3.jpeg';
export default class Merge extends Component {
    render() {
        return (
            <div>
                <Navbar name="merge"></Navbar>
                <h1>Welcome to Merge Sort</h1>
                <img src={image} alt="hello"></img>
            </div>
        )
    }
}
