from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import cm
from reportlab.platypus import KeepTogether, Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "cv.pdf"


def paragraph(text, style):
    return Paragraph(text, style)


def bullets(items, styles):
    return [paragraph(f"• {item}", styles["bullet"]) for item in items]


def entry(title, period, body, styles):
    header = Table(
        [[paragraph(title, styles["entry_title"]), paragraph(period, styles["period"])]],
        colWidths=[12.9 * cm, 4.4 * cm],
    )
    header.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("ALIGN", (1, 0), (1, 0), "RIGHT"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 0),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 2),
    ]))
    return [KeepTogether([header, *body, Spacer(1, 7)])]


def main():
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    doc = SimpleDocTemplate(
        str(OUTPUT),
        pagesize=letter,
        leftMargin=1.65 * cm,
        rightMargin=1.65 * cm,
        topMargin=1.35 * cm,
        bottomMargin=1.35 * cm,
        title="Mustafa Alp Ekici - CV",
        author="Mustafa Alp Ekici",
    )

    palette = {"navy": colors.HexColor("#0F172A"), "blue": colors.HexColor("#1D4ED8"), "slate": colors.HexColor("#475569")}
    base = getSampleStyleSheet()["BodyText"]
    styles = {
        "name": ParagraphStyle("name", parent=base, fontName="Helvetica-Bold", fontSize=22, leading=25, textColor=palette["navy"], alignment=TA_CENTER, spaceAfter=3),
        "contact": ParagraphStyle("contact", parent=base, fontName="Helvetica", fontSize=8.7, leading=11, textColor=palette["slate"], alignment=TA_CENTER, spaceAfter=12),
        "section": ParagraphStyle("section", parent=base, fontName="Helvetica-Bold", fontSize=11.4, leading=14, textColor=palette["navy"], spaceBefore=5, spaceAfter=5, borderWidth=0.6, borderColor=colors.HexColor("#CBD5E1"), borderPadding=2, borderBottom=1),
        "entry_title": ParagraphStyle("entry_title", parent=base, fontName="Helvetica-Bold", fontSize=9.3, leading=11.3, textColor=palette["navy"]),
        "period": ParagraphStyle("period", parent=base, fontName="Helvetica-Bold", fontSize=8.3, leading=10, textColor=palette["blue"]),
        "body": ParagraphStyle("body", parent=base, fontName="Helvetica", fontSize=8.5, leading=11.1, textColor=palette["slate"], spaceAfter=2),
        "bullet": ParagraphStyle("bullet", parent=base, fontName="Helvetica", fontSize=8.35, leading=10.65, leftIndent=10, firstLineIndent=-7, textColor=palette["slate"], spaceAfter=1.2),
    }

    story = [
        paragraph("Mustafa Alp Ekici", styles["name"]),
        paragraph("Milano, Italy &nbsp; | &nbsp; mustafalpekici@gmail.com &nbsp; | &nbsp; +39 333 829 7495 &nbsp; | &nbsp; linkedin.com/in/mustafalpekici &nbsp; | &nbsp; mustafalpekici.vercel.app", styles["contact"]),
        paragraph("EDUCATION", styles["section"]),
    ]
    story += entry("Politecnico di Milano - MSc in Electronics Engineering", "Sept 2026 - Present", [paragraph("Milano, Italy", styles["body"])], styles)
    story += entry("Middle East Technical University - BSc in Electrical and Electronics Engineering", "Sept 2022 - June 2026", bullets(["GPA: 3.61/4.00", "Specialization: Electronics, Biomedical"], styles), styles)
    story += entry("Middle East Technical University - BSc in Computer Engineering", "Sept 2020 - June 2022", bullets(["Transferred to Electrical and Electronics Engineering Department"], styles), styles)

    story.append(paragraph("EXPERIENCE", styles["section"]))
    story += entry("Research Intern, ERASMUS+ Traineeship - TU Delft, Delft, Netherlands", "July 2025 - Sept 2025", bullets([
        "Designed and simulated Love-mode SAW biosensors in COMSOL; analyzed guiding-layer thickness through eigenfrequency studies.",
        "Developed MATLAB biofilm-formation algorithms and a COMSOL LiveLink workflow for automated 3D biofilm generation.",
        "Optimized sensor geometry and materials, correlating post-integration phase shifts with bacterial quantity.",
    ], styles), styles)
    story += entry("Part-time Engineer - METU MEMS Center, Ankara, Turkey", "Sept 2024 - April 2025", bullets([
        "Researched delta-sigma ADC architectures, readout circuitry for micro-g MEMS accelerometers, and sensor production methods.",
    ], styles), styles)
    story += entry("Engineering Intern - Roketsan, Ankara, Turkey", "Aug 2024 - Sept 2024", bullets([
        "Applied systems-engineering principles to avionics and designed DC-DC converters and Pi filters in LTspice.",
    ], styles), styles)
    story += entry("Research Intern - UMRAM, Ankara, Turkey", "July 2024", bullets([
        "Designed RF bias tees and low-noise amplifiers for 3T MRI systems using Altium Designer and Proteus; performed PCB design, soldering, and network-analyzer testing.",
    ], styles), styles)

    story.append(paragraph("PROJECTS", styles["section"]))
    projects = [
        ("Analog IC Design: Operational Amplifier, Bandgap Reference &amp; LDO", ["Designed and simulated a two-stage CMOS op-amp, bandgap reference, and LDO in XFAB 180 nm CMOS using Cadence.", "Verified over 97 dB DC gain, over 5 MHz unity-gain bandwidth, over 93 dB CMRR, approximately 1.794 V output, 1.4% bandgap variation, over 60 degrees phase margin, and up to -67 dB PSRR at 10 kHz."]),
        ("Review on Silicon-Germanium (SiGe) Technology", ["Reviewed SiGe HBT bandgap engineering, strain physics, fabrication methods, reliability, and sub-THz applications."]),
        ("Neural-Network MAC Tile Accelerator Design (VLSI)", ["Completed RTL-to-layout flow on XFAB 180 nm with Cadence Genus and Innovus; a dual-MAC architecture achieved 2x throughput and 44% energy reduction."]),
        ("X-Ray CT Simulation &amp; Image Reconstruction", ["Developed MATLAB forward-projection and inverse-reconstruction algorithms; filtered backprojection reduced reconstruction error by around 80%."]),
        ("Micro Air Conditioner Designing", ["Designed and prototyped an analog temperature-control system in LTspice with less than plus/minus 0.8 degrees C regulation error."]),
        ("Power Cable Selection Interface Design", ["Built a Python GUI with PyQt5 and Pandas to automate cable selection, electrical calculations, correction factors, and a 10-year economic analysis."]),
    ]
    for title, items in projects:
        story += entry(title, "", bullets(items, styles), styles)

    story.append(paragraph("SKILLS", styles["section"]))
    story.append(paragraph("<b>Programming &amp; Software:</b> Sentaurus TCAD, Cadence, Python (PyQt5, Pandas), MATLAB, COMSOL Multiphysics (LiveLink), LTspice, Altium Designer, Proteus, KiCad", styles["body"]))
    story.append(Spacer(1, 5))
    story.append(paragraph("LANGUAGES", styles["section"]))
    story.append(paragraph("<b>Turkish:</b> Native &nbsp;&nbsp; <b>English:</b> C2 &nbsp;&nbsp; <b>German:</b> A2", styles["body"]))
    story.append(Spacer(1, 5))
    story.append(paragraph("CERTIFICATION", styles["section"]))
    story.append(paragraph("<b>Cleanroom Training Certificate - METU MEMS Center</b><br/>Trained and certified for cleanroom work, including entry procedures, safety rules, and proper dressing.", styles["body"]))
    doc.build(story)


if __name__ == "__main__":
    main()
