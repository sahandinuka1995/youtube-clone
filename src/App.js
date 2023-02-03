import {BrowserRouter, Routes, Route} from "react-router-dom";
import {app} from "./const/const";
import {ChannelDetail, VideoDetail, SearchFeed, Navbar, Feed} from './components/index';
import {Row} from "reactstrap";

const App = () => (
    <BrowserRouter>
        <Row style={app.box}>
            <Navbar/>
            <Routes>
                <Route exact path='/' element={<Feed/>}/>
                <Route path='/video/:id' element={<VideoDetail/>}/>
                <Route path='/channel/:id' element={<ChannelDetail/>}/>
                <Route path='/search/:searchTerm' element={<SearchFeed/>}/>
            </Routes>
        </Row>
    </BrowserRouter>
);

export default App;
