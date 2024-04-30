import React, { useEffect, useState } from "react";
import {
  ref,
  get,
  getDatabase,
  update,
  onValue,
  push,
} from "firebase/database";
import Section from "./Section";
import Heading from "./Heading";
import { check } from "../assets";
import { Gradient } from "./design/Services";
import Generating from "./Generating";
import { useNavigate, useParams } from "react-router-dom";
import { onAuthStateChanged, getAuth } from "firebase/auth"; // Import your authentication library
import Input from "./Input";
import Button from "./Button";
import ButtonGradient from "../assets/svg/ButtonGradient";

const FullEventInfo = () => {
  const [event, setEvent] = useState(null);
  const [liked, setLiked] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [commentInput, setCommentInput] = useState("");
  const { user } = getAuth(); // Assuming your auth library provides user object
  const db = getDatabase();
  const { eventId } = useParams();
  const navigate = useNavigate();
  // const comments = [
  //   { id: 1, text: "This is the first comment." },
  //   { id: 2, text: "This is the second comment." },
  //   { id: 3, text: "This is the third comment." },
  //   // Add more comments as needed
  // ];
  // const commentsToShow = comments.slice(0, 3);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const eventRef = ref(db, `events/${eventId}`);
        const snapshot = await get(eventRef);
        if (snapshot.exists()) {
          setEvent(snapshot.val());
          // Check if the user has already liked the event
          if (snapshot.val().likes && user) {
            console.log(snapshot.val().likes[user.uid]);
            setLiked(snapshot.val().likes[user.uid]);
          }
        } else {
          console.log("Event not found");
        }
      } catch (error) {
        console.error("Error fetching event:", error);
      }
    };

    fetchEvent();
    const eventRef = ref(db, `events/${eventId}`);
    const eventListener = onValue(eventRef, (snapshot) => {
      if (snapshot.exists()) {
        setEvent(snapshot.val());
        // Check if the user has already liked the event
        if (snapshot.val().likes && user) {
          console.log(snapshot.val().likes[user.uid]);
          setLiked(snapshot.val().likes[user.uid]);
        }
      } else {
        console.log("Event not found");
      }
    });

    return () => {
      // Clean up the listener when component unmounts
      eventListener();
    };
  }, [eventId, db, user]);
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user); // Set current user in state
    });

    return () => {
      unsubscribe(); // Unsubscribe from the listener when component unmounts
    };
  }, []);

  const toggleLike = async () => {
    try {
      if (currentUser) {
        const likesRef = ref(db, `events/${eventId}/likes`);
        let updatedLikes;
        if (liked) {
          // User already liked, remove the like
          console.log("hereeeee");

          updatedLikes = { ...event.likes, hello: "sfsffs" };
          console.log(updatedLikes);
          delete updatedLikes[currentUser.uid];
          console.log(updatedLikes);
        } else {
          console.log("he 22");
          // User didn't like, add the like
          updatedLikes = { ...event.likes, [currentUser.uid]: true };
        }
        await update(likesRef, updatedLikes)
          .then(() => {
            console.log("Likes updated successfully");
          })
          .catch((error) => {
            console.error("Error updating likes:", error);
          });
        setLiked(!liked);
      } else {
        navigate("/login");
      }
    } catch (error) {
      console.error("Error updating likes:", error);
    }
  };
  const handleCommentSubmit = async () => {
    try {
      if (currentUser && commentInput.trim() !== "") {
        const commentsRef = ref(db, `events/${eventId}/comments`);
        await push(commentsRef, {
          userId: currentUser.uid,
          text: commentInput.trim(),
        });
        setCommentInput(""); // Clear input after submission
      } else {
        navigate("/login");
      }
    } catch (error) {
      console.error("Error submitting comment:", error);
    }
  };

  if (!event) {
    return <div>Loading...</div>;
  }

  const displayLikes = event.likes ? Object.keys(event.likes).length : 0;
  const startTime = event.startTime
    ? new Date(event.startTime).toLocaleString()
    : "Not specified";
  const endTime = event.endTime
    ? new Date(event.endTime).toLocaleString()
    : "Not specified";

  return (
    <Section id="how-to-use">
      <div className="container">
        <div className="relative ">
          <img
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-10"
            alt="Event Background"
            src={event.imageURL}
          />
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              {/* Image */}
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4">{event.eventName}</h4>
              <p className="body-2 mb-[3rem] text-n-3">{event.description}</p>
              <ul className="body-2">
                <li
                  className="flex items-start py-4 border-t border-n-6 cursor-pointer"
                  onClick={() => toggleLike()}
                >
                  <img
                    width={24}
                    height={24}
                    src={check}
                    alt="Check icon"
                    style={{ cursor: "pointer" }}
                  />
                  <p className="ml-4">Likes: {displayLikes}</p>
                </li>
                <li className="flex items-start py-4 border-t border-n-6">
                  <img width={24} height={24} src={check} alt="Check icon" />
                  <p className="ml-4">Contact : {event.contactInfo}</p>
                </li>
                <li className="flex items-start py-4 border-t border-n-6">
                  <img width={24} height={24} src={check} alt="Check icon" />
                  <p className="ml-4">Start Time: {startTime}</p>
                </li>
                <li className="flex items-start py-4 border-t border-n-6">
                  <img width={24} height={24} src={check} alt="Check icon" />
                  <p className="ml-4">End Time: {endTime}</p>
                </li>
              </ul>
            </div>

            {/* <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2" /> */}
          </div>

          {/* <Gradient /> */}
        </div>
      </div>
      <div className="flex items-center flex-row">
        <input
          type="text"
          id="comment"
          name="comment"
          className="w-full bg-n-8 border border-n-11 rounded-md py-2 px-3 ml-12 mr-20 focus:border-black"
          placeholder="Write your Comment"
          value={commentInput}
          onChange={(e) => setCommentInput(e.target.value)}
        />
        <Button className="mr-20" onClick={handleCommentSubmit}>
          Comment
        </Button>
      </div>
      <div className="flex flex-col items-center mt-8">
        {event.comments && Object.values(event.comments).length > 0 ? (
          Object.values(event.comments).map((comment, index) => (
            <Generating
              key={index}
              className="relative left-4 right-4 bottom-4 border-n-1/10 border lg:bottom-8 lg:mt-3"
              comment={comment.text}
            />
          ))
        ) : (
          <p className="text-gray-500">
            No comments yet, be the first one to comment.
          </p>
        )}
      </div>
      <ButtonGradient />
    </Section>
  );
};
//lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2
export default FullEventInfo;
