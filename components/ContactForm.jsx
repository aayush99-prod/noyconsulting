"use client";

export default function ContactForm() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-[#0a0a0a] py-2 px-2">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-left bg-gradient-to-r from-blue-500 via-purple-400 to-white bg-clip-text text-transparent">
        Let's connect!
      </h1>
      <form className="w-full max-w-lg bg-gradient-to-br from-[#181c2f] to-[#181a2b] rounded-2xl shadow-2xl p-8 flex flex-col gap-6 mx-auto">
        <div>
          <label htmlFor="name" className="block text-base font-medium mb-1 text-gray-200">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="w-full rounded-lg bg-[#10131a] border border-[#23263a] text-gray-100 px-4 py-3 text-base focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all duration-200"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-base font-medium mb-1 text-gray-200">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full rounded-lg bg-[#10131a] border border-[#23263a] text-gray-100 px-4 py-3 text-base focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all duration-200"
          />
        </div>
        <div>
          <label htmlFor="number" className="block text-base font-medium mb-1 text-gray-200">Number</label>
          <input
            id="number"
            name="number"
            type="tel"
            required
            autoComplete="tel"
            className="w-full rounded-lg bg-[#10131a] border border-[#23263a] text-gray-100 px-4 py-3 text-base focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all duration-200"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-base font-medium mb-1 text-gray-200">Message</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="w-full rounded-lg bg-[#10131a] border border-[#23263a] text-gray-100 px-4 py-3 text-base focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all duration-200 resize-none"
          />
        </div>
        <button
          type="submit"
          className="mt-2 w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold text-lg shadow-md hover:shadow-[0_0_16px_2px_rgba(31,81,255,0.3)] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
        >
          Submit
        </button>
      </form>
    </div>
  );
} 