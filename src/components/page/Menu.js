import TemplatePageHero from "./TemplatePageHero";

function Menu() {
  return (
    <div className="online-menu container">
      <TemplatePageHero msg="Menu" />
      <div className="menu-content">
        <div className="item">
          <h2>
            Falafel <span>NEW</span>
          </h2>
          <p>Chickpea, herbs, spices.</p>
        </div>
        <div className="item">
          <h2>Fried Calamari</h2>
          <p>Squid, buttermilk.</p>
        </div>

        <div className="item">
          <h2>Pasta Salad</h2>
          <p>Lettuce, vegetables, mozzarella.</p>
        </div>
        <div className="item">
          <h2>Greek Salad</h2>
          <p>Cucumbers, onion, feta cheese.</p>
        </div>
      </div>
    </div>
  );
}

export default Menu;
