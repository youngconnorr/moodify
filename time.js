

async function timeConversion() {
  const timeMap = {
    "24": "Midnight Hours",
    "0": "Midnight Hours",
    "1": "Midnight Hours",
    "2": "Midnight Hours",
    "3": "Dawn's Approach",
    "4": "Dawn's Approach",
    "5": "Dawn's Approach",
    "6": "Morning Rise",
    "7": "Morning Rise",
    "8": "Morning Rise",
    "9": "Mid-Morning",
    "10": "Mid-Morning",
    "11": "Mid-Morning",
    "12": "Early Afternoon",
    "13": "Early Afternoon",
    "14": "Early Afternoon",
    "15": "Late Afternoon",
    "16": "Late Afternoon",
    "17": "Late Afternoon",
    "18": "Evening Glow",
    "19": "Evening Glow",
    "20": "Evening Glow",
    "21": "Nightfall",
    "22": "Nightfall",
    "23": "Nightfall",
  }

  let now = new Date();
  let hours = now.getHours();

  const time = hours

  return timeMap[time].toLowerCase()
}

timeConversion()

export default timeConversion;