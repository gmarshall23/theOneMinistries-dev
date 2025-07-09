import axios from 'axios'
import { useEffect, useState } from 'react'
import {Table, Button} from 'react-bootstrap'

const AdminPrayers = () => {
  const [prayers, setPrayers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const fetchPrayers = () => {
    axios.get('http://localhost:4040/get_prayers')
      .then(response => {
        console.log('Prayers fetched successfully:', response.data.prayers)
        setPrayers(response.data.prayers)
        setLoading(false)
      })
      .catch(err => {
        console.error('Error fetching prayers:', err)
        setError(err)
        setLoading(false)
      })
  }
  useEffect(() => {
    fetchPrayers()
  }, [])
  return (
    <>
     <div><h4 className='text-center'>PRAYERS</h4></div>
     <div className="w-100 p-3">
       {loading && <p>Loading prayers...</p>}
       {error && <p>Error fetching prayers: {error.message}</p>}
       <Table striped bordered hover>
         <thead>
           <tr>
             <th>Name</th>
             <th>Subject</th>
             <th>Prayer</th>
             <th>Created By</th>
             <th>Answered</th>
           </tr>
         </thead>
         <tbody>
           {prayers.map((prayer) => (
             <tr key={prayer.id}>
               <td>{prayer.name}</td>
               <td>{prayer.subject}</td>
               <td>{prayer.prayer}</td>
               <td>{prayer.createdBy}</td>
               <td>{prayer.answered?'Yes':'No'}</td>
             </tr>
           ))}
         </tbody>
       </Table>
       <Button variant="primary" className="w-25 mb-3" onClick={fetchPrayers}>Refresh Prayers</Button>

     </div>

    </>

  )
}

export default AdminPrayers
