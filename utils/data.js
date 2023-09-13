const usersData = [
  {
    username: 'user1',
    email: 'user1@example.com',
  },
  {
    username: 'user2',
    email: 'user2@example.com',
  },
  {
    username: 'user3',
    email: 'user3@example.com',
  },
  {
    username: 'user4',
    email: 'user4@example.com',
  },
  {
    username: 'user5',
    email: 'user5@example.com',
  },
  {
    username: 'uniqueuser1',
    email: 'uniqueuser1@example.com',
  },
  {
    username: 'uniqueuser2',
    email: 'uniqueuser2@example.com',
  },
  {
    username: 'awesomeuser',
    email: 'awesomeuser@example.com',
  },
  {
    username: 'cooluser',
    email: 'cooluser@example.com',
  },
  {
    username: 'sampleuser',
    email: 'sampleuser@example.com',
  },
];

const thoughtsData = [
  {
    thoughtText: 'This is thought 1',
    reactions: [
      {
        reactionBody: 'Reaction 1 to thought 1',
        username: 'user1',
      },
      {
        reactionBody: 'Reaction 2 to thought 1',
        username: 'user2',
      },
    ],
  },
  {
    thoughtText: 'This is thought 2',
    reactions: [
      {
        reactionBody: 'Reaction 1 to thought 2',
        username: 'user3',
      },
    ],
  },
  {
    thoughtText: 'This is thought 3',
  },
];



module.exports = { usersData, thoughtsData };
