import Image from "next/image";

export default function Home() {
  return (
    <main>
  {/* header section */}
  <header>
    <nav className="bg-white-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              {/*
        Icon when menu is closed.
  
        Menu open: "hidden", Menu closed: "block"
      */}
              <svg
                className="block size-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              {/*
        Icon when menu is open.
  
        Menu open: "block", Menu closed: "hidden"
      */}
              <svg
                className="hidden size-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center ">
              <svg
                width={215}
                height={45}
                viewBox="0 0 215 53"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <rect width={215} height={53} fill="url(#pattern0_33_41)" />
                <defs>
                  <pattern
                    id="pattern0_33_41"
                    patternContentUnits="objectBoundingBox"
                    width={1}
                    height={1}
                  >
                    <use
                      xlinkHref="#image0_33_41"
                      transform="matrix(0.00230385 0 0 0.00934579 0.018496 0)"
                    />
                  </pattern>
                  <image
                    id="image0_33_41"
                    width={418}
                    height={107}
                    preserveAspectRatio="none"
                    xlinkHref="data:image/png;base64,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"
                  />
                </defs>
              </svg>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-12 items-center">
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                <a
                  href="#"
                  className="rounded-full bg-[#FC8A06] px-5 py-2 text-sm font-medium text-white"
                  aria-current="page"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-dark hover:bg-[#FC8A06] hover:text-white"
                >
                  Browse Menu
                </a>
                <a
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-dark hover:bg-[#FC8A06] hover:text-white"
                >
                  Special Offers
                </a>
                <a
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-dark hover:bg-[#FC8A06] hover:text-white"
                >
                  Resturant
                </a>
                <a
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-dark hover:bg-[#FC8A06] hover:text-white"
                >
                  Track Order
                </a>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button className="flex items-center font-medium rounded-full bg-gray-900 text-white space-x-4 px-5 py-2">
              <svg
                width={32}
                height={27}
                viewBox="0 0 32 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <rect
                  x="0.382353"
                  width="30.9706"
                  height={27}
                  rx={1}
                  fill="url(#pattern0_33_47)"
                />
                <defs>
                  <pattern
                    id="pattern0_33_47"
                    patternContentUnits="objectBoundingBox"
                    width={1}
                    height={1}
                  >
                    <use
                      xlinkHref="#image0_33_47"
                      transform="matrix(0.00968661 0 0 0.0111111 0.0641026 0)"
                    />
                  </pattern>
                  <image
                    id="image0_33_47"
                    width={90}
                    height={90}
                    preserveAspectRatio="none"
                    xlinkHref="data:image/png;base64,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"
                  />
                </defs>
              </svg>
              Login/Signup
            </button>
            {/*
        Dropdown menu, show/hide based on menu state.
  
        Entering: "transition ease-out duration-100"
          From: "transform opacity-0 scale-95"
          To: "transform opacity-100 scale-100"
        Leaving: "transition ease-in duration-75"
          From: "transform opacity-100 scale-100"
          To: "transform opacity-0 scale-95"
      */}
          </div>
        </div>
      </div>
      {/* Mobile menu, show/hide based on menu state. */}
      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
          <a
            href="#"
            className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
            aria-current="page"
          >
            Home
          </a>
          <a
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Browse Menu
          </a>
          <a
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Special Offer
          </a>
          <a
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Resturant
          </a>
          <a
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Track Order
          </a>
        </div>
      </div>
    </nav>
  </header>
  {/* /header section */}
  {/* section about feast your senses */}
  <section className="section-about-feast-your-senses py-8 max-w-7xl mx-auto ">
    <div className="grid md:grid-cols-2 grid-cols-1 bg-[#FBFBFB]  ring-2 ring-gray-300 rounded-lg py-8">
      {/* font div */}
      <div className="mx-auto py-5">
        <p className="pb-3 text-sm sm:text-base">
          Order Restaurant food, takeaway and groceries.
        </p>
        <h1 className="text-4xl sm:text-3xl font-semibold font-[Poppins, sans-serif]">
          Feast Your Senses,
          <br />
          <span className="text-[#FC8A06]">Fast and Fresh</span>
        </h1>
        <img src="images/Group 112.png" />
        <div className="flex max-w-md mt-5">
          <input
            type="text"
            placeholder="e.g. EC4R 3TE"
            className="px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none w-full"
          />
          <button className="bg-orange-500 text-white px-6 py-2 rounded-r-full  font-semibold">
            Search
          </button>
        </div>
      </div>
      {/* /font div */}
      {/* image div  */}
      <div className=" py-5">
        <img src="images/Group 111 (2).png" alt="" />
      </div>
    </div>
  </section>
  {/* /section about feast your senses */}
  {/* section about Up to -40% 🎊 Order.uk exclusive deals */}
  <section className="section-about-up-to-40%-order-uk-exclusive-deals max-w-7xl mx-auto mt-5">
    <div className="flex justify-between items-center flex-wrap gap-2">
      {/* Left side text */}
      <div>
        <div className="font-semibold text-xl">
          Up to -40% 🎊 Order.uk exclusive deals
        </div>
      </div>
      {/* Right side buttons */}
      <div className="flex space-x-4 gap-2">
        <button
          type="button"
          className="rounded-full bg-gray-100 px-4 py-1 hidden md:inline"
        >
          vegan
        </button>
        <button
          type="button"
          className="rounded-full bg-gray-100 px-4 py-1 hidden md:inline"
        >
          sushi
        </button>
        <button
          type="button"
          className="rounded-full bg-white px-4 py-1  text-[#FC8A06] ring-2 ring-[#FC8A06] focus:text-[#FC8A06] focus:ring-2 focus:ring-[#FC8A06] focus:bg-white"
        >
          Pizza and fast food
        </button>
        <button
          type="button"
          className="rounded-full bg-gray-100 px-4 py-1 hidden md:inline"
        >
          other
        </button>
      </div>
    </div>
    <div className="grid   grid-cols-3 sm:overflow-hidden gap-5 mt-10 w-[150] md:w-full">
      {/* card 1 */}
      <div className="relative inline-block">
        <span className=" absolute top-2 right-5 inline-flex items-center rounded-md bg-black px-2 py-3 text-xs font-medium text-white ring-1 ring-gray-500/10 ring-inset">
          -40%
        </span>
        <img src="images/burger.png" />
        <div className="absolute bottom-6 left-8">
          <div className="text-[#FC8A06]">Restaurant</div>
          <div className="text-white font-bold text-xl ">
            Chef Burgers London
          </div>
        </div>
      </div>
      {/* card 2 */}
      <div className="relative inline-block">
        <span className=" absolute top-2 right-5 inline-flex items-center rounded-md bg-black px-2 py-3 text-xs font-medium text-white ring-1 ring-gray-500/10 ring-inset">
          -20%
        </span>
        <img src="images/grand ai.png" />
        <div className="absolute bottom-6 left-8">
          <div className="text-[#FC8A06]">Restaurant</div>
          <div className="text-white font-bold text-xl ">
            Grand Ai Cafe London
          </div>
        </div>
      </div>
      {/* card 3 */}
      <div className="relative inline-block">
        <span className=" absolute top-2 right-5 inline-flex items-center rounded-md bg-black px-2 py-3 text-xs font-medium text-white ring-1 ring-gray-500/10 ring-inset">
          -17%
        </span>
        <img src="images/butterbot cafe.jpg" />
        <div className="absolute bottom-6 left-8">
          <div className="text-[#FC8A06]">Restaurant</div>
          <div className="text-white font-bold text-xl ">
            Butterbrot Caf’e London
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* section end */}
  {/* section start about popular categories */}
  <section className="section-about-popular-categories max-w-7xl mx-auto mt-10">
    <div>
      <div className="text-dark text-2xl font-bold mb-5">
        Order.uk Popular Categories 🤩
      </div>
      <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-col-6 gap-4">
        {/* swipper */}
        <div className="rounded-lg shadow-lg bg-[#F5F5F5]">
          <img src="images/burger and fast food.jpg" className="grayscale" />
          <div className="p-4">
            <div className="text-dark text-xl font-bold">
              <h4>Burger and Fast Food</h4>
            </div>
            <div className="text-[#FC8A06]">
              <p> 21 Resturant</p>
            </div>
          </div>
        </div>
        <div className="rounded-lg shadow-lg bg-[#F5F5F5]">
          <img
            src="images/salad.jpg"
            className="blur-md brightness-150 invert md:filter-none"
          />
          <div className="p-4">
            <div className="text-dark text-xl font-bold">
              <h6>Salads</h6>
            </div>
            <div className="text-[#FC8A06]">
              <p>32 Resturant</p>
            </div>
          </div>
        </div>
        <div className="rounded-lg shadow-lg bg-[#F5F5F5]">
          <img src="images/pasta.jpg" className="filter hue-rotate-270" />
          <div className="p-4">
            <div className="text-dark text-xl font-bold">
              <h4>Pasta &amp; Casuals</h4>
            </div>
            <div className="text-[#FC8A06]">
              <p>4 Resturant </p>
            </div>
          </div>
        </div>
        <div className="rounded-lg shadow-lg bg-[#F5F5F5]">
          <img src="images/pizza.jpg" className="sepia" />
          <div className="p-4">
            <div className="text-dark text-xl font-bold">
              <h4>Pizza </h4>
            </div>
            <div className="text-[#FC8A06]">
              <p>32 Resturant </p>
            </div>
          </div>
        </div>
        <div className="rounded-lg shadow-lg bg-[#F5F5F5]">
          <img src="images/breakfast.jpg" />
          <div className="p-4">
            <div className="text-dark text-xl font-bold">
              <h4>BreakFast</h4>
            </div>
            <div className="text-[#FC8A06]">
              <p>4 Resturant </p>
            </div>
          </div>
        </div>
        <div className="rounded-lg shadow-lg bg-[#F5F5F5]">
          <img src="images/soup.jpg" />
          <div className="p-4">
            <div className="text-dark text-xl font-bold">
              <h4>Soups</h4>
            </div>
            <div className="text-[#FC8A06]">
              <p>32 Resturant</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* section about popular resturant */}
  <section className="section-about-popular-resturant max-w-7xl mx-auto mt-10">
    <div>
      <h3 className="text-dark text-2xl font-bold">Popular Resturants</h3>
      <div className="grid  grid-cols-3 md:grid-cols-6 lg:grid-col-6 gap-4 mt-10">
        <div className="transition duration-300 ease-in-out hover:scale-105">
          <img src="images/McDonald.jpg" />
        </div>
        <div className="transition duration-300 ease-in-out hover:scale-75">
          <img src="images/papa.jpg" />
        </div>
        <div className="transition duration-300 ease-in-out hover:scale-x-75">
          <img src="images/kfc.jpg" />
        </div>
        <div className="transition duration-300 ease-in-out hover:skew-x-6">
          <img src="images/texas.jpg" />
        </div>
        <div className="preserve 3d container">
          <img
            src="images/burger king.jpg"
            className="transition duration-300 ease-in-out hover:rotate-y-180"
          />
        </div>
        <div className="transition duration-300 ease-in-out transform  hover:rotate-180">
          <img src="images//shaurma.jpg" />
        </div>
      </div>
    </div>
  </section>
  {/* /section about popular resturant */}
  {/* section about ordering is more start */}
  <section className="section-about-ordering-is-more mx-auto max-w-7xl mt-14 ">
    <div className="grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1  bg-[#F5F5F5] rounded-lg ">
      <div>
        <img src="images/Group 113.png" />
      </div>
      <div className="my-auto ml-auto">
        <div className="flex justify-center items-center">
          <svg
            width={215}
            height={53}
            viewBox="0 0 215 53"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <rect width={215} height={53} fill="url(#pattern0_33_41)" />
            <defs>
              <pattern
                id="pattern0_33_41"
                patternContentUnits="objectBoundingBox"
                width={1}
                height={1}
              >
                <use
                  xlinkHref="#image0_33_41"
                  transform="matrix(0.00230385 0 0 0.00934579 0.018496 0)"
                />
              </pattern>
              <image
                id="image0_33_41"
                width={418}
                height={107}
                preserveAspectRatio="none"
                xlinkHref="data:image/png;base64,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"
              />
            </defs>
          </svg>
          <div className="text-4xl font-bold">ing is more important</div>
        </div>
        <div>
          <button className=" rounded-full px-24 py-3 bg-black text-white mt-5 text-[30px] ">
            <span className="text-[#FC8A06] underline">Personalized</span> &amp;
            Instant
          </button>
        </div>
        <div className="mt-5">
          <p>Download the Order.uk app for faster ordering</p>
        </div>
        <div className="mt-5">
          <img src="images/Group.jpg" />
        </div>
      </div>
    </div>
  </section>
  {/* /section about ordering is more end*/}
  {/* section about partner with us and ride with us start */}
  <section className="section-about-partner-with-ride mx-auto max-w-7xl mt-14">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
      <div className="relative">
        <img src="images/partner with us.jpg" alt="" />
        <div className="absolute top-0 left-14">
          <p className="bg-white rounded-md py-4 px-5 font-bold">
            Earn more with lower fees
          </p>
        </div>
        <div className="absolute bottom-6 left-8">
          <p className="text-[#FC8A06] text-xs">Signup as a business</p>
          <h3 className="text-3xl text-white font-bold mb-2">
            Partner with us
          </h3>
          <button className="rounded-full bg-[#FC8A06] text-white px-5 py-2 hover:underline hover:text-[#FC8A06] transition duration-100 ease-in hover:scale-75 hover:bg-white">
            Get Started
          </button>
        </div>
      </div>
      <div className="relative">
        <img src="images/ride with us.jpg" alt="" />
        <div className="absolute top-0 left-14">
          <p className="bg-white rounded-md py-4 px-5 font-bold">
            Avail exclusive perks
          </p>
        </div>
        <div className="absolute bottom-6 left-8">
          <p className="text-[#FC8A06] text-xs">Signup as a rider</p>
          <h3 className="text-3xl text-white font-bold mb-2">Ride with us</h3>
          <button className="rounded-full bg-[#FC8A06] text-white px-5 py-2 hover:underline hover:text-[#FC8A06] transition duration-100 ease-in hover:scale-x-75 hover:bg-white">
            Get Started
          </button>
        </div>
      </div>
    </div>
  </section>
  {/* /section about partner with us and ride with us start */}
  {/* section about know about us start */}
  <section className="section-about-know-us max-w-7xl mx-auto bg-[#D9D9D9] mt-10 rounded-md">
    <div className="flex justify-between items-center py-10 px-10 mb-10">
      <h3 className="text-3xl font-bold ">Know more about us!</h3>
      <div>
        <button className="text-xl font-bold border border-[#FC8A06] rounded-full py-3 px-5">
          Frequently Questions
        </button>
        <button className="text-xl  rounded-full py-3 px-5">Who we are?</button>
        <button className="text-xl  rounded-full py-3 px-5">
          Partner Program
        </button>
        <button className="text-xl  rounded-full py-3 px-5">
          Help &amp; Support
        </button>
      </div>
    </div>
    <div className="max-w-6xl bg-white mx-auto py-10 rounded-md -mb-15  ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 py-5 px-10">
        {/* frequently asked question */}
        <div className="space-y-8">
          <button className="rounded-full bg-[#FC8A06] text-dark font-bold py-5 px-10 text-2xl">
            How does Order.UK work?
          </button>
          <div>
            <p className="text-xl font-bold">
              What payment methods are accepted?
            </p>
          </div>
          <div>
            <p className="text-xl font-bold">
              Can I track my order in real-time?
            </p>
          </div>
          <div>
            <p className="text-xl font-bold">
              Are there any special discounts <br /> or promotions available?
            </p>
          </div>
          <div>
            <p className="text-xl font-bold">
              Is Order.UK available in my area?
            </p>
          </div>
        </div>
        {/* /frequently asked question */}
        <div className="flex md:flex-row  gap-5 justify-center">
          {/* card 1 */}
          <div className="rounded-lg  bg-[#D9D9D9] w-[735px] ml-auto h-[250px] pt-5 pl-3">
            <h3 className="text-xl font-bold">Place an order</h3>
            <img src="images/order-food_1-removebg-preview.png" />
            <p>Receive your order at alighting fast speed!</p>
          </div>
          {/* /card 1 */}
          {/* card 2 */}
          <div className="rounded-lg  bg-[#D9D9D9] w-[735px] h-[250px] pt-5 pl-3">
            <h3 className="text-xl font-bold">Track Progress</h3>
            <img src="images/food_1-removebg-preview (1).png" />
            <p>Place order through our website or Mobile app</p>
          </div>
          {/* /card 2 */}
          {/* card 3 */}
          <div className="rounded-lg  bg-[#D9D9D9] w-[735px] h-[250px] pt-5 pl-3">
            <h3 className="text-xl font-bold">Get your order</h3>
            <img src="images/order_1-removebg-preview.png" />
            <p>Your can track your order status with delivery time</p>
          </div>
          {/* /card 3 */}
        </div>
      </div>
    </div>
  </section>
  {/* /section about know about us start */}
  {/* section about register rider */}
  <section className="section-about-register-rider max-w-7xl bg-[#FC8A06] mx-auto mt-10 rounded-md">
    <div className="flex  flex-col md:flex-row  justify-between items-center pl-10 pr-10 pt-5">
      <div>
        <div className="text-5xl text-white font-semibold">546+</div>
        <div className="text-xl font-bold text-white">Registered Riders</div>
      </div>
      {/* for desktop */}
      <div className=" border-l   border-[#D9D9D9] h-20 my-auto" />
      {/* for mobile */}
      <div className=" border-t w-full md:hidden  border-[#D9D9D9] h-20 my-auto" />
      <div className="text-5xl text-white font-semibold">
        <div>789900+</div>
        <div className="text-xl font-bold text-white">Registered Riders</div>
      </div>
      {/* <div class="border-l border-[#D9D9D9] h-20 my-auto"></div> */}
      {/* for desktop */}
      <div className="  border-l   border-[#D9D9D9] h-20 my-auto" />
      {/* for mobile */}
      <div className=" border-t w-full md:hidden  border-[#D9D9D9] h-20 my-auto" />
      <div className="text-5xl text-white font-semibold">
        <div>690+</div>
        <div className="text-xl font-bold text-white">Registered Riders</div>
      </div>
      {/* <div class="border-l border-[#D9D9D9] h-20 my-auto"></div> */}
      {/* for desktop */}
      <div className="  border-l   border-[#D9D9D9] h-20 my-auto" />
      {/* for mobile */}
      <div className=" border-t w-full md:hidden  border-[#D9D9D9] h-20 my-auto" />
      <div className="text-5xl text-white font-semibold">
        <div>17457+</div>
        <div className="text-xl font-bold text-white">Registered Riders</div>
      </div>
    </div>
  </section>
  {/* /section about register rider */}
  {/* footer section */}
  <footer className="bg-[#D9D9D9] mt-10">
    <div className="grid md:grid-cols-4  grid-cols-1 gap-10 max-w-7xl mx-auto  ">
      <div className="pt-10 pl-10">
        <svg
          width={200}
          height={66}
          viewBox="0 0 268 66"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <rect width={268} height={66} fill="url(#pattern0_33_222)" />
          <defs>
            <pattern
              id="pattern0_33_222"
              patternContentUnits="objectBoundingBox"
              width={1}
              height={1}
            >
              <use
                xlinkHref="#image0_33_222"
                transform="matrix(0.00230158 0 0 0.00934579 0.0189706 0)"
              />
            </pattern>
            <image
              id="image0_33_222"
              width={418}
              height={107}
              preserveAspectRatio="none"
              xlinkHref="data:image/png;base64,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"
            />
          </defs>
        </svg>
        <img
          src="images/app-store-badges-en 1.jpg"
          className="mt-5 w-[200px]"
        />
        <p className="mt-5 font-bold">
          Company # 490039-445, Registered with
          <br /> House of companies.
        </p>
      </div>
      <div className="pt-10 ">
        <p className="text-xl font-bold mb-4">
          Get Exclusive Deals in your Inbox
        </p>
        <div className="flex relative w-full max-w-md">
          <button
            className=" w-full rounded-full border border-[#D9D9D9] ring-1 
                        hover:ring-gray-300 px-10 py-1 bg-[#D9D9D9]"
          >
            youremail@gmail.com
          </button>
          <button className="rounded-full absolute right-1  px-5 py-1 bg-[#FC8A06] transition duration-300 ease hover:scale-105 hover:text-white">
            Subcribe
          </button>
        </div>
        <p className="mt-3 font-bold">
          we wont spam, read our{" "}
          <span className="underline">email policy </span>{" "}
        </p>
      </div>
      <div className="pt-10 ">
        <h3 className=" text-xl font-medium"> Legal packages</h3>
        <h5 className="underline font-semibold">Terms and conditions</h5>
        <h5 className="underline font-semibold">Privacy</h5>
        <h5 className="underline font-semibold">Cookies</h5>
        <h5 className="underline font-semibold">Modern Slavery Statement</h5>
      </div>
      <div className="pt-10">
        <h3 className=" text-xl font-medium"> Important Links</h3>
        <h5 className="underline font-semibold">Get help</h5>
        <h5 className="underline font-semibold">Add your restaurant</h5>
        <h5 className="underline font-semibold">Sign up to deliver</h5>
        <h5 className="underline font-semibold">Create a business account</h5>
      </div>
    </div>
  </footer>
  {/* /footer section */}
</main>


  );
}
