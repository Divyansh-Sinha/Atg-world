import React, { useState } from 'react';
import './Navbar.css';
import styled from "styled-components";
import CustomizedDialogs from '../DialogForm/DialogForm';

import SignIn from '../DialogForm/SignIn';

const Navbar = ({signIn, setSignIn}) => {

  const [IsOpen, setIsOpen] = useState(false);

    return ( 
        <>
    
      <Nav >
        <Logo>
        <svg   viewBox="0 0 163 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0)">
            <path d="M96.795 15.498C98.7163 15.498 100.274 13.9393 100.274 12.0165C100.274 10.0938 98.7163 8.53503 96.795 8.53503C94.8737 8.53503 93.3162 10.0938 93.3162 12.0165C93.3162 13.9393 94.8737 15.498 96.795 15.498Z" fill="#CDDC36"/>
            <path d="M84.788 11.1465L90.2737 5.65649H86.5611C85.541 7.31878 84.9331 9.20114 84.788 11.1465Z" fill="#DAE233"/>
            <path d="M95.9587 0C93.9447 0.127315 91.9978 0.773184 90.3066 1.875V5.658L95.9587 0Z" fill="#DAE233"/>
            <path d="M108.769 11.1465L103.283 5.65649H106.996C108.03 7.31208 108.64 9.19811 108.769 11.1465Z" fill="#DAE233"/>
            <path d="M97.6314 0C99.6453 0.127382 101.592 0.773246 103.283 1.875V5.658L97.6314 0Z" fill="#DAE233"/>
            <path d="M90.3066 12.786H84.821C84.9502 14.7344 85.5594 16.6205 86.5941 18.276H90.3066V12.786Z" fill="#DAE233"/>
            <path d="M103.318 12.786H108.804C108.674 14.7344 108.065 16.6204 107.03 18.276H103.318V12.786Z" fill="#DAE233"/>
            <path d="M95.9587 5.59052L90.4131 11.1405H84.7881L95.9587 -0.00598145V5.59052Z" fill="#46B746"/>
            <path d="M97.6313 23.9655C99.6561 23.8934 101.623 23.2683 103.318 22.158V12.786L97.6313 18.477V23.9655Z" fill="#46B746"/>
            <path d="M95.9257 18.444L90.3066 12.8206V22.1925C92.0031 23.2734 93.9503 23.8961 95.9587 24.0001V18.45L95.9257 18.444Z" fill="#46B746"/>
            <path d="M97.6313 5.59051L103.177 11.1405H108.796L97.6313 0V5.59051Z" fill="#46B746"/>
            <path d="M17.689 22.6215C17.5054 22.6381 17.3218 22.5905 17.1693 22.4869C17.0168 22.3833 16.9049 22.2299 16.8527 22.053L14.3047 15.1245H4.18169L1.70715 22.053C1.64716 22.2251 1.53345 22.3732 1.38284 22.4756C1.23224 22.578 1.05271 22.6291 0.87081 22.6215C0.72458 22.6204 0.580924 22.5829 0.452704 22.5125C0.324485 22.4422 0.215704 22.3411 0.136102 22.2183C0.0565002 22.0955 0.00856208 21.9549 -0.00341983 21.8091C-0.0154017 21.6632 0.00894695 21.5167 0.0674453 21.3825L6.62326 3.27303C6.75927 2.67424 7.09517 2.13972 7.57555 1.75768C8.05593 1.37563 8.65209 1.16888 9.26567 1.17153C9.87822 1.1728 10.4731 1.37724 10.9572 1.75287C11.4412 2.1285 11.7873 2.65414 11.9411 3.24754L18.5358 21.39C18.5707 21.4868 18.5933 21.5876 18.6033 21.69C18.5981 21.9326 18.5006 22.1641 18.3307 22.3372C18.1608 22.5103 17.9313 22.612 17.689 22.6215ZM4.84567 13.35H13.6422L10.1635 3.60903C10.1236 3.39742 10.0127 3.20579 9.84918 3.06585C9.68564 2.92591 9.47924 2.84606 9.26417 2.83953C8.86449 2.83953 8.56473 3.10755 8.36489 3.64355L4.84567 13.35Z" fill="#27A365"/>
            <path d="M24.5161 3.21304H17.9573C17.8389 3.22001 17.7202 3.20269 17.6087 3.16212C17.4972 3.12154 17.3951 3.05858 17.3088 2.97711C17.2225 2.89564 17.1537 2.79736 17.1067 2.68833C17.0597 2.5793 17.0354 2.46179 17.0354 2.34304C17.0354 2.22429 17.0597 2.1068 17.1067 1.99777C17.1537 1.88874 17.2225 1.79046 17.3088 1.70899C17.3951 1.62752 17.4972 1.56456 17.6087 1.52398C17.7202 1.48341 17.8389 1.46609 17.9573 1.47306H32.7072C32.9377 1.47306 33.1588 1.56472 33.3218 1.72787C33.4849 1.89103 33.5765 2.1123 33.5765 2.34304C33.5765 2.57378 33.4849 2.79507 33.3218 2.95823C33.1588 3.12138 32.9377 3.21304 32.7072 3.21304H26.2563V21.8236C26.2563 21.9378 26.2338 22.0509 26.1901 22.1565C26.1464 22.2621 26.0824 22.3579 26.0016 22.4387C25.9209 22.5195 25.8251 22.5836 25.7196 22.6273C25.6141 22.6711 25.5011 22.6935 25.3869 22.6935C25.2728 22.6935 25.1597 22.6711 25.0543 22.6273C24.9488 22.5836 24.853 22.5195 24.7722 22.4387C24.6915 22.3579 24.6275 22.2621 24.5838 22.1565C24.5401 22.0509 24.5176 21.9378 24.5176 21.8236L24.5161 3.21304Z" fill="#27A365"/>
            <path d="M51.6057 15.4981C51.61 16.4727 51.4165 17.4379 51.037 18.3355C50.6575 19.233 50.0999 20.0441 49.398 20.7196C48.6442 21.4664 47.7437 22.0483 46.7535 22.4287C45.7633 22.809 44.7049 22.9794 43.6455 22.9291C42.5347 22.9521 41.4304 22.7539 40.3968 22.346C39.3632 21.9381 38.4209 21.3287 37.6248 20.5531C35.9975 18.9564 35.0301 16.8054 34.9149 14.5276C34.7811 12.8903 34.7811 11.2449 34.9149 9.60759C35.0308 7.3496 35.9994 5.21997 37.6248 3.64959C38.4163 2.86538 39.357 2.24799 40.3912 1.83396C41.4253 1.41992 42.5319 1.21764 43.6455 1.23907C45.251 1.19506 46.8323 1.63833 48.1813 2.51058C49.5304 3.38283 50.5842 4.64324 51.204 6.12609C51.2556 6.26313 51.2735 6.41052 51.2564 6.55593C51.2393 6.70134 51.1877 6.84053 51.1058 6.96185C51.0239 7.08318 50.9141 7.18311 50.7857 7.25327C50.6573 7.32342 50.514 7.36175 50.3677 7.36507C50.1849 7.37723 50.0033 7.32789 49.8518 7.22488C49.7002 7.12187 49.5875 6.97111 49.5314 6.79658C49.0303 5.65665 48.2045 4.68985 47.1574 4.01701C46.1103 3.34417 44.8882 2.99513 43.644 3.01357C42.7784 3.00052 41.9188 3.15955 41.1151 3.4814C40.3113 3.80326 39.5794 4.28155 38.9617 4.88857C37.6582 6.11354 36.8689 7.78877 36.7539 9.57459C36.5867 11.2439 36.5867 12.9258 36.7539 14.5951C36.8711 16.3827 37.6453 18.0637 38.9272 19.3141C39.5514 19.9215 40.2892 20.3998 41.0983 20.7215C41.9074 21.0432 42.772 21.2021 43.6425 21.1891C45.2601 21.2598 46.846 20.725 48.091 19.6891C48.6589 19.204 49.1102 18.597 49.4112 17.9131C49.7122 17.2293 49.8553 16.4864 49.8296 15.7396V13.3891H44.8131C44.5825 13.3891 44.3614 13.2974 44.1984 13.1343C44.0354 12.9711 43.9438 12.7498 43.9438 12.5191C43.9438 12.2883 44.0354 12.0671 44.1984 11.9039C44.3614 11.7407 44.5825 11.6491 44.8131 11.6491H49.93C50.1492 11.628 50.3702 11.6546 50.5782 11.7269C50.7861 11.7992 50.9759 11.9157 51.1348 12.0682C51.2936 12.2207 51.4176 12.4058 51.4984 12.6107C51.5791 12.8156 51.6147 13.0356 51.6027 13.2556L51.6057 15.4981Z" fill="#27A365"/>
            <path d="M57.1603 21.8911C57.1692 22.0268 57.1495 22.1628 57.1027 22.2904C57.0559 22.418 56.983 22.5345 56.8886 22.6322C56.7941 22.73 56.6803 22.8069 56.5545 22.858C56.4286 22.9091 56.2934 22.9333 56.1576 22.9291C56.0234 22.9277 55.8908 22.8997 55.7675 22.8466C55.6442 22.7936 55.5326 22.7165 55.4394 22.6199C55.3461 22.5233 55.2729 22.4092 55.2241 22.2841C55.1752 22.159 55.1517 22.0254 55.1549 21.8911V20.2516C55.0545 18.9121 57.2292 18.9121 57.1618 20.2516L57.1603 21.8911Z" fill="#27A365"/>
            <path d="M58.0641 2.44359C58.0205 2.30954 58.01 2.16691 58.0337 2.02794C58.0573 1.88896 58.1144 1.75781 58.1999 1.64579C58.2855 1.53378 58.3969 1.44424 58.5247 1.38489C58.6525 1.32554 58.7927 1.29817 58.9334 1.3051C59.0348 1.29459 59.1373 1.3046 59.2347 1.33454C59.3322 1.36448 59.4226 1.41374 59.5006 1.47937C59.5787 1.54501 59.6427 1.62569 59.689 1.71661C59.7352 1.80753 59.7627 1.90683 59.7698 2.0086L64.0174 21.0886C64.0174 21.3226 64.2512 21.2566 64.3172 21.0886L69.1329 2.88009C69.1995 2.44657 69.4244 2.05321 69.7641 1.77612C70.1039 1.49903 70.5342 1.35791 70.9719 1.38009C71.4081 1.3642 71.8352 1.50762 72.1736 1.7836C72.512 2.05959 72.7385 2.4493 72.811 2.88009L77.5262 21.1231C77.5937 21.2911 77.826 21.3571 77.826 21.1231L82.1411 2.07309C82.1594 1.85761 82.26 1.65747 82.4218 1.51419C82.5837 1.37091 82.7945 1.29549 83.0104 1.30359C83.1524 1.28881 83.2957 1.31144 83.4262 1.36924C83.5567 1.42703 83.6699 1.51798 83.7544 1.63307C83.839 1.74815 83.892 1.88339 83.9082 2.0253C83.9244 2.16722 83.9032 2.3109 83.8467 2.4421L79.5002 21.4546C79.4068 21.8641 79.1772 22.2297 78.8491 22.4915C78.521 22.7534 78.1138 22.896 77.6941 22.896C77.2744 22.896 76.8672 22.7534 76.5391 22.4915C76.211 22.2297 75.9814 21.8641 75.888 21.4546L71.0723 3.2116C71.0723 3.17182 71.0565 3.13367 71.0284 3.10553C71.0003 3.0774 70.9622 3.06159 70.9225 3.06159C70.8827 3.06159 70.8446 3.0774 70.8165 3.10553C70.7884 3.13367 70.7726 3.17182 70.7726 3.2116L65.8894 21.4546C65.796 21.8641 65.5665 22.2297 65.2384 22.4915C64.9102 22.7534 64.503 22.896 64.0834 22.896C63.6637 22.896 63.2565 22.7534 62.9283 22.4915C62.6002 22.2297 62.3707 21.8641 62.2773 21.4546L58.0641 2.44359Z" fill="#5C5D5D"/>
            <path d="M125.893 22.761C125.759 22.7552 125.628 22.7226 125.508 22.6652C125.387 22.6077 125.279 22.5265 125.19 22.4265L119.237 14.9625C119.065 14.6633 118.816 14.4155 118.516 14.2449C118.216 14.0742 117.876 13.9869 117.531 13.992H113.316V21.858C113.307 22.0887 113.213 22.3078 113.053 22.4738C112.893 22.6397 112.677 22.7409 112.447 22.758C112.215 22.7462 111.996 22.6468 111.835 22.4797C111.674 22.3126 111.582 22.0904 111.578 21.858V3.21301C111.568 2.98171 111.606 2.75088 111.69 2.53515C111.774 2.31942 111.902 2.12351 112.065 1.95988C112.229 1.79625 112.425 1.66846 112.641 1.58465C112.856 1.50084 113.087 1.46282 113.318 1.47302H119.439C121.19 1.38663 122.906 1.98718 124.222 3.14702C124.846 3.74328 125.333 4.46764 125.65 5.27033C125.968 6.07303 126.108 6.93501 126.061 7.79701C126.061 11.3115 123.987 13.287 120.515 13.755L126.602 21.3195C126.722 21.4837 126.782 21.6848 126.77 21.888C126.774 22.0041 126.754 22.1198 126.711 22.2278C126.668 22.3359 126.604 22.4339 126.522 22.5159C126.439 22.5978 126.341 22.6619 126.233 22.7041C126.125 22.7462 126.009 22.7656 125.893 22.761ZM113.351 12.2175H118.97C122.549 12.2175 124.321 10.7445 124.321 7.73251C124.321 4.95451 122.615 3.21301 119.405 3.21301H113.351V12.2175Z" fill="#5C5D5D"/>
            <path d="M129.673 2.24254C129.673 2.0118 129.765 1.79053 129.928 1.62737C130.091 1.46422 130.312 1.37256 130.542 1.37256C130.773 1.37256 130.994 1.46422 131.157 1.62737C131.32 1.79053 131.412 2.0118 131.412 2.24254V20.8201H141.981C142.216 20.8313 142.438 20.9298 142.605 21.0962C142.771 21.2626 142.869 21.485 142.881 21.72C142.869 21.9521 142.769 22.1711 142.602 22.3326C142.436 22.4942 142.213 22.5862 141.981 22.59H131.446C131.211 22.6 130.976 22.561 130.756 22.4753C130.536 22.3897 130.337 22.2593 130.17 22.0925C130.004 21.9257 129.873 21.726 129.788 21.5062C129.702 21.2864 129.663 21.0512 129.673 20.8155V2.24254Z" fill="#5C5D5D"/>
            <path d="M148.035 22.626C147.809 22.6386 147.583 22.6028 147.373 22.521C147.162 22.4392 146.971 22.3133 146.812 22.1517C146.654 21.9902 146.532 21.7966 146.454 21.584C146.377 21.3714 146.345 21.1447 146.362 20.919V3.14551C146.345 2.91983 146.377 2.69311 146.454 2.48052C146.532 2.26793 146.654 2.07437 146.812 1.91278C146.971 1.75119 147.162 1.62529 147.373 1.5435C147.583 1.46171 147.809 1.42592 148.035 1.43851H153.257C154.483 1.35703 155.713 1.53549 156.866 1.96224C158.018 2.38899 159.068 3.05442 159.946 3.91502C161.595 5.67549 162.515 7.99592 162.521 10.4085C162.588 11.512 162.588 12.6185 162.521 13.722C162.484 16.1277 161.553 18.4333 159.909 20.1885C159.027 21.0323 157.981 21.6848 156.835 22.1053C155.69 22.5257 154.47 22.7051 153.252 22.632H148.035V22.626ZM160.775 10.341C160.508 5.85601 158.065 3.21152 153.217 3.21152H148.133V20.8185H153.217C158.067 20.8185 160.541 18.141 160.775 13.689C160.843 12.5746 160.844 11.4571 160.778 10.3425L160.775 10.341Z" fill="#5C5D5D"/>
            <path d="M90.3007 22.2V12.8205L95.9122 18.45H95.9452V24C93.9399 23.8981 91.9952 23.278 90.3007 22.2ZM97.6149 18.4845L103.292 12.7935V22.1655C101.6 23.2755 99.6368 23.9006 97.6149 23.973V18.4845ZM103.292 18.2835V12.786H108.771C108.641 14.734 108.033 16.6199 107 18.276L103.292 18.2835ZM86.5926 18.2835C85.5585 16.6252 84.9504 14.7366 84.8225 12.786H90.3007V18.276L86.5926 18.2835ZM93.3073 12.0165C93.3085 11.3294 93.5132 10.658 93.8955 10.0873C94.2778 9.5165 94.8206 9.07197 95.4552 8.80984C96.0899 8.54771 96.788 8.47973 97.4612 8.61451C98.1345 8.74929 98.7527 9.08078 99.2378 9.56707C99.7228 10.0534 100.053 10.6727 100.187 11.3467C100.32 12.0207 100.251 12.7192 99.9879 13.3539C99.7249 13.9886 99.2797 14.5311 98.7088 14.9127C98.1378 15.2943 97.4666 15.498 96.78 15.498C96.3236 15.4976 95.8717 15.4072 95.4502 15.2321C95.0286 15.0569 94.6457 14.8003 94.3232 14.477C94.0007 14.1538 93.745 13.7701 93.5707 13.3479C93.3964 12.9257 93.3069 12.4733 93.3073 12.0165ZM103.161 11.1465L97.6149 5.5965V0C99.6265 0.127176 101.571 0.773109 103.259 1.875V5.64L103.276 5.6565H106.972C107.998 7.30233 108.605 9.17515 108.739 11.1105L108.771 11.1465H103.161ZM84.7895 11.1465L84.83 11.1C84.9807 9.1712 85.5863 7.30566 86.5971 5.6565H90.2842L90.3007 5.64V1.875C91.989 0.773109 93.9336 0.127176 95.9452 0V5.5905L90.3996 11.1405L84.7895 11.1465Z" fill="url(#paint0_linear)"/>
            </g>
            <defs>
            <linearGradient id="paint0_linear" x1="84.7895" y1="10.464" x2="96.7907" y2="23.9906" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00A854"/>
            <stop offset="1" stopColor="#004D25"/>
            </linearGradient>
            <clipPath id="clip0">
            <rect width="162.566" height="24" fill="white"/>
            </clipPath>
            </defs>
        </svg>
        </Logo>
       
        <Search>
            <span className="icon"><i className="fa fa-search" aria-hidden="true"></i></span>
            <input className="iconText" placeholder="Search for your favorite groups in ATG"/>
        </Search>
          
        
        {
          signIn ? 
          <SignedIn>
            <img src={require("../../images/Joseph.png").default} alt="" />
            <p>Siddharth Goyal</p>

            <SignedMenu onClick={()=>setIsOpen(!IsOpen)}>
            <svg viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.416748 0.166626L5.00008 4.74996L9.58341 0.166626H0.416748Z" fill="black"/>
            </svg>

            <div style={{display: (IsOpen ? "flex" : "none")}}>
              <span onClick={()=>setSignIn(!signIn)}>Sign Out</span>
              <span>Settings</span>
            </div>

            </SignedMenu>

          </SignedIn>           
          : 
          <CustomizedDialogs >
          <SignIn signIn={signIn} setSignIn= {setSignIn}>                
          </SignIn>
        </CustomizedDialogs>
        }
          

           

           
        

        <Logo2>

        <svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="-0.00012207" width="10" height="10" fill="#868E96"/>
        </svg>

        <svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5 9.99988C7.76142 9.99988 10 7.7613 10 4.99988C10 2.23845 7.76142 -0.00012207 5 -0.00012207C2.23858 -0.00012207 0 2.23845 0 4.99988C0 7.7613 2.23858 9.99988 5 9.99988Z" fill="#868E96"/>
        </svg>

        <svg viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0 -0.00012207H12L6 9.99988L0 -0.00012207Z" fill="#868E96"/>
        </svg>
      



        </Logo2>

      </Nav>
      
     
      
      
    </>
    
     );
}
 
