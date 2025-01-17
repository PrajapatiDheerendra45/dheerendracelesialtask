import React from "react";

export default function Review() {
  return (
    <div className="w-full flex flex-col font-serif items-center bg-[#fef6ec] py-8">
      <h1 className="text-[33px] py-8 sm:text-[35px] lg:py-4 md:text-[55px] text-[#BFA785] text-center">
        Client Reviews <br /> & Testimonials
      </h1>

      {/* Main Container */}
      <div className="w-full lg:w-11/12 flex flex-col sm:flex-row sm:flex-wrap justify-center gap-4 px-8 md:px-12">
        
        {/* Review Box 1 */}
        <div className="w-[280px] md:w-[320px] text-left text-[18px] md:text-base flex flex-col items-center">
          <h2 className="text-[#BFA785] text-[30px] md:text-xl py-4">Amit Singh</h2>
          <p className="text-[#214344]">
            Testimonials are short quotes from people who love your brand. It’s a great way to convince customers to try your services.
          </p>
        </div>

        {/* Review Box 2 */}
        <div className="w-[280px] md:w-[320px] text-left text-[18px] md:text-base flex flex-col items-center">
          <h2 className="text-[#BFA785] text-[30px] md:text-xl py-4">Aman Maurya</h2>
          <p className="text-[#214344]">
            Testimonials are short quotes from people who love your brand. It’s a great way to convince customers to try your services.
          </p>
        </div>

        {/* Review Box 3 */}
        <div className="w-[280px] md:w-[320px] text-left text-[18px] md:text-base flex flex-col items-center">
          <h2 className="text-[#BFA785] text-[30px] md:text-xl py-4">Shivam Sharma</h2>
          <p className="text-[#214344]">
            Testimonials are short quotes from people who love your brand. It’s a great way to convince customers to try your services.
          </p>
        </div>
      
      </div>
    </div>
  );
}
