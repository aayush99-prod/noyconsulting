"use client";

const clients = [
  {
    logo: <img src="/clients/bmo.svg" alt="BMO" className="w-24 h-24 object-contain bg-transparent" />, label: "BMO"
  },
  {
    logo: <img src="/clients/cibc.svg" alt="CIBC" className="w-24 h-24 object-contain bg-transparent" />, label: "CIBC"
  },
  {
    logo: <img src="/clients/td.svg" alt="TD" className="w-24 h-24 object-contain bg-transparent" />, label: "TD"
  },
  {
    logo: <img src="/clients/bell.svg" alt="Bell" className="w-24 h-24 object-contain bg-transparent" />, label: "Bell"
  },
];

export default function OurClientsCarousel() {
  // Duplicate the clients array for seamless looping
  const allClients = [...clients, ...clients];
  return (
    <section className="w-full py-16 bg-transparent">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-10 bg-gradient-to-r from-blue-400 via-purple-400 to-white bg-clip-text text-transparent drop-shadow-[0_2px_24px_rgba(96,165,250,0.3)] text-left">
          Our Clients
        </h2>
        <div className="relative overflow-visible">
          <div className="flex w-max animate-clients-carousel overflow-visible">
            {allClients.map((client, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-56 h-56 bg-gradient-to-br from-[#181c2f] to-[#181a2b] border-2 border-blue-500/30 rounded-2xl shadow-xl flex flex-col items-center justify-center transition-transform duration-200 hover:scale-105 group relative mx-4"
                style={{ boxShadow: "0 0 0 2px #60a5fa33, 0 4px 32px 0 #60a5fa22" }}
              >
                <div
                  className="flex items-center justify-center w-32 h-32 mb-4 transition-all duration-200 group-hover:shadow-[0_0_32px_8px_rgba(96,165,250,0.4)] bg-white rounded-2xl"
                >
                  {client.logo}
                </div>
                <div className="text-sm text-blue-200 font-medium opacity-80 mt-1">
                  {client.label}
                </div>
              </div>
            ))}
          </div>
          <style jsx>{`
            @keyframes clients-carousel {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-clients-carousel {
              animation: clients-carousel 32s linear infinite;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
} 