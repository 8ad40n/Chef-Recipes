import banner from '../../assets/banner.png';

export default function Banner() {
  return (
    <div className="container mx-auto mb-[2.5rem] md:mb-[4.5rem] lg:mb-[6.25rem] px-2 md:px-15 lg:px-20 overflow-hidden">
      <div
        className="hero min-h-screen rounded-3xl"
        style={{ backgroundImage: `url(${banner})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="hero-overlay bg-opacity-60 rounded-3xl"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-4xl">
            <h1 className="mb-5 text-3xl lg:text-5xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
            <p className="mb-5 text-sm lg:text-base">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <div className='space-x-4'>
                <button className="btn bg-[#0BE58A] rounded-full">Explore Now</button>
                <button className="btn rounded-full bg-transparent text-white hover:text-black">Our Feedback</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
