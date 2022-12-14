function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png"></img>
          <div>
            <h3>REACT SNEAKERS</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="d-flex justify-between align-center">
            <li className="mr-30">
              <img width={20} height={20} src="/img/cart.svg"></img>
              <span>1205 руб.</span>
            </li>
            <li>
              <img className="mr-30" width={20} height={20} src="img/favorite.svg"></img>
            </li>
            <li>
              <img width={20} height={20} src="img/user.svg"></img>
            </li>
        </ul>
      </header>
      <div className="content  p-40">
        <h1 className="mb-40">Все кроссовки</h1>
        <div className="d-flex">
        <div className="card">
          <img width={133} height={112} src="/img/sneakers/1.jpg"></img>
          <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>ЦЕНА:</span>
              <b>12 999 руб.</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/img/plus.svg" alt="Plus"></img>
            </button>
          </div>
        </div>
        <div className="card">
          <img width={133} height={112} src="/img/sneakers/2.jpg"></img>
          <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>ЦЕНА:</span>
              <b>12 999 руб.</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/img/plus.svg" alt="Plus"></img>
            </button>
          </div>
        </div>
        <div className="card">
          <img width={133} height={112} src="/img/sneakers/3.jpg"></img>
          <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>ЦЕНА:</span>
              <b>12 999 руб.</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/img/plus.svg" alt="Plus"></img>
            </button>
          </div>
        </div>
        <div className="card">
          <img width={133} height={112} src="/img/sneakers/4.jpg"></img>
          <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>ЦЕНА:</span>
              <b>12 999 руб.</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/img/plus.svg" alt="Plus"></img>
            </button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;