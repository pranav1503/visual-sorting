import React, { Component } from 'react';
import Navbar from './myNavbar'
import image from '../images/image2.jpg';
export default class Insertion extends Component {
    render() {
        return (
            <div>
                <Navbar name="insertion"></Navbar>
                <h1>Welcome to Insertion Sort</h1>
                <img src={image} alt="hello"></img>
            </div>
        )
    }
}
