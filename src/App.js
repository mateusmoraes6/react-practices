import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Container from "./components/Container";
import Card from "./components/Card";
import videos from "./json/videos.json"
import Category from "./components/Category";

const categories = [
  "Geografia",
  "Como fazer e usar",
  "Astronomia e Geografia",
  "Climatologia, Metereologia, Vegetação",
  "Geologia e Hidrografia"
]

function filterCategory(id) {
  return videos.filter( video => video.category === categories[id] )
}

function App() {
  return (
    <>
      <Header />
      <Banner image={"home"} />
      <Container>

        <Category category={categories[0]}>
          { filterCategory(0).map((video) => <Card id={video.id} key={video.id} /> )}
        </Category>
        <Category category={categories[1]}>
          { filterCategory(0).map((video) => <Card id={video.id} key={video.id} /> )}
        </Category>
        <Category category={categories[2]}>
          { filterCategory(0).map((video) => <Card id={video.id} key={video.id} /> )}
        </Category>
        <Category category={categories[3]}>
          { filterCategory(0).map((video) => <Card id={video.id} key={video.id} /> )}
        </Category>
        <Category category={categories[4]}>
          { filterCategory(0).map((video) => <Card id={video.id} key={video.id} /> )}
        </Category>
        
      </Container>
      <Footer />
    </>
  );
}

export default App;
