import React from 'react'
import './navigation.css';


export default function Navigation(props) {

    return (
        <div className="navigation">
            <div className="navigation-contents">
                <div class="dropdown-menu">
                <button class="dropbtn">Home</button>
                <div class="dropdown-menu-content">
                </div>
                </div>
                <div class="dropdown-menu">
                <button class="dropbtn">Guidelines</button>
                <div class="dropdown-menu-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
                </div>
                <div class="dropdown-menu">
                <button class="dropbtn">Dropdown</button>
                <div class="dropdown-menu-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
                </div>
                <div class="dropdown-menu">
                <button class="dropbtn">About Us</button>
                <div class="dropdown-menu-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
                </div>
                <form className="search-form">
                    <input 
                        className="search" placeholder="Search..." 
                    />
                </form>
            </div>
        </div>
    )
}
