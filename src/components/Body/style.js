import styled from 'styled-components'


export const Container = styled.div`
display: flex;
flex-direction: column ;
border-top: 1px solid whitesmoke;
flex:10;
height:fit-content;
padding:0 17px;
padding-top: 20px;
background: #000000;
`

export const Card=styled.div`
display:flex;
flex-direction:column ;
border:1px solid black ;
`
export const Img = styled.img`
width:334px;
/* flex: 1; */
height:290px;
`
export const Title=styled.h1`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 22px;
color: #FFFFFF;
margin-left:10px ;
`
export const Cards=styled.div`
margin-top:20px ;
 display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  grid-auto-rows: minmax(100px, 400px);
  /* display:flex;
  align-items:center ;
  flex-wrap:nowrap ; */
`
Container.Wrapper= styled.div`
display:flex;
align-items:center ;
margin-top:15px;
`
export const MiniImg = styled.img`
width:45px;
height:45px;
border-radius:50%;
`
export const Header = styled.div`
display: flex;
align-items: center ;

`
export const CategoryBtn = styled.button`
width:120px;
height:50px;
border-radius:40%;
margin:15px ;
background-color:#212121;
color:white;
outline:none;
border:none;
font-size:18px;
&:hover{
  background-color:white;
  color: black;
  cursor:pointer;
}

`


