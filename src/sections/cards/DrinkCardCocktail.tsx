interface IProps {
  Name: string;
  Description: string;
  Ingredients: string;
  Cost: string;
}

export default function DrinkCardCocktail(Props: IProps) {
  return (
    <>
      <div>
        <h1 className="text-2xl">{Props.Name}</h1>
      </div>
      <div>{Props.Description}</div>
      <div>{Props.Ingredients}</div>
      <div>{Props.Cost}</div>
    </>
  );
}
