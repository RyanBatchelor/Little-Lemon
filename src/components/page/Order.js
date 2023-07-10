import TemplatePageHero from "./TemplatePageHero";
import TemplatePageContent from "./TemplatePageContent";

function Order() {
  return (
    <div className="order container">
      <TemplatePageHero msg="Order Online" />
      <TemplatePageContent msg="Order Online" />
    </div>
  );
}

export default Order;
