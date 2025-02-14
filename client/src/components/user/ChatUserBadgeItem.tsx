import { CloseIcon } from "@chakra-ui/icons";
import { Badge } from "@chakra-ui/layout";

interface UserBadgeItemProps {
  user: { 
    _id: string; 
    firstName: string;
    lastName: string; 
    email: string;
    image: {
      url: string;
    };
    role: string;
  };
  handleFunction: () => void;  // the function to handle deletion or any other actions
  admin: string; 
}

const UserBadgeItem: React.FC<UserBadgeItemProps> = ({ user, handleFunction, admin }) => {
  
  return (
    <Badge
      px={2}
      py={1}
      borderRadius="lg"
      m={1}
      mb={2}
      variant="solid"
      fontSize={12}
      colorScheme="purple"
      cursor="pointer"
      onClick={handleFunction}
    >
      {`${user.firstName} ${user.lastName}`}
      {admin === user._id && <span> (Admin)</span>}
      <CloseIcon pl={1} />
    </Badge>
  );
};

export default UserBadgeItem;
