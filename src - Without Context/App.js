import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { useState } from "react";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import Header from "./components/Header";
import feedbackData from "./data/feedbackData";
import AboutPage from "./pages/AboutPage";

function App() {
    const [feedback, setFeedback] = useState(feedbackData);

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback]);
    };

    const deleteFeedback = (id) => {
        if (window.confirm("Are you Sure you want to delete")) {
            setFeedback(feedback.filter((item) => item.id !== id));
        }
    };

    return (
        <Router>
            <Header />
            <div className='container'>
                <Routes>
                    <Route
                        exact
                        path='/'
                        element={
                            <>
                                <FeedbackForm handleAdd={addFeedback} />
                                <FeedbackStats feedback={feedback} />
                                <FeedbackList
                                    feedback={feedback}
                                    handleDelete={deleteFeedback}
                                />
                            </>
                        }></Route>
                </Routes>
            </div>
            <Routes>
                <Route path='/about' element={<AboutPage />} />
            </Routes>
        </Router>
    );
}

export default App;
