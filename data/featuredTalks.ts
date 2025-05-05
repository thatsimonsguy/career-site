// /data/featuredtalks.ts

export interface FeaturedTalk {
    event: string;
    title: string;
    description: string;
    location: string;
    year: number;
    recordingUrl?: string;
    tags: string[];
    image: string; // thumbnail path
}


export const featuredTalks: FeaturedTalk[] = [
    {
        event: "SREDay",
        title: "Vertically Integrated in Platform Engineering: Secrets to Success Operating the Company Within the Company",
        description: "This session explores how platform engineering teams can operate as vertically integrated product organizations within their companies. It introduces practical strategies for improving internal alignment, communicating value in business terms, and advocating for resources by bridging the gap between technical execution and executive priorities.",
        location: "London",
        year: 2024,
        recordingUrl: "https://youtu.be/4UhbCJpUu5s?si=r52JfOH3uYjxGE0a",
        tags: [
            "Organizational Health",
            "Observability",
            "Platform Engineering",
        ],
        image: "speaking/thumb-vertically-integrated.jpg",
    },
    {
        event: "DevOpsPro Europe",
        title: "Keynote | Pepperoni, Puppets, and Priorities: Demystifying SLAs, SLOs, and SLIs",
        description: "This keynote untangles the confusion around SLAs, SLOs, and SLIs by connecting them to real-world priorities and customer expectations. Through accessible metaphors and a focus on product thinking, it highlights how service level definitions can guide feature development, manage technical debt, and bring clarity to the tension between speed, quality, and reliability.",
        location: "Vilnius (Online & In Person)",
        year: 2023,
        recordingUrl: "https://www.youtube.com/watch?v=o7q1VNg40BY",
        tags: [
            "Observability",
            "Metrics",
            "DevOps",
        ],
        image: "speaking/thumb-PPP.jpg",
    },
    {
        event: "DevOpsDays Krakow",
        title: "Getting Good at Being Bad: Creating a Culture of Iterative Design",
        description: "This talk makes the case for embracing fault tolerance and iterative design—not just in systems, but in organizational processes and leadership development. By drawing parallels between software practices and human decision-making, it illustrates how high-performing teams reduce risk and improve outcomes by designing for recovery, not perfection.",
        location: "Remote",
        year: 2021,
        recordingUrl: "https://www.youtube.com/watch?v=Waotfoee9Hc",
        tags: [
            "Leadership",
            "Organizational Resilience",
            "Innovation",
        ],
        image: "speaking/thumb-ggabb.jpg",
    },
];
