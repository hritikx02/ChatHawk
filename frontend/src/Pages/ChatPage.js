import SideDrawer from "../componentsCreated/miscellaneous/SideDrawer";
import { Box } from "@chakra-ui/react";
import { ChatState } from "../Context/ChatProvider";
import MyChats from "../componentsCreated/MyChats";
import ChatBox from "../componentsCreated/ChatBox";

const ChatPage = () => {
  const { user } = ChatState();

    return (
      <div style={{ width: "100%" }}>
        {user && <SideDrawer />}
        <Box>
          {user && <MyChats />}
          {user && <ChatBox />}
        </Box>
      </div>
    );
}

export default ChatPage
