// --- 1. Import All Necessary Icons ---
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import LocalPoliceOutlinedIcon from '@mui/icons-material/LocalPoliceOutlined';
import FireTruckOutlinedIcon from '@mui/icons-material/FireTruckOutlined';
import BloodtypeOutlinedIcon from '@mui/icons-material/BloodtypeOutlined';
import LocalPharmacyOutlinedIcon from '@mui/icons-material/LocalPharmacyOutlined';
import MedicalServicesOutlinedIcon from '@mui/icons-material/MedicalServicesOutlined';
import DirectionsBusOutlinedIcon from '@mui/icons-material/DirectionsBusOutlined';
import DirectionsCarOutlinedIcon from '@mui/icons-material/DirectionsCarOutlined';
import HailOutlinedIcon from '@mui/icons-material/HailOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import ConstructionOutlinedIcon from '@mui/icons-material/ConstructionOutlined';
import PlumbingOutlinedIcon from '@mui/icons-material/PlumbingOutlined';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import CarRepairOutlinedIcon from '@mui/icons-material/CarRepairOutlined';
import FormatPaintOutlinedIcon from '@mui/icons-material/FormatPaintOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';
import SetMealOutlinedIcon from '@mui/icons-material/SetMealOutlined';
import CorporateFareOutlinedIcon from '@mui/icons-material/CorporateFareOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import GavelOutlinedIcon from '@mui/icons-material/GavelOutlined';
import BakeryDiningOutlinedIcon from '@mui/icons-material/BakeryDiningOutlined'; // Example for Bakery
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined'; // Example for Stationery
import SupermarketOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined'; // Example for Supermarket

