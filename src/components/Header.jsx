import logo from '../logo.webp';

function Header() {
  return (
    <header className="App-header">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <ul>
        <li className="nav-link">
          <a href="#">Shop</a>
          <div className="menu-dropdown">
            <ul>
              <li className="submenu">
                <p>Shop By</p>
                <ul>
                  <li>
                    <a href="/collections/accessories">Accessories</a>
                  </li>
                  <li>
                    <a href="/collections/bottoms">Bottoms</a>
                  </li>
                  <li>
                    <a href="/collections/dresses">Dresses</a>
                  </li>
                  <li>
                    <a href="/collections/tops">Tops</a>
                  </li>
                  <li>
                    <a href="/collections/pre-order">Pre-Order</a>
                  </li>
                  <li>
                    <a href="/collections/under-50">Under $50</a>
                  </li>
                  <li>
                    <a href="/collections/under-100">Under $100</a>
                  </li>
                  <li>
                    <a href="/collections/sold-out-with-suppliers">
                      Sold out with suppliers
                    </a>
                  </li>
                  <li>
                    <a href="/collections/sale">Sale</a>
                  </li>
                  <li>
                    <a href="/products/gifts">Gift Vouchers</a>
                  </li>
                  <li>
                    <a href="/collections/all">View All</a>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <p>Brands</p>
                <ul>
                  <li>
                    <a href="/collections/betty-basics">Betty Basics</a>
                  </li>
                  <li>
                    <a href="/collections/commoners-alike">Commoners Alike</a>
                  </li>
                  <li>
                    <a href="/collections/coop">COOP</a>
                  </li>
                  <li>
                    <a href="/collections/cooper-st">Cooper St</a>
                  </li>
                  <li>
                    <a href="/collections/fate">FATE</a>
                  </li>
                  <li>
                    <a href="/collections/george-edi">George & Edi</a>
                  </li>
                  <li>
                    <a href="/collections/ketz-ke">Ketz-ke</a>
                  </li>
                  <li>
                    <a href="/collections/ltb-denim">LTB Denim</a>
                  </li>
                  <li>
                    <a href="/collections/my-boyfriends-back">
                      My Boyfriends Back
                    </a>
                  </li>
                  <li>
                    <a href="/collections/nyne">NYNE</a>
                  </li>
                  <li>
                    <a href="/collections/once-was">Once Was</a>
                  </li>
                  <li>
                    <a href="/collections/quay-eyewear">QUAY Eyewear</a>
                  </li>
                  <li>
                    <a href="/collections/ricohet">Ricoheet</a>
                  </li>
                  <li>
                    <a href="/collections/rosefiled">ROSEFIELD</a>
                  </li>
                  <li>
                    <a href="/collections/tuesday">Tuesday</a>
                  </li>
                  <li>
                    <a href="/collections/leo-be">LEO + BE</a>
                  </li>
                  <li>
                    <a href="/collections/blak">Blak</a>
                  </li>
                  <li>
                    <a href="/collections/staple-cloth">Staple + Cloth</a>
                  </li>
                  <li>
                    <a href="/collections/lindi-kingi">Lindi Kingi Design</a>
                  </li>
                  <li>
                    <a href="/collections/koko-body">Koko Body</a>
                  </li>
                  <li>
                    <a href="/collections/marle">Marle</a>
                  </li>
                  <li>
                    <a href="/collections/flash-jewellery">Flash Jewellery</a>
                  </li>
                  <li>
                    <a href="/collections/remain">Remain</a>
                  </li>
                  <li>
                    <a href="/collections/karen-walker-fragrances">
                      Karen Walker Fragrances
                    </a>
                  </li>
                  <li>
                    <a href="/collections/sophie">SOPHIE</a>
                  </li>
                  <li>
                    <a href="/collections/saben">Saben</a>
                  </li>
                  <li>
                    <a href="/collections/foxwood">Foxwood</a>
                  </li>
                  <li>
                    <a href="/collections/twenty-seven-names">
                      Twenty Seven Names
                    </a>
                  </li>
                  <li>
                    <a href="/collections/stolen-girlfriends-club">
                      Stolen Girlfriends Club
                    </a>
                  </li>
                  <li>
                    <a href="/collections/assembly-label">Assembly Label</a>
                  </li>
                  <li>
                    <a href="/collections/rejuvenated-collagen">
                      Rejuvenated Collagen
                    </a>
                  </li>
                  <li>
                    <a href="/collections/cartel-willow">Cartel & Willow</a>
                  </li>
                  <li>
                    <a href="/collections/ziggy-denim">Ziggy Denim</a>
                  </li>
                  <li>
                    <a href="/collections/clique-fitness">Clique Fitness</a>
                  </li>
                  <li>
                    <a href="/collections/prene-bags">Prene Bags</a>
                  </li>
                  <li>
                    <a href="/collections/rue-stiic">Rue Stiic</a>
                  </li>
                  <li>
                    <a href="/collections/good-co-scarves">Good & Co Scarves</a>
                  </li>
                  <li>
                    <a href="/collections/carly-paiker-jewellery">
                      Carly Paiker Jewellery
                    </a>
                  </li>
                  <li>
                    <a href="/collections/age-eyewear">AGE Eyewear</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </li>
        <li className="nav-link">
          <a href="/collections/my-boyfriends-back">My Boyfriends Back</a>
        </li>
        <li className="nav-link">
          <a href="/collections/staff-edit">Staff Edit</a>
        </li>
        <li className="nav-link">
          <a href="/pages/contact">Contact</a>
        </li>
        <li className="nav-link">
          <a href="/cart">Cart</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
