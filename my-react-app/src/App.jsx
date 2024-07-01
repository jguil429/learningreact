import Student from "./Student/Student";
import Button from "./Button/Button";
import Header from "./Header";
import List from "./List/List";
import Footer from "./Footer";
import Food from "./Food";
import Card from "./Card/Card";
import UserGreeting from "./Conditional Rendering/UserGreeting";
import ProfilePicture from "./ProfilePicture";
import MyComponent from "./Components/MyComponent";
import MyComponent2 from "./Components/MyComponent2";
import MyComponent3 from "./Components/MyComponent3";
import MyComponent4 from "./Components/MyComponent4";
import MyComponent5 from "./Components/MyComponent5";
import MyComponent6 from "./UseEffect/MyComponent6";
import Counter from "./Counter/Counter";
import ColorPicker from "./ColorPicker/ColorPicker";
import Updater from "./Counter/Updater";
import ToDoList from "./ToDoList/ToDoList";
import UseEffect from "./UseEffect/UseEffect";
import DigitalClock from "./DigitalClock/DigitalClock";


function App() {
const fruits = [{id: 1, name: 'passionfruit', calories: 97},
                {id: 2, name: 'guava', calories: 68},
                {id: 3, name: 'tangerine', calories: 53},
                {id: 4, name: 'plum', calories: 46},
                { id: 5, name: 'kiwi', calories: 61 }];
  
  const veg = [{id: 6, name: 'eggplant', calories: 25},
                {id: 7, name: 'artichoke', calories: 47},
                {id: 8, name: 'edamame', calories: 122},
                {id: 9, name: 'zucchini', calories: 17},
                {id: 10, name: 'sweet potato', calories: 86}];
  return (
    <>
      <Header />
      <DigitalClock/>
      <UserGreeting isLoggedIn={ true } username="Jupiter" />
      <UserGreeting isLoggedIn={ false } username="Pippin" />
      <Card />
      <ProfilePicture/>
      <MyComponent />
      <Food />
      <Counter />
      <Updater/>
      <MyComponent2 />
      <MyComponent3 />
      <MyComponent4 />
      <MyComponent5 />
      <MyComponent6/>
      <ColorPicker/>
      {fruits.length > 0 && <List items={ fruits } category="Fruits" />}
      {veg.length > 0 ? <List items={ veg } category="Veggies" /> : null}
      <Button />
      <Student name="Pippin" age={ 1 } isStudent={ true } />
      <Student name="Merry" age={ 1 } isStudent={ false } />
      <Student name="Eowyn" age={ 2 } isStudent={ true } />
      <Student name="Jupiter" age={ 16 } isStudent={ false } />
      <Student name="Magellan" age={ 14 } isStudent={ true } />
      <Student />
      <ToDoList />
      <UseEffect/>
      <Footer/>
    </>
  );
}

export default App
