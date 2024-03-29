import React from 'react';
import styled from '@emotion/styled';
import { FriendsWrapper, FriendsList, FriendsItem, FriendsImage, FriendsParagraph } from './FriendList.styled';


const StatusText = styled.span`
  color: ${props => (props.isOnline ? 'green' : 'red')};
`;

export default function FriendListItem({ friend }) { 
  return (
      <FriendsWrapper>
        <FriendsList>
          <FriendsItem key={friend.id}>
            <FriendsImage src={friend.avatar} alt="User avatar" width="48" />
            <FriendsParagraph>{friend.name}</FriendsParagraph>
            <StatusText isOnline={friend.isOnline}>
              {friend.isOnline ? 'Online' : 'Offline'}
            </StatusText>
          </FriendsItem>
        </FriendsList>
      </FriendsWrapper>
  );
}
