// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

const tellFortune = function(numChildren, partnerName, location, jobTitle) {
  let fortune =
    "You will be a " +
    jobTitle +
    " in " +
    location +
    ", and married to " +
    partnerName +
    " with " +
    numChildren +
    " kids.";
  console.log(fortune);
};

tellFortune(12, "Lesley-Ann", "Budapest", "putjesschepper");
tellFortune(2, "Truus", "Kattegat", "Ship Builder");
tellFortune(156, "Wendy", "Almelo", "programmer");
