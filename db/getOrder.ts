import axios from 'axios'

export default async (id: string) => {
  try {
    const res = await axios.get(
      'http://ec2-18-234-208-228.compute-1.amazonaws.com:8000/orders',
      {
        params: {
          id: id,
        },
      }
    )
    const order = res.data.data
    if (!order) throw new Error('No order found.')
    return order
  } catch (e) {
    throw new Error('No order found.')
  }
}
