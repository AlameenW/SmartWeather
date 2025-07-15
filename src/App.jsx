import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <header>
          <h1>CookBook</h1>
        </header>
        <nav>
          <div>DashBoard</div>
          <div>MenuItems</div>
          <div>Meal Plans</div>
        </nav>
        <section className="summary">
          <p>Summary Items</p>
        </section>
        <main>
          Dispayed data
        </main>
      </div>
    </>
  );
}

export default App;
