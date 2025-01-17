import React, { createContext, useState, useEffect, useContext } from "react";

//AXIOS
import axios from "axios";

//CONTEXT
const UserContext = createContext();

export const useUser = () => {
    return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
    /*STATE*/
    //General Content
    const [username, setUsername] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    //Main Content
    const [courseList, setCourseList] = useState([]);
    const [courseId, setCourseId] = useState(null);

    //Class Intro Content
    const [courseDetails, setCourseDetails] = useState(null);
    const [image, setImage] = useState("");

    //Class Content
    const [topicSlug, setTopicSlug] = useState(null);
    const [courseTopic, setCourseTopic] = useState(null);
    const [processedTopics, setProcessedTopics] = useState(new Set());

    /*RENDER PAGE*/
    //Render Username
    useEffect(() => {
        fetchMain();
    }, [courseTopic])

    //Render Class Intro
    useEffect(() => {
        if (courseId) {
            fetchCourseDetails();
        }
    }, [courseId]);

    //Render Class Content
    useEffect(() => {
        if (topicSlug) {
            fetchCourseTopics();
        }
    }, [topicSlug, setTopicSlug]);

    /*FUNCTION*/
    //Fetch Main Content
    const fetchMain = async () => {
        setIsLoading(true);
        const token = localStorage.getItem("token");

        await axios
            .get(`${process.env.REACT_APP_API_URL}api/users/me`, {
                headers: {
                    "content-type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((res) => {
                setUsername(res.data.username);
            })
            .catch((err) => {
                if (err) {
                    console.log(err);
                }
            })
            .finally(() => {
            })

        await axios
            .get(`${process.env.REACT_APP_API_URL}api/course-participants`, {
                headers: {
                    "content-type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((res) => {
                const sortedCourses = res.data.sort((a, b) => a.course.id - b.course.id);
                setCourseList(sortedCourses);
            })
            .catch((err) => {
                if (err) {
                    console.log(err);
                }
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    //Fetch Course Intro
    const fetchCourseDetails = async () => {
        setIsLoading(true)
        const token = localStorage.getItem("token");
        try {
            const res = await axios.get(
                `${process.env.REACT_APP_API_URL}api/courses/${courseId}?populate=*`,
                {
                    headers: {
                        "content-type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            setCourseDetails(res.data.data);
            setImage(res.data.data.attributes.thumbnail.data.attributes.url);
        } catch (err) {
            console.error('Error fetching course details:', err);
        } finally {
            setIsLoading(false);
        }
    };

    //Fetch Course Content
    const fetchCourseTopics = async () => {
        setIsLoading(true)
        const token = localStorage.getItem("token");
        try {
            const res = await axios.get(
                `${process.env.REACT_APP_API_URL}api/topics/${topicSlug}`,
                {
                    headers: {
                        "content-type": "application/json",
                        Authorization: `Bearer ${token}`
                    },
                }
            );
            setCourseTopic(res.data);
        } catch (err) {
            console.error('Error fetching course details:', err);
        } finally {
            setIsLoading(false);
        }
    };

    //Function for Progress Non Quiz
    const handleProgressNonQuiz = (topicId) => {
        if (!processedTopics.has(topicId)) {
            postProgressNonQuiz(topicId);
        }
    }

    //Post Progress Non Quiz Type Content
    const postProgressNonQuiz = async (topicId) => {

        setIsLoading(true);
        const token = localStorage.getItem("token");

        const form = new FormData();
        form.append('topic', topicId);


        const value = Object.fromEntries(form.entries());
        console.log(value)
        await axios
            .post(`${process.env.REACT_APP_API_URL}api/topic-activities`, value,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                })
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.error('Error post progress:', error);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }


    //Function for Progress Quiz
    const handleProgressQuiz = (topicId) => {
        if (!processedTopics.has(topicId)) {
            postProgressQuiz(topicId);
        }
    }

    //Post Progress Quiz Type Content
    const postProgressQuiz = async (topicId, answers) => {

        setIsLoading(true);
        const token = localStorage.getItem("token");

        const answersObject = Object.entries(answers).map(([questionIndex, selectedOption]) => ({
            question: parseInt(questionIndex, 10),
            term: selectedOption,
        }));

        const payload = {
            topic: topicId,
            answers: answersObject,
        };

        await axios
            .post(`${process.env.REACT_APP_API_URL}api/topic-activities`, payload,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                })
            .then((response) => {
                fetchCourseTopics();
            })
            .catch((error) => {
                console.error('Error post progress:', error);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    return (
        <UserContext.Provider value={{ username, fetchMain, fetchCourseDetails, courseList, courseDetails, courseId, setCourseId, isLoading, setIsLoading, topicSlug, setTopicSlug, courseTopic, image, postProgressNonQuiz, postProgressQuiz, processedTopics, setProcessedTopics, handleProgressNonQuiz, handleProgressQuiz }}>
            {children}
        </UserContext.Provider>
    );
};
