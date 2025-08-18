import { Template } from './Template';

export const templates: Template[] = [
    {
        id: 'buzzword',
        name: 'Buzzword Salad',
        subjectMappings: {
            speaking: 'Synergizing our thought leadership through a speaking engagement',
            employment: 'Optimizing human capital alignment opportunities',
            advisory: 'Strategic guidance partnership initiative',
            collaboration: 'Cross-functional innovation catalyst opportunity',
            hello: 'Establishing meaningful stakeholder connectivity',
            custom: 'Hey Matt. This whole thing is silly. I would have preferred a Captcha.'
        },
        bodyTemplate: `Greetings Matt,

I'm {name} ({email}) and I'm reaching out to leverage our synergies around {subject}.

My {role} background has enabled me to {achievement}, and I believe we can create significant value through {collaboration_type}.

Our {timeline} roadmap positions us to {outcome}, driving unprecedented ROI through strategic partnership optimization.

Let's circle back to ideate on this game-changing opportunity!

{name}
{title}`,
        themePacks: [
            {
                id: 'startup_hustler',
                name: 'Startup Hustler',
                variables: {
                    role: 'disruptive',
                    achievement: 'scale unicorn startups',
                    collaboration_type: 'bootstrapping viral growth engines',
                    timeline: 'agile sprint-based',
                    outcome: 'achieve product-market fit',
                    title: 'Chief Disruption Officer'
                }
            },
            {
                id: 'corporate_executive',
                name: 'Corporate Executive',
                variables: {
                    role: 'results-oriented',
                    achievement: 'orchestrate digital transformations',
                    collaboration_type: 'co-creating scalable frameworks',
                    timeline: 'enterprise-grade',
                    outcome: 'maximize shareholder value',
                    title: 'Senior Vice President of Strategic Initiatives'
                }
            },
            {
                id: 'tech_consultant',
                name: 'Tech Consultant',
                variables: {
                    role: 'data-driven',
                    achievement: 'architect cloud-native solutions',
                    collaboration_type: 'cross-pollinating best practices',
                    timeline: 'DevOps-optimized',
                    outcome: 'accelerate time-to-market',
                    title: 'Principal Solutions Architect'
                }
            }
        ]
    },
    {
        id: 'not_sales',
        name: 'Definitely Not A Sales Call',
        subjectMappings: {
            speaking: 'Quick chat about speaking (not selling anything, promise)',
            employment: 'Casual career conversation (zero sales agenda)',
            advisory: 'Advisory chat (definitely not a sales call)',
            collaboration: 'Collaboration idea (this isn\'t a pitch)',
            hello: 'Just saying hi (no hidden sales motives)',
            custom: 'Hey Matt. This whole thing is silly. I would have preferred a Captcha.'
        },
        bodyTemplate: `Hey Matt,

{name} here ({email}). Look, I know what you're thinking - another sales email. But hear me out, this is about {subject} and I'm genuinely not trying to sell you anything.

I {genuine_reason} and thought you might be interested in {offer}. No strings attached, no "quick 15-minute demo," no "revolutionary platform that will change your life."

{proof_not_sales}

If you're interested, great. If not, no worries - I won't follow up seventeen times asking if you got my previous email.

Cheers,
{name}

P.S. - {postscript}`,
        themePacks: [
            {
                id: 'genuinely_helpful',
                name: 'Genuinely Helpful Person',
                variables: {
                    genuine_reason: 'saw your work and was genuinely impressed',
                    offer: 'sharing some insights that might be useful',
                    proof_not_sales: 'Seriously, check my LinkedIn - I don\'t even work in sales. I\'m just someone who appreciates good work when I see it.',
                    postscript: 'I promise this isn\'t a CRM template'
                }
            },
            {
                id: 'mutual_connection',
                name: 'Mutual Connection',
                variables: {
                    genuine_reason: 'heard great things about you from mutual connections',
                    offer: 'a genuine conversation about our shared interests',
                    proof_not_sales: 'Ask around - people will tell you I\'m terrible at sales but pretty good at actual conversations.',
                    postscript: 'My quota doesn\'t depend on this email'
                }
            },
            {
                id: 'fan_of_work',
                name: 'Fan of Your Work',
                variables: {
                    genuine_reason: 'read your blog and actually learned something',
                    offer: 'bouncing ideas around with someone who clearly knows their stuff',
                    proof_not_sales: 'I literally bookmarked three of your posts. That\'s not something sales people do.',
                    postscript: 'No PowerPoints will be harmed in this conversation'
                }
            }
        ]
    },
    {
        id: 'flattery',
        name: 'Egregious Flattery',
        subjectMappings: {
            speaking: 'O Magnificent Speaker, I Seek Your Wisdom',
            employment: 'Request for Audience with the Great Leader',
            advisory: 'Petition for Guidance from the Oracle',
            collaboration: 'Proposal to Bask in Your Brilliance',
            hello: 'Humble Greetings to the Chosen One',
            custom: 'Hey Matt. This whole thing is silly. I would have preferred a Captcha.'
        },
        bodyTemplate: `Your Magnificence,

I am {name}, a mere mortal ({email}), prostrating myself before your {expertise} to discuss {subject}.

Your legendary {accomplishment} has inspired countless souls, and I dare to hope that someone as {adjective} as yourself might spare a moment for {humble_request}.

I have been {experience}, but I know it pales in comparison to your {comparison}. Perhaps you could grace me with {specific_ask}?

I shall await your response with bated breath, knowing that even your silence would be a gift.

Your devoted admirer,
{name}

*Genuflects respectfully*`,
        themePacks: [
            {
                id: 'tech_genius',
                name: 'Tech Genius Worship',
                variables: {
                    expertise: 'technological wizardry',
                    accomplishment: 'ability to make the impossible look easy',
                    adjective: 'transcendently brilliant',
                    humble_request: 'my pathetic attempt at understanding technology',
                    experience: 'fumbling with code like a caveman with fire',
                    comparison: 'elegant solutions that bend reality to your will',
                    specific_ask: 'a fraction of your infinite wisdom'
                }
            },
            {
                id: 'business_visionary',
                name: 'Business Visionary Worship',
                variables: {
                    expertise: 'strategic brilliance',
                    accomplishment: 'capacity to see opportunities invisible to lesser minds',
                    adjective: 'impossibly wise',
                    humble_request: 'my feeble business endeavors',
                    experience: 'stumbling through markets like a lost tourist',
                    comparison: 'masterful orchestration of success',
                    specific_ask: 'a glimpse of your prophetic insights'
                }
            },
            {
                id: 'speaking_master',
                name: 'Speaking Master Worship',
                variables: {
                    expertise: 'oratory excellence',
                    accomplishment: 'gift for inspiring mere mortals to greatness',
                    adjective: 'cosmically gifted',
                    humble_request: 'my amateur attempts at public speaking',
                    experience: 'mumbling to confused audiences',
                    comparison: 'spellbinding presentations that move mountains',
                    specific_ask: 'a sliver of your communication mastery'
                }
            }
        ]
    },
    {
        id: 'bureaucracy',
        name: 'Form 127a-g5: Application for Reciprocal Communication',
        subjectMappings: {
            speaking: 'FORM 127a-g5: SPEAKING ENGAGEMENT REQUEST [PRIORITY: MEDIUM]',
            employment: 'FORM 127a-g5: EMPLOYMENT CONSULTATION [PRIORITY: HIGH]',
            advisory: 'FORM 127a-g5: ADVISORY SERVICES REQUEST [PRIORITY: MEDIUM]',
            collaboration: 'FORM 127a-g5: COLLABORATION PROPOSAL [PRIORITY: MEDIUM]',
            hello: 'FORM 127a-g5: GENERAL COMMUNICATION REQUEST [PRIORITY: LOW]',
            custom: 'Hey Matt. This whole thing is silly. I would have preferred a Captcha.'
        },
        bodyTemplate: `TO: Matthew P. Simons
FROM: {name}
CONTACT: {email}
DATE: [SYSTEM AUTO-GENERATED]
RE: {subject}

PURSUANT TO REGULATION 42-C OF THE INFORMAL COMMUNICATION STANDARDS, I HEREBY SUBMIT THIS FORMAL REQUEST.

APPLICANT BACKGROUND:
- Current Status: {status}
- Department/Affiliation: {department}
- Clearance Level: {clearance}

REQUEST DETAILS:
The undersigned respectfully submits this application for bilateral communication regarding the aforementioned subject matter, in accordance with all applicable protocols and procedures.

JUSTIFICATION:
This request has been filed in compliance with Section 12.4.7 of the Professional Networking Code and has been pre-approved by the Department of Initial Contact.

Please process this request at your earliest convenience. Standard response time is 3-5 business days, though expedited processing may be available upon request.

Respectfully submitted,

{name}
[SIGNATURE BLOCK]
[OFFICIAL SEAL PENDING]

Form 127a-g5 (Rev. 2024)`,
        themePacks: [
            {
                id: 'corporate_drone',
                name: 'Corporate Drone',
                variables: {
                    status: 'Fully Operational',
                    department: 'Strategic Development',
                    clearance: 'CONFIDENTIAL'
                }
            },
            {
                id: 'startup_rebel',
                name: 'Startup Rebel',
                variables: {
                    status: 'Recently Deployed',
                    department: 'Innovation Research',
                    clearance: 'COFFEE SHOP APPROPRIATE'
                }
            },
            {
                id: 'consultant',
                name: 'Professional Consultant',
                variables: {
                    status: 'Seeking Optimization',
                    department: 'Implementation Services',
                    clearance: 'PUBLIC'
                }
            }
        ]
    },
    {
        id: 'boring',
        name: "I'm boring",
        subjectMappings: {
            speaking: 'Speaking engagement inquiry',
            employment: 'Employment opportunity discussion',
            advisory: 'Advisory request',
            collaboration: 'Collaboration idea',
            hello: 'Hello',
            custom: 'Hey Matt. This whole thing is silly. I would have preferred a Captcha.'
        },
        bodyTemplate: `Hi Matt,

My name is {name} and you can reach me at {email}. I wanted to connect with you about {subject}.

{reason}

{timeline}

{additional}

Best regards,
{name}`,
        themePacks: [
            {
                id: 'professional',
                name: 'Professional & Direct',
                variables: {
                    reason: 'I believe there could be a good mutual fit for collaboration.',
                    timeline: 'I\'m flexible on timing and happy to work around your schedule.',
                    additional: 'I\'d appreciate the opportunity to discuss this further at your convenience.'
                }
            },
            {
                id: 'casual',
                name: 'Casual & Friendly',
                variables: {
                    reason: 'I\'ve been following your work and think we might have some interesting things to chat about.',
                    timeline: 'No rush on this - whenever works for you!',
                    additional: 'Looking forward to potentially connecting. Thanks for your time!'
                }
            },
            {
                id: 'brief',
                name: 'Brief & To-the-Point',
                variables: {
                    reason: 'I have a proposal that might interest you.',
                    timeline: 'Available to chat this week or next.',
                    additional: 'Happy to provide more details if you\'re interested.'
                }
            }
        ]
    }
];