export interface Speaker {
  id: string;
  name: string;
  role: string;
  organization: string;
  imageUrl: string;
  topic: string;
  bio?: string;
  researchInterests?: string[];
  socials?: {
    twitter?: string;
    linkedin?: string;
    website?: string;
  };
}

export interface AgendaItem {
  id: string;
  time: string;
  title: string;
  speaker?: string;
  type: 'keynote' | 'panel' | 'workshop' | 'break';
}

export interface Workshop {
  id: string;
  title: string;
  instructor: string;
  duration: string;
  description: string;
  tags: string[];
}
