export const servicesOverview = [
  {
    id: 'pregnancy-care',
    icon: 'ri-heart-pulse-line',
    title: 'Pregnancy Care',
    shortDescription: 'Comprehensive antenatal, natal, and postnatal care designed to support you through every stage of your pregnancy journey.',
    color: 'primary',
  },
  {
    id: 'high-risk-pregnancy',
    icon: 'ri-shield-star-line',
    title: 'High-Risk Pregnancy',
    shortDescription: 'Expert management of complex pregnancies with specialized monitoring, advanced interventions, and compassionate support.',
    color: 'accent',
  },
  {
    id: 'gynecology',
    icon: 'ri-psychotherapy-line',
    title: 'Gynecology',
    shortDescription: 'Comprehensive gynecological care addressing a wide spectrum of women\'s health concerns across all ages and life stages.',
    color: 'secondary',
  },
  {
    id: 'fertility-care',
    icon: 'ri-seedling-line',
    title: 'Fertility Care',
    shortDescription: 'Empathetic fertility evaluation, counselling, and personalized treatment to help you navigate your path to parenthood.',
    color: 'primary',
  },
  {
    id: 'laparoscopic-surgery',
    icon: 'ri-surgical-mask-line',
    title: 'Laparoscopic Surgery',
    shortDescription: 'Advanced minimally invasive surgical techniques for faster recovery, minimal scarring, and superior clinical outcomes.',
    color: 'accent',
  },
  {
    id: 'preventive-healthcare',
    icon: 'ri-shield-check-line',
    title: 'Preventive Healthcare',
    shortDescription: 'Proactive women\'s health screenings, lifestyle counselling, and preventive strategies to maintain lifelong well-being.',
    color: 'secondary',
  },
];

export interface ServiceDetail {
  id: string;
  overview: string;
  benefits: string[];
  conditionsTreated: string[];
  whenToConsult: string[];
  topics: string[];
}

