import styled from "@emotion/styled"

export const ProfileWrapper = styled.div `
display: flex;
justify-content: center;
`

export const Container = styled.div `
display: flex;
justify-content: center;
width: 300px;
border: solid 3px;
border-radius: 3%;
border-color: rgb(43, 42, 42);
flex-direction: column;
`

export const InfoWrapper  = styled.div `
margin-top: 15px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`

export const ImageAvatar = styled.img `
display: block;
max-height: 250px;
max-width: 250px;
background-color: rgb(43, 42, 42);
border-radius: 50%;

`

export const Name = styled.p `
color: #1a1a1a;
display: flex;
align-items: center;
justify-content: center;
font-weight: 700; 
height: 30px;
`

export const Tag = styled.p `
color: darkgray;
display: flex;
align-items: center;
justify-content: center;
height: 30px;
`

export const Location = styled.p `
color: darkgray;
display: flex;
align-items: center;
justify-content: center;
height: 30px;
`

export const StatsList = styled.ul `
display: flex;
flex-direction: row;
color: #1a1a1a;
justify-content: center;
align-items: center;
background-color: #a9a9a9;
`

export const StatsItem = styled.li `
    border: 1px solid;
    width: 120px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: lightgray;
    flex-direction: column;
`

export const StatsSpan = styled.span `
font-weight: 700;
`