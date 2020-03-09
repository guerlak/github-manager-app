import React from 'react';
import {Text} from 'react-native';

import api from '../../services/api';
import {
  Container,
  Header,
  Bio,
  Name,
  Avatar,
  Starred,
  StarredAvatar,
  Starreds,
  Title,
  Info,
  Author,
} from './styles';

class User extends React.Component {
  state = {
    user: {},
    starreds: [],
  };

  async componentDidMount() {
    const {route} = this.props;
    const login = route.params.user.login;
    this.setState({
      user: route.params.user,
    });
    const res = await api.get(`/users/${login}/starred`);

    this.setState({
      starreds: res.data,
    });
  }

  render() {
    const {starreds} = this.state;
    const {name, bio, avatar} = this.state.user;

    return (
      <Container>
        <Header>
          <Avatar source={{uri: avatar}} />
          <Name>{name}</Name>
          <Bio>{bio}</Bio>
        </Header>

        <Starreds
          data={starreds}
          keyExtractor={starred => String(starred.id)}
          renderItem={({item}) => (
            <Starred>
              <StarredAvatar source={{uri: item.owner.avatar_url}} />
              <Info>
                <Title>{item.name}</Title>
                <Author>{item.owner.login}</Author>
              </Info>
            </Starred>
          )}
        />
      </Container>
    );
  }
}

export default User;
