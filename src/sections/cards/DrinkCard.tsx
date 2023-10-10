interface IProps {
  Name: string;
  Cost: string;
  Description: string;
}

export default function DrinkCard(Props: IProps) {
  return (
    <>
      <h1 className="text-2xl">{Props.Name}:</h1>
      <h1>{Props.Cost}$</h1>
      <h1>{Props.Description}</h1>
    </>
  );
}
