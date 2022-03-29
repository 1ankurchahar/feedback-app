import PropTypes from "prop-types";
import Card from "./shared/Card";
import { FaTimes } from "react-icons/fa";

function FeedbackItems({ data, handleDelete }) {
    return (
        <>
            <Card>
                <div className='num-display'>{data.rating}</div>
                <button onClick={() => handleDelete(data.id)} className='close'>
                    <FaTimes color='white' />
                </button>
                <div className='text-display'>{data.text} </div>
            </Card>
        </>
    );
}

FeedbackItems.propType = {
    data: PropTypes.object.isRequired,
};
export default FeedbackItems;
