const usernames = [
  "StarGazer21",
  "PixelNinja88",
  "MoonChild23",
  "TechWhiz42",
  "CoffeeLover77",
  "MusicMaestro12",
  "AdventureSeeker99",
  "BookwormGirl",
  "NatureExplorer27",
  "FoodieFiesta",
  "GamerGeek56",
  "WanderlustXplorer",
  "ArtisticSoul17",
  "FitnessFanatic88",
  "ScienceWizard19",
  "DreamWeaver33",
  "FashionistaChic",
  "PetLoverForever",
  "MovieBuff123",
  "GreenThumb45",
  "BeachBumSun",
  "TravelBug21",
  "DIYEnthusiast",
  "SportsFanatic77",
  "YogaWarrior88",
  "CookingQueen99",
  "NightOwl21",
  "OutdoorsyAdventurer",
  "HistoryBuff55",
  "StarryEyesDreamer"
];

const emails = [
  "user1@example.com",
  "user2@example.com",
  "user3@example.com",
  "user4@example.com",
  "user5@example.com",
  "user6@example.com",
  "user7@example.com",
  "user8@example.com",
  "user9@example.com",
  "user10@example.com",
  "user11@example.com",
  "user12@example.com",
  "user13@example.com",
  "user14@example.com",
  "user15@example.com",
  "user16@example.com",
  "user17@example.com",
  "user18@example.com",
  "user19@example.com",
  "user20@example.com",
  "user21@example.com",
  "user22@example.com",
  "user23@example.com",
  "user24@example.com",
  "user25@example.com",
  "user26@example.com",
  "user27@example.com",
  "user28@example.com",
  "user29@example.com",
  "user30@example.com"
];

const textReactions = [
  "Wow!",
  "Awesome!",
  "Great job!",
  "Impressive!",
  "Well done!",
  "Fantastic!",
  "Superb!",
  "Excellent!",
  "Bravo!",
  "Outstanding!",
  "Incredible!",
  "Amazing!",
  "Nice work!",
  "You rock!",
  "Kudos!",
  "Brilliant!",
  "Terrific!",
  "Splendid!",
  "Good going!",
  "Way to go!",
  "Thumbs up!",
  "Keep it up!",
  "You nailed it!",
  "Remarkable!",
  "Exceptional!",
  "Stunning!",
  "Awe-inspiring!",
  "Mind-blowing!",
  "Phenomenal!",
  "You're a star!"
];


// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomName = () =>
  `${getRandomArrItem(usernames)}`;

  // Function to generate random assignments that we can add to student object.
const getRandomThoughts = (int) => {
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      thoughtBody: getRandomArrItem(appDescriptions),
      reactions:
    });
  }
  return results;
};


module.exports = { usernames, emails, textReactions };
