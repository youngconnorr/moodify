import React from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios'

const fetchUserLikedSongs = async () => {
  try {
      const user = JSON.parse(await AsyncStorage.getItem('user'))
      // no !== null
      try {
          console.log("this is my user",user)
          const response = await axios.get('https://api.spotify.com/v1/me/tracks?offset=0&limit=11', {
              headers: {
                  Authorization: `Bearer ${user.accessToken}`
              }
          })

          let data = response.data
          //console.log("Total liked songs: " + data.total)

          let songs = []

          for(let i = 0; i < data.items.length; i++) {
              let song = data.items[i].track
              songs.push({
                id: song.id,
                img: song.album.images[1].url,
                name: song.name,
                artist: song.artists[0].name,
                url: song.external_urls.spotify,
                uri: song.uri
              })
          }
          //console.log(songs) // log all pulled songs

          let next = null
          let counter = 1
          while(next !== null) {
              try {
                  const response = await axios.get(next, {
                      headers: {
                          Authorization: `Bearer ${user.accessToken}`
                      }
                  })

                  let data = response.data
                  for(let i = 0; i < data.items.length; i++) {
                      let song = data.items[i].track
                      songs.push({
                        id: song.id,
                        img: song.album.images[1].url,
                        name: song.name,
                        artist: song.artists[0].name,
                        url: song.external_urls.spotify,
                        uri: song.uri
                      })
                  }
                  console.log("Iteration", ++counter) // count iterations for testing
                  next = data.next
              } catch(err) {

              }
          }

          // save liked songs into storage
          try {
              await AsyncStorage.setItem(
                  'songs',
                  JSON.stringify(songs)
              );
              console.log("Songs saved into storage!")
          } catch (error) {
              // Error saving data
              console.error('Error saving data', error)
          }

      } catch(err) {
          console.error('request error', err)
      }
  } catch(err) {
      console.error('storage error', err)
  }

}

export default fetchUserLikedSongs;