import "./button.css";

function ScrollToTopButton() {

    const handeClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <button onClick={handeClick}>
            &#9650;
        </button>
    );
}

export default ScrollToTopButton
