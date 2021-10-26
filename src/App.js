
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note"
import notes from "./notes"

// notes.map(noteEntry => {
//     console.log(noteEntry.content);
//     return
// })

const App = () => {
    return (
    <div>
        <Header />
        {notes.map(note => <Note key={note.key} title={note.title} content={note.content}/>)}
        <Footer />
    </div>
    )};

export default App;