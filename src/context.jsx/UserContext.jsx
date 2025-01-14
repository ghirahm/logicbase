import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const UserContext = createContext();

export const useUser = () => {
    return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
    const [username, setUsername] = useState("");
    const [courseList, setCourseList] = useState([]);
    const [courseId, setCourseId] = useState(null);
    const [courseDetails, setCourseDetails] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [topicSlug, setTopicSlug] = useState(null);
    const [courseTopic, setCourseTopic] = useState(null);
    const [image, setImage] = useState("");

    useEffect(() => {
        if (courseId) {
            fetchCourseDetails();
        }
    }, [courseId]);

    useEffect(() => {
        if (topicSlug) {
            fetchCourseTopics();
        }
    }, [topicSlug, setTopicSlug]);

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

    const fetchCourseTopics = async() => {
        setIsLoading(true)
        const token = localStorage.getItem("token");
        try {
            const res = await axios.get(
                `${process.env.REACT_APP_API_URL}api/topics/${topicSlug}`,
                {
                    headers: {
                        "content-type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            setCourseTopic(res.data);
        } catch (err) {
            console.error('Error fetching course details:', err);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <UserContext.Provider value={{ username, fetchMain, fetchCourseDetails, courseList, courseDetails, courseId, setCourseId, isLoading, setIsLoading, topicSlug, setTopicSlug, courseTopic, image }}>
            {children}
        </UserContext.Provider>
    );
};
