import ChatBot from "react-simple-chatbot";
import "./App.css";
import { ThemeProvider } from 'styled-components';
import Redirect from "./Redirect";
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
        trigger:'3',
    },
    {
        id:'3',
        options: [
            { value: 2, label: 'Yes', trigger: '4' },
            { value: 30, label: 'No', trigger: '5' },
          ],
    },
    {
        id:'4',
        message: 'Here !',
        trigger:'6'
    },
    {
        id:'5',
        message: 'Ok have a nice day',
        trigger:'9'
    },
    {
        id:'9',
        options:[{value:23,label:'For further query click here',trigger:'6'}]
    },
    {
        id: '6',
        options: [
          { value: 3, label: 'IT Support', trigger: '7' },
          {value :234 , label: 'Trouble with login',trigger:'7'}
        ],
    },
    {
        id: '7',
        message:'Send an email to customerhelp@barclays.com we will revert back in 2 business days.',
        trigger: '8'
    },
    {
        id: '8',
        options:[
            {value:4,label:'Redirect to Contacts',trigger:'10'}
        ],
    },
    {
        id:'10',
        component:(<Redirect message='Click here for Contacts' url='https://www.barclays.in/home/contact-us/'/>),
        asMessage: true,
        trigger:'9'
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