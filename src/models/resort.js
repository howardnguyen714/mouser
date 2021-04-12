const url = `http://localhost:4000/api/v1`

class ResortModel {
  static show = (resortId) => {
    return fetch(`${url}/resorts/${resortId}`).then(res => res.json())
  }
  
  static showAllResorts = () => {
    return fetch(`${url}/resorts`).then(res => res.json())
  }
  
  static createTag = (resortId, newTag) => {
    return fetch(`${url}/resorts/${resortId}/createTag`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        tag: newTag
      })
    })
  }
  
  static createTip = (resortId, newTip) => {
    return fetch(`${url}/resorts/${resortId}/createTip`, {
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

export default ResortModel