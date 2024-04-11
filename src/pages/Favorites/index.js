import Header from "../../components/Header";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import styles from "./Favorites.module.css";

function Favorite() {
    return (
        <>
            <Header />
            <Container>
                <section className={styles.favorites}>
                    <h2>Meus Favoritos</h2>
                    Lista de favoritos
                </section>
            </Container>
            <Footer />
        </>
    );
}

export default Favorite;
