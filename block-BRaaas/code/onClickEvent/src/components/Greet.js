function Greet(props) {
  let arr = ['Arya', 'John', 'Bran'];
  function handleClick(name) {
    return alert(`Hello ${name}`);
  }
  return (
    <>
      <section className="section">
        <h2>Greet</h2>
        <div>
          {arr.map((elm, i) => {
            return (
              <button
                className="btn"
                key={i} onClick={() => handleClick(elm)}>
                {elm}
              </button>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Greet;