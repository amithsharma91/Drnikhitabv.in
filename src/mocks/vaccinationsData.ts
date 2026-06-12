export const vaccinationCards = [
  {
    icon: 'ri-syringe-line',
    title: 'HPV Vaccine',
    age: '9-45 Years (Ideally 9-14)',
    description: 'Protects against Human Papillomavirus types that cause cervical cancer, genital warts, and other HPV-related cancers. Most effective when administered before first sexual contact.',
    doses: '2-3 Doses',
    protection: 'Cervical Cancer, Genital Warts',
  },
  {
    icon: 'ri-shield-line',
    title: 'Tetanus & Diphtheria (Td)',
    age: '11-12 Years + Boosters',
    description: 'Essential protection against tetanus and diphtheria with booster doses every 10 years. Critical during adolescence and recommended during each pregnancy.',
    doses: 'Booster Every 10 Years',
    protection: 'Tetanus, Diphtheria',
  },
  {
    icon: 'ri-virus-line',
    title: 'Hepatitis B Vaccine',
    age: 'Birth / Catch-Up',
    description: 'Protects against Hepatitis B virus infection that can lead to chronic liver disease and liver cancer. Recommended for all unvaccinated adolescents and adults.',
    doses: '3 Doses',
    protection: 'Hepatitis B, Liver Cancer',
  },
  {
    icon: 'ri-calendar-check-line',
    title: 'MMR Vaccine',
    age: 'Catch-Up If Needed',
    description: 'Protects against Measles, Mumps, and Rubella. Rubella infection during pregnancy can cause severe birth defects, making pre-pregnancy immunity crucial.',
    doses: '2 Doses',
    protection: 'Measles, Mumps, Rubella',
  },
  {
    icon: 'ri-women-line',
    title: 'Varicella (Chickenpox)',
    age: 'Catch-Up If Needed',
    description: 'Recommended for adolescent girls and women who have never had chickenpox or been vaccinated. Varicella during pregnancy poses serious risks.',
    doses: '2 Doses',
    protection: 'Chickenpox, Shingles Prevention',
  },
];

export const adultVaccinations = [
  {
    icon: 'ri-rainbow-line',
    title: 'Influenza (Flu) Vaccine',
    description: 'Annual flu vaccination recommended for all adult women, especially those planning pregnancy or with underlying health conditions. Reduces severe illness risk significantly.',
    timing: 'Yearly (Before Flu Season)',
  },
  {
    icon: 'ri-syringe-line',
    title: 'HPV Catch-Up Vaccination',
    description: 'Women up to age 45 can benefit from HPV vaccination even if previously exposed. Discuss your individual risk factors and potential benefits with Dr. Nikhita.',
    timing: 'Up to Age 45',
  },
  {
    icon: 'ri-heart-pulse-line',
    title: 'Tdap Booster',
    description: 'Every adult should receive a Tdap booster every 10 years. This vaccine also includes pertussis (whooping cough) protection which is critical for those around newborns.',
    timing: 'Every 10 Years',
  },
  {
    icon: 'ri-shield-check-line',
    title: 'Pneumococcal Vaccine',
    description: 'Recommended for women with certain medical conditions, smokers, or those over 65. Protects against pneumonia, meningitis, and bloodstream infections.',
    timing: 'As Recommended',
  },
];

export const pregnancyVaccinations = [
  {
    icon: 'ri-check-line',
    title: 'Tdap During Pregnancy',
    description: 'Strongly recommended between 27-36 weeks of each pregnancy to protect both mother and newborn from pertussis (whooping cough) during the vulnerable first months.',
    timing: '27-36 Weeks',
    priority: 'Essential',
  },
  {
    icon: 'ri-check-line',
    title: 'Influenza Vaccine',
    description: 'Safe and recommended during any trimester. Pregnant women are at higher risk of severe flu complications, and vaccination protects both mother and baby.',
    timing: 'Any Trimester',
    priority: 'Essential',
  },
  {
    icon: 'ri-information-line',
    title: 'Hepatitis B Vaccine',
    description: 'Can be administered during pregnancy if the mother is at high risk. Screening for Hepatitis B is part of routine antenatal care.',
    timing: 'If High Risk',
    priority: 'Conditional',
  },
  {
    icon: 'ri-close-circle-line',
    title: 'Live Vaccines (MMR, Varicella)',
    description: 'Live vaccines are avoided during pregnancy. Women planning pregnancy should ensure MMR and varicella immunity before conception.',
    timing: 'Before Pregnancy Only',
    priority: 'Contraindicated',
  },
];

