import React from "react";
import Button from "../button/button";

const Card = () => {
  const cards = [
    {
      img: "https://s3-alpha-sig.figma.com/img/9db5/d732/b830bedc9861fb0dbbfa8d37c2ffef11?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TywGlViXlJpmBzLRC8l3UqgLJ9HC88hL9cQBO2H4eLuaAyKHtr1YtSVkmd24LHhj2Kuk0znuW7jnZnAfSRqQEC3rSwygoEYBExLXGSggEcIMcd-m1VCXZyUbxytV924zJZzRfEBmsifyjyz2v26hfQcS4dzdR6lyhSNyehdxY7NHEVHnaL~xt83FM2rt7oF0sLGEno1urBx3Mobhz~eJnNcdOWrdE93Virq282iJOo-Ai2AhCwVYnTZJv4BBBmXgGr7O64~5WBazOUHEu7-FNIeW5tRa9rAYLlPEZ7vkfxuEuNodxnozhaRsHkoQSOgEiFlFnn3pPRBjfNQK2x3Q0g__",
      title:
        "We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.",
      dick: "Anisha Li",
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/9db5/d732/b830bedc9861fb0dbbfa8d37c2ffef11?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TywGlViXlJpmBzLRC8l3UqgLJ9HC88hL9cQBO2H4eLuaAyKHtr1YtSVkmd24LHhj2Kuk0znuW7jnZnAfSRqQEC3rSwygoEYBExLXGSggEcIMcd-m1VCXZyUbxytV924zJZzRfEBmsifyjyz2v26hfQcS4dzdR6lyhSNyehdxY7NHEVHnaL~xt83FM2rt7oF0sLGEno1urBx3Mobhz~eJnNcdOWrdE93Virq282iJOo-Ai2AhCwVYnTZJv4BBBmXgGr7O64~5WBazOUHEu7-FNIeW5tRa9rAYLlPEZ7vkfxuEuNodxnozhaRsHkoQSOgEiFlFnn3pPRBjfNQK2x3Q0g__",
      title:
        "We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.",
      dick: "Anisha Li",
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/9db5/d732/b830bedc9861fb0dbbfa8d37c2ffef11?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TywGlViXlJpmBzLRC8l3UqgLJ9HC88hL9cQBO2H4eLuaAyKHtr1YtSVkmd24LHhj2Kuk0znuW7jnZnAfSRqQEC3rSwygoEYBExLXGSggEcIMcd-m1VCXZyUbxytV924zJZzRfEBmsifyjyz2v26hfQcS4dzdR6lyhSNyehdxY7NHEVHnaL~xt83FM2rt7oF0sLGEno1urBx3Mobhz~eJnNcdOWrdE93Virq282iJOo-Ai2AhCwVYnTZJv4BBBmXgGr7O64~5WBazOUHEu7-FNIeW5tRa9rAYLlPEZ7vkfxuEuNodxnozhaRsHkoQSOgEiFlFnn3pPRBjfNQK2x3Q0g__",
      title:
        "We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.",
      dick: "Anisha Li",
    },
  ];
  return (
    <div className="w-[90%] m-auto my-10">
      <div className="flex flex-col gap-5">
        <h1 className="text-4xl font-bold text-center">What they’ve said</h1>
        <div className="flex justify-center items-center flex-col md:flex-row ">
          {cards.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col gap-3 justify-center items-center"
              >
                <img
                  src={item.img}
                  alt=""
                  className="w-[100px] rounded-full "
                />
                <h1 className="text-[#242D52] text-xl font-bold">
                  {item.dick}
                </h1>
                <p className="font-semibold text-xl text-[#242D52] text-center">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
        <div className="m-auto my-9 ">
          <Button value="Get Started" />
        </div>
      </div>
    </div>
  );
};

export default Card;
