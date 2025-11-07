import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import EmergencyOutlinedIcon from '@mui/icons-material/EmergencyOutlined';
import LocalPoliceOutlinedIcon from '@mui/icons-material/LocalPoliceOutlined';
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';

export const numbers = [
  {
    icon: ShieldOutlinedIcon,
    mainHeading: 'Emergency Helpline',
    subHeading: 'National emergency number',
    number: 112,
    iconColor: '#004aad',
    iconGradient: 'linear-gradient(135deg, #cce5ff, #004aad)',
    buttonGradient: 'linear-gradient(135deg, #6ea8fe, #004aad)'
  },
  {
    icon: EmergencyOutlinedIcon,
    mainHeading: 'Ambulance',
    subHeading: 'Medical emergency services',
    number: 108,
    iconColor: '#ff3b3b',
    iconGradient: 'linear-gradient(135deg, #ffd6d6, #ff3b3b)',
    buttonGradient: 'linear-gradient(135deg, #ff8989, #d60000)'
  },
  {
    icon: LocalPoliceOutlinedIcon,
    mainHeading: 'Police',
    subHeading: 'Police emergency',
    number: 100,
    iconColor: '#006600',
    iconGradient: 'linear-gradient(135deg, #d1ffd1, #006600)',
    buttonGradient: 'linear-gradient(135deg, #61d961, #006600)'
  },
  {
    icon: LocalFireDepartmentOutlinedIcon,
    mainHeading: 'Fire Brigade',
    subHeading: 'Fire emergency services',
    number: 101,
    iconColor: '#ff6a00',
    iconGradient: 'linear-gradient(135deg, #ffe4cc, #ff6a00)',
    buttonGradient: 'linear-gradient(135deg, #ff9f57, #ff6a00)'
  }
];
