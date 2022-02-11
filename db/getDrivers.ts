import axios from 'axios'

export default async () => {
  try {
    const res = await axios.get(
      'http://ec2-18-234-208-228.compute-1.amazonaws.com:8000/drivers'
    )
    const drivers = res.data.data
    return drivers
  } catch (e) {
    return []
  }
}
