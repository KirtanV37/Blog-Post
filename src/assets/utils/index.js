// 1
export const getRandomDate = () => {
  const start = new Date(2010, 0, 1); // You can change range if needed
  const end = new Date();
  const randomDate = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );

  return randomDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

// 2
export const getRandomSubject = () => {
  const subjects = [
    "Health & Wellness",
    "Personal Finance",
    "Travel & Culture",
    "Entrepreneurship",
    "Self-Improvement",
  ];

  return subjects[Math.floor(Math.random() * subjects.length)];
};

// 3
export const categories = [
  "Health & Wellness",
  "Personal Finance",
  "Travel & Culture",
  "Entrepreneurship",
  "Self-Improvement",
];

//4

export const listing = [
  "Guidelines",
  "Mentorship",
  "Tutorial",
  "Training",
  "Career",
  "Self care",
];
