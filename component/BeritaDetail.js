import React from 'react';
import { ScrollView, Platform, StyleSheet, View, Image, Text, TouchableOpacity, Dimensions } from 'react-native';
import axios from 'axios';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Spinner } from 'native-base';
import Moment from 'react-moment';
import HTML from 'react-native-render-html';

export default class BeritaDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            posts: [],
        }
    }

    static navigationOptions = {
        header: null,
    };

    componentDidMount() {
        axios.get('https://pmnaker.singkawangkota.go.id/wp-json/wp/v2/posts/' + this.props.id)
            .then(res => {
                this.setState({ posts: res.data, isLoading: false });
            })
    }

    render() {
        const { posts, isLoading } = this.state;
        return (
            <View>
                {isLoading ?
                    <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'column', height: '100%' }}>
                        {/* <Spinner color="blue" /> */}
                        <Image
                            style={{ height: 120, width: 70 }}
                            source={require('./../assets/img/loading.gif')}
                        />
                    </View>
                    :
                    <ScrollView >
                        <View style={{ backgroundColor: 'white'}}>
                            <Image
                                style={{ width: '100%', height: 250 }}
                                source={{ uri: 'https://pmnaker.singkawangkota.go.id/wp-content/uploads/' + posts.better_featured_image.media_details.file }}
                            />
                        </View>

                        <View style={{ padding: 10, backgroundColor: 'white', marginTop: 8 }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 5 }}>{posts.title.rendered}</Text>
                            <Text><Moment element={Text} style={{ fontSize: 9, color: 'blue' }}>{posts.date}</Moment></Text>
                            <HTML html={posts.content.rendered} imagesMaxWidth={Dimensions.get('window').width} />
                        </View>

                    </ScrollView>
                }
            </View>
        );
    }



}