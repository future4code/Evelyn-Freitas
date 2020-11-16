import HomePage from './components/HomePage/HomePage';
import CreateTripPage from './components/CreateTripPage/CreateTripPage';
import LoginPage from './components/LoginPage/LoginPage';
import ListTripsPage from './components/ListTripsPage/ListTripsPage';
import ApplicationFormPage from './components/ApplicationFormPage/ApplicationFormPage';
import TripDetailsPage from './components/TripDetailsPage/TripDetailsPage';

function App() {
  return (
    <div className="App">
      <HomePage />
      <CreateTripPage />
      <LoginPage />
      <ListTripsPage />
      <ApplicationFormPage />
      <TripDetailsPage />
    </div>
  );
}

export default App;
