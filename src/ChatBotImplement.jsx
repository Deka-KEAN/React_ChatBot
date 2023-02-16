import ChatBot from "react-simple-chatbot";
import "./App.css";
const steps = [
    {
        id: '0',
        message: 'Hey there! Ask me if you face some problems',
        end: true
    }
];

function ChatBotImplement(){
    return (
        <div className='Chatbot'>
            <ChatBot
            steps={steps}
            />
        </div>
    );
}

export default ChatBotImplement;