import React, { useState } from "react";
import { View, ScrollView } from "react-native"
import SearchBar from "../Components/SearchBar";
import Article from "../Components/Article";
import axios from "axios";

const SearchScreen = () => {

    const [searchText, setSearchText] = useState()
    const [articles, setArticles] = useState([])


    function searchArticle() {
        axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=24ca1645c82a439ea9b572e505c4a68f', {
            params: {
                category: "technology",
                q: searchText
            }
        })
            .then((response) => {
                // handle success
                setArticles(response.data.articles)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }

    return (
        <ScrollView>
            <View >
                <SearchBar searchText={searchText} setSearchText={setSearchText} onSubmit={searchArticle} />
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
                        />
                    )
                })}
            </View>
        </ScrollView>
    )
}

export default SearchScreen


