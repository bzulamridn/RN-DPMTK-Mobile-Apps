import React from 'react';
import {Platform, StyleSheet,  View, Image} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import Home from './component/Home';
import BeritaList from './component/BeritaList';
import BeritaDetail from './component/BeritaDetail';
import Loker from './component/Loker';


export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isSplash : true,
    }
  }

  componentDidMount(){
    setTimeout(()=>{this.setState({isSplash: false})}, 3000);
  }

  render() {
    const {isSplash} = this.state;
    if(isSplash){
      return <View style={styles.container}>
            <Image  
            source={require('./assets/img/logo.png')}
            style ={{ width:180, height:230 }} />
      </View>
    }else{
    return (
      <Router>
        <Scene key="root">
          <Scene key="home" component={Home}  initial={true} />
          <Scene key="listberita" title="Page 1" component={BeritaList}/>
          <Scene key="detailberita" component={BeritaDetail} />
          <Scene key="loker" component={Loker} />
        </Scene>
      </Router>
    );}
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
