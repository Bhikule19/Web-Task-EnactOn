const SubCTA = () => {
  return (
    <div className="w-full h-screen lg:h-[500px] mt-[400px] lg:mt-20 relative">
      <div className="absolute inset-0 bg-cover bg-center sub-bg"></div>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="absolute inset-0 flex flex-col justify-center pt-16 px-8">
        <h2 className="text-4xl md:text-5xl mb-2 text-white">
          SIGN UP SPECIAL PROMOTIONS
        </h2>
        <div className="h-1 lg:w-[700px] bg-white mb-4"></div>
        <p className="text-lg text-white mb-6">
          Get exclusive deals you wont find anywhere else straight to your
          inbox!
        </p>
        <div className="flex flex-col md:flex-row gap-4 w-full max-w-3xl">
          <input
            type="email"
            placeholder="Enter email address"
            className="flex-grow px-4 py-3 bg-transparent border border-white text-white placeholder-white bg-white bg-opacity-10"
          />
          <button className="md:w-1/4 px-8 py-3 bg-accent hover:bg-white text-white hover:text-accent hover:border-2 hover:border-[#D29A5A] hover:bg-opacity-90 transition duration-300">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubCTA;
