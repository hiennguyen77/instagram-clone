import './Message.css';
import '../../../Grid/grid.css';
import Header from '../../Header/Header'
import {BsChevronDown} from 'react-icons/bs'
import {FaRegEdit} from 'react-icons/fa'
import Skeleton from './Skeleton/Skeleton'
import {FiSend} from 'react-icons/fi'




function Message() {
    return (
        <>
        
          <div className='message_wrap grid'>
            <Header />
                <div className='message_container row'>
                    <div className='col l-5 message_left'>
                        <div className='message_header'>
                            <h4>nguyen_chi_hien</h4>
                            <button className='message_btn'>
                                <i className= 'message_btn_icon'>
                                    <BsChevronDown/>
                                </i>
                            </button>
                            <i className='message_header_icon'>
                                <FaRegEdit/>
                            </i>
                        </div>
                        <div className='message_list'>
                            <Skeleton/>
                            <Skeleton/>
                        </div>
                    </div>




                    <div className='col l-7 message_right'>
                        <i className='message_right_icon'>
                            <FiSend/>
                        </i>
                        <h2>Your Messages</h2>
                        <p>Send private photos and messages to a friend or group.</p>
                        <button className='send_message'>Send Message</button>  

                    </div>
                </div>
          </div>
        
        
        </>
    )
}
export default Message;