export default Navbar;

const SignedIn = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    

    img{
      width: 36px;
      height: 36px;
    }

    p{
      margin-left:12px;
      margin-right:10.42px;
      font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    /* identical to box height */


    color: #000000;
    }

    @media (max-width: 741px)
{
  display: none;
}
  
`;

const SignedMenu = styled.div`

svg{
  width: 9.17px;
  height: 4.58px ;
  cursor: pointer;
}

    div{
      z-index:2;
      position: absolute;
      top:50px;
      right: 45px;
      flex-direction: column;     
      background: #FFFFFF;
      box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.16), 0px 0px 2px rgba(0, 0, 0, 0.08);
      border-radius: 4px;

      span{
        padding: 1rem;
        cursor: pointer;
      }

    }

`;

const Nav = styled.div`
  /* position: absolute; */
  overflow-x: hidden;
  display: flex;
   max-width: 100%;
    height: 7.2rem;
    left: 0px;
    top: 0px;
    padding: 0 7.2rem;
    align-content: center;
    justify-content: space-between;
    align-items: center;
    

    background: #FFFFFF;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.12);

  @media (max-width: 768px) {
    max-width: 100%;
    padding:0;

  }

  @media (max-width: 741px)
  {
      justify-content: flex-end;
      height:4.4rem;
  }
  @media (max-width: 700px)
  {
      justify-content: flex-end;
      height:2.4rem;
  }

  


