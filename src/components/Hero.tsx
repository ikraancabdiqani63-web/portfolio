import profile from "../assets/profile.jpg";

function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-slate-900">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Side */}
        <div className="px-6 md:px-12 lg:px-20">
          <p className="text-base sm:text-lg text-gray-400">Hello, I'm</p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            Ikraan Abdiqani
          </h1>

          <h2 className="text-3xl text-cyan-400 font-semibold mt-4">
            Frontend React Developer
          </h2>

          <p className="text-gray-400 mt-6 leading-8">
            I build modern and responsive websites using React, TypeScript and
            Tailwind CSS.
          </p>

          <div className="flex gap-4 mt-8">
            <a href="#projects">
              <button className="bg-cyan-400 text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-300">
                View Projects
              </button>
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div>
          <img
            src={profile}
            className="w-56 sm:w-64 md:w-80 lg:w-96 h-auto rounded-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
