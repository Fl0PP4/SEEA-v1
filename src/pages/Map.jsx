import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.css";

export default function Map() {
  const navigate = useNavigate();
  const [selectedSeller, setSelectedSeller] = useState(null);

  const sellers = [
    {
      id: 1,
      name: "Pescado do Zé",
      position: [-27.5952, -48.5482],
      distance: "1.8 km",
      rating: 4.8,
      reviews: 124,
      products: "Camarão, Peixe, Ostras",
      address: "Rua das Pescadoras, 234 - Lagoa da Conceição",
      image: "https://source.unsplash.com/random/600x300/?fisherman,boat",
    },
    {
      id: 2,
      name: "Mar Azul Pescados",
      position: [-27.5795, -48.5450],
      distance: "3.2 km",
      rating: 4.6,
      reviews: 89,
      products: "Lagostas, Merluza, Polvo",
      address: "Rua dos Açores, 567 - João Paulo",
      image: "https://source.unsplash.com/random/600x300/?seafood,market",
    },
    {
      id: 3,
      name: "Ostras Frescas",
      position: [-27.5801, -48.5450],
      distance: "4.7 km",
      rating: 4.9,
      reviews: 203,
      products: "Ostras, Mexilhões, Vieira",
      address: "Praia da Armação, 89 - Armação",
      image: "https://source.unsplash.com/random/600x300/?oysters",
    },
    {
      id: 4,
      name: "Pesca Artesanal SC",
      position: [-27.5965, -48.5540],
      distance: "2.1 km",
      rating: 4.7,
      reviews: 156,
      products: "Peixes variados, Camarão, Siri",
      address: "Rua João Pio Duarte, 450 - Centro",
      image: "https://source.unsplash.com/random/600x300/?fishing,traditional",
    },
    {
      id: 5,
      name: "Frutos do Mar Premium",
      position: [-27.5900, -48.5580],
      distance: "2.9 km",
      rating: 4.9,
      reviews: 267,
      products: "Lagosta, Camarão Rosa, Polvo",
      address: "Av. Hercílio Luz, 890 - Centro",
      image: "https://source.unsplash.com/random/600x300/?luxury,seafood",
    },
    {
      id: 6,
      name: "Mercado da Pesca",
      position: [-27.5845, -48.5120],
      distance: "5.2 km",
      rating: 4.5,
      reviews: 178,
      products: "Peixes frescos, Camarão, Crustáceos",
      address: "Av. Marechal Deodoro, 123 - Balneário",
      image: "https://source.unsplash.com/random/600x300/?market,fish",
    },
    {
      id: 7,
      name: "Direto do Pescador",
      position: [-27.5710, -48.5360],
      distance: "4.3 km",
      rating: 4.8,
      reviews: 142,
      products: "Camarão, Peixe branco, Sardinha",
      address: "Rua das Flores, 1200 - Saco dos Limões",
      image: "https://source.unsplash.com/random/600x300/?direct,fishing",
    },
    {
      id: 8,
      name: "Distribuidora Oceano",
      position: [-27.5888, -48.5410],
      distance: "3.5 km",
      rating: 4.6,
      reviews: 198,
      products: "Produtos congelados e frescos",
      address: "Rua Lauro Linhares, 2000 - Agronômica",
      image: "https://source.unsplash.com/random/600x300/?distribution,seafood",
    },
    {
      id: 9,
      name: "O Rei do Camarão",
      position: [-27.5820, -48.5450],
      distance: "3.8 km",
      rating: 4.7,
      reviews: 215,
      products: "Camarão rosa, Camarão cinza, Lagosta",
      address: "Av. Beira Mar, 2345 - Canasvieiras",
      image: "https://source.unsplash.com/random/600x300/?shrimp,fresh",
    },
    {
      id: 10,
      name: "Peixaria Santo Antônio",
      position: [-27.5880, -48.5380],
      distance: "2.4 km",
      rating: 4.9,
      reviews: 289,
      products: "Peixe fresco, Atum, Linguado",
      address: "Rua Visconde de Ouro Preto, 567 - Lagoa da Conceição",
      image: "https://source.unsplash.com/random/600x300/?fish,fresh",
    },
    {
      id: 11,
      name: "Aquacultura Sustentável",
      position: [-27.5950, -48.5250],
      distance: "3.6 km",
      rating: 4.8,
      reviews: 134,
      products: "Ostras, Mexilhões, Cultivados",
      address: "Rodovia SC-401, 3000 - Lagoa da Conceição",
      image: "https://source.unsplash.com/random/600x300/?aquaculture",
    },
    {
      id: 12,
      name: "Mariscos Florianópolis",
      position: [-27.5750, -48.5310],
      distance: "4.1 km",
      rating: 4.7,
      reviews: 167,
      products: "Mariscos variados, Polvo, Lula",
      address: "Rua São Jorge, 890 - Saco dos Limões",
      image: "https://source.unsplash.com/random/600x300/?shellfish",
    },
    {
      id: 13,
      name: "Pesca Sustentável Ilha",
      position: [-27.5888, -48.5405],
      distance: "5.8 km",
      rating: 4.6,
      reviews: 145,
      products: "Camarão, Peixe, Crustáceos",
      address: "Rua João Pio Duarte, 3456 - Agronômica",
      image: "https://source.unsplash.com/random/600x300/?sustainable,fishing",
    },
    {
      id: 14,
      name: "Produtos do Mar Atalanta",
      position: [-27.5860, -48.5420],
      distance: "6.2 km",
      rating: 4.5,
      reviews: 98,
      products: "Peixes inteiros, Filés, Desfiados",
      address: "Rua João Pio Duarte, 456 - Agronômica",
      image: "https://source.unsplash.com/random/600x300/?fish,filleted",
    },
  ];

  return (
    <div className="map-page">
      <header className="map-header">
        <div className="map-header-content">
          <button className="back-btn" onClick={() => navigate("/home")}>← Voltar</button>
          <div>
            <h2>Vendedores Próximos</h2>
            <p>14 pontos de venda em Florianópolis, SC</p>
          </div>
        </div>
      </header>

      <div className="map-container">
        <MapContainer
          center={[-27.5952, -48.5482]}
          zoom={13}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; OpenStreetMap contributors'
          />

          {sellers.map((seller) => (
            <Marker
              key={seller.id}
              position={seller.position}
              eventHandlers={{
                click: () => setSelectedSeller(seller),
              }}
            >
              <Popup>
                <strong>{seller.name}</strong>
                <br />
                ⭐ {seller.rating} ({seller.reviews})
                <br />
                📍 {seller.distance}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {selectedSeller && (
        <div className="seller-detail-panel">
          <button className="close-panel" onClick={() => setSelectedSeller(null)}>
            ✕
          </button>

          <img
            src={selectedSeller.image}
            alt={selectedSeller.name}
            className="seller-image"
          />

          <h3>{selectedSeller.name}</h3>
          <p className="rating">
            ⭐ {selectedSeller.rating} • {selectedSeller.reviews} avaliações
          </p>
          <p className="address">
            📍 {selectedSeller.distance} — {selectedSeller.address}
          </p>

          <div className="products">
            <strong>Produtos:</strong> {selectedSeller.products}
          </div>

          <button className="contact-btn">Entrar em contato</button>
          <button className="buy-btn">Ver produtos e comprar</button>
        </div>
      )}
    </div>
  );
}
