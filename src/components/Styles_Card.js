/* eslint-disable no-undef */
import styled from "styled-components";
import deskto from '../Assets/desktop.jpg';
// import icon_cart from '../Assets/icon-cart.svg';


export const Card_styles = styled.div`
 display: flex;
 flex-direction: row;
 
 width: 635px;
 height:451px ;
    margin-top: 250px;
    margin-right:10px;
    
    align-itens:center;
    border-radius:20px ;
  background-color:#ffff ;
 

`;

export const Desktop = styled.img`
   background-image:url(${deskto});
   display:flex ;
   justify-content:center ;
   border-radius:20px ;

   height: 452px;
   width: 300px;
   background-size: 100% 100% ;

`;

export const Div_container = styled.div`
  margin-left: 28px ;
  margin-right:50px ;
  margin-top:20px ;

  width:255px ;
  height:400px ;

  
  justify-content:center ;
`;


/////// texto///////
export const H1 = styled.h1`
  font-family:'Lato', sans-serif ;
  font-size:20px ;
font-weight:500 ;
margin-left:22px ;

  color:gray ;
`;

export const Paragra = styled.h1`
font-family: 'Roboto', sans-serif;
font-size: 30px ;
font-weight:700 ;
line-height:30px ;
margin-left:22px ;
`;
export const Div_Dolar = styled.div`
display:flex ;
flex-direction:row ;
width:198px ;
height:36px ;
margin-top:34px ;
margin-bottom:32px ;
margin-right:70px ;
margin-left:22px ;

`

export const Paragrf2 = styled.p`
 font-family:'Lato', sans-serif ;
  font-size:16px ;
  color:gray ;
  margin-left:22px ;

`;
export const Dolar = styled.p`
font-family: 'Roboto', sans-serif;
font-size:35px ;
font-weight:600px ;
margin-bottom:7px ;
margin-top:0px ;
margin-right:5px ;
color:#3f7e67;

`;

export const Button = styled.button`
  width:238px ;
  height:48px ;
  background-color:#3e8168 ;
  border-radius:10px ;
  border:#364835 ;
 margin-left: 22px;
  
`;

export const Text_Button = styled.p`

font-family: 'Roboto', sans-serif;
font-size:14px ;
font-weight:700px ;
color: #ffff ;
`;

export const Text_Risck = styled.div`
font-family: 'Roboto', sans-serif;
font-size:16px ;
font-weight:500px ;
text-decoration: line-through;
margin-top:10px ;
margin-left:15px ;
color:#9a9798 ;
`;

// export const Img_cart = styled.img`
// background-image:url(${icon_cart});
// display:flex ;
//    justify-content:center ;
//    border-radius:20px ;
//    color:#ffff ;
//  `;
