import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;

export const Header = styled.View`
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #999;
  align-items: center;
`;

export const Starreds = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 32px;
  background-color: #eee;
`;

export const StarredAvatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 32px;
  background-color: #eee;
`;

export const Name = styled.Text`
  font-size: 20px;
  color: #333;
  font-weight: bold;
  margin-top: 10px;
  text-align: center;
`;
export const Bio = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 13px;
  line-height: 18px;
  color: #999;
  margin-top: 5px;
  text-align: center;
`;

export const Starred = styled.View`
  background-color: #eee;
  border-radius: 4px;
  padding: 10px 15px;
  margin-bottom: 20px;
  flex-direction: row;
  align-items: center;
`;

export const Author = styled.Text`
  font-size: 13px;
  color: #3666;

  margin-top: 2px;
`;
export const Title = styled.Text`
  font-size: 15px;
  color: #333;
  font-weight: bold;
`;

export const Info = styled.View`
  background-color: #eee;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 15px;
`;
