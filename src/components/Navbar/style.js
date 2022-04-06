import styled from 'styled-components'
import {ReactComponent as menu} from '../../assets/icons/menu.svg'
import {ReactComponent as logo} from '../../assets/icons/Group.svg'
import {ReactComponent as search} from '../../assets/icons/search.svg'
import {ReactComponent as Video} from '../../assets/icons/Video.svg'
import {ReactComponent as Grid} from '../../assets/icons/Grid.svg'
import {ReactComponent as Notification} from '../../assets/icons/notification.svg'

export const Container = styled.div`
background-color:#212121;

`
Container.Wrapper = styled.div`
display:flex;
align-items:center;
height:56px;
justify-content:space-between;
padding:0px 20px;
`
export const MenuIcon = styled(menu)`
width:20px;
height:20px;
cursor:pointer;
`

export const Logo = styled(logo)`
margin-left:27px;
cursor:pointer;
`
export const Flexing = styled.div`
display:flex;
align-items:center;
`
export const SearchInput = styled.input`
width:574px;
height:32px;
color: whitesmoke;
font-size:16px;
outline:none;
padding-left:10px ;
background: #000000;
border: 1px solid rgba(255, 255, 255, 0.2);
box-sizing: border-box;
border-radius: 2px 0px 0px 2px;
`
export const SearchDiv = styled.div`
height: 32px;
width: 65px;
background: rgba(255, 255, 255, 0.2);
border-radius: 0px 2px 2px 0px;
display:flex;
align-items:center;
justify-content:center;
cursor: pointer;
`

export const SearchIcon = styled(search)`
width:20px;
height:20px;
`

export const VideoIcon = styled(Video)`
width:25px;
height:25px ;
cursor: pointer;
`

export const GridIcon = styled(Grid)`
width:17px;
height:17px;
margin-left:30px;
cursor: pointer;
`
export const NotifIcon = styled(Notification)`
width:22px;
height:22px;
cursor: pointer;
margin-left:30px;
`

export const MainPicture = styled.img`
width:40px;
height:40px;
border-radius:50%;
cursor: pointer;
margin-left:30px;
`