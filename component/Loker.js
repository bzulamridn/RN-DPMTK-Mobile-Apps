import React from 'react';
import { View, Image, RefreshControl, ScrollView } from 'react-native';
import { Container, Content, Text, Spinner, Header, Body, List, ListItem, Left, Right, Button, Tabs,Tab, Title, Subtitle, Thumbnail } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Moment from 'react-moment';
import axios from 'axios';

export default class Loker extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            datas: [],
            isLoading: true,
        }
    }

    static navigationOptions = {
        header: null,
    };

    componentDidMount() {
        axios.get('https://lokerkite.singkawangkota.go.id/api/lokerswasta')
            .then(res => {
                this.setState({ datas: res.data, isLoading: false });
            })
    }

    _onRefresh = () => {
        this.setState({ refreshing: true, isLoading: true });
        axios.get('https://lokerkite.singkawangkota.go.id/api/lokerswasta')
            .then(res => {
                this.setState({ datas: res.data, isLoading: false, refreshing:false });
            })
    }

    render() {
        const { datas, isLoading } = this.state;
        return (
            <Container>
               
                <Content>
                    {isLoading &&
                        <View style={{ flex: 1, alignItems: 'center', }}>
                            <Spinner color='blue' />
                        </View>
                    }
                       <ScrollView 
                        refreshControl={
                            <RefreshControl
                                refreshing={this.state.refreshing}
                                onRefresh={this._onRefresh}
                            />
                        }
                    >
                    {datas.map((data, index) =>
                        <List key={index}>
                            <ListItem onPress={() => { Actions.page2({id:data.id}); }} avatar>
                                <Left>
                                <Thumbnail square source={{ uri: data.avatar }} />
                                </Left>
                                <Body>
                                    <Text>
                                        {data.judul}
                                    </Text>
                                    <Text note style={{ fontSize: 10 }}>{data.kabkota}, {data.provinsi}</Text>
                                </Body>
                                <Right>
                                    <Moment element={Text} style={{ fontSize:9 }} fromNow>{data.created_at}</Moment>
                                </Right>
                            </ListItem>
                        </List>
                    )}
                    </ScrollView>
                </Content>
            </Container>
        );
    }
}