export const listeDesideriOwn =  [
    {
      id: 1,
      name: "Own 1",
      slug: "own-1",
      notify_booked: false,
      invited_users: [],
      followers: [],
      desideri: [],
      created_at: "01/06/2021"
    },
    {
      id: 2,
      name: "Own 2",
      slug: "own-1",
      notify_booked: false,
      invited_users: [],
      followers: [],
      desideri: [],
      created_at: "01/06/2021"
    },
    {
      id: 3,
      name: "Own 3",
      slug: "own-1",
      notify_booked: false,
      invited_users: [],
      followers: [],
      desideri: [],
      created_at: "01/06/2021"
    }
];

export const listeDesideriInvite =  [
    {
      id: 1,
      name: "Invite 1",
      slug: "invite-1",
      notify_booked: false,
      invited_users: [],
      followers: [],
      desideri: [],
      created_at: "01/06/2021"
    },
    {
      id: 2,
      name: "Invite 2",
      slug: "invite-2",
      notify_booked: false,
      invited_users: [],
      followers: [],
      desideri: [],
      created_at: "01/06/2021"
    }
];

export const lastDesideri = [
  {
    id: 1,
    name: "Play Station 5",
    categoryId: 1,
    listaDesiderio: {
      id: 1,
      name: "Naps Birthday",
      slug: "naps-birthday",
      created_at: "01/06/2021"
    },
    price: 499.99,
    slug: "play-station-5",
  },
  {
    id: 2,
    name: "Play Station 5",
    categoryId: 1,
    listaDesiderio: {
      id: 1,
      name: "Naps Birthday",
      slug: "naps-birthday",
      created_at: "01/06/2021"
    },
    price: 499.99,
    slug: "play-station-5"
  },
  {
    id: 3,
    name: "Play Station 5",
    categoryId: 1,
    listaDesiderio: {
      id: 1,
      name: "Naps Birthday",
      slug: "naps-birthday",
      created_at: "01/06/2021"
    },
    price: 499.99,
    slug: "play-station-5"
  }
]

export const listaDesiderioDetail = {
    id: 1,
    name: "Naps Birthday",
    slug: "naps-birthday",
    notify_booked: false,
    invited_users: [],
    followers: [],
    desideri: [
      {
        id: 1,
        name: "Play Station 5",
        categoryId: 1,
        listaDesiderio: {
          id: 1,
          name: "Naps Birthday",
          slug: "naps-birthday",
          created_at: "01/06/2021"
        },
        price: 499.99,
        slug: "play-station-5",
        booked_by: {
          id: 1,
          email: "gabriele.nap@gmail.com",
          username: "napsryu"
        }
      },
      {
        id: 2,
        name: "Play Station 5",
        categoryId: 1,
        listaDesiderio: {
          id: 1,
          name: "Naps Birthday",
          slug: "naps-birthday",
          created_at: "01/06/2021"
        },
        price: 499.99,
        slug: "play-station-5",
        booked_by: undefined
      },
      {
        id: 3,
        name: "Play Station 5",
        categoryId: 1,
        listaDesiderio: {
          id: 1,
          name: "Naps Birthday",
          slug: "naps-birthday",
          created_at: "01/06/2021"
        },
        price: 499.99,
        slug: "play-station-5",
        booked_by: undefined
      },
    ],
    keep_surprise: false,
    public: false,
    owner: {
      id: 1,
      email: "gabriele.nap@gmail.com",
      username: "napsryu"
    },
    created_at: "01/06/2021",
    description: "I created this list for my bhirtday, choose what you would gift to me!"
}

export const desiderioDetail = {
  id: 1,
    name: "Play Station 5",
    categoryId: 1,
    listaDesiderio: {
      id: 1,
      name: "Naps Birthday",
      slug: "naps-birthday",
      created_at: "01/06/2021"
    },
    price: 499.99,
    slug: "play-station-5",
    place: "http://somewhere.com",
    description: "fantastic console by sony"
}

export const categories = [
  {
    id: 1,
    icon: "category_1.png",
    label: "Nerd things"
  },
  {
    id: 2,
    icon: "category_2.png",
    label: "Technology"
  },
  {
    id: 3,
    icon: "category_3.png",
    label: "Fashion/Style"
  },
  {
    id: 4,
    icon: "category_4.png",
    label: "Books"
  },
  {
    id: 5,
    icon: "category_5.png",
    label: "Travels"
  },
  {
    id: 6,
    icon: "category_6.png",
    label: "For the home"
  },
  {
    id: 7,
    icon: "category_7.png",
    label: "Other"
  }
]