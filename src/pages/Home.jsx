import "./home.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const offers = [
    {
      id: 1,
      name: "Camarão Rosa Grande",
      price: "89,90",
      unit: "kg",
      image: "https://source.unsplash.com/random/600x400/?shrimp,fresh,seafood",
      distance: "2,3 km"
    },
    {
      id: 2,
      name: "Filé de Merluza Fresco",
      price: "45,90",
      unit: "kg",
      image: "https://source.unsplash.com/random/600x400/?fish,fillet,fresh",
      distance: "4,1 km"
    },
    {
      id: 3,
      name: "Ostras Frescas",
      price: "68,00",
      unit: "dúzia",
      image: "https://source.unsplash.com/random/600x400/?oysters,seafood",
      distance: "1,8 km"
    }
  ];

  const categories = [
    { name: "Camarões", image: "https://source.unsplash.com/random/300x300/?shrimp" },
    { name: "Peixes", image: "https://source.unsplash.com/random/300x300/?fresh-fish" },
    { name: "Ostras", image: "https://source.unsplash.com/random/300x300/?oysters" },
    { name: "Crustáceos", image: "https://source.unsplash.com/random/300x300/?crab,seafood" },
    { name: "Moluscos", image: "https://source.unsplash.com/random/300x300/?mussels" },
    { name: "Congelados", image: "https://source.unsplash.com/random/300x300/?frozen-seafood" }
  ];

  return (
    <div className="home-container">
      <header className="home-header">
        <div className="home-content">
          <div className="home-logo">
            <span className="fish-icon">🌊</span>
            <h1>SEEA</h1>
          </div>
          <div className="location">
            <span className="location-icon">📍</span>
            <span>Florianópolis, SC</span>
          </div>
          <div className="header-icons">
            <button className="icon-btn">
              <i className="fas fa-bell"></i>
            </button>
            <button className="icon-btn cart-btn">
              <i className="fas fa-shopping-cart"></i>
              <span className="cart-count">3</span>
            </button>
            <button className="profile-btn">👤</button>
          </div>
        </div>
      </header>

      <div className="search-container">
        <input
          type="text"
          placeholder="Buscar produtos, produtores ou categorias..."
          className="search-input"
        />
        <button className="search-btn">Buscar</button>
      </div>

      {/* BANNER PRINCIPAL */}
      <div className="banner">
        <div className="banner-content">
          <div className="cert-badges">
            <span className="badge">MSC</span>
            <span className="badge">ASC</span>
            <span className="badge">CSI</span>
          </div>
          <h2>Frutos do mar frescos e sustentáveis</h2>
          <p>Direto dos produtores • Rastreabilidade garantida • Entrega rápida</p>
          <button className="banner-btn">Explorar ofertas do dia</button>
        </div>
      </div>

      {/* CERTIFICAÇÕES */}
      <section className="section">
        <h3 className="section-title">
          <i className="fas fa-shield-alt"></i> Compra com Confiança
        </h3>
        <div className="cert-grid">
          <div className="cert-card">
            <span className="emoji">🐟</span>
            <div>
              <strong>MSC</strong>
              <p>Pesca Sustentável</p>
            </div>
          </div>
          <div className="cert-card">
            <span className="emoji">🦐</span>
            <div>
              <strong>ASC</strong>
              <p>Aquicultura Responsável</p>
            </div>
          </div>
          <div className="cert-card">
            <span className="emoji">🔬</span>
            <div>
              <strong>CSI</strong>
              <p>Qualidade Certificada</p>
            </div>
          </div>
        </div>
      </section>

      {/* MINI MAPA */}
      <section className="section">
        <div className="map-header">
          <h3>Vendedores próximos</h3>
          <button className="map-link" onClick={() => navigate("/map")}>Ver mapa completo →</button>
        </div>
        <div className="mini-map">
          <div className="map-placeholder">
            <i className="fas fa-map fa-5x text-gray-300"></i>
            <p>14 vendedores em um raio de 12km</p>
            <div className="map-pins">
              <span className="pin green"></span>
              <span className="pin blue"></span>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIAS */}
      <section className="section">
        <h3 className="section-title">Categorias</h3>
        <div className="categories-grid">
          {categories.map((cat, i) => (
            <div key={i} className="category-card">
              <img src={cat.image} alt={cat.name} className="category-image" />
              <p>{cat.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OFERTAS DO DIA */}
      <section className="section">
        <h3 className="section-title">Ofertas do Dia</h3>
        <div className="offers-grid">
          {offers.map((item) => (
            <div key={item.id} className="offer-card">
              <img src={item.image} alt={item.name} className="offer-image" />
              <div className="offer-info">
                <h4>{item.name}</h4>
                <p className="distance">{item.distance} • Entrega hoje</p>
                <div className="price">
                  R$ <strong>{item.price}</strong> <small>/{item.unit}</small>
                </div>
                <button className="add-btn">Adicionar ao carrinho</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}