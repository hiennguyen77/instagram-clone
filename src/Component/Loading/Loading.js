import 'antd/dist/antd.css';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

function Loading() {
    return(
        <>
            <Spin indicator={antIcon} />
        </>
    )
}
export default Loading;