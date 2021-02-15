import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed'

const App = () => {
    return(
        <ChatEngine 
            height = '100vh'
            projectID = '3f46c0b7-34ad-4bed-8391-473d09bd6a0f'
            userName = 'LeJames'
            userSecret = '123123'
            renderChatFeed= {(chatAppProps) => <ChatFeed {...chatAppProps} />}
        
        />
    );
}

export default App