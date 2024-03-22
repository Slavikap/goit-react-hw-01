import styled from "@emotion/styled"

export const TransactionWrapper = styled.div `
display: flex;
justify-content: center;
`

export const TransactionTab = styled.table `
margin-top: 20px;
border: 2px solid;
border-color: black;
color: black;
width: 683px;
`

export const TransactionTabHead = styled.thead `
background-color: rgb(32, 33, 35);
color: white;
`


export const TransactionTabRow = styled.tr `
background-color: rgb(32, 33, 35);
`

export const TransactionTabHeader = styled.th `

`

export const TransactionTabBody = styled.tbody `

`

export const TransactionItemRow = styled.tr `
tr:nth-child(even) {
    background-color: #D6EEEE;
  }
`