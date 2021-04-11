const url = `http://localhost:4000/api/v1`

class ParkModel {
  static show = (parkId) => {
    return fetch(`${url}/parks/${parkId}`).then(res => res.json())
  }
  
  static showAllParks = () => {
    return fetch(`${url}/parks`).then(res => res.json())
  }
  
  static createTag = (parkId, newTag) => {
    return fetch(`${url}/parks/${parkId}/createTag`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        tag: newTag
      })
    })
  }
  
  static createTip = (parkId, newTip) => {
    return fetch(`${url}/parks/${parkId}/createTip`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        tip: newTip
      })
    })
  }
}

export default ParkModel