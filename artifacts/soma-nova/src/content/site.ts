export const site = {
  name: 'Soma Nova',
  tagline: 'Personal training · Morgan Hill',
  phoneDisplay: '(408) 705-7176',
  tel: 'tel:+14087057176',
  sms: 'sms:+14087057176',
  email: 'proteafitness.morganhill@gmail.com',
  mailto: 'mailto:proteafitness.morganhill@gmail.com',
  instagramHandle: '@protea_fitness',
  instagramUrl: 'https://www.instagram.com/protea_fitness/',
  city: 'Morgan Hill, CA',
};

export const nav = [
  { href: '/training', label: 'Training' },
  { href: '/about', label: 'About' },
  { href: '/kind-words', label: 'Kind Words' },
  { href: '/contact', label: 'Contact' },
];

export type Service = { id: string; name: string; short: string; long: string[] };

export const services: Service[] = [
  {
    id: 'corrective',
    name: 'Corrective training',
    short: 'Repetitive movement leaves some muscles overworked and others underused. We even them out with exercises chosen for you.',
    long: [
      'Repetitive movement means overworked, imbalanced muscles. Think carpal tunnel, or a neck that is always tight by Thursday.',
      'I look at how you move, find what is pulling you out of balance, and build personalized corrective exercises to even those muscles out.',
    ],
  },
  {
    id: 'strength',
    name: 'Strength training',
    short: 'Weights and resistance bands belong in everyone’s routine. I’ll teach you to use the equipment safely.',
    long: [
      'Strength and resistance work is often overlooked for women and older people, and it is an important part of everyone’s health routine.',
      'We use free weights and resistance bands, and I will teach you how to use every piece of equipment safely, at a pace that makes sense for you.',
    ],
  },
  {
    id: 'bodyweight',
    name: 'Bodyweight and mat work',
    short: 'Mat work, Pilates-based poses and cardio. We can train anywhere with what we have.',
    long: [
      'From mat work and Pilates-based poses to higher intensity cardio, bodyweight training means we can exercise anywhere with what we have.',
      'It is also what you can keep doing at home between sessions, so I make sure you leave knowing the moves well.',
    ],
  },
  {
    id: 'special',
    name: 'Special circumstances',
    short: 'Chronic illness, pre and postnatal, seniors, youth, and clients coming out of physical therapy.',
    long: [
      'I often work with seniors, youth, people coming out of physical therapy, pre and postnatal clients, and people with chronic illnesses.',
      'I live with a chronic illness myself, so I am well acquainted with physical limitations. I am always up for modifying your program so it stays safe and enjoyable. I coach exercise; I don’t diagnose or treat, and I’m glad to work alongside your doctor or physical therapist.',
    ],
  },
];

export type Testimonial = { id: string; name: string; paragraphs: string[]; short?: string };

export const testimonials: Testimonial[] = [
  {
    id: 'keith',
    name: 'Keith L.',
    paragraphs: [
      'I recommend Protea Fitness from personal experience. Emily’s safe and progressive routines helped me achieve my highest level of fitness in many years in a way that was fun, enjoyable, and injury-free. I heartily recommend her.',
    ],
  },
  {
    id: 'noah',
    name: 'Noah F.',
    paragraphs: [
      'In just the 3 months I’ve been on this program, I’ve lost several inches in fat and gained a few in muscle. I feel much stronger and capable in my day to day life, and my job too.',
    ],
  },
  {
    id: 'amber',
    name: 'Amber S.',
    paragraphs: [
      'Emily taps into the side of fitness I need and enjoy. For my personal situation… having this routine in my life has been very beneficial and I know others need it.',
    ],
  },
  {
    id: 'lauren',
    name: 'Lauren O.',
    paragraphs: [
      'Emily is a caring and focused trainer, she listens to your needs and wants to build a great training experience. I was able to train in person with Emily back in December 2019. I had a 10-mile race coming up, my first race! With 6 weeks to prepare from when I started training with her, she was able to help me even out, my left leg was way weaker. By the time my race came, I was able to feel confident I could run the whole thing, and I did. Since COVID I have trained with her after a foot crush injury through Zoom. She gave me an awesome routine to keep my legs balanced and to help start my training for a half marathon. Definitely would recommend her.',
    ],
  },
  {
    id: 'erin',
    name: 'Erin V.',
    paragraphs: [
      'Emily is amazing to work with! She’s been training me for a few weeks now and I can already see and feel the results. I’ve worked with several personal trainers before (as well as did HIIT at Orange Theory), and this is the best experience I’ve ever had. She really took the time to understand my personal fitness needs, addressed my previous experiences, and crafted a workout plan that’s made me excited to go train with her.',
      'As a new mom, I was scared to get back into exercising and didn’t really know where to start. But she’s helped me regain confidence in my abilities, shown me (and measured) my progress, and is continually helping me to hold myself accountable to workout harder (in a safe manner, unlike places with an ultra-competitive group HIIT setting).',
      'I love the variety of equipment she has available, and that she’s constantly switching up the sessions (bodyweight exercises, free weights, boxing, agility, balance, etc). Not only that, but she’s educating me about the muscle groups I’m utilizing, making sure I’m using proper form, and is really attentive about stretching to make sure I avoid injury. And to top it off, she’s just a genuinely warm and fuzzy person to be around and makes working out fun. If you’re looking for a trainer, I highly recommend Protea Fitness!',
    ],
  },
  {
    id: 'zade',
    name: 'Zade T.',
    paragraphs: [
      'Working with Emily, I can say she creates a fun atmosphere and brings a variety of workouts that inspire a fresh attitude each time you go through your session. She makes sure that you’re on your way to achieve the look, functionality, or healthy lifestyle you want.',
      'I highly recommend going to Protea Fitness because for me specifically, it’s provided the guidance that I needed and the knowledge and science behind what I’m doing to be able to be efficient when I workout. You can tell she really cares and values the human body and makes sure you’re getting what you want without causing pain or injury, and for that thank you!!!!!',
    ],
  },
];
