import { StyleSheet, View, ScrollView, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import Article from '../Components/Article'
import axios from 'axios'

const HomeScreen = () => {

    const [articles, setArticles] = useState([])
    const [animating, setAnimating] = useState(true)

    const getNews = () => {
        axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=24ca1645c82a439ea9b572e505c4a68f', {
            params: {
                category: "technology"
            }
        })
            .then((response) => {
                // handle success
                setArticles(response.data.articles)
                setAnimating(false)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    useEffect(() => {
        getNews()
    }, [])


    return (
        <ScrollView>
            {animating ?
                <View style={styles.spinner}><ActivityIndicator size={40} color="red" animating={animating} /></View> :
                <View style={styles.container}>
                    {articles.map((item, index) => {
                        return (
                            <Article
                                key={index}
                                urlToImage={item.urlToImage}
                                title={item.title}
                                description={item.description}
                                author={item.author}
                                publishedAt={item.publishedAt}
                                sourceName={item.source.name}
                                url={item.url}
                            />
                        )
                    })}
                </View>
            }
        </ScrollView>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        // marginTop: 30,
    },
    spinner: {
        marginTop: 10,
    }
})
