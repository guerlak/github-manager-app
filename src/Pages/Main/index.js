import React from 'react';
import {Keyboard, ActivityIndicator} from 'react-native';
import {
  Container,
  Form,
  Input,
  SubmitButton,
  User,
  List,
  Avatar,
  Name,
  Bio,
  ProfileButton,
  ProfileButtonText,
} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';

class Main extends React.Component {
  state = {
    newUser: '',
    users: [],
    loading: false,
  };

  handleAddUser = async text => {
    const {users, newUser} = this.state;

    this.setState({loading: true});

    try {
      const res = await api.get(`/users/${newUser}`);
      const data = {
        name: res.data.name,
        login: res.data.login,
        bio: res.data.bio,
        avatar: res.data.avatar_url,
      };
      this.setState({
        users: [...users, data],
        newUser: '',
      });
    } catch (e) {
      return;
    }
    this.setState({loading: false});

    Keyboard.dismiss();
  };
  render() {
    const {users, newUser, loading} = this.state;
    return (
      <Container>
        <Form>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Add user"
            onChangeText={text => this.setState({newUser: text})}
            returnKeyType="send"
            onSubmitEditing={this.handleAddUser}
            value={newUser}
          />
          <SubmitButton loading={loading} onPress={this.handleAddUser}>
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Icon name="add" size={20} color="#fff" />
            )}
          </SubmitButton>
        </Form>

        <List
          data={users}
          keyExtractor={user => user.login}
          renderItem={({item}) => (
            <User>
              <Avatar source={{uri: item.avatar}} />
              <Name>{item.name}</Name>
              <Bio>{item.bio}</Bio>
              <ProfileButton onPress={() => {}}>
                <ProfileButtonText>Ver Perfil</ProfileButtonText>
              </ProfileButton>
            </User>
          )}
        />
      </Container>
    );
  }
}

export default Main;
