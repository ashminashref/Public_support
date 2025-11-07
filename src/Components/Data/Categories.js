import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import RestaurantMenuOutlinedIcon from '@mui/icons-material/RestaurantMenuOutlined';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';

export const categories = [
  {
    name: "Home",
    link: "/home",
    icon: HomeOutlinedIcon,
    backgroundColor: "linear-gradient(135deg, #a4cefcff, #1a7affff)"
  },
  {
    name: "Menu",
    link: "/menu",
    icon: RestaurantMenuOutlinedIcon,
    backgroundColor: "linear-gradient(135deg, #fcd397ff, #ffc400ff)"
  },
  {
    name: "Health",
    link: "/health",
    icon: LocalHospitalOutlinedIcon,
    backgroundColor: "linear-gradient(135deg, #ffbbbbff, #ff0000ff)"
  },
  {
    name: "Education",
    link: "/education",
    icon: SchoolOutlinedIcon,
    backgroundColor: "linear-gradient(135deg, #a1ffa1ff, #16ff1eff)"
  }
];
