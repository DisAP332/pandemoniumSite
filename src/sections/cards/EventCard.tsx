"use client";

interface IProps {
  Name: string;
  Date: string;
  Description: string;
  Time: string;
  Cost: string;
}

export const EventCard = (Props: IProps) => {
  return (
    <>
      <div>
        <h1 className="text-3xl p-3">{Props.Name}</h1>
      </div>
      <div className="text-2xl">
        <h1>{Props.Date}</h1>
      </div>
      <div>
        <h1>{Props.Description}</h1>
      </div>
      <div className="flex justify-between">
        <h1>{Props.Time}</h1>
        <h1>{Props.Cost}</h1>
      </div>
    </>
  );
};
