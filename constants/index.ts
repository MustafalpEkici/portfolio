import { Linkedin, Mail, Phone } from "lucide-react";

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
  role: "MSc Electronics Engineering Student & Researcher",
  description: "MSc student in Electronics Engineering at Politecnico di Milano, with a BSc in Electrical and Electronics Engineering from METU. I work across analog and mixed-signal IC design, semiconductor devices, VLSI, and biomedical sensing.",
  location: "Milano, Italy",
  tags: ["MSc at Politecnico di Milano", "METU BSc, GPA 3.61/4.00", "Cleanroom Certified"],
};

export const EDUCATION = [
  {
    institution: "Politecnico di Milano",
    degree: "MSc in Electronics Engineering",
    period: "Sept 2026 - Present",
    detail: "Milan, Italy",
  },
  {
    institution: "Middle East Technical University",
    degree: "BSc in Electrical and Electronics Engineering",
    period: "Sept 2022 - June 2026",
    detail: "GPA: 3.61/4.00 | Specialization: Electronics, Biomedical",
  },
];

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
  {
    icon: Phone,
    href: "tel:+393338297495",
    label: "Phone",
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
    title: "Analog IC Design: Op-Amp, Bandgap & LDO",
    description: "Designed and simulated a two-stage CMOS operational amplifier, bandgap reference, and LDO in XFAB 180 nm CMOS using Cadence Virtuoso. Across PVT verification, the op-amp reached over 97 dB DC gain and over 5 MHz unity-gain bandwidth; the integrated regulator delivered approximately 1.794 V with over 60° phase margin.",
    tags: ["Cadence Virtuoso", "Analog IC Design", "XFAB 180 nm", "PVT Verification"],
    link: "/reports/Analog_IC_Design_OpAmp_Bandgap_LDO.pdf",
  },
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