// --- 2. Export the Category Structure with Subcategories ---
export const mainCategories = [
  // 1. Emergency (No subcategories needed, directly lists services)
  {
    name: "Emergency",
    mainLink: "/emergency",
    icon: LocalHospitalOutlinedIcon,
    backgroundColor: "linear-gradient(135deg, #d32f2f, #b71c1c)",
    // Here we'll imagine a direct list of services for this category
    items: [ // This is the actual content for this page
      { id: 'hospital', name: 'Government Hospital', contact: '0498512345', details: '24/7 emergency care.' },
      { id: 'police', name: 'Local Police Station', contact: '100', details: 'Emergency and non-emergency calls.' },
      { id: 'fireforce', name: 'Fire & Rescue Services', contact: '101', details: 'Firefighting and rescue.' },
      { id: 'bloodbank', name: 'City Blood Bank', contact: '0498598765', details: 'Blood donation and requests.' },
    ],
  },

  // 2. Bus Time (No subcategories needed, directly lists timings)
  {
    name: "Bus Time",
    mainLink: "/bustime",
    icon: DirectionsBusOutlinedIcon,
    backgroundColor: "linear-gradient(135deg, #e64a19, #bf360c)",
    items: [ // This is the actual content for this page
      { id: 'route1', name: 'Route 1: City Center to Market', time: 'Every 15 min', details: 'First bus 6 AM, last bus 9 PM.' },
      { id: 'route2', name: 'Route 2: Train Station to Beach', time: 'Every 30 min', details: 'First bus 7 AM, last bus 10 PM.' },
    ],
  },
  
  // 3. Vehicles (Has subcategories)
  {
    name: "Vehicles",
    mainLink: "/vehicles",
    icon: DirectionsCarOutlinedIcon,
    backgroundColor: "linear-gradient(135deg, #00c6ff, #0072ff)",
    subcategories: [
      { id: 'auto', name: 'Auto', icon: DirectionsCarOutlinedIcon, link: '/vehicles/auto', count: '50+ available' },
      { id: 'taxi', name: 'Taxi', icon: HailOutlinedIcon, link: '/vehicles/taxi', count: '30+ available' },
      { id: 'goods', name: 'Goods Vehicle', icon: LocalShippingOutlinedIcon, link: '/vehicles/goods', count: '10+ available' },
    ],
  },

  // 4. Workers (Has subcategories)
  {
    name: "Workers",
    mainLink: "/workers",
    icon: ConstructionOutlinedIcon,
    backgroundColor: "linear-gradient(135deg, #485563, #29323c)",
    subcategories: [
      { id: 'plumber', name: 'Plumber', icon: PlumbingOutlinedIcon, link: '/workers/plumber', count: '25 nearby' },
      { id: 'electrician', name: 'Electrician', icon: BoltOutlinedIcon, link: '/workers/electrician', count: '30 nearby' },
      { id: 'mechanic', name: 'Mechanic', icon: CarRepairOutlinedIcon, link: '/workers/mechanic', count: '15 nearby' },
      { id: 'painter', name: 'Painter', icon: FormatPaintOutlinedIcon, link: '/workers/painter', count: '10 nearby' },
      { id: 'labour', name: 'Local Labour', icon: ConstructionOutlinedIcon, link: '/workers/labour', count: '40 nearby' },
    ],
  },
  
  // 5. Blood Bank (No subcategories, direct content similar to Emergency)
  {
    name: "Blood Bank",
    mainLink: "/bloodbank",
    icon: BloodtypeOutlinedIcon,
    backgroundColor: "linear-gradient(135deg, #e53935, #c62828)",
    items: [
      { id: 'bbank1', name: 'Central Blood Bank', contact: '0498511223', details: 'All blood groups available' },
      { id: 'bbank2', name: 'District Hospital Blood Bank', contact: '0498533445', details: 'Limited stock' },
    ],
  },

  // 6. Health (Has subcategories)
  {
    name: "Health",
    mainLink: "/health",
    icon: MedicalServicesOutlinedIcon,
    backgroundColor: "linear-gradient(135deg, #56ab2f, #a8e063)",
    subcategories: [
      { id: 'pharmacy', name: 'Pharmacy', icon: LocalPharmacyOutlinedIcon, link: '/health/pharmacy', count: '40 nearby' },
      { id: 'doctors', name: 'Clinics & Doctors', icon: MedicalServicesOutlinedIcon, link: '/health/doctors', count: '60 nearby' },
    ],
  },

  // 7. Shops (Has subcategories, matching Image 2 style)
  {
    name: "Shops",
    mainLink: "/shops",
    icon: ShoppingCartOutlinedIcon,
    backgroundColor: "linear-gradient(135deg, #00b09b, #96c93d)",
    subcategories: [
      { id: 'restaurant', name: 'Restaurant', icon: RestaurantOutlinedIcon, link: '/shops/restaurant', count: '12 nearby' },
      { id: 'supermarket', name: 'Supermarket', icon: SupermarketOutlinedIcon, link: '/shops/supermarket', count: '8 nearby' },
      { id: 'bakery', name: 'Bakery', icon: BakeryDiningOutlinedIcon, link: '/shops/bakery', count: '6 nearby' },
      { id: 'stationery', name: 'Stationery', icon: AutoStoriesOutlinedIcon, link: '/shops/stationery', count: '5 nearby' },
      { id: 'fishmarket', name: 'Fish Market', icon: SetMealOutlinedIcon, link: '/shops/fishmarket', count: '3 nearby' },
      { id: 'othershops', name: 'Other Shops', icon: StorefrontOutlinedIcon, link: '/shops/othershops', count: '20+ nearby' },
    ],
  },

  // 8. Organizations (Has subcategories)
  {
    name: "Organizations",
    mainLink: "/organizations",
    icon: CorporateFareOutlinedIcon,
    backgroundColor: "linear-gradient(135deg, #8E2DE2, #4A00E0)",
    subcategories: [
      { id: 'corporate', name: 'Corporate Offices', icon: CorporateFareOutlinedIcon, link: '/organizations/corporate', count: '10 nearby' },
      { id: 'associations', name: 'Associations', icon: GroupsOutlinedIcon, link: '/organizations/associations', count: '8 nearby' },
    ],
  },
  
  // 9. Govt. Representatives (Has subcategories)
  {
    name: "Govt. Representatives",
    mainLink: "/government",
    icon: GavelOutlinedIcon,
    backgroundColor: "linear-gradient(135deg, #CCA43B, #9E7B1B)",
    subcategories: [
      { id: 'officers', name: 'Govt. Officers', icon: AccountBalanceOutlinedIcon, link: '/government/officers', count: '5 available' },
      { id: 'localreps', name: 'Local Representatives', icon: GavelOutlinedIcon, link: '/government/localreps', count: '12 available' },
    ],
  },
];

// --- Example of specific items for a SUB-category like /shops/restaurant ---
// In a real app, this would come from an API
export const shopRestaurants = [
  { id: 'greenleaf', name: 'Green Leaf Cafe', rating: 4.5, distance: '0.5 km' },
  { id: 'royalspice', name: 'Royal Spice Restaurant', rating: 4.2, distance: '0.8 km' },
  { id: 'urban', name: 'The Urban Kitchen', rating: 4.7, distance: '1.2 km' },
  { id: 'sunrise', name: 'Sunrise Diner', rating: 4.3, distance: '1.5 km' },
  { id: 'cozycorner', name: 'Cozy Corner Bistro', rating: 4.0, distance: '2.1 km' },
];

export const emergencyHospitals = [
  { id: 'general', name: 'City General Hospital', contact: '0498522222', address: 'Main St', open: '24/7' },
  { id: 'childrens', name: 'Childrens Medical Center', contact: '0498533333', address: 'Oak Ave', open: 'Mon-Fri 8am-8pm' },
];

// ... you would have similar data for other subcategories or direct lists
// e.g., shopSupermarkets, workerPlumbers, etc.