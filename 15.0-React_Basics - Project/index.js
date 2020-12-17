const array = ["Ali", "Veli", "Kazım", "Hasan"];
const arrHTML = ["Tebrikler", "React Harika"];

function App() {
  return (
    <div>
      <h2>Hello From Function</h2>
      <HelloMessage message={arrHTML} />
    </div>
  );
}

class HelloMessage extends React.Component {
  render() {
    return (
      <div>
        <h2>Hello from Component</h2>
        <h2>{this.props.message[0]}</h2>
        <h3>{this.props.message[1]}</h3>
        <HelloNames names={array} />
      </div>
    );
  }
}

class HelloNames extends React.Component {
  render() {
    return (
      <NoteList>
        {this.props.names.map((name, index) => (
          <p key={index}>{name}</p>
        ))}
      </NoteList>
    );
  }
}

class NoteList extends React.Component {
  render() {
    return (
      <div>
        <ol>
          {React.Children.map(this.props.children, (el) => (
            <li
              className={
                el.key === "0"
                  ? "first"
                  : el.key === "1"
                  ? "second"
                  : el.key === "2"
                  ? "third"
                  : "forth"
              }
            >
              {el}
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <App />
  </div>,

  document.getElementById("example")
);
