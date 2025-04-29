// /data/talks.ts

export interface Talk {
    event: string;
    title: string;
    location: string;
    year: number;
    recordingUrl?: string;
    latitude?: number;
    longitude?: number;
}


export const talks: Talk[] = [
    {
        event: "SREDay",
        title: "Vertically Integrated in Platform Engineering: Secrets to Success Operating the Company Within the Company",
        location: "London",
        year: 2024,
        recordingUrl: "https://youtu.be/4UhbCJpUu5s?si=r52JfOH3uYjxGE0a",
        latitude: 51.5072,
        longitude: -0.1276,
    },
    {
        event: "DevTalks Romania",
        title: "Vertically Integrated in Platform Engineering: Secrets to Success Operating the Company Within the Company",
        location: "Bucharest",
        year: 2024,
        recordingUrl: "",
        latitude: 44.4368,
        longitude: 26.1025,
    },
    {
        event: "DevOpsDays Tokyo",
        title: "Vertically Integrated in Platform Engineering: Secrets to Success Operating the Company Within the Company",
        location: "Tokyo",
        year: 2024,
        recordingUrl: "",
        latitude: 35.6764,
        longitude: 139.6500,
    },
    {
        event: "DevOpsPro Europe",
        title: "Keynote | Pepperoni, Puppets, and Priorities: Demystifying SLAs, SLOs, and SLIs",
        location: "Vilnius (Online & In Person)",
        year: 2023,
        recordingUrl: "https://www.youtube.com/watch?v=o7q1VNg40BY",
        latitude: 54.6872,
        longitude: 25.2797,
    },
    {
        event: "DevOpsDays Krakow",
        title: "SLAs, SLIs, SLOs: Demystifying Reliability Metrics",
        location: "Krakow, Poland",
        year: 2023,
        recordingUrl: "",
        latitude: 50.0647,
        longitude: 19.9450,
    },
    {
        event: "DevOpsDays Krakow",
        title: "Getting Good at Being Bad: Creating a Culture of Iterative Design",
        location: "Remote",
        year: 2021,
        recordingUrl: "https://www.youtube.com/watch?v=Waotfoee9Hc",
        latitude: 50.0647,
        longitude: 19.9450,
    },
    {
        event: "ChaosConf",
        title: "Can Chaos Coerce Clarity from Compounding Complexity? Certainly.",
        location: "Remote (talk given from Ames, IA)",
        year: 2020,
        recordingUrl: "https://www.youtube.com/watch?v=uufA5okCRJU",
        latitude: 42.0308,
        longitude: -93.6319,
    },
    {
        event: "DevOps Enterprise Summit",
        title: "Your Baby is Ugly. Let’s Be Friends.",
        location: "Remote (Las Vegas)",
        year: 2020,
        recordingUrl: "",
        latitude: 36.1716,
        longitude: -115.1391,
    },
    {
        event: "JustDevOps",
        title: "You’re the Captain Now: Becoming an Engineering Manager",
        location: "Katowice, Poland",
        year: 2019,
        recordingUrl: "",
        latitude: 50.2649,
        longitude: 19.0238,
    },
    {
        event: "DevOpsPro Europe",
        title: "Monitoring, Alerting, and Paging: A Three-Part Guide to Incurring Human Costs In Engineering",
        location: "Vilnius, Lithuania",
        year: 2019,
        recordingUrl: "https://www.youtube.com/watch?v=4WNZDWLCCYI",
        latitude: 54.6872,
        longitude: 25.2797,
    },
    {
        event: "Iowa Tech Summit",
        title: "Make It Rain: Finding Value In The Cloud",
        location: "Des Moines, Iowa",
        year: 2018,
        recordingUrl: "",
        latitude: 41.5896,
        longitude: -93.6164,
    },
    {
        event: "Iowa Tech Summit",
        title: "Leading From The Trenches: Not All Heroes Wear Capes, Not All Leaders Wear Titles",
        location: "Des Moines, Iowa",
        year: 2017,
        recordingUrl: "",
        latitude: 41.5896,
        longitude: -93.6164,
    },
    {
        event: "DevOpsDays Phoenix",
        title: "Monitoring, Alerting, and Paging: A Three-Part Guide to Incurring Human Costs In Engineering",
        location: "Phoenix, Arizona",
        year: 2017,
        recordingUrl: "",
        latitude: 33.4482,
        longitude: -112.0777,
    },
    {
        event: "Iowa Code Camp",
        title: "Taming the Technical Interview",
        location: "Iowa City, Iowa",
        year: 2017,
        recordingUrl: "",
        latitude: 41.6579,
        longitude: -91.5346,
    },
    {
        event: "DevOpsDays Amsterdam",
        title: "Terminal Velocity: Doing DevOps Right by Removing CLIs from Production Environments",
        location: "Amsterdam, Netherlands",
        year: 2017,
        recordingUrl: "https://www.youtube.com/watch?v=g9l2IQCzVqY",
        latitude: 52.3676,
        longitude: -4.9041,
    },
    {
        event: "SRECon 17 Americas",
        title: "It's the End of the World As We Know It (and I Feel Fine): Engineering for Crisis Response at Scale",
        location: "San Francisco, California",
        year: 2017,
        recordingUrl: "https://www.youtube.com/watch?v=h7LJD77lKqI",
        latitude: 37.7749,
        longitude: -122.4149,
    },
];
