import React from 'react';
import { ScrollView, Platform, StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Home extends React.Component {
    static navigationOptions = {
        header: null,
    };
    render() {

        return (
            <ScrollView>
                <View style={{ flex: 1, flexDirection: 'column', alignItems: 'stretch' }}>
                    <View style={{ height: 150, backgroundColor: 'powderblue' }}>
                        <TouchableOpacity
                            onPress = {Actions.listberita}
                            style={{ width: "100%", height: "100%", justifyContent: 'center', alignItems: 'center', flex: 1 }}
                        >
                            <Image
                                style={{ height: '100%', width: '100%' }}
                                source={require('./../assets/img/berita.png')}
                            />

                        </TouchableOpacity>
                    </View>

                    <View style={{ height: 150, backgroundColor: 'skyblue' }}>
                        <TouchableOpacity
                            style={{ width: "100%", height: "100%", justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                            <Text>Pelayanan Perizinan</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ height: 150, backgroundColor: 'powderblue' }}>
                        <TouchableOpacity
                            onPress = {Actions.loker}
                            style={{ width: "100%", height: "100%", justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                            <Text>Lowongan Pekerjaan</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ height: 150, backgroundColor: 'steelblue' }} >
                        <TouchableOpacity
                            style={{ width: "100%", height: "100%", justifyContent: 'center', alignItems: 'center', flex: 1 }}
                        >
                            <Image
                                style={{ height: '100%', width: '100%' }}
                                source={require('./../assets/img/pengaduan.png')}
                            />

                        </TouchableOpacity>
                    </View>
                    <View style={{ height: 150, backgroundColor: 'skyblue' }}>
                        <TouchableOpacity
                            style={{ width: "100%", height: "100%", justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                            <Text>Tracking Berkas</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        );
    }
}