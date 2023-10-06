import React from "react";
import Button from "./Button";

// functional component
const UserGreeting = (props) => {
  const { name, image, getRole } = props;
  const role = "user";
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <h1 className="text-2xl font-bold">Welcome Back {name}!</h1>
      <img src={image} alt="foto" className="rounded-lg w-48 shadow-xl" />
      {/* <button
        className="rounded-lg bg-sky-400 p-2 text-white"
        onClick={() => getRole(role)}
      >
        Get User Role
      </button> */}
      <Button
        className="rounded-lg bg-sky-400 p-2 text-white"
        onClick={() => getRole(role)}
      >
        Get User Role
      </Button>
    </div>
  );
};

// class component
// class UserGreeting extends React.Component {
//   render() {
//     return (
//       <div className="flex flex-col justify-center items-center gap-4">
//         <h1 className="text-2xl font-bold">Welcome Back {this.props.name}!</h1>
//         <img src={this.props.image} alt="foto" className="rounded-lg w-48 shadow-xl" />
//       </div>
//     );
//   }
// }

// const GuestGreeting = () => {
//   return <h1 className="text-2xl font-bold">Please login</h1>;
// };

function GuestGreeting () {
  return <h1>Please Login</h1>
}

const Greeting = (props) => {
  const isLoggedIn = props.isLoggedIn;

  const user = "Miyamura";
  const imgUrl =
    "https://i.pinimg.com/originals/c8/0b/d9/c80bd9aed9acce3f1e23c830d79886d6.jpg";

  const onClickButton = (role) => alert(`Logged in as ${role}`);

  //   using if-else
  if (isLoggedIn) {
    return <UserGreeting name={user} image={imgUrl} getRole={onClickButton} />;
  }
  return <GuestGreeting />;

  // using ternary
  //   return <>{isLoggedIn ? <UserGreeting /> : <GuestGreeting />}</>;
};

export default Greeting;
