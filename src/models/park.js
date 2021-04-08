const url = `http://localhost:4000/api/v1`

class ParkModel {
  static show = (parkId) => {
    return fetch(`${url}/parks/${parkId}`).then(res => res.json())
  }
}

export default ParkModel