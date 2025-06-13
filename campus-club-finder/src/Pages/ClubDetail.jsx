/* eslint-disable react-refresh/only-export-components */
import { useParams } from 'react-router-dom'
import { clubs } from '../data/clubs'

function ClubDetail() {
  const { clubId } = useParams()
  const club = clubs.find(c => c.id === clubId)

  const joined = JSON.parse(localStorage.getItem('joinedClubs') || '[]')
  const isJoined = joined.includes(clubId)

  const joinClub = () => {
    if (!isJoined) {
      localStorage.setItem('joinedClubs', JSON.stringify([...joined, clubId]))
      window.location.reload()
    }
  }

  return (
    <div>
      <h1>{club.name}</h1>
      <p>{club.description}</p>
      <ul>
        {club.events.map(e => <li key={e.name}>{e.name} - {e.date}</li>)}
      </ul>
      {!isJoined ? (
        <button onClick={joinClub} className="btn">Join Club</button>
      ) : (
        <p className="text-green-600 font-semibold">You have joined this club!</p>
      )}
    </div>
  )
}
