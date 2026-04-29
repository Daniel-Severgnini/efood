import { useParams } from 'react-router-dom'
import { ProfileScene } from '../components/ProfileScene'

function ProfilePage() {
  const { restaurantId } = useParams()

  return <ProfileScene restaurantId={restaurantId} />
}

export default ProfilePage
