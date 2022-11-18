const PageTitle = (props) => {
  return (
    <div>
      {props.element}
      <h1>{props.children}</h1>
    </div>
  );
}

export default PageTitle;