type FeaturesProps = {
  features: string[];
}

function Features(features: FeaturesProps): JSX.Element {
  return (
    <>
      {features.features.map((item) => (
        //с ключом не разобралась
        <li className="property__inside-item"  key={item}>
          {item}
        </li>
      ))}
    </>
  );
}
export default Features;


// this.state.data.map((item,i) => <li key={i}>Test</li>)
