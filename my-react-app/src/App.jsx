import Student from "./Student/Student";
import Button from "./Button/Button";
import Header from "./Header";
import Footer from "./Footer";
import Food from "./Food";
import Card from "./Card/Card";
import UserGreeting from "./UserGreeting";


function App() {
  return (
    <>
      <Header />
      <UserGreeting isLoggedIn={ true } username="Jupiter" />
      <UserGreeting isLoggedIn={ false } username="Pippin" />
      <Card/>
      <Food/>
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
