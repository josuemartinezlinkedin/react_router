import { useEffect } from "react" 
import {useNavigate} from "react-router-dom"

const ProfileImages = ({login}) => {
    const check = useNavigate();

    useEffect(() => {
        if (!login) {
        check.push("/")
        }
    }, [login, check]
    );

  return (
    <div>
        <h2>These are images</h2>
        <h2>These are images</h2>
        <h2>These are images</h2>
    </div>
  )
}

export default ProfileImages