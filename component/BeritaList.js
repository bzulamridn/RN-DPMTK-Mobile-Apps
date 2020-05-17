import React from 'react';
import { ScrollView, FlatList, View, Image, Text, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Spinner } from 'native-base';
import Moment from 'react-moment';
import { Actions } from 'react-native-router-flux';

export default class BeritaList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            posts: [],
            page: 1,
            loading: false,
        }
    }

    static navigationOptions = {
        title : 'Berita'
    };


    componentDidMount() {
        this.fetchData();
    }



    fetchData = async () => {
        axios.get('https://pmnaker.singkawangkota.go.id/wp-json/wp/v2/posts?categories=19&page=' + this.state.page)
            .then(res => {
                this.setState({ posts: [...this.state.posts, ...res.data], isLoading: false, loading:false })
            })
            .catch(error => {
                if(error.response === '400'){
                    alert("sudah Akhir")
                }
            })
            
    };

    handleEnd = () => {
        this.setState({page: this.state.page + 1, loading:true },() => this.fetchData());
        //alert(this.state.page)
    };


    render() {
        const { posts, isLoading } = this.state;
        return (
            <View style={{ backgroundColor:'white' }}>
                {isLoading ?
                    <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'column', height: '100%' }}>
                        {/* <Spinner color="blue" /> */}
                        <Image
                        style = {{ height:120, width:70 }} 
                        source={ require('./../assets/img/loading.gif') } 
                        />
                    </View>
                    :
                    <FlatList
                        data={posts}
                        ListFooterComponent={() =>
                            this.state.loading
                              ? null
                              : <Spinner color='blue' />}
                        renderItem={({ item }) =>
                            <ListItem avatar onPress={() => { Actions.detailberita({ id: item.id }); }}>
                                <Left>
                                    <Thumbnail square source={{ uri: item.better_featured_image.media_details.sizes.thumbnail.source_url }} />
                                </Left>
                                <Body>
                                    <Text >{item.title.rendered}</Text>
                                    <Text> <Moment element={Text} style={{ fontSize: 9, color: 'blue' }} fromNow>{item.date}</Moment></Text>
                                </Body>
                            </ListItem>
                        }
                        keyExtractor={post => post.id}
                        onEndReached={() => this.handleEnd() }
                        onEndReachedThreshold={0}
                    />
                }
            </View>
        );
    }

}