export const vaccinationSchedule = [
  {
    age: '9-14 Years',
    icon: 'ri-women-line',
    title: 'Adolescent Foundation',
    vaccines: ['HPV Vaccine (2 doses)', 'Td Booster', 'Catch-Up Vaccines'],
    description: 'The ideal window for HPV vaccination — provides maximum protection before potential exposure. Complete all catch-up vaccinations from childhood.',
  },
  {
    age: '15-26 Years',
    icon: 'ri-heart-pulse-line',
    title: 'Young Adult Protection',
    vaccines: ['HPV Catch-Up (3 doses)', 'Tdap Booster', 'MMR If Needed', 'Varicella If Needed'],
    description: 'Complete any missed vaccinations. Pre-pregnancy vaccination assessment is particularly important during these reproductive years.',
  },
  {
    age: 'Pregnancy',
    icon: 'ri-user-heart-line',
    title: 'Maternal Immunization',
    vaccines: ['Tdap (27-36 weeks)', 'Influenza (Any Trimester)', 'Hepatitis B If Indicated'],
    description: 'Critical window to protect both mother and baby. Tdap and flu vaccines are safe and strongly recommended during pregnancy.',
  },
  {
    age: '27-45 Years',
    icon: 'ri-shield-check-line',
    title: 'Adult Maintenance',
    vaccines: ['HPV (Up to Age 45)', 'Tdap Booster', 'Annual Flu Shot', 'Pneumococcal If Needed'],
    description: 'Maintain protection through regular boosters and annual vaccinations. HPV catch-up available up to age 45.',
  },
  {
    age: '46+ Years',
    icon: 'ri-heart-2-line',
    title: 'Mature Wellness',
    vaccines: ['Shingles Vaccine', 'Pneumococcal', 'Annual Flu Shot', 'Tdap Booster'],
    description: 'Enhanced protection for mature women including shingles vaccine from age 50 and pneumococcal vaccine as recommended.',
  },
];

export const vaccinationJourney = [
  {
    step: 1,
    icon: 'ri-chat-1-line',
    title: 'Health Assessment',
    description: 'Comprehensive review of your medical history, vaccination records, lifestyle, and individual risk factors.',
  },
  {
    step: 2,
    icon: 'ri-file-list-line',
    title: 'Personalized Recommendation',
    description: 'Dr. Nikhita creates a tailored vaccination plan based on your age, health status, pregnancy plans, and risk profile.',
  },
  {
    step: 3,
    icon: 'ri-syringe-line',
    title: 'Vaccination',
    description: 'Safe, comfortable vaccine administration in our premium clinic with full explanation of what to expect.',
  },
  {
    step: 4,
    icon: 'ri-calendar-check-line',
    title: 'Follow-Up',
    description: 'Scheduled follow-up for multi-dose vaccines and integration with your ongoing women\'s health care plan.',
  },
  {
    step: 5,
    icon: 'ri-shield-check-line',
    title: 'Protected Wellness',
    description: 'Long-term protection and peace of mind knowing you have taken proactive steps for your health.',
  },
];

export const longTermBenefits = [
  { icon: 'ri-shield-check-line', title: 'Cancer Prevention', description: 'HPV vaccination significantly reduces risk of cervical, vaginal, vulvar, anal, and oropharyngeal cancers.' },
  { icon: 'ri-heart-pulse-line', title: 'Pregnancy Safety', description: 'Pre-pregnancy vaccinations protect against infections that can cause severe birth defects and pregnancy complications.' },
  { icon: 'ri-user-heart-line', title: 'Newborn Protection', description: 'Maternal vaccination during pregnancy passes protective antibodies to the baby, providing immunity in the first months of life.' },
  { icon: 'ri-hospital-line', title: 'Reduced Hospitalization', description: 'Vaccinated individuals experience significantly lower rates of severe illness, hospitalization, and complications from preventable diseases.' },
  { icon: 'ri-global-line', title: 'Community Immunity', description: 'Your vaccination protects vulnerable family members, including newborns, elderly relatives, and those with compromised immune systems.' },
  { icon: 'ri-money-dollar-circle-line', title: 'Cost-Effective Healthcare', description: 'Prevention through vaccination is far more economical than treating the diseases they prevent, saving both health and financial costs.' },
];

export const vaccinationFaqs = [
  {
    question: 'Is the HPV vaccine safe for adolescent girls?',
    answer: 'Yes, the HPV vaccine has been extensively studied and proven safe. Global health organizations including WHO and CDC strongly recommend it. Over 270 million doses have been administered worldwide with an excellent safety record. The most common side effects are mild — temporary soreness at the injection site, mild fever, or headache that resolves quickly.',
  },
  {
    question: 'Can I get vaccinated during pregnancy?',
    answer: 'Certain vaccines are safe and recommended during pregnancy, including Tdap (between 27-36 weeks) and the influenza vaccine (any trimester). These protect both mother and baby. However, live vaccines such as MMR and varicella should be avoided during pregnancy and ideally completed before conception. Dr. Nikhita will guide you on which vaccines are appropriate.',
  },
  {
    question: 'At what age should my daughter get the HPV vaccine?',
    answer: 'The ideal age for HPV vaccination is 9-14 years, before potential exposure to the virus. At this age, only 2 doses are needed (6-12 months apart) for full protection. Girls aged 15-26 can still receive catch-up vaccination but require 3 doses. The vaccine provides the strongest immune response when given at the recommended younger age.',
  },
  {
    question: 'How long does vaccine protection last?',
    answer: 'Most vaccines provide long-lasting protection, often for many years or even a lifetime. For example, HPV vaccine studies show protection lasting at least 10-15 years with no evidence of waning immunity. Tdap requires boosters every 10 years. Influenza vaccine protection is seasonal, which is why annual vaccination is recommended.',
  },
  {
    question: 'What if I missed vaccinations as a teenager?',
    answer: 'It is never too late to catch up on important vaccinations. Dr. Nikhita will review your vaccination history and recommend a catch-up schedule tailored to your needs. Many vaccines, including HPV (up to age 45), MMR, varicella, and hepatitis B can be administered in adulthood if you missed them earlier.',
  },
];
