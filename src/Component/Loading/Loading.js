import './Loading.css'
import 'antd/dist/antd.css';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

function Loading() {
    return(
        <>
        <div className='loading_wrap'>

            <Spin indicator={antIcon} />
        </div>
        </>
    )
}
export default Loading;