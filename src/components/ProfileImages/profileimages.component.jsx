import { useEffect } from "react" 
import {useNavigate} from "react-router-dom"
import "./profileimages.styles.css";

const ProfileImages = ({open}) => {
    const check = useNavigate();

    useEffect(() => {
        if (!open) {
        // check.push("/")
        }
    }, [open, check]
    );

  return (
    <div>
        <h3 className="close">Tap to close</h3>
        <h2>These are images</h2>
        <h2>These are images</h2>
        <h2>These are images</h2>
    </div>
  )
}

export default ProfileImages