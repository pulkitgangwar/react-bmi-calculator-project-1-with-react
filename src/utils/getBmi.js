const getBmi = (mesurements, unitType) => {
  const height = parseInt(mesurements.height);
  const weight = parseInt(mesurements.weight);
  const heightInInches = parseInt(mesurements.heightInInches) || 0;
  if (unitType === "metricUnit") {
    return (weight / Math.pow(height, 2)).toFixed(3);
  } else if (unitType === "imperialUnit") {
    const totalHeight = parseInt(height) * 12 + heightInInches;
    return (703 * (weight / Math.pow(totalHeight, 2))).toFixed(3);
  }
  throw new Error("invalid unitType");
};

export default getBmi;

/*
    unitType = "metricUnit"
    or
    unitType = "imperialUnit"
*/
