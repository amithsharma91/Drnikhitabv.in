export const laparoscopicBenefits = [
  {
    id: 'smaller-incisions',
    icon: 'ri-contrast-drop-line',
    title: 'Smaller Incisions',
    description: 'Procedures performed through 5-10mm keyhole incisions instead of large abdominal openings, resulting in minimal tissue trauma and significantly reduced post-operative discomfort.',
  },
  {
    id: 'faster-recovery',
    icon: 'ri-timer-flash-line',
    title: 'Faster Recovery',
    description: 'Most patients return to normal daily activities within 1-2 weeks compared to 6-8 weeks with traditional open surgery, allowing quicker return to work and family life.',
  },
  {
    id: 'less-pain',
    icon: 'ri-emotion-happy-line',
    title: 'Less Post-Operative Pain',
    description: 'Smaller incisions mean reduced nerve and muscle disruption, translating to significantly less pain after surgery and reduced need for pain medications during recovery.',
  },
  {
    id: 'minimal-scarring',
    icon: 'ri-magic-line',
    title: 'Minimal Scarring',
    description: 'Tiny keyhole incisions heal with barely visible scars, preserving the aesthetic appearance of the abdomen — a particularly important consideration for many women.',
  },
  {
    id: 'shorter-stay',
    icon: 'ri-home-line',
    title: 'Shorter Hospital Stay',
    description: 'Many laparoscopic procedures are performed as day care or require only a single overnight stay, dramatically reducing hospital costs and improving patient comfort.',
  },
  {
    id: 'reduced-infection',
    icon: 'ri-shield-check-line',
    title: 'Reduced Infection Risk',
    description: 'Minimal tissue exposure during surgery significantly lowers the risk of post-operative wound infections and other complications compared to traditional open approaches.',
  },
];

