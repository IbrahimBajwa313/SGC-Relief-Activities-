import React from "react";

const HowItWorks = () => {
  return (
    <div className=" py-12 px-8 md:px-16 lg:px-32 flex flex-col justify-center gap-12 ">
      {/* Title */}
      <h2 className="text-4xl font-bold text-[#22C55E]  text-center">
        How it Works
      </h2>

      {/* Steps Section */}
      <div className="flex justify-center items-start relative">
        {/* Left Column */}
        <div className="flex flex-col items-end gap-24 pr-8 py-16">
          {/* Step 1 */}
          <div className="flex items-start gap-8 text-right">
            {/* Content Section */}
            <div className="max-w-md bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold text-[#22C55E] mb-2">
                Form
              </h3>
              <p className="text-gray-600">
                Fill the Form to provide us with your details. This will help us
                in contacting you and sending you profiles.
              </p>
            </div>

            {/* Connector Dot */}
            <div className="flex-shrink-0 w-4 h-4 bg-[#22C55E] rounded-full self-center transform translate-x-1/2"></div>
          </div>

          {/* icon2 */}
          <span className="p-8 mr-10 bg-white shadow-lg rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-20  text-[#22C55E] "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
          </span>

          {/* Step 3 */}
          <div className="flex items-start gap-8 text-right">
            {/* Content Section */}
            <div className="max-w-md bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-[#22C55E] mb-2">
                Verification
              </h3>
              <p className="text-gray-600">
                After you have made you desicion we will get you in direct
                contact with the kid so, you can directly help them and bear
                their expeses.
              </p>
            </div>

            {/* Connector Dot */}
            <div className="flex-shrink-0 w-4 h-4 bg-[#22C55E] rounded-full self-center transform translate-x-1/2"></div>
          </div>
        </div>

        {/* Central Line */}
        <div className="absolute left-1/2 top-0 h-full border-r border-l-4 rounded-full border-solid border-[#22C55E] transform -translate-x-1/2"></div>

        {/* Right Column */}
        <div className="flex flex-col items-start gap-24 pl-8 py-20">
          {/* icon1 */}
          <span className="p-8 ml-10 bg-white shadow-lg rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-20 text-[#22C55E]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
              />
            </svg>
          </span>

          {/* Step 2 */}
          <div className="flex flex-row-reverse items-start gap-8 text-left">
            {/* Content Section */}
            <div className="max-w-md bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-[#22C55E] mb-2">
                Contact
              </h3>
              <p className="text-gray-600">
                Once you have filled the form we will contact you and share
                information about childern who need adoption.
              </p>
            </div>

            {/* Connector Dot */}
            <div className="flex-shrink-0 w-4 h-4 bg-[#22C55E] rounded-full self-center transform -translate-x-1/2"></div>
          </div>

          {/* icon3 */}
          <span className="p-8 ml-10 bg-white shadow-lg rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-20 text-[#22C55E]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
              />
            </svg>
          </span>
        </div>
      </div>

      <h4 className="mt- text-sm font-light text-gray-400">
        <span className="font-medium">Note : </span>
        <span>
          Any money donated to SGC will be directly used for assistance and
          monetary help of Gazans amd in no way will be used on campaign.
        </span>
      </h4>
    </div>
  );
};

export default HowItWorks;