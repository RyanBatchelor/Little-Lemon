function TemplatePageHero(props) {
  return (
    <div className="template-page-hero">
      <div className="display-title">
        <h1 className="title"> {props.msg}</h1>
      </div>
    </div>
  );
}

export default TemplatePageHero;
