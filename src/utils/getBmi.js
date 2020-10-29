const getBmi = (mesurements, unitType) => {
  if (unitType === "metricUnit") {
    return mesurements.weight / Math.pow(mesurements.height, 2);
  } else if (unitType === "imperialUnit") {
    return (
      703 *
      (mesurements.weight /
        Math.pow(mesurements.height * 12 + mesurements.heightInInches, 2))
    );
  }
  throw new Error("invalid unitType");
};

export default getBmi;

/*
    unitType = "metricUnit"
    or
    unitType = "imperialUnit"
*/