export const serviceDetails: Record<string, ServiceDetail> = {
  'pregnancy-care': {
    id: 'pregnancy-care',
    overview: 'Pregnancy is one of the most transformative journeys in a woman\'s life. Dr. Nikhita provides comprehensive, personalized pregnancy care that begins from preconception counselling and continues through antenatal monitoring, delivery, and postnatal support. Every pregnancy is unique, and every expectant mother deserves individualized attention that addresses her specific needs, concerns, and birth preferences.',
    benefits: [
      'Continuous care from a single dedicated specialist throughout your pregnancy',
      'Personalized birth plan tailored to your preferences and medical needs',
      'Regular monitoring with advanced diagnostic tools for early detection of potential issues',
      'Emotional support and counselling through every trimester',
      'Seamless coordination with hospital facilities for delivery',
      'Comprehensive postnatal follow-up including lactation support and recovery guidance',
    ],
    conditionsTreated: [
      'Routine antenatal care and monitoring',
      'Nausea and vomiting of pregnancy',
      'Gestational diabetes screening and management',
      'Anemia in pregnancy',
      'Thyroid disorders during pregnancy',
      'Fetal growth monitoring and assessment',
    ],
    whenToConsult: [
      'When planning to conceive — for preconception counselling and health optimization',
      'As soon as you have a positive pregnancy test — to begin prenatal care',
      'If you experience bleeding, severe pain, or reduced fetal movements at any stage',
      'For any concerns about your health or your baby\'s well-being during pregnancy',
      'After delivery — for postnatal check-up and recovery assessment',
    ],
    topics: [
      'Antenatal Care',
      'Postnatal Care',
      'Normal Delivery',
      'Pregnancy Monitoring',
      'Pregnancy Counselling',
    ],
  },
  'high-risk-pregnancy': {
    id: 'high-risk-pregnancy',
    overview: 'A high-risk pregnancy requires specialized expertise, vigilant monitoring, and a carefully coordinated care plan. Dr. Nikhita brings over a decade of experience managing complex pregnancies, including those complicated by maternal medical conditions, previous pregnancy complications, multiple gestations, and advanced maternal age. Her MRCOG qualification from the UK ensures international-standard care for even the most challenging cases, giving you and your baby the best possible outcome.',
    benefits: [
      'Specialized high-risk pregnancy monitoring protocols tailored to your specific risk factors',
      'Access to advanced diagnostic and fetal monitoring technology',
      'Coordinated multidisciplinary care with other specialists when needed',
      'Detailed risk assessment and personalized management strategies',
      '24/7 availability for emergencies during your pregnancy',
      'Emotional support and clear communication throughout your high-risk journey',
    ],
    conditionsTreated: [
      'Gestational diabetes — comprehensive glucose monitoring and management',
      'Hypertension and preeclampsia — vigilant blood pressure monitoring and timely intervention',
      'Multiple pregnancy (twins, triplets) — specialized twin pregnancy protocols',
      'Previous pregnancy complications — recurrent miscarriages, preterm birth, IUGR',
      'Advanced maternal age (35+) — enhanced monitoring for age-related risks',
      'Placental abnormalities — placenta previa, accreta, and abruption management',
    ],
    whenToConsult: [
      'If you have pre-existing medical conditions like diabetes, hypertension, or thyroid disorders',
      'If you are over 35 and planning pregnancy or are already pregnant',
      'If you have experienced complications in a previous pregnancy',
      'If you are carrying multiple babies (twins, triplets)',
      'If you develop any concerning symptoms during pregnancy — bleeding, severe headaches, reduced movements',
    ],
    topics: [
      'Gestational Diabetes',
      'Hypertension',
      'Multiple Pregnancy',
      'Previous Pregnancy Complications',
      'Advanced Maternal Age',
    ],
  },
  'gynecology': {
    id: 'gynecology',
    overview: 'Women\'s gynecological health needs evolve through every stage of life — from adolescence through the reproductive years to menopause and beyond. Dr. Nikhita offers comprehensive gynecological care that addresses the full spectrum of women\'s health concerns. Whether you are seeking treatment for a specific condition, need routine preventive care, or want to understand changes in your body, you will find a compassionate, non-judgmental, and expert partner in your healthcare journey.',
    benefits: [
      'Comprehensive diagnosis and treatment of a wide range of gynecological conditions',
      'Evidence-based treatment protocols aligned with international medical guidelines',
      'Minimally invasive diagnostic and treatment approaches whenever possible',
      'Personalized care plans that consider your lifestyle, preferences, and long-term health goals',
      'Continuity of care — building a trusted long-term relationship with your gynecologist',
      'Judgment-free environment where you can discuss any concern openly',
    ],
    conditionsTreated: [
      'PMOS (Polycystic Metabolic Ovary Syndrome) — comprehensive metabolic and hormonal management',
      'Uterine fibroids — medical and surgical management including laparoscopic options',
      'Ovarian cysts — monitoring and surgical intervention when needed',
      'Menstrual disorders — heavy bleeding, irregular periods, painful periods',
      'Hormonal imbalance — comprehensive evaluation and treatment',
      'Pelvic pain — thorough diagnostic workup and targeted treatment',
    ],
    whenToConsult: [
      'For routine annual gynecological check-ups and preventive screenings',
      'If you experience irregular, heavy, or painful periods',
      'If you have pelvic pain, discomfort, or abnormal discharge',
      'For contraception counselling and family planning',
      'If you are approaching or experiencing menopause and need guidance',
      'For any lump, swelling, or unusual changes in your breast or pelvic area',
    ],
    topics: [
      'PMOS',
      'Fibroids',
      'Ovarian Cysts',
      'Menstrual Disorders',
      'Hormonal Imbalance',
      'Pelvic Pain',
    ],
  },
  'fertility-care': {
    id: 'fertility-care',
    overview: 'The journey to parenthood is deeply personal and can sometimes be challenging. Dr. Nikhita provides comprehensive fertility care that combines medical expertise with genuine empathy. With her Fellowship in Reproductive Medicine (FRM), she offers systematic fertility evaluation, evidence-based treatment planning, and emotional support throughout your journey. Her approach is conservative and patient-centered — she believes in starting with the least invasive options and progressing only as needed, always keeping your physical and emotional well-being at the center of every decision.',
    benefits: [
      'Systematic fertility evaluation to identify underlying causes of difficulty conceiving',
      'Conservative treatment approach — starting with basic interventions before advancing',
      'Personalized ovulation induction and cycle monitoring protocols',
      'Emotional support and counselling integrated into every step of treatment',
      'Coordination with advanced fertility centers for IVF/ICSI when indicated',
      'Male factor evaluation and couple-based treatment planning',
    ],
    conditionsTreated: [
      'Ovulation disorders — anovulation, irregular ovulation, PMOS-related infertility',
      'Unexplained infertility — systematic evaluation and stepwise treatment',
      'Recurrent pregnancy loss — comprehensive investigation and management',
      'Endometriosis-related infertility — medical and surgical management',
      'Tubal factor infertility — evaluation and treatment planning',
      'Age-related fertility decline — fertility assessment and counselling',
    ],
    whenToConsult: [
      'If you have been trying to conceive for 12 months without success (under 35)',
      'If you have been trying for 6 months without success (over 35)',
      'If you have irregular or absent menstrual cycles',
      'If you have a known condition that affects fertility (PMOS, endometriosis)',
      'If you have experienced recurrent miscarriages',
      'For preconception fertility assessment and counselling',
    ],
    topics: [
      'Infertility Evaluation',
      'Fertility Counselling',
      'Ovulation Disorders',
      'Reproductive Health Assessment',
      'Treatment Planning',
    ],
  },
  'laparoscopic-surgery': {
    id: 'laparoscopic-surgery',
    overview: 'Dr. Nikhita is a highly skilled laparoscopic surgeon with advanced Fellowship training in Minimal Invasive Surgery (FMIS). Laparoscopic surgery uses small incisions, specialized instruments, and a camera to perform procedures that traditionally required large open incisions. This approach means significantly less pain, shorter hospital stays, faster recovery, minimal scarring, and a quicker return to your normal life. Dr. Nikhita performs a wide range of gynecological laparoscopic procedures with precision, safety, and consistently excellent outcomes.',
    benefits: [
      'Significantly smaller incisions — typically 3-4 tiny cuts of 5-10mm each',
      'Reduced postoperative pain compared to traditional open surgery',
      'Shorter hospital stay — most patients go home within 24 hours',
      'Faster recovery — return to normal activities within 1-2 weeks',
      'Minimal scarring with excellent cosmetic outcomes',
      'Lower risk of surgical site infections and wound complications',
    ],
    conditionsTreated: [
      'Diagnostic laparoscopy — for unexplained pelvic pain or infertility evaluation',
      'Laparoscopic myomectomy — removal of fibroids while preserving the uterus',
      'Laparoscopic ovarian cystectomy — removal of ovarian cysts with ovarian preservation',
      'Laparoscopic hysterectomy — removal of uterus through minimally invasive approach',
      'Endometriosis surgery — excision of endometriotic lesions',
      'Tubal procedures — tubal ligation, tubal recanalization, ectopic pregnancy management',
    ],
    whenToConsult: [
      'If you have been diagnosed with fibroids, ovarian cysts, or endometriosis',
      'If you experience chronic pelvic pain with no clear diagnosis',
      'If you have heavy menstrual bleeding unresponsive to medical treatment',
      'If you are considering hysterectomy and want to explore minimally invasive options',
      'For a second opinion on any gynecological surgical recommendation',
    ],
    topics: [
      'Minimally Invasive Procedures',
      'Diagnostic Laparoscopy',
      'Fibroid Surgery',
      'Ovarian Cyst Surgery',
      'Hysterectomy',
    ],
  },
  'preventive-healthcare': {
    id: 'preventive-healthcare',
    overview: 'Preventive healthcare is the foundation of lifelong wellness. Dr. Nikhita believes that the best healthcare is proactive, not reactive. Her preventive women\'s health program focuses on regular screenings, health assessments, lifestyle counselling, and early detection of potential issues before they become serious problems. From adolescence through post-menopause, she provides age-appropriate preventive care that empowers you to take control of your health at every stage of life.',
    benefits: [
      'Early detection of health issues before they become serious conditions',
      'Personalized health risk assessment based on your age, family history, and lifestyle',
      'Age-appropriate cancer screening protocols (cervical, breast, ovarian)',
      'Lifestyle counselling for nutrition, exercise, stress management, and sleep health',
      'Continuity of care with a doctor who knows your complete health history',
      'Empowerment through health education and preventive health literacy',
    ],
    conditionsTreated: [
      'Routine health check-ups and well-woman examinations',
      'Cervical cancer screening — Pap smear and HPV testing',
      'Breast health assessment — clinical breast examination and mammography referral',
      'Bone health — osteoporosis risk assessment and prevention',
      'Cardiovascular risk assessment in women',
      'Vaccination counselling — HPV, Rubella, and other relevant vaccines',
    ],
    whenToConsult: [
      'For annual well-woman examinations starting from adolescence',
      'When you are due for cancer screening (Pap smear, mammogram)',
      'Before planning pregnancy — for preconception health optimization',
      'If you have a family history of breast, ovarian, or other gynecological cancers',
      'For lifestyle counselling related to weight management, nutrition, or stress',
      'When transitioning through menopause — for preventive health planning',
    ],
    topics: [
      'Routine Checkups',
      'Cancer Screening',
      'Health Assessments',
      'Lifestyle Counselling',
      'Preventive Care',
    ],
  },
};

