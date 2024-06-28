import Student from "./Student/Student";
import Button from "./Button/Button";
import Header from "./Header";
import List from "./List/List";
import Footer from "./Footer";
import Food from "./Food";
import Card from "./Card/Card";
import UserGreeting from "./Conditional Rendering/UserGreeting";
import ProfilePicture from "./ProfilePicture";
import MyComponent from "./MyComponent";
import Counter from "./Counter/Counter";


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
      <UserGreeting isLoggedIn={ true } username="Jupiter" />
      <UserGreeting isLoggedIn={ false } username="Pippin" />
      <Card />
      <ProfilePicture/>
      <MyComponent/>
      <Food />
      <Counter/>
      {fruits.length > 0 && <List items={ fruits } category="Fruits" />}
      {veg.length > 0 ? <List items={ veg } category="Veggies" /> : null}
      <Button />
      <Student name="Pippin" age={ 1 } isStudent={ true } />
      <Student name="Merry" age={ 1 } isStudent={ false } />
      <Student name="Eowyn" age={ 2 } isStudent={ true } />
      <Student name="Jupiter" age={ 16 } isStudent={ false } />
      <Student name="Magellan" age={ 14 } isStudent={ true } />
      <Student />
      <Footer/>
    </>
  );
}

export default App
