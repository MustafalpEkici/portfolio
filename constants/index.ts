import { Linkedin, Mail } from "lucide-react";

// --- NAVİGASYON LİNKLERİ ---
export const NAV_LINKS = [
  { name: "About", href: "/" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

// --- HERO (GİRİŞ) BÖLÜMÜ ---
export const HERO_CONTENT = {
  name: "Mustafa Alp Ekici",
  role: "Researcher & EE Student",
  description: "Senior Electrical and Electronics Engineering student at Middle East Technical University. Specializing in semiconductor physics, VLSI design, and device modeling. Passionate about researching next-generation microelectronic devices.",
  location: "Ankara, Turkey",
  tags: ["GPA: 3.55/4.0", "C2 English", "Cleanroom Certified"],
};

// --- SOSYAL MEDYA LİNKLERİ (GitHub Kaldırıldı) ---
export const SOCIAL_LINKS = [
  { 
    icon: Linkedin, 
    href: "https://linkedin.com/in/mustafalpekici", 
    label: "LinkedIn" 
  },
  // GitHub buradan silindiği için sitedeki tüm alanlardan kalkar.
  { 
    icon: Mail, 
    href: "mailto:mustafalpekici@gmail.com", 
    label: "Email" 
  },
];

// --- DENEYİM (EXPERIENCE) ---
export const EXPERIENCE = [
  {
    company: "TU Delft",
    role: "Research Intern",
    period: "July 2025 – Sept 2025",
    location: "Delft, Netherlands",
    description: "Designed Love-mode SAW biosensors in COMSOL, analyzing guiding layer thickness effects. Developed MATLAB algorithms to simulate biofilm formation and established a LiveLink connection with COMSOL for automated 3D biofilm integration.",
    tags: ["COMSOL Multiphysics", "MATLAB", "Biosensors", "Acoustics"],
  },
  {
    company: "METU MEMS Center",
    role: "Part-time Engineer",
    period: "Sept 2024 – April 2025",
    location: "Ankara, Turkey",
    description: "Conducted research on delta-sigma ADC architectures and readout circuitry for micro-g MEMS accelerometers. Investigated sensor production methods and circuit optimization within the project scope.",
    tags: ["MEMS", "ADC Architectures", "Readout Circuits"],
  },
  {
    company: "Roketsan",
    role: "Engineering Intern",
    period: "Aug 2024 – Sept 2024",
    location: "Ankara, Turkey",
    description: "Gained in-depth knowledge of avionics systems. Designed and simulated DC-DC converters and Pi filters using LTspice for power processing units, developing practical skills in electronic circuit analysis.",
    tags: ["Avionics", "Power Electronics", "LTspice"],
  },
  {
    company: "UMRAM",
    role: "Research Intern",
    period: "July 2024",
    location: "Ankara, Turkey",
    description: "Designed RF Bias Tee circuits and Low Noise Amplifiers (LNA) for 3T MRI systems using Altium Designer and Proteus. Gained hands-on experience in PCB design, soldering, and testing with network analyzers.",
    tags: ["RF Design", "Altium Designer", "MRI Systems", "PCB"],
  },
];

// --- PROJELER (PROJECTS) ---
export const PROJECTS = [
  {
    title: "Neural-Network Accelerator (VLSI)",
    description: "Designed a Neural Network Accelerator on XFAB 180nm technology. Completed the full RTL-to-GDSII flow using Cadence Genus & Innovus. Developed a Dual-MAC architecture achieving 2x throughput and 44% energy reduction compared to baseline.",
    tags: ["Cadence Innovus", "Verilog", "RTL-to-GDSII", "Digital Design"],
    link: "/reports/Neural_Network_MAC_Tile_Accelerator_Report.pdf",
  },
  {
    title: "SiGe HBT Technical Review",
    description: "Authored a comprehensive technical review on Silicon-Germanium (SiGe) Heterojunction Bipolar Transistors (HBTs). Analyzed bandgap engineering, strain physics, and fabrication methods like UHV/CVD for sub-THz applications.",
    tags: ["Device Physics", "SiGe", "Semiconductors", "Bandgap Engineering"],
    link: "/reports/SiGe_Technology_Review.pdf",
  },
  {
    title: "X-Ray CT Simulation Tool",
    description: "Developed a MATLAB-based tool for Forward Projection and Inverse Reconstruction algorithms. Implemented Ray-Driven Exact Path Length methods and demonstrated 80% reconstruction error reduction with Filtered Backprojection.",
    tags: ["MATLAB", "Image Reconstruction", "Algorithms"],
    link: "/reports/X-Ray_CT_Simulation_Report.pdf",
  },
  {
    title: "Micro Air Conditioner",
    description: "Designed an analog micro air conditioner integrating sensing, control, and display units. Achieved autonomous temperature regulation with less than ±0.8°C error using LTspice simulations and breadboard prototyping.",
    tags: ["Analog Design", "Control Systems", "LTspice"],
    link: "/reports/MicroAirConditioner.pdf",
  },
  {
    title: "Power Cable Selection GUI",
    description: "Designed a Python-based GUI tool (PyQt5) to automate power cable selection. Implemented algorithms for current rating, voltage drop, and economic analysis based on international standards.",
    tags: ["Python", "PyQt5", "Automation"],
    link: "/reports/Power_Cable_Selection_Interface.pdf",
  }
];