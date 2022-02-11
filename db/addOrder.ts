import axios from 'axios'

export default async (
  driverId: number,
  dirPick: string,
  dirDel: string,
  dateStarted: string
) => {
  console.log(driverId)
  console.log(dirPick)
  console.log(dirDel)
  console.log(dateStarted)

  try {
    const res = await axios.post(
      'http://ec2-18-234-208-228.compute-1.amazonaws.com:8000/orders',
      {
        driverId,
        dirPick,
        dirDel,
        dateStarted,
      }
    )
    const orderId = res.data.data.id
    return orderId
  } catch (e: any) {
    throw new Error('Could not create order.')
  }
}
