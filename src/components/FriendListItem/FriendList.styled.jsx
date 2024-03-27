import styled from "@emotion/styled"

export const FriendsWrapper = styled.div `
justify-content: center;
`

export const Color = styled.span `
  display: inline-block;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  margin-bottom: 3px; 
  background-color: ${props => {
    switch(props.status){
        case true:
            return 'green';
        case false:
            return 'red';
        default:
            return 'gray';
    }
  }}
  `
;

export const FriendsList = styled.ul `
margin-top: 30px;
width: 730px;
display: flex;
gap: 15px;
`
export const FriendsItem = styled.li `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: solid 2px;
border-color: black;
border-radius: 10%;
width: 130px;
`
export const FriendsImage = styled.img `
width: 100px;
height: 100px;
padding: 10px
`

export const FriendsParagraph = styled.p `
color: black;
display: flex;
justify-content: center;

`