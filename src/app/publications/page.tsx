import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Publications - R. Eric Kiser',
  description: 'Read my articles and watch videos covering cybersecurity, penetration testing, Python security tools, and information security.',
};

interface Video {
  id: string;
  title: string;
  type: 'video' | 'short';
}

const videos: Video[] = [
  {
    id: 'oHgsUNqL14w',
    title: 'Cybersecurity Insights',
    type: 'video',
  },
  {
    id: 'PfKaA2MSkAA',
    title: 'Security Deep Dive',
    type: 'video',
  },
  {
    id: 'HV-Lbjr9baI',
    title: 'Quick Security Tip #1',
    type: 'short',
  },
  {
    id: 'SSIxcyIJ4qw',
    title: 'Quick Security Tip #2',
    type: 'short',
  },
  {
    id: 'kON_wYP0AMA',
    title: 'Quick Security Tip #3',
    type: 'short',
  },
  {
    id: 'MGFlav5KHWg',
    title: 'Quick Security Tip #4',
    type: 'short',
  },
];

interface Publication {
  title: string;
  description: string;
  date: string;
  readTime: string;
  tags: string[];
  url: string;
  category: 'python' | 'security' | 'tools' | 'career' | 'general';
  image?: string;
}

const publications: Publication[] = [
  // Python Penetration Testing Series
  {
    title: 'Python Penetration Testing: Microsoft 365 Session ID Login',
    description: 'Bypassing MFA with session IDs - demonstrating how attackers can leverage session tokens to bypass multi-factor authentication in Microsoft 365 environments.',
    date: '2024-08-15',
    readTime: '12 min read',
    tags: ['Python', 'Penetration Testing', 'Microsoft 365', 'MFA Bypass'],
    url: 'https://infosecwriteups.com/python-penetration-testing-0365-session-id-login-with-python-517da1d850a6',
    category: 'python',
    image: 'https://lh3.googleusercontent.com/docsubipk/AP9E6xWO7wPUrvgGlhsmiNwVn64TKhXEO_fqDo8x-1dFarM_Wk8eTlm8Kwu32aJKXvLQWWr7kLKegJ1KVjpXRvvSNgdrH35swLq2RHU3tSs1I0sx4W9yKN_byki1cXaBkJJFgocmO7f9qZ2V_tTb',
  },
  {
    title: 'Python Penetration Testing: This Team Must be Token',
    description: 'How to exfiltrate a Microsoft Teams clear text Auth Token - exploring security vulnerabilities in team collaboration platforms.',
    date: '2024-07-20',
    readTime: '10 min read',
    tags: ['Python', 'Microsoft Teams', 'Token Extraction', 'Penetration Testing'],
    url: 'https://infosecwriteups.com/python-penetration-testing-this-team-must-be-token-851fb8af92b8',
    category: 'python',
    image: 'https://lh3.googleusercontent.com/docsubipk/AP9E6xXwmphpI_rrCqWlGypgDDpWA6Dy1h-Q2hVMAwf2SYB5p9LoQJu3lImkBQfqadRawZHvmxHrLTz0Z9vljxYcTyH53kjulkUFwD38qieYMDAr8G9AeYiax-2TzKTyldszZypcEEN8fJh_k-Hy',
  },
  {
    title: 'Python Penetration Testing: Hacking Multi-Factor Authentication',
    description: 'How I bypass MFA because open doors can be walked through - demonstrating vulnerabilities in MFA implementations.',
    date: '2024-06-25',
    readTime: '11 min read',
    tags: ['Python', 'MFA', 'Security Bypass', 'Authentication'],
    url: 'https://systemweakness.com/python-penetration-testing-hacking-multi-factor-authentication-ed293dc5459d',
    category: 'python',
    image: 'https://lh3.googleusercontent.com/docsubipk/AP9E6xVEgx7tK_dn4BLl7HDkOm5DnY9E4FVaNMoTLinZ12xegt4JxpeVIM27mX7lUKkFcwYHPcVVNZ5ZgqJ2zNfrat5ZPHIwGob8XKrBuZGmzWaxi1dSFIbmDjQMG5UZUkYQ5yxdYhy9h8YU51tC',
  },
  {
    title: 'Python Penetration Testing: Teams Work Makes the Dreams Work',
    description: 'How I use Python to gather juicy Microsoft Teams data - extracting sensitive information from collaboration platforms.',
    date: '2024-05-18',
    readTime: '9 min read',
    tags: ['Python', 'Microsoft Teams', 'Data Extraction', 'Penetration Testing'],
    url: 'https://infosecwriteups.com/python-penetration-testing-teams-work-makes-the-dreams-work-143e9c1d2c3b',
    category: 'python',
    image: 'https://lh3.googleusercontent.com/docsubipk/AP9E6xWgsjTG8_bdZz7bM-zne2Hh4sJM0K_7B0ZK9ZXk5nY66TNfIpu0vJHRn5JWTm9oQy4t4-ND_ZWmNAvUGUmuWHE9LoHzDWz3hr9sdcSlZajWjoVQL6_UFKUjy1xLBio-fesoLMCYzbAPw_I',
  },
  {
    title: 'Python Penetration Testing: File Transfers Using Google API',
    description: 'Moving internal files to an external Google Drive to show impact - demonstrating data exfiltration techniques.',
    date: '2024-04-22',
    readTime: '10 min read',
    tags: ['Python', 'Google API', 'Data Exfiltration', 'Cloud Security'],
    url: 'https://infosecwriteups.com/python-penetration-testing-file-transfers-using-google-api-c4abf43fbcf1',
    category: 'python',
    image: 'https://lh3.googleusercontent.com/docsubipk/AP9E6xW5c5v9Dx_WN5-qdc8WEb3w9gmznqRddqwHzNe4Nklcc8lAKw5Y-_OFRK55DeAVTQZD9gQFfWBU0Kl5QBLgWOTx536IzII9cwdvcmUnzxict4BY3RqwvxhObo0ONYS_j3oAkNN3ZD2NdkY',
  },
  {
    title: 'Python Penetration Testing: Escaping the Matrix',
    description: 'How I GitOut and move exploited internal data to GitHub with Python - demonstrating code repository exfiltration.',
    date: '2024-03-28',
    readTime: '8 min read',
    tags: ['Python', 'GitHub', 'Data Exfiltration', 'Git Security'],
    url: 'https://infosecwriteups.com/python-penetration-testing-escaping-the-matrix-4180874da1b5',
    category: 'python',
    image: 'https://lh3.googleusercontent.com/docsubipk/AP9E6xUww8m84vheCej7epWOBSf6KG9zhYo2K9a7eL7ggDg7eKZ3Ywcz-TehdGrndp88IoSnePnTdzyv3DiqwSc2icM5nVhPqDX0LBU_5RiYjSsR2m04Ca2PXElxFf3qa8KVTi4a8ijVLJb2QkA',
  },
  {
    title: 'Python Penetration Testing: I Can\'t CONTAIN Myself',
    description: 'How I control multiple Docker containers and gather data - exploring container security vulnerabilities.',
    date: '2024-03-15',
    readTime: '11 min read',
    tags: ['Python', 'Docker', 'Containers', 'DevSecOps'],
    url: 'https://infosecwriteups.com/python-penetration-testing-i-cant-contain-myself-409a9d1e20e9',
    category: 'python',
    image: 'https://lh3.googleusercontent.com/docsubipk/AP9E6xXBN2FDxLHaiWKHBLTmzydG-dzdKLq-J93C7Kzoog2Tx0-D5A62hvbtfm2rAVYtjJt_kBGeXd2a8BtU86oC4Sm9kGe_Rq9Kj9w0a2c622qIZYqhmuPRxt1xIKP-iczYbZr-yTQEolspGL8',
  },
  {
    title: 'Python Penetration Testing: Connecting Multiple SQL Databases',
    description: 'Using single sign-on and pyodbc to gather data across multiple databases - demonstrating database enumeration techniques.',
    date: '2024-02-20',
    readTime: '10 min read',
    tags: ['Python', 'SQL', 'Database Security', 'SSO'],
    url: 'https://infosecwriteups.com/python-penetration-testing-connecting-multiple-sql-databases-to-gather-juicy-data-cde9c33853d5',
    category: 'python',
    image: 'https://lh3.googleusercontent.com/docsubipk/AP9E6xVm1YTjLPThdF952qI0FwwJb-jp05hVTJNrdWN4IKtZDDQ6seh2PYTUpKZtVEe8F3HrLWi7-rLW-HO8_WdP7XmxnN-O1VKvjOB4v7GlC4E1KBVyiRgt_tpN8VBYlJZ4kGjZT94ki9rkyVvG',
  },
  {
    title: 'Python Penetration Testing: SQL and Destroy',
    description: 'Discovering SQL databases on networks efficiently - automated database discovery techniques for penetration testers.',
    date: '2024-02-05',
    readTime: '9 min read',
    tags: ['Python', 'SQL', 'Network Discovery', 'Database Security'],
    url: 'https://systemweakness.com/python-penetration-testing-sql-and-destroy-eeed9b70dea2',
    category: 'python',
    image: 'https://lh3.googleusercontent.com/docsubipk/AP9E6xVl6ZABtYegkMHak8ByEDv5BVtYyuzFnlZBBD5vetRRqHsKjnBExpMZr-_83OHX73ESU8hd1CQ-GJ2tROetMJ8AfSdPoT9XwjsH26LPgaLIyiySQ_ngv4Mn8TumEaIlqX3ON4idJ947o595',
  },
  {
    title: 'Python Penetration Testing: Sharing is Caring',
    description: 'How I scan networks for vulnerable SMB shares using Python - identifying misconfigured file shares.',
    date: '2024-01-22',
    readTime: '8 min read',
    tags: ['Python', 'SMB', 'Network Security', 'File Shares'],
    url: 'https://faun.pub/python-penetration-testing-sharing-is-caring-20fe6bdce965',
    category: 'python',
    image: 'https://lh3.googleusercontent.com/docsubipk/AP9E6xVy6k4274Rt4nlYBWqiiUeIZ7dh6jIFSiBvDlW_LEyMGu6tj4FgmN6av5b6xwxkaQlST9obh_hgb__Tr9cY2-diKHJXLsI2xu6Qef6VTBZe_OWjystgqIopZMNKablkgDD6iVBSGOpViA',
  },
  {
    title: 'Python Penetration Testing: Remotely Listing Services',
    description: 'How I discover vulnerable services on Windows and Linux - automated service enumeration across platforms.',
    date: '2024-01-10',
    readTime: '10 min read',
    tags: ['Python', 'Service Discovery', 'Windows', 'Linux'],
    url: 'https://systemweakness.com/python-penetration-testing-remotely-listing-services-5d46228d4d3f',
    category: 'python',
    image: 'https://lh3.googleusercontent.com/docsubipk/AP9E6xUBTJKWK1SnJLR0mCPlGDSBuGa-TbwD7nlM2KMbld-j7H9cE_JqQau0j4frlGrpZSQ2tJrmsiZcZjpg9pEitGXH2lKmwg97mUWQQVyta3rMSvXkIYouhAG5XrV3Ld3sXWNI23YLXMCbyw',
  },
  {
    title: 'Python Penetration Testing: Discovering Obfuscated Web Applications',
    description: 'Techniques for finding hidden web applications and endpoints that organizations may not realize are exposed.',
    date: '2023-12-18',
    readTime: '9 min read',
    tags: ['Python', 'Web Security', 'Reconnaissance', 'OSINT'],
    url: 'https://systemweakness.com/python-penetration-testing-discovering-obfuscated-web-applications-c759a865534b',
    category: 'python',
    image: 'https://lh3.googleusercontent.com/docsubipk/AP9E6xU1G5F41bf0aomtywgJarxeOUbLwS_y17RlPYL6uauWitU8iMxL8XKlef9pWJunj-3FJZ5TiaCNaQ_lZroWRT8cfKDoUjhMxQS2wsxOsX6tt_1QjzVpVRPaAQMGGZgw8bwUIYWBT98ktQ',
  },
  {
    title: 'Python Penetration Testing: Using Hashcat and Python to Crack Passwords',
    description: 'Combining Hashcat with Python automation for efficient password cracking during security assessments.',
    date: '2023-12-05',
    readTime: '12 min read',
    tags: ['Python', 'Hashcat', 'Password Cracking', 'Authentication'],
    url: 'https://systemweakness.com/python-penetration-testing-using-hashcat-and-python-to-crack-windows-passwords-34cb4f052bf3',
    category: 'python',
    image: 'https://lh3.googleusercontent.com/docsubipk/AP9E6xWVMz0c6kPFWXXJywMgyZUXsJzZAWY_kKrnaUmwSNJxL89QIDrPHvJ2MG4gCBLP3hqjpQ6dyZ1CwonPMpLzfYGsa9bAcQ2xD9Wqvb4xRgH2Hn5yGv5OYaDpvI4hnhmPXS6DjT2daop53e4',
  },
  {
    title: 'Python Penetration Testing: Extracting Contact Information from Outlook',
    description: 'Gathering organizational intelligence through Outlook contact extraction for social engineering assessments.',
    date: '2023-11-20',
    readTime: '8 min read',
    tags: ['Python', 'Outlook', 'OSINT', 'Social Engineering'],
    url: 'https://systemweakness.com/python-penetration-testing-extracting-contact-information-from-outlook-2bac232b22a9',
    category: 'python',
    image: 'https://lh3.googleusercontent.com/docsubipk/AP9E6xXVY9t0nHKglWGgkOksS5CvRS1HRCOgqGDW7nZz858sofmipp7OXGt_ps1IBMYswPbNNKO3Z8Xk2NlW6yp4eLCB1QJZZXdr_pqBM6BrwDC-DnEFcAYY1j7GrqPkgFT7QYtEK_XumOLq8A',
  },
  {
    title: 'Python Penetration Testing: Running Multiple Scripts Simultaneously',
    description: 'Efficiently running multiple penetration testing scripts on multiple devices simultaneously for faster assessments.',
    date: '2023-11-08',
    readTime: '10 min read',
    tags: ['Python', 'Automation', 'Parallel Execution', 'Efficiency'],
    url: 'https://systemweakness.com/python-penetration-testing-running-multiple-scripts-on-multiple-devices-simultaneously-1554109ff09c',
    category: 'python',
    image: 'https://lh3.googleusercontent.com/docsubipk/AP9E6xWMaa2E-vy-JNANpKCMqc1CGqDSo-1hEVtvy4PO5J0kaBchaugHIqrn5-spU77LXvqLneRmIJQbH3Yw0itouD36Es_5rbm0eO1zISjN35UplU5Nf7XRYoj5_7FYRhjiFJ9mf8Cyxa9DaCNy',
  },
  {
    title: 'Python Penetration Testing: Capturing and Filtering Web Application Packets',
    description: 'Harvesting credentials through packet analysis - demonstrating network traffic interception techniques.',
    date: '2023-10-25',
    readTime: '11 min read',
    tags: ['Python', 'Packet Analysis', 'Network Security', 'Credential Harvesting'],
    url: 'https://systemweakness.com/python-penetration-testing-capturing-and-filtering-web-application-packets-to-harvest-credentials-e737a87374db',
    category: 'python',
    image: 'https://lh3.googleusercontent.com/docsubipk/AP9E6xV8Ayer-cuGlfMq7YHQyMkGb45QZunhvIri6mnGzqrbeUkF0zxQA-lgrm23brc6jvsztGWQ558Yzv3_0u-9mS_8Xa2Yrt6B3frxasAnBbDD_PW8O6FSwdJK6j3emp6ED0V4dKNGFi9LIPI',
  },
  // Security Tools & Integration
  {
    title: 'Knowbe4 to Splunk',
    description: 'How to ingest Knowbe4 data to Splunk using HEC Tokens - integrating security awareness data with SIEM platforms.',
    date: '2023-10-10',
    readTime: '8 min read',
    tags: ['Splunk', 'Knowbe4', 'SIEM', 'Integration'],
    url: 'https://medium.com/@ekiser_48014/knowbe4-to-splunk-33c5bdd53e29',
    category: 'tools',
    image: 'https://lh3.googleusercontent.com/docsubipk/AP9E6xXi0Gv-fUOJ0_Drv-L6Ad-7pwC1DDulHYWZO1WFzO5wE6dcwetd3a_bXvGbmlmMx6-oFsKJP-6j1mgms2ynaG0bFY6d5EhjT0YQ14toOK8anTjRweTQ7sPCsC5hVbyfAQ_SMsVDQdRUqZIC',
  },
  {
    title: 'How I Move Web App Data to Splunk using HEC Tokens',
    description: 'Ingesting data from Knowbe4 PhishER into Splunk - building security data pipelines for better visibility.',
    date: '2023-09-28',
    readTime: '9 min read',
    tags: ['Splunk', 'HEC Tokens', 'Data Integration', 'PhishER'],
    url: 'https://infosecwriteups.com/how-i-move-web-app-data-to-splunk-using-hec-tokens-ec371a298e58',
    category: 'tools',
    image: 'https://lh3.googleusercontent.com/docsubipk/AP9E6xUt-UkUclJXU16Nw0gqq1O0fYqNa79kNT6fsi8NBugMXQCTV-5srDjWzxchPv954qhvrL8JAQjhhZTUI4Co-ZFJLbaHTxBrwDTgoh_MVI3TS_dD7SoFN2BpV62suQDJPtHTqyVSUegFVDM',
  },
  {
    title: 'Vulnerability Management Tool Review: Tenable.io',
    description: 'Comprehensive review of Tenable.io for enterprise vulnerability management and security assessment.',
    date: '2023-09-15',
    readTime: '10 min read',
    tags: ['Tenable', 'Vulnerability Management', 'Tool Review', 'Security'],
    url: 'https://medium.com/@ekiser_48014/vulnerability-management-tool-review-tenable-io-71a249426e3e',
    category: 'tools',
    image: 'https://lh3.googleusercontent.com/docsubipk/AP9E6xVm6-1yAQ1YNsSW3pijxaiQ40oXlu857MLsCcHcLx2WQXwobdRzv3E0ChbOlKucbIzNBSlza5Y5YhyxchWbGnWLfV3i9jodbwbjw1Fk-CuTgza12fWaL9osSzdoly7CcrlZh3eTM1TJ46B_',
  },
  {
    title: 'Cyber Incident Response Workflow Diagraming Tools',
    description: 'A comprehensive review of tools and techniques for documenting and visualizing incident response workflows.',
    date: '2023-08-22',
    readTime: '9 min read',
    tags: ['Incident Response', 'Tools', 'Workflow', 'Documentation'],
    url: 'https://medium.com/@ekiser_48014/cyber-incident-response-workflow-diagraming-tools-7ca4a2445bb2',
    category: 'tools',
    image: 'https://lh3.googleusercontent.com/docsubipk/AP9E6xX3UpXnAz2HPlPgmkF76wkkyIFyv42MahiXgzd94uNhq1wUhR1ICkdDaVIawQsOmnDdvggRMbEX2cCWAX2kfFsT9Q_T9_r8v4yFTmb3tFabFdiZg1fKxEkNOFrRyNTc8avYAlphG9yau-qy',
  },
  // Security Management & Strategy
  {
    title: 'Exploiting Local Admin Access',
    description: 'Understanding the risks of local admin access and strategies for implementing least privilege principles.',
    date: '2023-08-10',
    readTime: '8 min read',
    tags: ['Privilege Escalation', 'Local Admin', 'Least Privilege', 'Security'],
    url: 'https://infosecwriteups.com/exploiting-local-admin-access-dfb42eddf5d2',
    category: 'security',
    image: 'https://lh3.googleusercontent.com/docsubipk/AP9E6xV8U_NRdkXDcKY6rL8fnQAAKdmz5GfUUQtymnSLOM4DNxIKAN3htCJH463DAxUJ4BHvX7-yPm99wBeifxDmhPfjAfN9BE7onqshaIRCPoRYlm_sVypGNCsZ_GMRBhWwjB8Iw0JYhpr41oc2OQ',
  },
  {
    title: 'Creating a Vulnerability Management Policy',
    description: 'Guide to developing comprehensive vulnerability management policies for enterprise security programs.',
    date: '2023-07-25',
    readTime: '11 min read',
    tags: ['Policy', 'Vulnerability Management', 'Governance', 'Compliance'],
    url: 'https://medium.com/@ekiser_48014/creating-a-vulnerability-management-policy-92178e7cbedc',
    category: 'security',
    image: 'https://lh3.googleusercontent.com/docsubipk/AP9E6xUp9UayhJYdvdSdc4ySgmoxQSURh3o0orhmjlB7mWynIWSL6YuQ6eym6f4OTz91Y1sOVLyh6vW1iVI3wwJIkP8DCsOMNnXyFEvVlQzU0tQ2PzFm1TDlKyjyq289ejq2lG6azk2at5iNgchj',
  },
  {
    title: 'Integrating Vulnerability Management into the Risk Management Strategy',
    description: 'Aligning vulnerability management with broader organizational risk management frameworks.',
    date: '2023-07-10',
    readTime: '10 min read',
    tags: ['Risk Management', 'Vulnerability Management', 'Strategy', 'GRC'],
    url: 'https://medium.com/@ekiser_48014/integrating-vulnerability-management-into-the-risk-management-strategy-46e323e6479d',
    category: 'security',
    image: 'https://lh3.googleusercontent.com/docsubipk/AP9E6xWEsWCrYvUsRC9pPC2VeWCRwje-Xhljeoy8iUekm_vwP7q2-ahaKbz7K4AIdjpGdtn-IEfy8k1SEOKRPjJ-lfUVnCHHqoBCW5r1poYWyOU0TDsCxyZgHxs9bxKjwFCxXXfbeLcSnTd4-KQ',
  },
  {
    title: 'Agile VS Waterfall',
    description: 'Evaluating project management approaches for multi-factor authentication implementation in security projects.',
    date: '2023-06-20',
    readTime: '8 min read',
    tags: ['Project Management', 'Agile', 'Waterfall', 'MFA Implementation'],
    url: 'https://faun.pub/agile-vs-waterfall-7b1ca6326ddd',
    category: 'general',
    image: 'https://lh3.googleusercontent.com/docsubipk/AP9E6xWm3_30Elcsbe3O39P7RwDv3C2O54hC03WkMI_4dJ91DhhJxExtUHEh_mooJbt-dOkySW31MGgWwM_cn2IcPWA09206HzrXSRWK4zSuVGuXVUYRU5JkzVSrFiq4gsjKXIPxdIg8u6UhRye3',
  },
  // Career & Industry
  {
    title: 'Attending CruiseCon 2025',
    description: 'A cybersecurity review of Ira Winkler\'s latest venture - real conversations and meaningful connections within the IT security community.',
    date: '2025-02-15',
    readTime: '8 min read',
    tags: ['Cybersecurity', 'Conferences', 'Networking', 'Community'],
    url: 'https://medium.com/@ekiser_48014/attending-cruisecon-2025-b059729be6e9',
    category: 'career',
  },
  {
    title: 'The ROI On Enterprise Attack Simulation',
    description: 'Penetration testing as a strategic investment - demonstrating substantial returns for organizations through measurable risk reduction.',
    date: '2024-04-20',
    readTime: '12 min read',
    tags: ['Attack Simulation', 'ROI', 'Enterprise Security', 'Business Value'],
    url: 'https://medium.com/@ekiser_48014/the-roi-one-enterprise-attack-simulation-6c8bbf5083da',
    category: 'career',
  },
  {
    title: 'Is Cybersecurity Recession Proof?',
    description: 'Analyzing career stability in cybersecurity during economic downturns - demand for security professionals persists.',
    date: '2024-02-15',
    readTime: '7 min read',
    tags: ['Careers', 'Cybersecurity', 'Industry Trends', 'Job Market'],
    url: 'https://medium.com/@ekiser_48014/is-cybersecurity-recession-proof-b5af61690508',
    category: 'career',
  },
  {
    title: 'PowerShell System Port Scans',
    description: 'Using PowerShell for penetration testing when endpoint security blocks traditional scanning tools.',
    date: '2024-06-10',
    readTime: '10 min read',
    tags: ['PowerShell', 'Penetration Testing', 'Port Scanning', 'Evasion'],
    url: 'https://medium.com/@ekiser_48014/powershell-system-port-scans-d9299a9e8962',
    category: 'security',
  },
];

