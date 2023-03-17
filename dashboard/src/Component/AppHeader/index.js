import "../AppHeader/index.css";

function AppHeader() {
  return (
    <div className="app-header">
      <img
        width={40}
        src="https://img.freepik.com/free-vector/gradient-abstract-shape-logo_1061-168.jpg?w=740&t=st=1678964406~exp=1678965006~hmac=b8be5aa65074d48cc2d10f06c84a9d48dcf5b1d3ed6643e1dfb4ec437aa3948b"
        className="App-logo"
        alt="logo"
      />

      <h1 className="dashboard"> dashboard</h1>
    </div>
  );
}

export default AppHeader;
