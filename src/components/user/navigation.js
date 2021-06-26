import React,{useEffect,useState} from 'react'
import './navigation.css';
import axios from 'axios'



export default function Navigation(props) {
    const [data,setData] = useState([])

    useEffect(()=>{
        axios.get(`https://covid19-api-philippines.herokuapp.com/api/summary?city_mun_res=molave`)
        .then(res=>{
            console.log(res.data)
        })
        .catch(e=>{
            console.log(e)
        })
    },[])

    return (
        <div className="navigation">
            <div className="navigation-contents">
                <div class="dropdown-menu">
                <button class="dropbtn">Home</button>
                <div class="dropdown-menu-content">
                </div>
                </div>
                <div class="dropdown-menu">
                <button class="dropbtn">Covid 19 Updates</button>
                <div class="dropdown-menu-content">
                </div>
                </div>
                <div class="dropdown-menu">
                <button class="dropbtn">Barangay Officials</button>
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
                {/* <div class="dropdown-menu">
                <button class="dropbtn">Guides</button>
                <div class="dropdown-menu-content">
                    <a href="#">How to request certificate</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
                </div> */}
                <div class="dropdown-menu">
                <button class="dropbtn">About Us</button>
                <div class="dropdown-menu-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
                </div>
                <button className="homepage-login-btn">Login</button>
                <form className="search-form">
                    <input 
                        className="search" placeholder="Search..." 
                    />
                </form>
            </div>
        </div>
    )
}
