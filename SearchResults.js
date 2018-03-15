

'use strict';

import React, { Component } from 'react'
import {
  StyleSheet,
  Image,
  View,
  TouchableHighlight,
  FlatList,
  Text,
  Dimension,
} from 'react-native';
class ListItem extends React.PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.index);
  }

  render() {
    const item = this.props.item;
    const duetime = item.duetime;
    return (
      <TouchableHighlight
        onPress={this._onPress}
        underlayColor='#dddddd'>
        <View>

            
            <View style={styles.rowContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.route}>{item.route}{item.destination}</Text>
            </View>
              <Text style={styles.duetime}>{duetime}{" "}mins</Text>
            </View>


          <View style={styles.separator}/>
        </View>
      </TouchableHighlight>
    );
  }
}

export default class SearchResults extends Component {
  static navigationOptions = {
    title: 'Results',
  };

  _keyExtractor = (item, index) => index;

  _renderItem = ({item, index}) => (
    <ListItem
      item={item}
      index={index}
      onPressItem={this._onPressItem}
    />
  );

  _onPressItem = (index) => {
    console.log("Pressed row: "+index);
  };

  render() {
    const { params } = this.props.navigation.state;
    return (
      <FlatList
        data={params.results}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    );
  }
}

const styles = StyleSheet.create({
  thumb: {
    width: 80,
    height: 80,
    marginRight: 10
  },
  textContainer: {
    flex: 1,
    justifyContent: 'space-between'
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
  duetime: {
    flex: 1,
    textAlign: 'right',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#48BBEC'
  },
  route: {
    flex: 1,
    fontSize: 20,
    color: '#656565'
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 10
  },
});