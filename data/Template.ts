export interface ThemePack {
    id: string;
    name: string;
    variables: Record<string, string>;
}

export interface Template {
    id: string;
    name: string;
    subjectMappings: Record<string, string>;
    bodyTemplate: string;
    themePacks: ThemePack[];
}

export const SUBJECT_OPTIONS = [
    { value: 'speaking', label: 'Speaking engagement' },
    { value: 'employment', label: 'Employment opportunity' },
    { value: 'advisory', label: 'Advisory request' },
    { value: 'collaboration', label: 'Collaboration idea' },
    { value: 'hello', label: 'Just saying hi' },
    { value: 'custom', label: 'Custom' }
] as const;

export type SubjectOptionValue = typeof SUBJECT_OPTIONS[number]['value'];