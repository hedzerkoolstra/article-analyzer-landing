export interface Outlet {
  slug: string;
  name: string;
  score: number;
  rank: number;
  trend: number;
  signaturePlay: { typeSlug: string; typeLabel: string };
  n: number;
}

export interface TechniqueSubtype {
  slug: string;
  label: string;
  definition: string;
  frequency: string;
}

export interface TechniqueType {
  typeSlug: string;
  typeLabel: string;
  subtypes: TechniqueSubtype[];
}

export interface Finding {
  quote: string;
  typeSlug: string;
  typeLabel: string;
  findingLabel: string;
}

export const outlets: Outlet[] = [
  { slug: "the-daily-standard", name: "The Daily Standard", score: 79, rank: 1, trend: 1, signaturePlay: { typeSlug: "emotional-manipulation", typeLabel: "Emotional manipulation" }, n: 84 },
  { slug: "national-post-online", name: "National Post Online", score: 72, rank: 2, trend: -1, signaturePlay: { typeSlug: "framing-omission", typeLabel: "Framing & omission" }, n: 71 },
  { slug: "the-morning-herald", name: "The Morning Herald", score: 66, rank: 3, trend: 0, signaturePlay: { typeSlug: "rhetorical-device", typeLabel: "Rhetorical device" }, n: 92 },
  { slug: "global-times-weekly", name: "Global Times Weekly", score: 61, rank: 4, trend: 2, signaturePlay: { typeSlug: "false-authority", typeLabel: "False authority" }, n: 56 },
  { slug: "the-independent-voice", name: "The Independent Voice", score: 55, rank: 5, trend: -2, signaturePlay: { typeSlug: "logical-fallacy", typeLabel: "Logical fallacy" }, n: 103 },
  { slug: "metro-daily", name: "Metro Daily", score: 50, rank: 6, trend: 1, signaturePlay: { typeSlug: "emotional-manipulation", typeLabel: "Emotional manipulation" }, n: 67 },
  { slug: "the-evening-post", name: "The Evening Post", score: 43, rank: 7, trend: 0, signaturePlay: { typeSlug: "framing-omission", typeLabel: "Framing & omission" }, n: 88 },
  { slug: "civic-press", name: "Civic Press", score: 38, rank: 8, trend: 3, signaturePlay: { typeSlug: "data-evidence", typeLabel: "Data & evidence issue" }, n: 44 },
  { slug: "the-broadsheet", name: "The Broadsheet", score: 32, rank: 9, trend: -1, signaturePlay: { typeSlug: "rhetorical-device", typeLabel: "Rhetorical device" }, n: 79 },
  { slug: "republic-gazette", name: "Republic Gazette", score: 27, rank: 10, trend: 0, signaturePlay: { typeSlug: "logical-fallacy", typeLabel: "Logical fallacy" }, n: 61 },
  { slug: "northern-dispatch", name: "Northern Dispatch", score: 21, rank: 11, trend: -3, signaturePlay: { typeSlug: "false-authority", typeLabel: "False authority" }, n: 38 },
  { slug: "the-wire-report", name: "The Wire Report", score: 19, rank: 12, trend: 2, signaturePlay: { typeSlug: "emotional-manipulation", typeLabel: "Emotional manipulation" }, n: 55 },
  { slug: "continental-news", name: "Continental News", score: 14, rank: 13, trend: 1, signaturePlay: { typeSlug: "framing-omission", typeLabel: "Framing & omission" }, n: 49 },
  { slug: "state-media-today", name: "State Media Today", score: 8, rank: 14, trend: 0, signaturePlay: { typeSlug: "emotional-manipulation", typeLabel: "Emotional manipulation" }, n: 97 },
  { slug: "the-peoples-tribune", name: "The People's Tribune", score: 3, rank: 15, trend: 1, signaturePlay: { typeSlug: "false-authority", typeLabel: "False authority" }, n: 82 },
];

