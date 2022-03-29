import { useState } from "react";
import PropTypes from "prop-types";
import FeedbackItem from "./FeedbackItem";

function FeedbackList({ feedback, handleDelete }) {
    if (!feedback || feedback.length === 0) {
        return <p> NO Feedback</p>;
    }
    return (
        <div className='feedback-list'>
            {feedback.map((data) => (
                <FeedbackItem
                    key={data.id}
                    data={data}
                    handleDelete={handleDelete}
                />
            ))}
        </div>
    );
}

FeedbackList.propTypes = {
    feedback: PropTypes.array.isRequired,
};

export default FeedbackList;
