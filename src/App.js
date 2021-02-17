import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm';

const App = () => {

    if(!localStorage.getItem('username')) return <LoginForm />
    return(
        <ChatEngine 
            height = '100vh'
            projectID = '3f46c0b7-34ad-4bed-8391-473d09bd6a0f'
            userName = {localStorage.getItem('username')}
            userSecret = {localStorage.getItem('password')}
            renderChatFeed= {(chatAppProps) => <ChatFeed {...chatAppProps} />}
        
        />
    );
}

export default App