import './TableProfile.css';
import { Link } from "react-router-dom";


function TableProfile() {
    return(
        <>
            <div className='table_wrap'>
                <div className='table_container'>
                    <div className='table_item'>
                        <i></i>
                        <a className='profile_link' href="/profile">
                            <p>Profile</p>
                        </a>
                    </div>

                    <div className='table_item'>
                        <i></i>
                        <a className='profile_link' href="//">
                            <p>Saves</p>
                        </a>
                    </div>

                    <div className='table_item'>
                        <i></i>
                        <a className='profile_link' href="//">
                            <p>Setting</p>
                        </a>
                    </div>

                    <div className='table_item'>
                        <i></i>
                        <a className='profile_link' href="//">
                            <p>Switch Accounts</p>
                        </a>
                    </div>

                    <div className='table_item_logout'>
                        
                        <Link className='profile_link' to="/">
                            <p>Log out</p>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default TableProfile;