export const whyChoose = [
  {
    icon: 'ri-time-line',
    title: '12+ Years Experience',
    description: 'Over a decade of dedicated clinical practice in obstetrics, gynecology, and laparoscopic surgery across premier institutions.',
  },
  {
    icon: 'ri-star-line',
    title: '100+ Five Star Reviews',
    description: 'Consistently rated 4.9/5 by patients who value compassionate, expert care and personalized attention at every visit.',
  },
  {
    icon: 'ri-global-line',
    title: 'MRCOG (UK)',
    description: 'Internationally recognized qualification from the Royal College of Obstetricians and Gynaecologists, United Kingdom — cleared on first attempt.',
  },
  {
    icon: 'ri-surgical-mask-line',
    title: 'Advanced Surgical Expertise',
    description: 'Fellowship-trained laparoscopic surgeon (FMIS) performing minimally invasive procedures with superior outcomes and faster recovery.',
  },
  {
    icon: 'ri-heart-2-line',
    title: 'Patient-Centered Care',
    description: 'Every treatment plan is tailored to your unique needs, preferences, and circumstances — you are never just another case number.',
  },
  {
    icon: 'ri-flask-line',
    title: 'Evidence-Based Treatment',
    description: 'All clinical decisions are grounded in the latest medical research and international guidelines, ensuring you receive the highest standard of care.',
  },
];
