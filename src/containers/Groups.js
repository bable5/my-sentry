import React, {Component} from 'react';
import { Text, View, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import Header from '../components/Header';
import {Actions} from 'react-native-router-flux';
import ActionButton from 'react-native-action-button';
import axios from 'axios';


import { Container, Title, Content, List, ListItem, Footer, FooterTab, Button, Left, Right, Body, Icon, H1, H3 } from 'native-base';

export default connect(({groups}) => groups)(function Groups ({groups, dispatch}) {
  return (
      <Container>
      <Header title={'groups'}/>
      <Container>
       <List dataArray={groups}
        renderRow={(item) =>
            <ListItem onPress={() => {
              AsyncStorage.getItem('AUTHENTICATION').then(res=> {
              dispatch({type: 'CURRENT_GROUP', item: {...item, userId: res}});
              }).then(()=> Actions.groupView({title: item.name}));
            }}>
                <Body>
                <H3>{item.name}</H3>
                <Text>{item.description}</Text>
                </Body>
            </ListItem>
        }>
      </List>
      </Container>
      <ActionButton
          buttonColor='rgba(231,76,60,1)'
          onPress={() => {
<<<<<<< HEAD
            axios('http://192.168.1.163:8000/api/users')
              .then(response => dispatch({type: 'RECEIVE_USERS', users: response.data}))
=======
            axios.get('http://192.168.1.127:8000/api/users')
              .then(response => state.dispatch({type: 'RECEIVE_USERS', users: response.data}))
>>>>>>> Add to group reducer
              .catch(err => console.log(err))
              .then(() => Actions.groupForm());
          }}/>

      </Container>
  );
});
