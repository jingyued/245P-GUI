import "./Main.css";

function Main(props, children) {
  return (
    <>
      <div className="main" dangerouslySetInnerHTML={{__html: props.content}}></div>
    </>
  );
}

export default Main;