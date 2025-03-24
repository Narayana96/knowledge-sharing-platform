
import { Contact, Message } from './types';

export const initialMessages: Message[] = [
  {
    id: 1,
    sender: 'mentor',
    text: "Hi John! How can I help you with React today?",
    time: '10:32 AM',
    status: 'read'
  },
  {
    id: 2,
    sender: 'user',
    text: "I'm having trouble with React hooks. Specifically useEffect dependencies.",
    time: '10:33 AM',
    status: 'read'
  },
  {
    id: 3,
    sender: 'mentor',
    text: "useEffect can be tricky! The dependency array is what causes people the most confusion. Could you share a code example you're struggling with?",
    time: '10:34 AM',
    status: 'read'
  },
  {
    id: 4,
    sender: 'user',
    text: "Sure, here's my component:\n\nfunction UserProfile({ userId }) {\n  const [user, setUser] = useState(null);\n\n  useEffect(() => {\n    fetchUser(userId).then(data => setUser(data));\n  }, []);\n\n  return <div>{user?.name}</div>;\n}",
    time: '10:36 AM',
    status: 'read'
  },
  {
    id: 5,
    sender: 'mentor',
    text: "I see the issue. You're missing userId in your dependency array. When userId changes, your effect won't run again. Try this:\n\nuseEffect(() => {\n  fetchUser(userId).then(data => setUser(data));\n}, [userId]);\n\nThis way, whenever userId changes, the effect will re-run and fetch the new user data.",
    time: '10:38 AM',
    status: 'read'
  }
];

export const contacts: Contact[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    avatar: 'SJ',
    lastMessage: "Hi John! How can I help you with React today?",
    lastMessageTime: '10:38 AM',
    unread: 0,
    online: true,
    typing: true
  },
  {
    id: 2,
    name: 'Michael Chen',
    avatar: 'MC',
    lastMessage: "That Python solution worked perfectly!",
    lastMessageTime: 'Yesterday',
    unread: 2,
    online: false
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    avatar: 'ER',
    lastMessage: "Let's review your UI design tomorrow.",
    lastMessageTime: 'Monday',
    unread: 0,
    online: true
  }
];
