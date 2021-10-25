import "./message.css";
import { format } from "timeago.js";

export default function Message({ msg, own, proPic }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img className="messageImg" src={PF + proPic} alt="" />
        <p className="messageText">{msg.text}</p>
      </div>
      <div className="messageBottom"> {format(msg.createdAt)}</div>
    </div>
  );
}
