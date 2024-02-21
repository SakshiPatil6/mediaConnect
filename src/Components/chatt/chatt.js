import './chatt.css';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './chatFeed';
import Log from '../Login/login';
function ChattPage() {

    // if (!localStorage.getItem('username')) return <Log/>;

    return (
        <>
           
            <ChatEngine
        height="100vh"
        projectID="2a0da344-c5c3-48a2-9b21-09d300464796"
        userName="Neurology"
                userSecret="123123"
                renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      /> 
               


        </>
    );
}
export default ChattPage;