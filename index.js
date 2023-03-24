const Button = (props) => {
  //  Write your code here.
  const { name, className } = props;
  return <button className={'button ${className}'>{name}</button>;
};

const element = (
  //  Write your code here.
  <div className="social-buttons-container">
    <h1 className="container-heading">Social Buttons</h1>
    <div className="buttons-container">
      <Button name="Like" className="like" />
      <Button name="Comment" className="comment" />
      <Button name="Share" className="share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
