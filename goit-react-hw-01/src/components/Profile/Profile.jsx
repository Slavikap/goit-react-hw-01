import { Container, ImageAvatar, InfoWrapper, Location, Name, StatsItem, StatsList, StatsSpan, Tag, ProfileWrapper } from "./Profile.styled.jsx"

export default function Profile (props) {
    const {name,tag,location,image,stats} = props

    return(
        <ProfileWrapper>
        <Container>
        <InfoWrapper>
          <ImageAvatar
            src={image}
            alt="User avatar"
          />
          <Name>{name}</Name>
          <Tag>@{tag}</Tag>
          <Location>{location}</Location>
        </InfoWrapper>

        <StatsList>
          <StatsItem>
            <span>Followers</span>
            <StatsSpan>{stats.followers}</StatsSpan>
          </StatsItem>
          <StatsItem>
            <span>Views</span>
            <StatsSpan>{stats.views}</StatsSpan>
          </StatsItem>
          <StatsItem>
            <span>Likes</span>
            <StatsSpan>{stats.likes}</StatsSpan>
          </StatsItem>
        </StatsList>
      </Container>
        </ProfileWrapper>
    )
}
