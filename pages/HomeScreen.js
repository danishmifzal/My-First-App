import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Post from '../component/Post.js';
import { useEffect, useState } from 'react';

const HomeScreen = ({ navigation }) => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch('https://workshop.elyasasmad.com/posts')
            .then((response) => response.json())
            .then((data) => {
                setPosts(data)
            })//to prove data tu wujud
    }, [])

    return (
        <View style={styles.container}>

            <FlatList
                data={posts}
                renderItem={({ item }) => <Post
                    likes={item.data.likes}
                    comment={item.data.comments}
                    repost={item.data.reposts}
                    name={item.name}
                    username={item.username}
                    photoURL={item.photoURL}
                    createdAt={item.createdAt}
                    goToLogin={() => navigation.navigate('Login')}
                >
                    {item.content}
                </Post>}
                keyExtractor={item => item.id}
            />

            <StatusBar style="auto" />
        </View>
    );
}

export default HomeScreen

const styles = StyleSheet.create({})