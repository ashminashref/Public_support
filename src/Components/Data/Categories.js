// --- 1. Import All Necessary Icons ---
// (Updated list for your new categories)

// Emergency & Health
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import LocalPoliceOutlinedIcon from '@mui/icons-material/LocalPoliceOutlined';
import FireTruckOutlinedIcon from '@mui/icons-material/FireTruckOutlined';
import BloodtypeOutlinedIcon from '@mui/icons-material/BloodtypeOutlined';
import LocalPharmacyOutlinedIcon from '@mui/icons-material/LocalPharmacyOutlined';
import MedicalServicesOutlinedIcon from '@mui/icons-material/MedicalServicesOutlined'; // For Clinics/Doctors

// Transport
import DirectionsBusOutlinedIcon from '@mui/icons-material/DirectionsBusOutlined';
import DirectionsCarOutlinedIcon from '@mui/icons-material/DirectionsCarOutlined';
import HailOutlinedIcon from '@mui/icons-material/HailOutlined'; // For Taxi
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined'; // For Goods

// Services
import ConstructionOutlinedIcon from '@mui/icons-material/ConstructionOutlined';
import PlumbingOutlinedIcon from '@mui/icons-material/PlumbingOutlined';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import CarRepairOutlinedIcon from '@mui/icons-material/CarRepairOutlined';
import FormatPaintOutlinedIcon from '@mui/icons-material/FormatPaintOutlined'; // For Painter

// Shops
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';
import SetMealOutlinedIcon from '@mui/icons-material/SetMealOutlined'; // For Fish Market

// Community & Govt
import CorporateFareOutlinedIcon from '@mui/icons-material/CorporateFareOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined'; // For Associations
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import GavelOutlinedIcon from '@mui/icons-material/GavelOutlined'; // For Govt Reps


// --- 2. New Category Structure (Subcategories Removed) ---

export const mainCategories = [
  // 1. Emergency
  {
    name: "Emergency",
    mainLink: "/emergency",
    icon: LocalHospitalOutlinedIcon,
    backgroundColor: "linear-gradient(135deg, #d32f2f, #b71c1c)", // Dark Red
  },

  // 2. Bus Time
  {
    name: "Bus Time",
    mainLink: "/bustime", // This main link might go directly to the details page
    icon: DirectionsBusOutlinedIcon,
    backgroundColor: "linear-gradient(135deg, #e64a19, #bf360c)", // Bus Orange
  },
  
  // 3. Vehicles
  {
    name: "Vehicles",
    mainLink: "/subcategory", // You might want to change this link
    icon: DirectionsCarOutlinedIcon,
    backgroundColor: "linear-gradient(135deg, #00c6ff, #0072ff)", // Vibrant Blue
  },

  // 4. Workers
  {
    name: "Workers",
    mainLink: "/workers",
    icon: ConstructionOutlinedIcon,
    backgroundColor: "linear-gradient(135deg, #485563, #29323c)", // Steel Grey
  },
  
  // 5. Blood Bank
  {
    name: "Blood Bank",
    mainLink: "/bloodbank",
    icon: BloodtypeOutlinedIcon,
    backgroundColor: "linear-gradient(135deg, #e53935, #c62828)", // Blood Red
  },

  // 6. Health
  {
    name: "Health",
    mainLink: "/health",
    icon: MedicalServicesOutlinedIcon,
    backgroundColor: "linear-gradient(135deg, #56ab2f, #a8e063)", // Health Green
  },

  // 7. Shops
  {
    name: "Shops",
    mainLink: "/shops",
    icon: ShoppingCartOutlinedIcon,
    backgroundColor: "linear-gradient(135deg, #00b09b, #96c93d)", // Teal
  },

  // 8. Organizations
  {
    name: "Organizations",
    mainLink: "/organizations",
    icon: CorporateFareOutlinedIcon,
    backgroundColor: "linear-gradient(135deg, #8E2DE2, #4A00E0)", // Deep Purple
  },
  
  // 9. Govt. Representatives
  {
    name: "Govt. Representatives",
    mainLink: "/government",
    icon: GavelOutlinedIcon,
    backgroundColor: "linear-gradient(135deg, #CCA43B, #9E7B1B)", // Gold
  },
];