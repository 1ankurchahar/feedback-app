import { useContext } from "react";
import PropTypes from "prop-types";
import Card from "./shared/Card";
import { FaTimes, FaEdit } from "react-icons/fa";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackItems({ data }) {
    const { deleteFeedback, editFeedback } = useContext(FeedbackContext);
    return (
        <>
            <Card>
                <div className='num-display'>{data.rating}</div>
                <button
                    onClick={() => deleteFeedback(data.id)}
                    className='close'>
                    <FaTimes color='purple' />
                </button>
                <button onClick={() => editFeedback(data)} className='edit'>
                    <FaEdit color='purple' />
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
