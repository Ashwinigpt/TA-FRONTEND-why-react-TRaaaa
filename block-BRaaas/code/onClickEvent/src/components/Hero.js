function Hero(props) {
    function handleClick() {
        return alert('Hello React Event');
    }
    return (
        <>
            <section className="section">
                <button
                    className="btn"
                    onClick={() => handleClick()}>
                    Click me
                </button>
            </section>
        </>
    );
}

export default Hero;