export const laparoscopicConditions = [
  {
    id: 'fibroids',
    icon: 'ri-bubble-chart-line',
    title: 'Uterine Fibroids',
    description: 'Non-cancerous growths in the uterus causing heavy bleeding, pelvic pressure, and pain. Laparoscopic myomectomy removes fibroids while preserving the uterus.',
    image: 'https://storage.readdy-site.link/project_files/537556cb-a0de-4c81-8866-d48774229505/1aa22dde-6d9f-4bf7-86a7-cae6be074b18_IMG_20260617_152629.jpg',
    symptoms: 'Heavy menstrual bleeding, pelvic pain, pressure symptoms, frequent urination, lower back pain.',
    diagnosis: 'Ultrasound imaging, MRI when needed, hysteroscopy for submucosal fibroids.',
    treatmentOptions: 'Laparoscopic myomectomy, laparoscopic hysterectomy for completed families, medications for symptom management.',
  },
  {
    id: 'ovarian-cysts',
    icon: 'ri-drop-line',
    title: 'Ovarian Cysts',
    description: 'Fluid-filled sacs developing on or within the ovaries. Laparoscopic cystectomy removes cysts while preserving healthy ovarian tissue and fertility.',
    image: 'https://storage.readdy-site.link/project_files/537556cb-a0de-4c81-8866-d48774229505/0bd88fe6-3953-4225-bfe8-abbcaa6ab4b7_IMG_20260617_144014.jpg',
    symptoms: 'Pelvic pain, bloating, irregular periods, pain during intercourse, abdominal fullness.',
    diagnosis: 'Transvaginal ultrasound, CA-125 blood test, MRI if concerning features present.',
    treatmentOptions: 'Laparoscopic cystectomy, oophorectomy for large or complex cysts, observation for simple cysts.',
  },
  {
    id: 'endometriosis',
    icon: 'ri-heart-pulse-line',
    title: 'Endometriosis',
    description: 'A chronic condition where uterine-like tissue grows outside the uterus causing pain and fertility issues. Laparoscopic excision is the gold standard treatment.',
    image: 'https://storage.readdy-site.link/project_files/537556cb-a0de-4c81-8866-d48774229505/94f081b2-2364-4de9-8022-9acc384999d4_IMG_20260617_151404.jpg',
    symptoms: 'Severe period pain, chronic pelvic pain, pain during intercourse, infertility, fatigue.',
    diagnosis: 'Diagnostic laparoscopy with direct visualization and biopsy, pelvic ultrasound, MRI.',
    treatmentOptions: 'Laparoscopic excision of endometriosis, adhesiolysis, ovarian cystectomy for endometriomas.',
  },
  {
    id: 'diagnostic',
    icon: 'ri-search-eye-line',
    title: 'Diagnostic Laparoscopy',
    description: 'A minimally invasive procedure to directly visualize pelvic organs when imaging studies are inconclusive, providing accurate diagnosis of various gynaecological conditions.',
    image: 'https://readdy.ai/api/search-image?query=Diagnostic%20laparoscopy%20procedure%20showing%20camera%20insertion%20through%20small%20incision%20on%20female%20abdomen%20with%20monitor%20displaying%20clear%20view%20of%20healthy%20pelvic%20organs%2C%20clean%20clinical%20setting%20with%20warm%20professional%20lighting&width=600&height=400&seq=lap-condition-diagnostic-01&orientation=landscape',
    symptoms: 'Unexplained pelvic pain, suspected endometriosis, infertility evaluation, suspected adhesions.',
    diagnosis: 'Direct visualization of uterus, ovaries, fallopian tubes, and pelvic cavity via camera.',
    treatmentOptions: 'Diagnosis confirmed in real-time, therapeutic procedures can be performed during same session when indicated.',
  },
  {
    id: 'adhesions',
    icon: 'ri-forbid-line',
    title: 'Pelvic Adhesions',
    description: 'Bands of scar tissue that bind pelvic organs together, often resulting from previous surgeries or infections, causing pain and fertility problems.',
    image: 'https://storage.readdy-site.link/project_files/537556cb-a0de-4c81-8866-d48774229505/067e5bb2-9dd4-4c0a-bcbd-96d7ce02359e_IMG_20260617_152719.jpg',
    symptoms: 'Chronic pelvic pain, infertility, bowel obstruction symptoms, painful periods.',
    diagnosis: 'Diagnostic laparoscopy, pelvic ultrasound, clinical history assessment.',
    treatmentOptions: 'Laparoscopic adhesiolysis to carefully separate and remove scar tissue, restoring normal pelvic anatomy.',
  },
  {
    id: 'ectopic',
    icon: 'ri-alert-line',
    title: 'Ectopic Pregnancy',
    description: 'A pregnancy implanting outside the uterine cavity, most commonly in the fallopian tube. Laparoscopic management is the preferred surgical approach for most cases.',
    image: 'https://storage.readdy-site.link/project_files/537556cb-a0de-4c81-8866-d48774229505/afc1f7f0-0992-47ef-8558-1f80f9643e5c_IMG_20260617_153424.jpg',
    symptoms: 'Unilateral pelvic pain, vaginal bleeding, shoulder tip pain, dizziness in ruptured cases.',
    diagnosis: 'Transvaginal ultrasound, serial beta-hCG monitoring, clinical assessment.',
    treatmentOptions: 'Laparoscopic salpingostomy for tube preservation, salpingectomy for damaged tubes, medical management in selected cases.',
  },
];

export const fibroidSurgeryInfo = {
  title: 'Laparoscopic Fibroid Surgery (Myomectomy)',
  description: 'Laparoscopic myomectomy is a uterus-preserving procedure that removes fibroids through small keyhole incisions. This approach offers women who wish to retain fertility or their uterus the benefits of minimally invasive surgery with complete fibroid removal.',
  benefits: [
    { icon: 'ri-heart-line', label: 'Uterus Preserved' },
    { icon: 'ri-seedling-line', label: 'Fertility Maintained' },
    { icon: 'ri-contrast-drop-line', label: 'Small Incisions' },
    { icon: 'ri-timer-flash-line', label: 'Quick Recovery' },
    { icon: 'ri-home-line', label: 'Short Hospital Stay' },
    { icon: 'ri-shield-check-line', label: 'Low Recurrence Rate' },
  ],
};

