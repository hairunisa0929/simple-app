function Messages(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      {unreadMessages.length > 0 && (
        <>
          <h2 className="mb-2 font-bold">
            You have {unreadMessages.length} unread messages.
          </h2>
          {unreadMessages.map((message) => (
            <p key={message.id}>{message.subject}</p>
          ))}
        </>
      )}
    </div>
  );
}

export default Messages;
