import React, {useState} from 'react'
import axios from 'axios'

const Booking = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [puja, setPuja] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    const bookingData = {name, email, puja}
    await axios.post('http://localhost:5000/api/bookings', bookingData)
    alert('Booking submitted successfully!')
  }

  return (
    <div>
      <h1>Book a Puja</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Puja"
          value={puja}
          onChange={e => setPuja(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Booking