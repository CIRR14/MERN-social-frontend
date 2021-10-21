import "./message.css";

export default function Message({ own }) {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img className="messageImg" src="/assets/post/8.jpeg" alt="" />
        <p className="messageText">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
          quis quidem sapiente porro ea similique, assumenda vel vero,
          perferendis quaerat quos tempora aliquam dolor enim rerum officia
          numquam, ad necessitatibus.
        </p>
      </div>
      <div className="messageBottom"> 1 hour ago</div>
    </div>
  );
}
