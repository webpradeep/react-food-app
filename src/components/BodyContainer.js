import { resObj } from '../utils/resObj'
import ResCard from './ResCard'

const BodyContainer = () => {
    return <div className="body-container">
        <div className="search-container">Search</div>
        <div className="res-container">

            {
                resObj.map((item) => <ResCard key={item.info.id} resname={item} />)
            }


        </div>
    </div>
}
export default BodyContainer