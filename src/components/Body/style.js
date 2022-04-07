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
width:100%;
display: flex;
align-items:center;
/* justify-content:center; */
`
Header.Wrapper = styled.div`
width: fit-content;
height:fit-content;
color: white;
padding: 8px 10px;
margin: 0px 20px ;

display: flex;
justify-content:center;
align-items:center;
background: rgba(255, 255, 255, 0.2);
border: 1px solid rgba(255, 255, 255, 0.4);
border-radius:40% ;
cursor: pointer;
&:hover{
  background-color:white ;
  color: black;
}
`
Header.Text = styled.h1`
color: #FFFFFF;
font-size:14px ;

`