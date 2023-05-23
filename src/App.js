import './App.css';
import Category from './components/Category';
import Company from './components/Company';
import Header from './components/Header';
import Home from './components/Home';
import Jobs from './components/Jobs';
import CompanyConnection from './components/CompanyConnection';
import Apk from './components/Apk';
import Footer from './components/Footer';

function App() {
    return (
        <>
            <Header />
            <div className='h-full w-[100vw - 20px] relative'>
                <Home />
                <Category />
                <Jobs />
                <Company />
                <CompanyConnection />
                <Apk />
                <Footer />
            </div>
        </>
    );
}

export default App;
