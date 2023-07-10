import TemplatePageHero from "./TemplatePageHero";
import TemplatePageContent from "./TemplatePageContent";

function Login() {
  return (
    <div className="login container">
      <TemplatePageHero msg="Login" />
      <TemplatePageContent msg="Login" />
    </div>
  );
}

export default Login;
