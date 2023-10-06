import Greeting from "./components/Greeting";
import Messages from "./components/Messages";
import UserDetail from "./components/UserDetail";

const messages = [
  {
    id: 1,
    subject: "Hello World",
  },
  {
    id: 2,
    subject: "Good bye world",
  },
  {
    id: 3,
    subject: "What's up, world?",
  },
];

// const messages = [];

// function App() {
//   const name = "Miyamura";
//   const isLoggedIn = false;
//   // if else
//   // if (isLoggedIn) {
//   //   return <h1 className="text-2xl font-bold">Hello {name}!</h1>;
//   // }

//   // return <h1 className="text-2xl font-bold">Please login</h1>;

//   // return (
//   //   <>
//   //     {/* ternary */}
//   //     {isLoggedIn ? (
//   //       <h1 className="text-2xl font-bold">Hello {name}!</h1>
//   //     ) : (
//   //       <h1 className="text-2xl font-bold">Please login</h1>
//   //     )}

//   //     {/* logical operator */}
//   //     {messages.length > 0 && (
//   //       <>
//   //         <h2 className="mb-2 font-bold">
//   //           You have {messages.length} unread messages.
//   //         </h2>

//   //         {messages.map((message) => (
//   //           <p>{message.subject}</p>
//   //         ))}
//   //       </>
//   //     )}
//   //   </>
//   // );

//   // split component
//   return (
//     <div className="h-screen flex flex-col justify-center items-center gap-4">
//       <Greeting isLoggedIn={true} />
//       <Messages unreadMessages={messages} />
//     </div>
//   );
// }

function App() {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-4">
       <Greeting isLoggedIn={true} />
       {/* <Messages unreadMessages={messages} /> */}

    </div>
  );
}

export default App;
