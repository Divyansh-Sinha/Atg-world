import React, { useState } from 'react';
import styled from 'styled-components'

const Card2 = () => {

    const [IsOpen, setIsOpen] = useState(false);
    

    
    return ( 
        <Card>
            <CardImage>
                <img src={require("../../images/Car.png").default} alt="Hello" />
            </CardImage>
            <CardTag> <span>🗓️</span> Meetup</CardTag>
            <CardHead>
                <p>Finance & Investment Elite Social Mixer @Lujiazui</p>
                <HeadMenu onClick={()=>setIsOpen(!IsOpen)}>
                <svg width="20" height="6" viewBox="0 0 20 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.6666 3.00008C14.6666 4.28341 15.7166 5.33341 17 5.33341C18.2833 5.33341 19.3333 4.28341 19.3333 3.00008C19.3333 1.71675 18.2833 0.666748 17 0.666748C15.7166 0.666748 14.6666 1.71675 14.6666 3.00008ZM12.3333 3.00008C12.3333 1.71675 11.2833 0.666748 9.99998 0.666748C8.71665 0.666748 7.66665 1.71675 7.66665 3.00008C7.66665 4.28341 8.71665 5.33341 9.99998 5.33341C11.2833 5.33341 12.3333 4.28341 12.3333 3.00008ZM5.33331 3.00008C5.33331 1.71675 4.28331 0.666747 2.99998 0.666747C1.71665 0.666747 0.666647 1.71675 0.666647 3.00008C0.666647 4.28341 1.71665 5.33341 2.99998 5.33341C4.28331 5.33341 5.33331 4.28341 5.33331 3.00008Z" fill="black"/>
                </svg>

                <div style={{display: (IsOpen ? "flex" : "none")}}>
                    <span>Edit</span>
                    <span>Report</span>
                    <span>Share</span>
                </div>

                </HeadMenu>
            </CardHead>
            <CardBody>
                <p style={{textAlign: 'start'}}>                    
                    <span>
                    <i class="fa fa-calendar" aria-hidden="true"></i> 
                    <span style={{marginLeft: '6.5px'}}> Fri, 12 Oct, 2018</span>
                    </span> 
                    <span style={{marginLeft: '55px'}}>
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                    <span> Ahmedabad, India</span>    
                    </span>                    
                    </p> 
                    <button>
                        Visit Website
                    </button>

            </CardBody>
            <CardFooter>
                <Item1>
                    <img src={require("../../images/Sarthak.png").default} alt="" />
                    <p>Sarthak Kamra</p>
                </Item1>
                <Item2>
                    <icon>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.75 9C2.0475 5.7075 5.25 3.375 9 3.375C12.75 3.375 15.9525 5.7075 17.25 9C15.9525 12.2925 12.75 14.625 9 14.625C5.25 14.625 2.0475 12.2925 0.75 9ZM15.615 9C14.3775 6.4725 11.8425 4.875 9 4.875C6.1575 4.875 3.6225 6.4725 2.385 9C3.6225 11.5275 6.1575 13.125 9 13.125C11.8425 13.125 14.3775 11.5275 15.615 9ZM9 7.125C10.035 7.125 10.875 7.965 10.875 9C10.875 10.035 10.035 10.875 9 10.875C7.965 10.875 7.125 10.035 7.125 9C7.125 7.965 7.965 7.125 9 7.125ZM5.625 9C5.625 7.14 7.14 5.625 9 5.625C10.86 5.625 12.375 7.14 12.375 9C12.375 10.86 10.86 12.375 9 12.375C7.14 12.375 5.625 10.86 5.625 9Z" fill="#525252"/>
                    </svg>
                    </icon>

                    <p>
                        1.4k views
                    </p>

                    <button>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.5 12.06C12.93 12.06 12.42 12.285 12.03 12.6375L6.6825 9.525C6.72 9.3525 6.75 9.18 6.75 9C6.75 8.82 6.72 8.6475 6.6825 8.475L11.97 5.3925C12.375 5.7675 12.9075 6 13.5 6C14.745 6 15.75 4.995 15.75 3.75C15.75 2.505 14.745 1.5 13.5 1.5C12.255 1.5 11.25 2.505 11.25 3.75C11.25 3.93 11.28 4.1025 11.3175 4.275L6.03 7.3575C5.625 6.9825 5.0925 6.75 4.5 6.75C3.255 6.75 2.25 7.755 2.25 9C2.25 10.245 3.255 11.25 4.5 11.25C5.0925 11.25 5.625 11.0175 6.03 10.6425L11.37 13.7625C11.3325 13.92 11.31 14.085 11.31 14.25C11.31 15.4575 12.2925 16.44 13.5 16.44C14.7075 16.44 15.69 15.4575 15.69 14.25C15.69 13.0425 14.7075 12.06 13.5 12.06Z" fill="#2D2D2D"/>
                    </svg>
                    </button>

                </Item2>
            </CardFooter>

        </Card>
     );
}
 