`;



const Logo = styled.div`
  position: relative;
  svg{
    height: 24px;
  }
   

@media (max-width: 1100px)
{
  svg{
    height: 20px;
  }
}

@media (max-width: 741px)
{
  display: none;
}
  
`;


const Search = styled.div`
 
    position: relative;
    width: 36rem;
    height: 4.2rem;


    background: #F2F2F2;
    border-radius: 21px;
  
  @media (max-width: 1100px) {
    
    width: 30rem;
    
  }

  @media (max-width: 741px)
{
  display: none;
}
`;


const Create = styled.div`
    
    height: 21px;
  
    font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;
    /* identical to box height */
    color: #2E2E2E;
    text-align: right;

    @media (max-width: 1100px)
    {
      font-size: 14px;
    }

    @media (max-width: 741px)
    {
      display: none;
    }
`;

const Logo2 = styled.div`

  display: none;

  
  svg{
    width: 20px;
    height: 20px;
    margin: 0 10px;
    
    &:nth-child(3){
      width: 24px;
    }

    @media (max-width: 700px)
        {
          width: 10px;
          height: 10px;
          margin: 0 5.5px;

          &:nth-child(3){
            width: 12px;
          }

        }

  }

  @media (max-width: 741px){
    
    display: flex;

  }

  


`;