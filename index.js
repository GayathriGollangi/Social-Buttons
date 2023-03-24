const Button = (props) => {
  //  Write your code here.
  const { text, className } = props;

  return (
      <div className = "buttons-container">
  <button className={'button ${className}'>{text}</button>
  </div>
  );
};

const element = (
  //  Write your code here.
  <div className="social-buttons-container">
    <h1 className="container-heading">Social Buttons</h1>
    <div className="buttons-container">
      <Button text="Like" className="like" />
      <Button text="Comment" className="comment" />
      <Button text="Share" className="share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
