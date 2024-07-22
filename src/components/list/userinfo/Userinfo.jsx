import "./userinfo.css";
import { useUserStore } from "../../../lib/userStore";

const Userinfo = () => {

  const {currentUser} = useUserStore();
    return (
      <div className='userinfo'>
        <div className="user">
            <img src={currentUser.avatar || "./avatar.png"} alt="" />
            <h4>{currentUser.username}</h4>
        </div>
        <div className="icons">
            <img src="./more.png" alt="" />
            <img src="./video.png" alt="" />
            <img src="./edit.png" alt="" />
        </div>
      </div>
    )
}
  
export default Userinfo