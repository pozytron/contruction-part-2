// Mock data - In a real app, this would come from an API
export const questionsData = [
  {
    id: 1,
    title: "What are the current trends in sustainable construction materials?",
    description: "I'm interested in learning about eco-friendly materials that can reduce the environmental impact of construction projects. Specifically, I'm looking for information about:\n\n- New sustainable materials in the market\n- Their cost-effectiveness compared to traditional materials\n- Real-world examples of successful implementation\n- Environmental certifications and standards",
    category: "Materials",
    answers: [
      {
        id: 1,
        content: "There are several emerging trends in sustainable construction materials:\n\n1. Mass Timber: Engineered wood products that can replace steel and concrete in many applications.\n\n2. Recycled Steel: Using recycled steel reduces energy consumption and carbon emissions.\n\n3. Low-Carbon Concrete: New formulations that reduce CO2 emissions during production.\n\n4. Bio-based Materials: Including bamboo, mycelium, and agricultural waste products.",
        author: "Sarah Wilson",
        date: "2024-03-21",
        votes: 8,
      },
      {
        id: 2,
        content: "Cost comparison of sustainable vs traditional materials:\n\n- Initial costs are often 10-15% higher\n- Long-term operational savings typically offset higher upfront costs\n- Energy efficiency improvements can lead to 20-30% reduction in operating costs\n- Many regions offer tax incentives for sustainable materials",
        author: "Michael Chen",
        date: "2024-03-21",
        votes: 5,
      },
    ],
    votes: 12,
    author: "John Doe",
    date: "2024-03-20",
  },
  {
    id: 2,
    title: "Best practices for managing construction timeline delays?",
    description: "Looking for expert advice on handling unexpected delays in construction projects and minimizing their impact.",
    category: "Project Management",
    answers: [
      {
        id: 1,
        content: "The key to managing delays is proactive planning and clear communication with all stakeholders.",
        author: "Robert Smith",
        date: "2024-03-20",
        votes: 3,
      },
    ],
    votes: 8,
    author: "Jane Smith",
    date: "2024-03-19",
  },
];