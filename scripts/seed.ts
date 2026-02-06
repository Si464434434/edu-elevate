import dotenv from "dotenv";
import { resolve } from "path";

// Load environment variables from .env.local
dotenv.config({ path: resolve(__dirname, "../.env.local") });

import connectDB from "../lib/mongodb";
import Opportunity from "../models/Opportunity";
import Mentor from "../models/Mentor";

const sampleOpportunities = [
  {
    title: "Google Summer Internship 2026",
    description: "3-month paid software engineering internship at Google India. Work on real products with mentorship from Google engineers.",
    type: "internship",
    company: "Google",
    stipend: "₹1,50,000/month",
    duration: "3 months",
    location: "Bangalore, India",
    stream: ["CSE", "IT", "ECE"],
    deadline: new Date("2026-03-15"),
    link: "https://careers.google.com/students",
    verified: true
  },
  {
    title: "Microsoft Learn Student Ambassador Scholarship",
    description: "Get Azure credits, training, and mentorship. Build cloud skills while studying.",
    type: "scholarship",
    company: "Microsoft",
    stipend: "$500 Azure credits",
    duration: "1 year",
    location: "Remote",
    stream: ["CSE", "IT", "ECE", "ME", "EE"],
    deadline: new Date("2026-03-20"),
    link: "https://studentambassadors.microsoft.com",
    verified: true
  },
  {
    title: "Smart India Hackathon 2026",
    description: "National-level hackathon with cash prizes. Solve real-world problems for government and industry.",
    type: "hackathon",
    company: "Government of India",
    stipend: "₹1,00,000 (winner)",
    duration: "36 hours",
    location: "Pan-India",
    stream: ["CSE", "IT", "ECE", "ME", "EE", "Civil"],
    deadline: new Date("2026-04-10"),
    link: "https://sih.gov.in",
    verified: true
  },
  {
    title: "Amazon ML Summer School",
    description: "4-week intensive machine learning program by Amazon scientists. Certificate + internship opportunity.",
    type: "internship",
    company: "Amazon",
    stipend: "Free + Certificate",
    duration: "4 weeks",
    location: "Online",
    stream: ["CSE", "IT", "Data Science"],
    deadline: new Date("2026-03-25"),
    link: "https://amazon.jobs/mlschool",
    verified: true
  },
  {
    title: "IIT Bombay TechFest Innovation Challenge",
    description: "Build innovative tech solutions. Win cash prizes and funding opportunities.",
    type: "competition",
    company: "IIT Bombay",
    stipend: "₹2,00,000 (grand prize)",
    duration: "2 months",
    location: "Mumbai, India",
    stream: ["CSE", "IT", "ECE", "ME"],
    deadline: new Date("2026-04-05"),
    link: "https://techfest.org",
    verified: true
  }
];

const sampleMentors = [
  {
    name: "Priya Sharma",
    specialization: "Software Engineering & Product Management",
    experience: 8,
    bio: "Ex-Google SDE, now Product Manager at Microsoft. Helped 100+ students crack FAANG interviews.",
    profilePicture: "https://i.pravatar.cc/150?img=1",
    email: "priya.sharma@mentor.com",
    verified: true,
    rating: 4.9,
    availability: "Weekends, 10 AM - 6 PM"
  },
  {
    name: "Rahul Verma",
    specialization: "Data Science & Machine Learning",
    experience: 6,
    bio: "ML Engineer at Amazon. Specialize in helping students build ML portfolios and projects.",
    profilePicture: "https://i.pravatar.cc/150?img=12",
    email: "rahul.verma@mentor.com",
    verified: true,
    rating: 4.8,
    availability: "Mon-Fri, 7 PM - 9 PM"
  },
  {
    name: "Anjali Mehta",
    specialization: "UI/UX Design & Frontend Development",
    experience: 5,
    bio: "Lead Designer at Flipkart. Guide students in design thinking and frontend engineering.",
    profilePicture: "https://i.pravatar.cc/150?img=5",
    email: "anjali.mehta@mentor.com",
    verified: true,
    rating: 4.9,
    availability: "Sat-Sun, 2 PM - 8 PM"
  },
  {
    name: "Vikram Singh",
    specialization: "Backend Development & System Design",
    experience: 10,
    bio: "Senior Architect at Flipkart. Mentor students in building scalable systems and cracking system design rounds.",
    profilePicture: "https://i.pravatar.cc/150?img=15",
    email: "vikram.singh@mentor.com",
    verified: true,
    rating: 5.0,
    availability: "Weekdays, 8 PM - 10 PM"
  }
];

async function seedDatabase() {
  try {
    console.log("🔄 Connecting to MongoDB...");
    await connectDB();
    console.log("✅ Connected to MongoDB");

    // Clear existing data
    console.log("🗑️  Clearing existing data...");
    await Opportunity.deleteMany({});
    await Mentor.deleteMany({});
    console.log("✅ Cleared existing data");

    // Insert opportunities
    console.log("📝 Inserting opportunities...");
    const opportunities = await Opportunity.insertMany(sampleOpportunities);
    console.log(`✅ Inserted ${opportunities.length} opportunities`);

    // Insert mentors
    console.log("👨‍🏫 Inserting mentors...");
    const mentors = await Mentor.insertMany(sampleMentors);
    console.log(`✅ Inserted ${mentors.length} mentors`);

    console.log("\n🎉 Database seeded successfully!");
    console.log(`\n📊 Summary:`);
    console.log(`   - ${opportunities.length} opportunities added`);
    console.log(`   - ${mentors.length} mentors added`);
    
    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    process.exit(1);
  }
}

seedDatabase();