export const ovarianCystSurgeryInfo = {
  title: 'Laparoscopic Ovarian Cyst Surgery (Cystectomy)',
  description: 'Laparoscopic ovarian cystectomy removes cysts while preserving healthy ovarian tissue. This fertility-sparing approach uses tiny incisions, specialized instruments, and high-definition visualization ensuring precise cyst removal with maximum preservation of ovarian function.',
  benefits: [
    { icon: 'ri-drop-line', label: 'Ovary Preserved' },
    { icon: 'ri-seedling-line', label: 'Fertility Spared' },
    { icon: 'ri-microscope-line', label: 'High Precision' },
    { icon: 'ri-timer-flash-line', label: 'Rapid Recovery' },
    { icon: 'ri-contrast-drop-line', label: 'Minimal Incisions' },
    { icon: 'ri-shield-check-line', label: 'Low Complication Rate' },
  ],
};

export const endometriosisInfo = {
  title: 'Laparoscopic Endometriosis Treatment',
  description: 'Laparoscopic excision surgery is the gold standard for treating endometriosis. Using advanced high-definition cameras and precision instruments, endometrial implants are carefully identified and completely excised, providing long-term pain relief and improved fertility outcomes.',
  benefits: [
    { icon: 'ri-heart-pulse-line', label: 'Pain Relief' },
    { icon: 'ri-seedling-line', label: 'Fertility Improved' },
    { icon: 'ri-search-eye-line', label: 'Accurate Diagnosis' },
    { icon: 'ri-surgical-mask-line', label: 'Complete Excision' },
    { icon: 'ri-timer-flash-line', label: 'Faster Recovery' },
    { icon: 'ri-emotion-happy-line', label: 'Better Quality Of Life' },
  ],
};

export const procedureOverviewSteps = [
  {
    step: 1,
    icon: 'ri-calendar-check-line',
    title: 'Pre-Operative Consultation',
    description: 'Detailed discussion of your condition, surgical approach, expected outcomes, and recovery pathway. Complete pre-operative assessment including blood work and imaging.',
  },
  {
    step: 2,
    icon: 'ri-hospital-line',
    title: 'Day Of Surgery',
    description: 'Admission to the surgical facility, meeting the anaesthesia team, and preparation for your procedure. Most patients arrive a few hours before scheduled surgery.',
  },
  {
    step: 3,
    icon: 'ri-surgical-mask-line',
    title: 'The Procedure',
    description: 'Performed under general anaesthesia. Small incisions are made, the abdomen is gently inflated with CO2 gas, and the laparoscope and instruments are inserted to perform the surgery.',
  },
  {
    step: 4,
    icon: 'ri-timer-line',
    title: 'Recovery Room',
    description: 'Post-operative monitoring in the recovery area. Once stable and comfortable, you will be transferred to your room or prepared for same-day discharge.',
  },
];

export const recoveryTimeline = [
  {
    step: 1,
    icon: 'ri-calendar-check-line',
    title: 'Consultation',
    description: 'Initial detailed discussion of your condition and whether laparoscopic surgery is the right approach for your specific situation.',
  },
  {
    step: 2,
    icon: 'ri-search-eye-line',
    title: 'Diagnosis',
    description: 'Comprehensive evaluation through ultrasound, blood tests, and imaging to confirm the diagnosis and plan the surgical approach.',
  },
  {
    step: 3,
    icon: 'ri-surgical-mask-line',
    title: 'Procedure',
    description: 'The laparoscopic surgery performed with precision using high-definition cameras and specialized minimally invasive instruments.',
  },
  {
    step: 4,
    icon: 'ri-heart-pulse-line',
    title: 'Recovery',
    description: 'Post-operative healing with minimal pain, small dressings over keyhole sites, and gradual return to normal daily activities.',
  },
  {
    step: 5,
    icon: 'ri-chat-check-line',
    title: 'Follow-Up',
    description: 'Regular post-operative check-ups to monitor healing, review pathology results, and plan ongoing wellness care.',
  },
];

