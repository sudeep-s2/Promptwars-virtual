export const indianElectionData = {
  generalElection: {
    title: "Lok Sabha (General) Elections",
    description: "These elections are held to choose Members of Parliament (MPs) for the lower house of the Indian Parliament. The leader of the majority party or coalition becomes the Prime Minister of India.",
    frequency: "Every 5 years (unless dissolved earlier)",
    whoVotes: "All Indian citizens aged 18 and above",
    result: "Formation of the Central Government"
  },
  stateElection: {
    title: "Vidhan Sabha (State) Elections",
    description: "These elections are held to choose Members of Legislative Assembly (MLAs) for a specific state. The leader of the majority party or coalition becomes the Chief Minister of that state.",
    frequency: "Every 5 years (for each respective state)",
    whoVotes: "Citizens residing in that specific state aged 18 and above",
    result: "Formation of the State Government"
  },
  steps: [
    {
      id: 1,
      title: "Delimitation of Constituencies",
      description: "The entire country (or state) is divided into smaller geographical areas called constituencies based on population."
    },
    {
      id: 2,
      title: "Voter Registration",
      description: "Eligible citizens register themselves in the electoral roll. They can now do this easily online via the Voters' Service Portal (VSP) or the Voter Helpline App. They receive an Electoral Photo Identity Card (EPIC) or Voter ID."
    },
    {
      id: 3,
      title: "Announcement of Schedule",
      description: "The Election Commission of India (ECI) announces the dates for filing nominations, voting phases, and counting. The Model Code of Conduct comes into effect."
    },
    {
      id: 4,
      title: "Filing Nominations",
      description: "Candidates representing political parties or independents file their nomination papers, which are scrutinized by returning officers."
    },
    {
      id: 5,
      title: "Campaigning",
      description: "Parties and candidates present their manifestos and campaign to win voters' support through rallies, speeches, and media."
    },
    {
      id: 6,
      title: "Voting Day (Polling)",
      description: "Registered voters go to designated polling booths and cast their votes using Electronic Voting Machines (EVMs) secretly."
    },
    {
      id: 7,
      title: "Counting & Results",
      description: "On a scheduled date, votes are counted under the supervision of the ECI. The candidate with the highest votes in a constituency wins."
    },
    {
      id: 8,
      title: "Formation of Government",
      description: "The party or coalition with a majority of seats is invited by the President (for Centre) or Governor (for State) to form the government."
    },
    {
      id: 9,
      title: "Citizen Vigilance (cVIGIL)",
      description: "Citizens can report Model Code of Conduct (MCC) violations with live photos/videos using the cVIGIL app. The ECI promises to take action within 100 minutes of receiving a complaint."
    }
  ],
  faqs: [
    {
      question: "What is the Election Commission of India (ECI)?",
      answer: "The ECI is an autonomous constitutional authority responsible for administering election processes in India at national and state levels."
    },
    {
      question: "What is EVM and VVPAT?",
      answer: "EVM stands for Electronic Voting Machine used for casting votes. VVPAT (Voter Verifiable Paper Audit Trail) is a system that allows voters to verify that their vote was cast correctly via a paper slip."
    },
    {
      question: "Can I vote online?",
      answer: "No, currently India does not have an online voting system. You must visit your designated polling booth in person."
    },
    {
      question: "What is NOTA?",
      answer: "NOTA means 'None of the Above'. It is an option on the EVM allowing a voter to officially register a vote of rejection for all candidates."
    },
    {
      question: "What are the common forms for Voter ID?",
      answer: "Form 6 is used for new voter registration. Form 7 is for deletion or objection in the electoral roll. Form 8 is for correction of particulars, shifting of residence, or replacement of EPIC."
    },
    {
      question: "What is the Model Code of Conduct (MCC)?",
      answer: "The MCC is a set of guidelines issued by the ECI to regulate political parties and candidates prior to elections, ensuring free and fair elections."
    }
  ],
  candidates: [
    { id: 1, name: "Arjun Singh", party: "Democratic Party", constituency: "New Delhi", criminalCases: "None" },
    { id: 2, name: "Priya Sharma", party: "Progressive Alliance", constituency: "Mumbai South", criminalCases: "None" },
    { id: 3, name: "Rahul Verma", party: "Independent", constituency: "New Delhi", criminalCases: "None" }
  ]
};

export const validStates = [
  "andhra pradesh", "arunachal pradesh", "assam", "bihar", "chhattisgarh", "goa", "gujarat", "haryana", 
  "himachal pradesh", "jharkhand", "karnataka", "kerala", "madhya pradesh", "maharashtra", "manipur", 
  "meghalaya", "mizoram", "nagaland", "odisha", "punjab", "rajasthan", "sikkim", "tamil nadu", "telangana", 
  "tripura", "uttar pradesh", "uttarakhand", "west bengal", "delhi", "jammu and kashmir", "puducherry"
];
