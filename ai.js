import OpenAI from "openai";
import timeConversion from "./time.js";
import findWeather from "./weather.js";

import { EXPO_PUBLIC_OPEN_AI_API_KEY } from '@env'

const OPEN_API_KEY = EXPO_PUBLIC_OPEN_AI_API_KEY;
// const OPEN_API_KEY = "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"

const openai = new OpenAI({apiKey: OPEN_API_KEY});

async function songToInformation(song) {
  // need song name
  // const songName = song.name
  const songName = song.name

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
        { role: "developer", content: "You are a helpful assistant" },
        {
            role: "user",
            content: `Given the song ${songName}, tell me the following: 3 moods you would associate this song with, a weather you would listen to the song to, a time of day you would associate (), an emotion you would associate with this song (between ecstatic, good, okay, sad, depressed). Seperate each of these answers with a comma and just give the results, still give me 3 moods`,
        },
    ],
  }).catch(e => {
    console.error(e)
  })
  const result = completion.choices[0].message.content;

  const result_array = result.split(',');

  console.log(songName, result)


  return result_array;
}

async function pictureToMood(base) {
  console.log("start of picturetoMood")

  console.log(image_url);

  const base64pic = "data:image/jpg;base64," + base

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
        { role: "developer", content: "You are a helpful assistant" },
        {
            role: "user",
            content: [
              { type: "text", text: "Give me a comma seperated list of the top 5 moods/themes you would associate with this image, just the mood/themes." },
              {
                type: "image_url",
                image_url: base64pic,
              },
            ]
        },
    ],
  });

  const themes = completion.choices[0].message.content;

  console.log("pictureToMood", themes)


  return themes;
}


async function similarityRank(songMoods, songWeather, themes, weather) {
  // compare moods and weathers
  // between 0 to 100

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
        { role: "developer", content: "You are a helpful assistant" },
        {
            role: "user",
            content: `Give me a similarity rating from 0.00 to 1.00 (up to 2 decimal places) on how similar "${songMoods}" and "${themes}" are, and how similar "${songWeather}" and "${weather}" are. Give a overall score between 0.00 to 1.00, but dont just add the totals, take into consideration both fields and give a overall rating. Also just give me the number`
        },
    ],
  });
  const score = completion.choices[0].message.content;

  console.log("similarityRank", parseFloat(score))
  // console.log(typeof(score))

  return parseFloat(score);
}

async function rank(image_url, lat, lon, emotion, songs) {
  console.log("start of rank");
  console.log(image_url)
  const scores = [] //array of song objects
  const timeType = ["midnight hours", "dawn's approach", "morning rise","mid-morning","early afternoon","late afternoon","evening glow","nightfall"]
  
  // const themes = await pictureToMood(image_url).catch((e) => console.error("Error: ", e));;
  const weather = await findWeather(lat, lon)

    const themes = ["sad", "happy", "idk"]
  // const weather = "cloudy"

  const time = await timeConversion();
  const userEmotion = emotion;  

  console.log("Weather:", weather)
    
  console.log("done with user", themes, weather, time, userEmotion)

  for (const song of songs) {
    console.log("in loop")
    let totalScore = 0
      const result = await songToInformation(song)
      
      const songMoods = result.map(string => string.toLowerCase());
      const songWeather = result[3].toLowerCase()
      const songTime = result[4].toLowerCase()
      const songEmotion = result[5].toLowerCase()

      console.log(song.name, songMoods, songWeather, songTime, songEmotion)

      if (songTime === time) {
        totalScore += 1;
      } else if (timeType.indexOf(songTime) === 0 && (timeType[7] === time || timeType[1] === time)) {
        totalScore += 0.5;
      } else if (timeType.indexOf(songTime) + 1 === time || timeType.indexOf(songTime) - 1 === time) {
        totalScore += 0.5;
      }
  
      if (songEmotion === userEmotion) {
        totalScore += 1
      }
  
      const similarityScore = await similarityRank(songMoods, songWeather, themes, weather)

      totalScore += similarityScore

      scores.push([totalScore, song])

  };

  console.log("done with loop")

  scores.sort((a, b) => b[0] - a[0]);

  topTen = []

  for (let i = 0; i < 10; i++) {
    topTen.push(scores[i][1])
  }

  console.log(topTen)

  return topTen
  
  
}

export default rank;








