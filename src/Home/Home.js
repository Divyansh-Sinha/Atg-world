import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card1 from '../components/Cards/Card1';
import Card2 from '../components/Cards/Card2';
import './Home.css'

const Home = () => {

    const [active,setActive] = useState(0);
    const [signIn,setSignIn] = useState(false);

    useEffect(()=>{

        const arr = document.querySelectorAll(".filter");

        arr.forEach(element => {
            element.style.color="#8A8A8A";
        });

        arr[active].style.color = "#000000";

    },[active])

    
    return ( 
        <div className="home">
            <div className="coverImage">
                <img src={require("../images/Rectangle 2.png").default} alt="" />
                <div className="coverText">
                    <h2>Computer Engineering</h2>
                    <p>142,100 Computer Engineers follow this</p>
                </div>
                <button>Join Group</button>
            </div>
            

            <div className="bodyContainer">

                <div className="bodyHead">
                    
                    <div className="headLeft">
                        <span className="filter" onClick={()=> setActive(0)}>All posts(32)</span>
                        <span className="filter" onClick={()=> setActive(1)}>Article</span>
                        <span className="filter" onClick={()=> setActive(2)}>Event</span>
                        <span className="filter" onClick={()=> setActive(3)}>Education</span>
                        <span className="filter" onClick={()=> setActive(4)}>Job</span>
                    </div>
                    <div className="headRight">
                        <button className="post">Write a Post <i className="fa fa-caret-down" style={{marginLeft: '16.42px'}}></i></button>
                        <button className={signIn?"activeGroup":"group"}>
                            <img src={require(`../images/${signIn?'leave':'group'}.png`).default} alt="" />
                            <span className="groupText" style={{marginLeft: '6px'}}>{signIn?"Leave Group": "Join Group"}</span>
                        </button>
                    </div>

                    <div className="headMobile">
                        <p>Posts(368)</p>
                        <div >
                            Filter:
                             <select>
                                <option value="0">All</option>
                                <option value="1">Article</option>
                                <option value="2">Event</option>
                                <option value="3">Education</option>
                                <option value="4">Job</option>
                            </select>
                        </div>
                    </div>

                </div>

                <div className="bodyContent">

                    <div className="contentLeft">
                    <Card1></Card1>
                     <Card2></Card2>
                    </div>
                    <div className="contentRight">
                        <div className="location">
                            <i style={{marginRight: '10px'}} className="fa fa-map-marker"></i>
                           <input type="text" placeholder="Enter Your Location"/>
                           <i style={{marginLeft: '10px'}} className="fa fa-pencil" aria-hidden="true"></i>   
                                                   
                        </div>
                        <div className="line"></div>

                        <div className="locDes">
                        <svg width="20" height="20" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.33337 9.00004H7.66671V10.3334H6.33337V9.00004ZM6.33337 3.66671H7.66671V7.66671H6.33337V3.66671ZM6.99337 0.333374C3.31337 0.333374 0.333374 3.32004 0.333374 7.00004C0.333374 10.68 3.31337 13.6667 6.99337 13.6667C10.68 13.6667 13.6667 10.68 13.6667 7.00004C13.6667 3.32004 10.68 0.333374 6.99337 0.333374ZM7.00004 12.3334C4.05337 12.3334 1.66671 9.94671 1.66671 7.00004C1.66671 4.05337 4.05337 1.66671 7.00004 1.66671C9.94671 1.66671 12.3334 4.05337 12.3334 7.00004C12.3334 9.94671 9.94671 12.3334 7.00004 12.3334Z" fill="black"/>
                            </svg>
                            <p>Your location will help us serve better and extend a personalised experience.</p>

                        </div>

                        <Groups style={{display: `${signIn?'block':'none'}`}}>
                            <GrHead>
                            <i class="fa fa-thumbs-up" aria-hidden="true"></i>
                            <span>Recommended Groups</span>
                            </GrHead>

                            <GrMember>
                                <img src={require("../images/leisure.png").default} alt="" />
                                <p>Leisure</p>
                                <button>Follow</button>
                            </GrMember>

                        </Groups>


                    </div>

                </div>


            </div>

            

        </div>
     );
}
 
export default Home;

const Groups = styled.div`
    width: 100%;
    margin-top: 5.4rem;

`;

const GrHead = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    text-align: start;
    color: #000000;
    margin-bottom: 1.3rem;
    i{
        margin-right: 4.75px;
    }

    @media (max-width: 1396px)
    {
        font-size: 12px;
    }
`;

const GrMember = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 1.1rem 0;

    p{
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 18px;
        /* identical to box height */
        margin-left: 1.2rem;
        text-align: start;
        width: 104px;

        color: #000000;
    }

    button{
        margin-left: 28px;
        padding: 6px 12px;
        
        border:none;
        background: #EDEEF0;
        border-radius: 14px;


        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 16px;
        /* identical to box height */

        text-align: center;

        color: #000000;
    }

`;