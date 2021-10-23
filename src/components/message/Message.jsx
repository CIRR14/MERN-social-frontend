import "./message.css";
import { format } from "timeago.js";

export default function Message({ msg, own }) {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img className="messageImg" src="/assets/post/8.jpeg" alt="" />
        <p className="messageText">{msg.text}</p>
      </div>
      <div className="messageBottom"> {format(msg.createdAt)}</div>
    </div>
  );
}
