export const isSameSenderMargin = (messages, m, i, userId) => {
  if (
    i < messages.length - 1 &&
    messages[i + 1].sender._id === m.sender._id &&
    messages[i].sender._id !== userId
  )
    return 33;
  else if (
    (i < messages.length - 1 &&
      messages[i + 1].sender._id !== m.sender._id &&
      messages[i].sender._id !== userId) ||
    (i === messages.length - 1 && messages[i].sender._id !== userId)
  )
    return 0;
  else return "auto";
};

//to show image of partner along with message, it will return true or false
export const isSameSender = (messages, m, i, userId) => {
  return (
    i < messages.length - 1 &&
    (messages[i + 1].sender._id !== m.sender._id ||
      messages[i + 1].sender._id === undefined) &&
    messages[i].sender._id !== userId
  );
};

// checking if its the last message the partner send to us in a row, coz only show image for last messge, it will return true or false
export const isLastMessage = (messages, i, userId) => {
  
  return (
    i === messages.length - 1 &&
    messages[messages.length - 1].sender._id !== userId &&
    messages[messages.length - 1].sender._id
  );
  // return true;
};

export const isSameUser = (messages, m, i) => {
  
  return i > 0 && messages[i - 1].sender._id === m.sender._id;
};

// it leave the user which is logged in and return the not logged in, return partner, only for peer chat
export const getSender = (loggedUser, users) => {
  
  return users[0]?._id === loggedUser?._id
    ? `${users[1].firstName} ${users[1].lastName}`
    : `${users[0].firstName} ${users[0].lastName}`;
};

export const getSenderFull = (loggedUser, users) => {
  return users[0]._id === loggedUser._id ? users[1] : users[0];
};