export const comparisonTable = [
  { feature: 'Incision Size', traditional: '10-25 cm abdominal incision', laparoscopic: '3-4 small 5-10mm keyhole incisions' },
  { feature: 'Pain Level', traditional: 'Moderate to severe post-operative pain', laparoscopic: 'Mild to moderate discomfort only' },
  { feature: 'Hospital Stay', traditional: '3-7 days inpatient stay', laparoscopic: 'Day care or single overnight stay' },
  { feature: 'Recovery Time', traditional: '6-8 weeks for full recovery', laparoscopic: '1-2 weeks return to normal activities' },
  { feature: 'Scarring', traditional: 'Large visible abdominal scar', laparoscopic: 'Tiny barely visible scars' },
  { feature: 'Blood Loss', traditional: 'Higher intra-operative blood loss', laparoscopic: 'Significantly reduced blood loss' },
  { feature: 'Return To Work', traditional: '6-8 weeks off work', laparoscopic: '1-2 weeks medical leave typically' },
  { feature: 'Infection Risk', traditional: 'Higher wound infection rates', laparoscopic: 'Very low infection rates' },
];

export const patientBenefits = [
  {
    icon: 'ri-timer-flash-line',
    title: 'Rapid Recovery',
    description: 'Most laparoscopic surgery patients resume light daily activities within 48 hours and return to work within 1-2 weeks, compared to 6-8 weeks for open surgery.',
  },
  {
    icon: 'ri-emotion-happy-line',
    title: 'Better Cosmetic Results',
    description: 'Tiny keyhole incisions heal with barely visible scars, preserving the natural appearance of your abdomen without the large scar associated with open surgery.',
  },
  {
    icon: 'ri-money-dollar-circle-line',
    title: 'Lower Overall Cost',
    description: 'Shorter hospital stays, faster return to work, and reduced need for extended medications translate to significantly lower total treatment costs.',
  },
  {
    icon: 'ri-shield-star-line',
    title: 'Enhanced Safety',
    description: 'HD camera magnification provides superior visualization of delicate structures, enabling more precise surgery with reduced risk to surrounding organs and tissues.',
  },
  {
    icon: 'ri-mental-health-line',
    title: 'Reduced Anxiety',
    description: 'Knowing recovery will be quick and scarring minimal significantly reduces pre-operative anxiety and improves overall treatment experience and satisfaction.',
  },
  {
    icon: 'ri-heart-line',
    title: 'Better Outcomes',
    description: 'Studies consistently show laparoscopic procedures have equal or better long-term outcomes compared to open surgery, with patient satisfaction rates exceeding 95%.',
  },
];

export const laparoscopicFAQ = [
  {
    question: 'Is laparoscopic surgery safe?',
    answer: 'Yes, laparoscopic surgery is extremely safe when performed by an experienced surgeon. Dr. Nikhita B Vadvadgi holds MRCOG (UK) and FMIS qualifications with over 12 years of surgical experience. Modern laparoscopic techniques have an excellent safety profile with complication rates significantly lower than traditional open surgery.',
  },
  {
    question: 'Will I have pain after laparoscopic surgery?',
    answer: 'Most patients experience only mild discomfort after laparoscopic surgery, typically well-managed with simple oral pain relievers. The small incisions cause significantly less tissue trauma than open surgery, resulting in much less post-operative pain. Any shoulder tip pain from the CO2 gas used during surgery resolves within 24-48 hours.',
  },
  {
    question: 'How long does laparoscopic surgery take?',
    answer: 'Procedure duration varies based on the complexity of the condition being treated. Diagnostic laparoscopy typically takes 30-45 minutes, while operative procedures like myomectomy or endometriosis excision may take 1-3 hours. Dr. Nikhita will discuss expected duration during your pre-operative consultation.',
  },
  {
    question: 'When can I return to work after laparoscopic surgery?',
    answer: 'Most patients return to desk-based work within 1-2 weeks after laparoscopic surgery. Those with physically demanding jobs may need 2-4 weeks before resuming full duties. Your specific recovery timeline will be discussed based on your procedure type and individual healing progress.',
  },
  {
    question: 'Will laparoscopic surgery affect my fertility?',
    answer: 'On the contrary, many laparoscopic procedures are specifically designed to preserve or improve fertility. Laparoscopic myomectomy preserves the uterus, cystectomy preserves healthy ovarian tissue, and endometriosis excision can significantly improve fertility outcomes. Dr. Nikhita prioritizes fertility preservation whenever possible.',
  },
];