export default Card2;


const Card = styled.div`
    position:relative;
    width: 100%;
    /* height:47.2rem; */
    background: #FFFFFF;
    border: 1px solid #E0E0E0;
    border-radius: 4px;
    margin-top: 5rem;

    @media (max-width: 741px)
    {
        margin-top: 2.6rem;
    }

`;

const CardImage = styled.div`
        
    img{
        width: 100%;
    }
`;

const CardTag = styled.div`
    margin-top: 2rem;
    margin-left: 2rem;
    text-align:left;
    font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 23px;

span{
    position: relative;
    top:-4px;
    font-size: 14px;
    
}
    
`;

const CardHead = styled.div`
    display: flex;
    max-width: 100%;
    justify-content: space-between;
    margin: 0 2rem;
    margin-top: 1rem;
    

    p{
        
        font-size: 22px;
        font-style: normal;
        font-weight: 600;
        line-height: 30px;
        letter-spacing: 0em;
        text-align: left;
        
        width: 80%;
        

        @media (max-width: 700px){
            font-size: 1.6rem;
            
        }


        
    }
       
 

`;


const HeadMenu = styled.div`
        
        margin-top: 0.8rem;
        position:relative;  
        cursor: pointer;
        div{
           
            flex-direction:column;
            position: absolute;
            width: 160px;        
            top:1.5rem;
            right: 0;
            background: #FFFFFF;
            box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.16), 0px 0px 2px rgba(0, 0, 0, 0.08);
            border-radius: 4px;

        span{
            font-style: normal;
            font-weight: 550;
            font-size: 14px;
            line-height: 18px;
            text-align: left;
            padding: 0.8rem 2rem;
            color: #000000;
        }

    }

`;


const CardBody = styled.div`
    width: 100%;
    margin-top: 2rem;
    

    p{
        
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
        width: 94%;
        margin: 0 auto;

        @media (max-width: 700px){
            font-size: 1.2rem;
            text-align:left;
        }


    }

    button{
        width: 94%;
        margin: 0 auto;
        height: 38px;
        margin-top: 16px;   

        background: #FFFFFF;
        border: 0.7px solid #A9AEB8;
        box-sizing: border-box;
        border-radius: 8px;
        text-align: center;
        color: #E56135;
        font-weight: 600;
        font-size: 15px;
        line-height: 140.4%;
        cursor: pointer;
@media (max-width: 741px){
            height: 34px;
            font-size:13px;
        }

    }

    

`;

const CardFooter = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 3.2rem;
    padding: 0 2rem;
    margin-bottom: 2rem;
`;

const Item1 = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;


    img{
        width: 4.8rem;
        height: 4.8rem;
        @media (max-width: 741px)
        {
            width: 3.7rem;
        height: 3.7rem;
        }
    }

    p{
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 23px;
        margin-left: 1rem;
        color: #000000;
        @media (max-width: 741px)
        {
            font-size:13px;
        }
    }


`;
const Item2 = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;


    icon{
        width: 1.8rem;
        height: 1.8rem;
        margin-right: 8.75px;
    }

    p{
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 18px;
        text-align: right;

        color: #525252;

        margin-right: 4rem;

        @media (max-width: 741px)
        {
            font-size:10px;
        }
    }

    button{
        width: 4.2rem;
        height: 3.6rem;
        text-align: center;
        position:relative;
        border:none;
        cursor: pointer;
        @media (max-width: 741px)
        {
            width:70px;
            height:30px;
            &::after{
                    content:"Share";
                    position:absolute;
                    font-size:10px;
                    
                    top:10px;
                    left:30px;
                }
        }

        svg{
            margin-top: 5px;

            @media (max-width: 741px)
            {
                width:13.5px !important;
                height:14.94px !important;
                margin-right:40px;
            }

            
        }


    }


    

`;