import ocean8 from "./images/ocean8.jpeg";
import midnightSun from "./images/midnightSun.jpeg";
import indestructibles2 from "./images/lesIndestructibles2.jpeg";
import sansUnBruit from "./images/sansUnBruit.jpeg";
import creed2 from "./images/creed2.jpeg";
import starWars from "./images/starWars.jpeg";
import pulpFiction from "./images/pulpFiction.jpeg";
import seven from "./images/seven.jpeg";
import inception from "./images/inception.jpeg";
import goneGirl from "./images/goneGirl.jpeg";

const movies = [
  {
    id: "1",
    title: "Oceans 8",
    category: "Comedy",
    likes: 4,
    dislikes: 1,
    image: ocean8,
  },
  {
    id: "2",
    title: "Midnight Sun",
    category: "Comedy",
    likes: 2,
    dislikes: 0,
    image: midnightSun,
  },
  {
    id: "3",
    title: "Les indestructibles 2",
    category: "Animation",
    likes: 3,
    dislikes: 1,
    image: indestructibles2,
  },
  {
    id: "4",
    title: "Sans un bruit",
    category: "Thriller",
    likes: 6,
    dislikes: 6,
    image: sansUnBruit,
  },
  {
    id: "5",
    title: "Creed II",
    category: "Drame",
    likes: 16,
    dislikes: 2,
    image: creed2,
  },
  {
    id: "6",
    title: "Star Wars",
    category: "Thriller",
    likes: 11,
    dislikes: 3,
    image: starWars,
  },
  {
    id: "7",
    title: "Pulp Fiction",
    category: "Thriller",
    likes: 12333,
    dislikes: 32,
    image: pulpFiction,
  },
  {
    id: "8",
    title: "Seven",
    category: "Thriller",
    likes: 2,
    dislikes: 1,
    image: seven,
  },
  {
    id: "9",
    title: "Inception",
    category: "Thriller",
    likes: 2,
    dislikes: 1,
    image: inception,
  },
  {
    id: "10",
    title: "Gone Girl",
    category: "Thriller",
    likes: 22,
    dislikes: 12,
    image: goneGirl,
  },
];

export const movies$ = new Promise((resolve, reject) =>
  setTimeout(resolve, 2000, movies)
);