const categoryIcons: Record<Publication['category'], JSX.Element> = {
  python: (
    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/>
    </svg>
  ),
  security: (
    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  tools: (
    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  career: (
    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  general: (
    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
};

const categoryColors: Record<Publication['category'], string> = {
  python: 'from-yellow-500 to-blue-600',
  security: 'from-red-500 to-purple-600',
  tools: 'from-green-500 to-teal-600',
  career: 'from-blue-500 to-indigo-600',
  general: 'from-gray-500 to-slate-600',
};

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function Publications() {
  // Sort by date, newest first
  const sortedPublications = [...publications].sort((a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="py-20 tech-bg circuit-overlay">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="section-heading mb-4">Publications</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {publications.length} articles covering Python penetration testing, cybersecurity tools,
            vulnerability management, and industry insights.
          </p>
        </div>

        {/* Medium Link */}
        <div className="flex justify-center mb-12 animate-fade-in-up" style={{ opacity: 0, animationDelay: '0.2s' }}>
          <a
            href="https://medium.com/@ekiser_48014"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <span className="flex items-center gap-3">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
              </svg>
              Follow on Medium
            </span>
          </a>
        </div>

        {/* Articles Section Header */}
        <h2 className="section-subheading mb-8 flex items-center gap-3">
          <span className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
          </span>
          Articles
        </h2>

        {/* Publications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedPublications.map((publication, index) => (
            <article
              key={publication.title}
              className="card p-6 group animate-fade-in-up flex flex-col"
              style={{ opacity: 0, animationDelay: `${0.1 + (index % 9) * 0.05}s` }}
            >
              {/* Thumbnail */}
              <div className={`w-full h-32 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden ${!publication.image ? `bg-gradient-to-br ${categoryColors[publication.category]}` : ''}`}>
                {publication.image ? (
                  <img
                    src={publication.image}
                    alt={publication.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-black/10" />
                    <div className="relative z-10 w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                      {categoryIcons[publication.category]}
                    </div>
                  </>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col">
                <div className="flex items-center gap-2 text-xs text-blue-200 mb-2">
                  <time dateTime={publication.date}>{formatDate(publication.date)}</time>
                  <span className="w-1 h-1 bg-blue-300 rounded-full" />
                  <span>{publication.readTime}</span>
                </div>

                <a
                  href={publication.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link"
                >
                  <h2 className="text-lg font-bold text-white group-hover/link:text-blue-200 transition-colors mb-2 line-clamp-2">
                    {publication.title}
                  </h2>
                </a>

                <p className="text-blue-100 text-sm mb-4 line-clamp-3 flex-1">
                  {publication.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {publication.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs bg-white/20 text-white rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={publication.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-white hover:text-blue-200 font-medium transition-colors group/btn"
                >
                  Read Article
                  <svg
                    className="w-4 h-4 transition-transform group-hover/btn:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Videos Section */}
        <div className="mt-16 mb-16">
          <h2 className="section-subheading mb-8 flex items-center gap-3">
            <span className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </span>
            Videos
          </h2>

          {/* Full Videos */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {videos.filter(v => v.type === 'video').map((video, index) => (
              <a
                key={video.id}
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="card p-4 group animate-fade-in-up block"
                style={{ opacity: 0, animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <div className="relative aspect-video rounded-lg overflow-hidden mb-4 bg-gray-100">
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 brightness-110"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-red-600/90 flex items-center justify-center group-hover:scale-110 group-hover:bg-red-600 transition-all shadow-lg">
                      <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-blue-200 transition-colors">
                  {video.title}
                </h3>
              </a>
            ))}
          </div>

          {/* Shorts */}
          <h3 className="text-lg font-semibold text-gray-700 mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.77 10.32c-.77-.32-1.2-.5-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zM10 14.65v-5.3L15 12l-5 2.65z"/>
            </svg>
            Shorts
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {videos.filter(v => v.type === 'short').map((video, index) => (
              <a
                key={video.id}
                href={`https://www.youtube.com/shorts/${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="card p-3 group animate-fade-in-up block"
                style={{ opacity: 0, animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="relative aspect-[9/16] rounded-lg overflow-hidden mb-3 bg-gray-100">
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 brightness-110"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-red-600/90 flex items-center justify-center group-hover:scale-110 group-hover:bg-red-600 transition-all shadow-lg">
                      <svg className="w-6 h-6 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <h3 className="text-sm font-semibold text-white group-hover:text-blue-200 transition-colors line-clamp-2">
                  {video.title}
                </h3>
              </a>
            ))}
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 animate-fade-in-up" style={{ opacity: 0, animationDelay: '0.8s' }}>
          <div className="card p-8 lg:p-12 text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-white/20 flex items-center justify-center animate-float">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
              </svg>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-blue-100 mb-8 max-w-xl mx-auto">
              Follow me on Medium to get notified when I publish new articles about cybersecurity,
              penetration testing, and information security.
            </p>
            <a
              href="https://medium.com/@ekiser_48014"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium bg-white text-indigo-600 rounded-lg shadow-lg hover:bg-indigo-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              Follow on Medium
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
