import "./conversation.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Conversation({ convo, currentUser }) {
  const [user, setUser] = useState(null);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const friendId = convo.members.find((m) => m !== currentUser._id);
    const getUser = async () => {
      try {
        const res = await axios.get("/users?userId=" + friendId);
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [currentUser, convo]);

  return (
    <div className="conversation">
      <img className="conversationImg" src="" alt="" />
      <span className="conversationName">user</span>
    </div>
  );
}
