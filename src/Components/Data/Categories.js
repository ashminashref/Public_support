// 1. Updated Material-UI Icon Imports
// (Imports remain the same, just re-ordered for clarity)
import DirectionsCarOutlinedIcon from '@mui/icons-material/DirectionsCarOutlined';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import LocalPharmacyOutlinedIcon from '@mui/icons-material/LocalPharmacyOutlined';
import HailOutlinedIcon from '@mui/icons-material/HailOutlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SetMealOutlinedIcon from '@mui/icons-material/SetMealOutlined'; // Icon for Fish Market
import DirectionsBusOutlinedIcon from '@mui/icons-material/DirectionsBusOutlined';
import CarRepairOutlinedIcon from '@mui/icons-material/CarRepairOutlined';
import PlumbingOutlinedIcon from '@mui/icons-material/PlumbingOutlined';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import TempleHinduOutlinedIcon from '@mui/icons-material/TempleHinduOutlined';
import MosqueOutlinedIcon from '@mui/icons-material/MosqueOutlined';
import ChurchOutlinedIcon from '@mui/icons-material/ChurchOutlined';
import FormatPaintOutlinedIcon from '@mui/icons-material/FormatPaintOutlined';
import ConstructionOutlinedIcon from '@mui/icons-material/ConstructionOutlined';
import CorporateFareOutlinedIcon from '@mui/icons-material/CorporateFareOutlined';
import DeckOutlinedIcon from '@mui/icons-material/DeckOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';


// 2. Updated Categories Array
// Re-ordered by user priority: Urgent > Daily Needs > Services > Institutions

export const categories = [
  // --- Tier 1: Urgent & High Priority ---
  {
    name: "Hospital",
    link: "/hospital",
    icon: LocalHospitalOutlinedIcon,
    backgroundColor: "linear-gradient(135deg, #f85032, #e73827)" // Strong Red
  },
  {
    name: "Pharmacy", // NEW
    link: "/pharmacy",
    icon: LocalPharmacyOutlinedIcon,
    backgroundColor: "linear-gradient(135deg, #56ab2f, #a8e063)" // Health Green
  },
  {
    name: "Auto",
    link: "/auto",
    icon: DirectionsCarOutlinedIcon,
    backgroundColor: "linear-gradient(135deg, #00c6ff, #0072ff)" // Vibrant Blue
  },
  {
    name: "Driver",
    link: "/driver",
    icon: HailOutlinedIcon,
    backgroundColor: "linear-gradient(135deg, #0bab64, #3bb78f)" // Rich Green
  },
  {
    name: "ATM & Banks", // NEW
    link: "/banks",
    icon: LocalAtmOutlinedIcon,
    backgroundColor: "linear-gradient(135deg, #BFC3C8, #99A1AB)" // Silver/Steel
  },

  // --- Tier 2: Daily Needs & Food ---
  {
    name: "Restaurants", // NEW
    link: "/restaurants",
    icon: RestaurantOutlinedIcon,
    backgroundColor: "linear-gradient(135deg, #f46b45, #eea849)" // Warm Food Orange
  },
  {
    name: "Super Market",
    link: "/supermarket",
    icon: ShoppingCartOutlinedIcon,
    backgroundColor: "linear-gradient(135deg, #00b09b, #96c93d)" // Teal to Lime Green
  },
  {
    name: "Fish Market", // NEW
    link: "/fishmarket",
    icon: SetMealOutlinedIcon,
    backgroundColor: "linear-gradient(135deg, #2193b0, #6dd5ed)" // Ocean Blue
  },
  {
    name: "Bus Time",
    link: "/bustime",
    icon: DirectionsBusOutlinedIcon,
    backgroundColor: "linear-gradient(135deg, #d50000, #b71c1c)" // Strong Bus Red
  },

  // --- Tier 3: Key Services ---
  {
    name: "Mechanic", // NEW
    link: "/mechanic",
    icon: CarRepairOutlinedIcon,
    backgroundColor: "linear-gradient(135deg, #485563, #29323c)" // Steel Grey/Black
  },
  {
    name: "Plumber",
    link: "/plumber",
    icon: PlumbingOutlinedIcon,
    backgroundColor: "linear-gradient(135deg, #00a1ff, #007bff)" // Water Blue
  },
  {
    name: "Electrician",
    link: "/electrician",
    icon: BoltOutlinedIcon,
    backgroundColor: "linear-gradient(135deg, #fdd835, #ffb300)" // Electric Yellow
  },

  // --- Tier 4: Institutions & Information ---
  {
    name: "School",
    link: "/school",
    icon: SchoolOutlinedIcon,
    backgroundColor: "linear-gradient(135deg, #f7971e, #ffd200)" // Bright Gold/Orange
  },
  {
    name: "Govt. Officers",
    link: "/government",
    icon: AccountBalanceOutlinedIcon,
    backgroundColor: "linear-gradient(135deg, #CCA43B, #9E7B1B)" // Burnished Gold
  },
  {
    name: "Local News", // NEW
    link: "/news",
    icon: NewspaperOutlinedIcon,
    backgroundColor: "linear-gradient(135deg, #606c88, #3f4c6b)" // Newsprint Grey
  },
  {
    name: "Shop",
    link: "/shop",
    icon: StorefrontOutlinedIcon,
    backgroundColor: "linear-gradient(135deg, #ec407a, #d81b60)" // Vibrant Pink
  },

  // --- Tier 5: Community & Religion ---
  {
    name: "Temple",
    link: "/temple",
    icon: TempleHinduOutlinedIcon,
    backgroundColor: "linear-gradient(135deg, #ff9933, #ff5e00)" // Bright Saffron
  },
  {
    name: "Masjid",
    link: "/masjid",
    icon: MosqueOutlinedIcon,
    backgroundColor: "linear-gradient(135deg, #00695C, #004D40)" // Deep Emerald
  },
  {
    name: "Church", // NEW
    link: "/church",
    icon: ChurchOutlinedIcon,
    backgroundColor: "linear-gradient(135deg, #e8e8e8, #b0bec5)" // Marble White/Grey
  },

  // --- Tier 6: Other Services & Leisure ---
  {
    name: "Painter",
    link: "/painter",
    icon: FormatPaintOutlinedIcon,
    backgroundColor: "linear-gradient(135deg, #d53369, #ba4270)" // Rose/Magenta
  },
  {
    name: "Local Labour", // Renamed
    link: "/construction",
    icon: ConstructionOutlinedIcon,
    backgroundColor: "linear-gradient(135deg, #8d6e63, #6d4c41)" // Earthtone Brown
  },
  {
    name: "Organizations",
    link: "/organizations",
    icon: CorporateFareOutlinedIcon,
    backgroundColor: "linear-gradient(135deg, #8E2DE2, #4A00E0)" // Deep Purple
  },
  {
    name: "Tourist Spots", // NEW
    link: "/tourism",
    icon: DeckOutlinedIcon,
    backgroundColor: "linear-gradient(135deg, #00F260, #0575E6)" // Vibrant Green to Blue
  },
  {
    name: "Education",
    link: "/education",
    icon: MenuBookOutlinedIcon,
    backgroundColor: "linear-gradient(135deg, #1565C0, #1E88E5)" // Deep Scholar Blue
  },
];