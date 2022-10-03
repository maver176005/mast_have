import Header from "./components/header/header";
import Content from "./components/content/content";
import FilterPanel from "./components/filterPanel/filterPanel";
import Footer from "./components/footer/footer";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return (
        <div>
            <Header/>
            <FilterPanel/>
            <Content/>
            <Footer/>
        </div>

    );
}

export default App;
