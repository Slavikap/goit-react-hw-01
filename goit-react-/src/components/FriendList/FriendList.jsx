import {Color, FriendsList, FriendsItem, FriendsImage, FriendsParagraph, FriendsWrapper} from "./FriendList.styled.jsx"

export default function FriendList ({friends}) {
 
  return(
	<FriendsWrapper>
	<FriendsList>
	{friends.map(({ id, isOnline, avatar, name }) => (
        <FriendsItem key={id}>       
          <FriendsImage src={avatar} alt="User avatar" width="48" />
          <FriendsParagraph>{name}</FriendsParagraph>
		  <Color status={isOnline}></Color>
        </FriendsItem>
      ))}
	  </FriendsList>
	  </FriendsWrapper>
  )
}