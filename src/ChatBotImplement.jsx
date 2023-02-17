import ChatBot from "react-simple-chatbot";
import "./App.css";
import { ThemeProvider } from 'styled-components';
import Redirect from "./Redirect";
import { Component } from "react";
const config={
    headerTitle: "Chat Bot",
    floating: true
};
const steps = [
    {
        id: '1',
        message: 'Hey there!!',
        trigger: '2',
    },
    {
        id: '2',
        message: 'Do you have any query?',
        trigger: '3',
    },
    {
        id: '3',
        options: [
          { value: 3, label: 'IT Support', trigger: '4' },
        ],
    },
    {
        id: '4',
        message:'Send an email to customerhelp@barclays.com',
        trigger: '5'
    },
    {
        id: '5',
        options:[
            {value:'y',label:'Redirect to Contacts',trigger:'6'}
        ],
    },
    {
        id:'6',
        component:<Redirect/>,
        asMessage: true,
        end:true
    }
];
const theme = {
    background: '#f5f8fb',
    headerBgColor: '#42a5f5',
    botBubbleColor: '#42a5f5',
    userBubbleColor: '#fff',

};
function ChatBotImplement(){
    return (
        <div className='Chatbot'>
            <ThemeProvider theme={theme}>
                <ChatBot                    
                    steps={steps}
                    {...config}
                />
            </ThemeProvider>
        </div>
    );
}

export default ChatBotImplement;