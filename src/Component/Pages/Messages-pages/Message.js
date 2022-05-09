import './Message.css';
import '../../../Grid/grid.css';
import Header from '../../Header/Header'



function Message() {
    return (
        <>
        
          <div className='message_wrap grid'>
            <Header />
                <div className='message_container row'>
                    <div className='col l-5 message_left'>aaaaaaaaaaaaaaaaaaa
                        <div className='message_header'>
                            <button className='message_btn'>
                                <i className= 'message_btn_icon'>icon</i>
                            </button>
                            <i className='message_header_icon'>icon</i>
                        </div>
                        <div className='message_list'>list</div>
                    </div>
                    <div className='col l-7 message_right'>ddddddđ
                        <i className='message_right_icon'>icon</i>
                        <p></p>
                        <p></p>
                        <button className='send_message'>Send Message</button>  

                    </div>
                </div>
          </div>
        
        
        </>
    )
}
export default Message;