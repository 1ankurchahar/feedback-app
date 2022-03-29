import { useContext } from "react";
import FeedbackItem from "./FeedbackItem";
import FeedbackContext from "../context/FeedbackContext";
import Spinner from "./shared/Spinner";

function FeedbackList({}) {
    const { feedback, isLoading } = useContext(FeedbackContext);

    if (!isLoading && (!feedback || feedback.length === 0)) {
        return <p> NO Feedback</p>;
    }
    return isLoading ? (
        <Spinner />
    ) : (
        <div className='feedback-list'>
            {feedback.map((data) => (
                <FeedbackItem key={data.id} data={data} />
            ))}
        </div>
    );
}

export default FeedbackList;
