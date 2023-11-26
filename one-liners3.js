const getDetails = (objects, key1, key2) =>
  objects.map(
    (obj) =>
      `<div class="flexy"> Full Name is : <span> &nbsp${obj[key1]}</span> &nbsp and Position is : <span> &nbsp${obj[key2]} </div> <br>`
  );

const company = [
  { fullName: "Danny Brown", position: "Project Manager" },
  { fullName: "Mary Cooper", position: "Personal Assistant" },
  { fullName: "Luke Sidaway", position: "Software Developer" },
  { fullName: "David Frost", position: "Senior Project Manager" },
];

const allDetails = getDetails(company, "fullName", "position");

document.write(allDetails.toString().replaceAll(",", ""));
