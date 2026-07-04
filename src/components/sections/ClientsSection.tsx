const CLIENTS = [
  { name: "Artotel Group", logo: "/images/clients/artotel-group.png" },
  { name: "Solia Hotels", logo: "/images/clients/solia-hotels.png" },
  { name: "Mataran", logo: "/images/clients/mataran.png" },
  { name: "Fosia Hotels", logo: "/images/clients/fosia-hotels.png" },
  { name: "Diamond Hotels Group", logo: "/images/clients/diamond-hotels-group.png" },
  { name: "Dafam", logo: "/images/clients/dafam.png" },
  { name: "Zuri Hotel Management", logo: "/images/clients/zuri-hotel-management.png" },
  { name: "ATAP Hospitality", logo: "/images/clients/atap-hospitality.png" },
  { name: "Horison Hotels Group", logo: "/images/clients/horison-hotels-group.png" },
  { name: "Marriott", logo: "/images/clients/marriott.png" },
  { name: "Hotel Tentrem Yogyakarta", logo: "/images/clients/hotel-tentrem-yogyakarta.png" },
  { name: "Novotel Hotels & Resorts", logo: "/images/clients/novotel-hotels-resorts.png" },
  { name: "ibis Hotels", logo: "/images/clients/ibis-hotels.png" },
  { name: "Partner Hotel", logo: "/images/clients/partner-hotel-14.png" },
  { name: "The Royal Surakarta Heritage", logo: "/images/clients/the-royal-surakarta-heritage.png" },
  { name: "Jambuluwuk Hotels & Resorts", logo: "/images/clients/jambuluwuk-hotels-resorts.png" },
  { name: "Wyndham Hotels & Resorts", logo: "/images/clients/wyndham-hotels-resorts.png" },
  { name: "The Rich Jogja Hotel", logo: "/images/clients/the-rich-jogja-hotel.png" },
  { name: "Rumah Sakit Indriati Solo Baru", logo: "/images/clients/rs-indriati-solo-baru.png" },
  { name: "UNS Tower Ki Hadjar Dewantara", logo: "/images/clients/uns-tower.png" },
  { name: "Azana Hospitality", logo: "/images/clients/azana-hospitality.png" },
  { name: "The 101 Hotels & Resorts", logo: "/images/clients/the-101-hotels-resorts.png" },
  { name: "Meliã Purosani Yogyakarta", logo: "/images/clients/melia-purosani-yogyakarta.png" },
];

export default function ClientsSection() {
  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
        {CLIENTS.map((client) => (
          <div
            key={client.name}
            className="flex items-center justify-center border border-line bg-paper p-5 h-24"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={client.logo}
              alt={client.name}
              className="max-h-12 max-w-full object-contain"
            />
          </div>
        ))}
      </div>
      <p className="mt-10 text-center text-xs uppercase tracking-widest2 text-ink-soft">
        And many more...
      </p>
    </div>
  );
}
