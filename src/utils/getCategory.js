const getCategory = (bmi) => {
  if (bmi < 16) {
    return {
      category: "Severe Thinness",
      backgroundColor: "",
    };
  } else if (bmi >= 16 && bmi < 17) {
    return {
      category: "Moderate Thinness",
      backgroundColor: "",
    };
  } else if (bmi >= 17 && bmi < 18.5) {
    return {
      category: "Mild Thinness",
      backgroundColor: "",
    };
  } else if (bmi >= 18.5 && bmi < 25) {
    return {
      category: "Normal",
      backgroundColor: "",
    };
  } else if (bmi >= 25 && bmi < 30) {
    return {
      category: "Overweight",
      backgroundColor: "",
    };
  } else if (bmi >= 30 && bmi < 35) {
    return {
      category: "Obese Class I",
      backgroundColor: "",
    };
  } else if (bmi >= 35 && bmi < 40) {
    return {
      category: "Obese Class II",
      backgroundColor: "",
    };
  } else if (bmi >= 40) {
    return {
      category: "Obese Class III",
      backgroundColor: "",
    };
  }
};

export default getCategory;
