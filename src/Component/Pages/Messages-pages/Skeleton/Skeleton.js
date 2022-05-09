import 'antd/dist/antd.css';
import { Skeleton } from 'antd';

function Skeletons() {
    return (
        <>
            <Skeleton avatar paragraph={{ rows: 4 }} />
        </>
    )
}
export default Skeletons;