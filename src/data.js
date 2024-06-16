import KgfImg from './imgs/kgf.jpeg'
import SangharshYoddhaImg from './imgs/Sangharsh-Yoddha-Movie.jpg'
import NachGaGhumaImg from './imgs/Naach-Ga-Ghuma-Movie.jpg'
import SpiderManNoWayHomeImg from './imgs/Spider-Man.jpeg'
import TopGunMaverickImg from './imgs/Top-Gun.jpeg'
import Avatar2Img from './imgs/avtar.jpeg'
import DuneImg from './imgs/Dune.jpeg'
import NoTimeToDieImg from './imgs/No-Time-to-Die.jpeg'
import BlackWidowImg from './imgs/Black-Widow.jpeg'

const moviesData =[
          {
            id: 1,
            title: "Sangharshyoddha Manoj Jarange Patil",
            description: "The film is based on the life story of Maratha activist Manoj Jarange Patil.",
            duration: "2h 29m",
            genre: ["Biography" , "Drama"],
            rating : "5.7",
            langauage : "Marathi",
            poster: SangharshYoddhaImg
          },
          {
            id: 2,
            title: "Naach Ga Ghuma",
            description: "Naach Ga Ghuma follows the lively duo - the woman of the house and the house help, and how their love-hate relationship unfolds in a humorous drama.",
            duration: "2h 19m",
            genre: ["Comedy","Drama","Family"],
            rating : "8.5",
            langauage : "Marathi",
            poster: NachGaGhumaImg
          },
          {
            id: 3,
            title: "K.G.F 2",
            description: "The blood-soaked land of Kolar Gold Fields (KGF) has a new overlord now - Rocky, whose name strikes fear in the heart of his foes. His allies look up to Rocky as their saviour, the government sees him as a threat to law and order; enemies are clamouring for revenge and conspiring for his downfall. Bloodier battles and darker days await as Rocky continues on his quest for unchallenged supremacy.",
            duration: 142,
            genre: ["Action"],
            rating : "9.3",
            langauage : "Hindi",
            poster: KgfImg
          } ,
          {
            id: 4,
            title: "Avatar: The Way of Water",
            description: "Jake Sully lives with his newfound family formed on the planet of Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na'vi race to protect their home.",
            duration: "3h 10m",
            genre: ["Action", "Adventure", "Sci-Fi"],
            rating: "7.9",
            langauage: "English",
            poster: Avatar2Img,
          },
          {
            id: 5,
            title: "Top Gun: Maverick",
            description: "After more than thirty years of service as one of the Navy's top aviators, Pete Mitchell is where he belongs, pushing the envelope as a courageous test pilot and dodging the advancement in rank that would ground him.",
            duration: "2h 11m",
            genre: ["Action", "Drama"],
            rating: "8.4",
            langauage: "English",
            poster: TopGunMaverickImg,
          },
          {
            id: 6,
            title: "Spider-Man: No Way Home",
            description: "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.",
            duration: "2h 28m",
            genre: ["Action", "Adventure", "Sci-Fi"],
            rating: "8.7",
            langauage: "English",
            poster: SpiderManNoWayHomeImg,
          },
          {
            id: 7,
            title: "Dune",
            description: "Paul Atreides leads nomadic tribes in a battle to control the desert planet Arrakis.",
            duration: "2h 35m",
            genre: ["Adventure", "Drama", "Sci-Fi"],
            rating: "8.2",
            langauage: "English",
            poster: DuneImg,
          },
          {
            id: 8,
            title: "No Time to Die",
            description: "James Bond has left active service. His peace is short-lived when Felix Leiter, an old friend from the CIA, turns up asking for help, leading Bond onto the trail of a mysterious villain armed with dangerous new technology.",
            duration: "2h 43m",
            genre: ["Action", "Adventure", "Thriller"],
            rating: "7.3",
            langauage: "English",
            poster: NoTimeToDieImg,
          },
          {
            id: 9,
            title: "Black Widow",
            description: "Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.",
            duration: "2h 13m",
            genre: ["Action", "Adventure", "Sci-Fi"],
            rating: "6.8",
            langauage: "English",
            poster: BlackWidowImg,
          }
      
]

export default moviesData