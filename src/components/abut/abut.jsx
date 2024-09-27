import React from "react";
import Button from "../button/button";
const Abut = () => {
  const data = [
    {
      button: "01",
      title: "Track company-wide progress",
      desc: "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.",
    },
    {
      button: "02",
      title: "Track company-wide progress",
      desc: "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.",
    },
    {
      button: "03",
      title: "Track company-wide progress",
      desc: "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.",
    },
  ];
  return (
    <div className="w-[90%] m-auto">
      <div className="flex-col md:flex-row flex gap-4">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold text-black w-full md:w-[70%]">
            What’s different about Manage?
          </h1>
          <p className="text-[#242d5287]">
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.{" "}
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 md:w-[80%] w-full">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col w-full gap-4 items-start justify-center"
              >
                <div className="flex items-center justify-center gap-4">
                  <Button value={item.button} />
                  <h1 className="text-xl font-bold text-[rgba(36,45,82,1)]">
                    {item.title}
                  </h1>
                </div>
                <p className=" text-[#242d5287] font-semibold">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Abut;
