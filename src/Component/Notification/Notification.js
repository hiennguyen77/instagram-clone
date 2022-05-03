
import './Notification.css';
import userFollowAvatar from '../../img/rose.jpg'

function Notification() {


// =========================== Return ==============================    
    return (
        <>
        <div className='container'>
        <div className='sudo_after'></div>
        <div className='notification_wrap'>
            <div className='notification_container'>
                <h4 className='notification_time'>Today</h4>
                <div className =' notification_content'>
                    <img className='notification_user_avatar' src={userFollowAvatar}/>
                    <a href='#' className='notification_user_name'>Rose_black_pink</a>
                    <span>started following you.</span>
                    <span className='time_ago'>3h</span>
                    <button className='notification_btn_follow'>Follow</button>
                </div>
            </div>

        </div>
        </div>
        </>
    )
}


export default Notification;