export const taxonomy: TechniqueType[] = [
  {
    typeSlug: "logical-fallacy",
    typeLabel: "Logical fallacy",
    subtypes: [
      { slug: "straw-man", label: "Straw man", definition: "Misrepresents an opponent's argument to make it easier to attack.", frequency: "14%" },
      { slug: "false-dichotomy", label: "False dichotomy", definition: "Presents only two options when more exist.", frequency: "11%" },
      { slug: "ad-hominem", label: "Ad hominem", definition: "Attacks the person rather than the argument.", frequency: "9%" },
      { slug: "slippery-slope", label: "Slippery slope", definition: "Claims one event will inevitably trigger a chain of negative consequences.", frequency: "8%" },
      { slug: "circular-reasoning", label: "Circular reasoning", definition: "Uses the conclusion as a premise in its own justification.", frequency: "5%" },
      { slug: "non-sequitur", label: "Non sequitur", definition: "Draws a conclusion that doesn't follow from the premises.", frequency: "7%" },
      { slug: "hasty-generalisation", label: "Hasty generalisation", definition: "Draws a broad conclusion from too few examples.", frequency: "9%" },
      { slug: "appeal-to-tradition", label: "Appeal to tradition", definition: "Argues something is correct simply because it has always been done that way.", frequency: "6%" },
      { slug: "appeal-to-novelty", label: "Appeal to novelty", definition: "Argues something is better simply because it is new.", frequency: "5%" },
      { slug: "whataboutism", label: "Whataboutism", definition: "Deflects criticism by pointing to an unrelated wrongdoing elsewhere.", frequency: "12%" },
      { slug: "red-herring", label: "Red herring", definition: "Introduces an irrelevant point to distract from the issue.", frequency: "10%" },
      { slug: "loaded-question", label: "Loaded question", definition: "Asks a question with a false or disputed assumption built in.", frequency: "8%" },
      { slug: "moving-the-goalposts", label: "Moving the goalposts", definition: "Shifts the required standard of evidence after it has been met.", frequency: "6%" },
      { slug: "nirvana-fallacy", label: "Nirvana fallacy", definition: "Rejects a workable solution because it isn't perfect.", frequency: "7%" },
    ],
  },
  {
    typeSlug: "false-authority",
    typeLabel: "False authority",
    subtypes: [
      { slug: "unnamed-expert", label: "Unnamed expert", definition: "Cites vague or anonymous authority to lend credibility.", frequency: "18%" },
      { slug: "credential-mismatch", label: "Credential mismatch", definition: "Invokes expertise from an unrelated field.", frequency: "6%" },
      { slug: "bandwagon", label: "Bandwagon", definition: "Implies something is correct because many people believe it.", frequency: "7%" },
      { slug: "appeal-to-authority", label: "Appeal to authority", definition: "Uses an expert's status to close down debate rather than engage with the argument.", frequency: "15%" },
      { slug: "institutional-shielding", label: "Institutional shielding", definition: "Hides a claim behind an institution's name without linking to specific evidence.", frequency: "16%" },
      { slug: "false-consensus", label: "False consensus", definition: "Claims a majority view exists without evidence to support the claim.", frequency: "11%" },
      { slug: "anonymous-sourcing", label: "Anonymous sourcing", definition: "Attributes claims to unnamed insiders with no way to verify.", frequency: "13%" },
      { slug: "outdated-authority", label: "Outdated authority", definition: "Cites a real expert or study whose conclusions have since been revised.", frequency: "8%" },
    ],
  },
  {
    typeSlug: "framing-omission",
    typeLabel: "Framing & omission",
    subtypes: [
      { slug: "selective-framing", label: "Selective framing", definition: "Presents facts in a way that emphasizes a predetermined conclusion.", frequency: "19%" },
      { slug: "omission", label: "Omission", definition: "Leaves out key context that would change the reader's interpretation.", frequency: "16%" },
      { slug: "loaded-language", label: "Loaded language", definition: "Uses emotionally charged words to bias the reader's perception.", frequency: "22%" },
      { slug: "euphemism", label: "Euphemism", definition: "Uses softer language to minimize or obscure the severity of something.", frequency: "14%" },
      { slug: "misleading-headline", label: "Misleading headline", definition: "The headline implies something the article body doesn't support.", frequency: "17%" },
      { slug: "one-sided-sourcing", label: "One-sided sourcing", definition: "All sources share the same perspective; opposing views are absent.", frequency: "20%" },
      { slug: "false-balance", label: "False balance", definition: "Presents two sides as equally credible when evidence strongly favours one.", frequency: "12%" },
      { slug: "buried-lede", label: "Buried lede", definition: "The most important fact appears late or briefly while less significant details lead.", frequency: "11%" },
      { slug: "context-collapse", label: "Context collapse", definition: "A quote or event is presented stripped of the context that would change its meaning.", frequency: "13%" },
    ],
  },
  {
    typeSlug: "emotional-manipulation",
    typeLabel: "Emotional manipulation",
    subtypes: [
      { slug: "fear-appeal", label: "Fear appeal", definition: "Exploits fear to bypass rational evaluation.", frequency: "17%" },
      { slug: "outrage-bait", label: "Outrage bait", definition: "Deliberately provokes anger to drive engagement over reflection.", frequency: "13%" },
      { slug: "moral-panic", label: "Moral panic", definition: "Frames an issue as an urgent threat to social values.", frequency: "10%" },
      { slug: "appeal-to-emotion", label: "Appeal to emotion", definition: "Uses emotional language to drive a conclusion rather than make an argument.", frequency: "21%" },
      { slug: "false-urgency", label: "False urgency", definition: "Creates a sense of emergency to force a decision before proper evaluation.", frequency: "9%" },
      { slug: "catastrophising", label: "Catastrophising", definition: "Presents an uncertain outcome as a guaranteed worst-case scenario.", frequency: "11%" },
      { slug: "sentimental-appeal", label: "Sentimental appeal", definition: "Uses emotional stories to bypass the argument and reach the conclusion directly.", frequency: "14%" },
      { slug: "dehumanisation", label: "Dehumanisation", definition: "Describes a group of people in ways that reduce their humanity.", frequency: "7%" },
      { slug: "us-vs-them", label: "Us vs them", definition: "Divides the world into two camps — one good, one bad — removing all nuance.", frequency: "15%" },
      { slug: "guilt-tripping", label: "Guilt tripping", definition: "Makes the reader feel personally responsible for a problem to drive a reaction.", frequency: "8%" },
      { slug: "flattery", label: "Flattery", definition: "Compliments the reader to lower their guard before making a claim.", frequency: "6%" },
      { slug: "nostalgia-appeal", label: "Nostalgia appeal", definition: "Romanticises the past to make the present seem broken by comparison.", frequency: "10%" },
    ],
  },
  {
    typeSlug: "data-evidence",
    typeLabel: "Data & evidence issue",
    subtypes: [
      { slug: "cherry-picking", label: "Cherry-picking", definition: "Selects only the data that supports the argument.", frequency: "12%" },
      { slug: "misleading-statistic", label: "Misleading statistic", definition: "Uses technically accurate numbers in a way that creates a false impression.", frequency: "14%" },
      { slug: "false-equivalence", label: "False equivalence", definition: "Treats two unequal things as if they were the same.", frequency: "9%" },
      { slug: "misleading-correlation", label: "Misleading correlation", definition: "Treats two things that occur together as if one caused the other.", frequency: "10%" },
      { slug: "unverifiable-claim", label: "Unverifiable claim", definition: "Makes a specific claim with no source attached that can be checked.", frequency: "16%" },
      { slug: "fabricated-claim", label: "Fabricated claim", definition: "States something demonstrably false as fact.", frequency: "5%" },
      { slug: "sample-size-abuse", label: "Sample size abuse", definition: "Draws firm conclusions from a dataset too small to support them.", frequency: "9%" },
      { slug: "base-rate-neglect", label: "Base rate neglect", definition: "Presents a number without the baseline needed to understand what it means.", frequency: "11%" },
      { slug: "undefined-metric", label: "Undefined metric", definition: "Cites a number without defining what it actually measures.", frequency: "13%" },
      { slug: "anecdotal-evidence", label: "Anecdotal evidence", definition: "Uses a single personal case to support a general claim.", frequency: "18%" },
    ],
  },
  {
    typeSlug: "rhetorical-device",
    typeLabel: "Rhetorical device",
    subtypes: [
      { slug: "appeal-to-nature", label: "Appeal to nature", definition: "Claims something is good or bad based on whether it is 'natural'.", frequency: "8%" },
      { slug: "repetition", label: "Repetition", definition: "Repeats a claim to make it feel more true through familiarity.", frequency: "15%" },
      { slug: "question-as-assertion", label: "Question as assertion", definition: "Uses a rhetorical question to imply a conclusion without stating it.", frequency: "11%" },
      { slug: "weasel-words", label: "Weasel words", definition: "Uses vague qualifiers to imply a claim without committing to it.", frequency: "19%" },
      { slug: "appeal-to-inevitability", label: "Appeal to inevitability", definition: "Frames an outcome as unavoidable to make alternatives seem pointless.", frequency: "12%" },
      { slug: "thought-terminating-cliche", label: "Thought-terminating cliché", definition: "Uses a stock phrase to shut down further questioning.", frequency: "10%" },
      { slug: "strategic-vagueness", label: "Strategic vagueness", definition: "Uses deliberately ambiguous language so different readers read in different meanings.", frequency: "14%" },
    ],
  },
];

export const findings: Finding[] = [
  {
    quote: "Experts warn that if this policy passes, the consequences could be catastrophic for millions of families.",
    typeSlug: "emotional-manipulation",
    typeLabel: "Emotional manipulation",
    findingLabel: "Fear appeal — unnamed experts, no evidence cited",
  },
  {
    quote: "You're either with us on this or you're against the working people of this country.",
    typeSlug: "logical-fallacy",
    typeLabel: "Logical fallacy",
    findingLabel: "False dichotomy — excludes middle-ground positions",
  },
  {
    quote: "Studies show that a majority of citizens support stricter measures.",
    typeSlug: "false-authority",
    typeLabel: "False authority",
    findingLabel: "Unnamed study — no citation, no sample size",
  },
  {
    quote: "The so-called 'reform' is nothing more than a thinly veiled attempt to dismantle everything we've built.",
    typeSlug: "framing-omission",
    typeLabel: "Framing & omission",
    findingLabel: "Loaded language — 'so-called' and 'dismantle' frame without evidence",
  },
];
