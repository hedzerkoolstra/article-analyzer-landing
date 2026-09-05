export type ScoreTier = "low" | "medium" | "high";

export interface ArticleSegment {
  text: string;
  findingId?: string;
}

export interface ArticleParagraph {
  segments: ArticleSegment[];
}

export interface DemoFinding {
  id: string;
  typeSlug: string;
  typeLabel: string;
  typeDefinition: string;
  subtypeLabel: string;
  subtypeDefinition: string;
  verdict: string;
}

export interface DemoFindingType {
  typeSlug: string;
  typeLabel: string;
  count: number;
}

export interface DemoAnalysis {
  headline: string;
  outlet: string;
  byline: string;
  date: string;
  paragraphs: ArticleParagraph[];
  score: number;
  tier: ScoreTier;
  tierLabel: string;
  verdict: string;
  findings: DemoFinding[];
}

export const demoAnalysis: DemoAnalysis = {
  headline: "Council closes Northgate emergency department in late-night vote",
  outlet: "The Northgate Chronicle",
  byline: "Erin Vance",
  date: "3 September",
  score: 24,
  tier: "low",
  tierLabel: "low credibility",
  verdict: "Loaded framing, unnamed experts, a statistic with no baseline.",

  paragraphs: [
    {
      segments: [
        {
          text: "Northgate District Council voted late on Tuesday to close the emergency department at Northgate General and move all urgent cases to Fairvale Hospital, 38 kilometres away. ",
        },
        {
          text: "The decision guts a service the town has relied on for sixty years.",
          findingId: "loaded-language",
        },
      ],
    },
    {
      segments: [
        {
          text: "Healthcare experts warn that the closure will cost lives.",
          findingId: "unnamed-expert",
        },
        {
          text: " The council's own transport study puts the average journey from Northgate to Fairvale at 41 minutes. ",
        },
        {
          text: "For residents in the outlying villages, that is a 300 per cent increase in travel time.",
          findingId: "misleading-statistic",
        },
      ],
    },
    {
      segments: [
        {
          text: "Council leader Margaret Ellery defended the vote as a consolidation of specialist staff, ",
        },
        {
          text: "pointing to a £4.2 million shortfall in the trust's budget.",
          findingId: "omission",
        },
        {
          text: " Fairvale's emergency department currently treats around 200 patients a day.",
        },
      ],
    },
    {
      segments: [
        {
          text: "Families are being asked to gamble that the ambulance arrives in time.",
          findingId: "fear-appeal",
        },
        {
          text: " A consultation on the decision opened on Wednesday. ",
        },
        {
          text: "Residents have until Friday to submit objections before the plan becomes final.",
          findingId: "false-urgency",
        },
      ],
    },
  ],

  findings: [
    {
      id: "loaded-language",
      typeSlug: "framing-omission",
      typeLabel: "Framing & omission",
      typeDefinition: "How the facts are arranged, and which ones are left out.",
      subtypeLabel: "Loaded language",
      subtypeDefinition: "Uses emotionally charged words to bias the reader's perception.",
      verdict: "\"Guts\" settles the reader's judgement before the decision is described.",
    },
    {
      id: "unnamed-expert",
      typeSlug: "false-authority",
      typeLabel: "False authority",
      typeDefinition: "Credibility borrowed from a source that cannot be checked.",
      subtypeLabel: "Unnamed expert",
      subtypeDefinition: "Cites vague or anonymous authority to lend credibility.",
      verdict: "No expert named, no study cited, no figure attached.",
    },
    {
      id: "misleading-statistic",
      typeSlug: "data-evidence",
      typeLabel: "Data & evidence issue",
      typeDefinition: "Numbers that do not support what they appear to.",
      subtypeLabel: "Misleading statistic",
      subtypeDefinition: "Uses technically accurate numbers in a way that creates a false impression.",
      verdict: "300 per cent of a baseline the article never states.",
    },
    {
      id: "omission",
      typeSlug: "framing-omission",
      typeLabel: "Framing & omission",
      typeDefinition: "How the facts are arranged, and which ones are left out.",
      subtypeLabel: "Omission",
      subtypeDefinition: "Leaves out key context that would change the reader's interpretation.",
      verdict: "The shortfall is reported. The four ambulances and the 24-hour urgent care unit in the same plan are not.",
    },
    {
      id: "fear-appeal",
      typeSlug: "emotional-manipulation",
      typeLabel: "Emotional manipulation",
      typeDefinition: "A reaction produced ahead of evaluation.",
      subtypeLabel: "Fear appeal",
      subtypeDefinition: "Exploits fear to bypass rational evaluation.",
      verdict: "Puts the reader's family in the ambulance. No response-time data anywhere in the piece.",
    },
    {
      id: "false-urgency",
      typeSlug: "emotional-manipulation",
      typeLabel: "Emotional manipulation",
      typeDefinition: "A reaction produced ahead of evaluation.",
      subtypeLabel: "False urgency",
      subtypeDefinition: "Creates a sense of emergency to force a decision before proper evaluation.",
      verdict: "Two days to object. The consultation runs for six weeks.",
    },
  ],
};

/** Returns the article passage a finding was raised on. */
export function quoteFor(analysis: DemoAnalysis, findingId: string): string {
  for (const paragraph of analysis.paragraphs) {
    const segment = paragraph.segments.find((s) => s.findingId === findingId);
    if (segment) return segment.text.trim();
  }
  return "";
}

/** Groups findings by technique type for the filter strip, in order of first appearance. */
export function findingTypes(analysis: DemoAnalysis): DemoFindingType[] {
  const types: DemoFindingType[] = [];
  for (const finding of analysis.findings) {
    const existing = types.find((t) => t.typeSlug === finding.typeSlug);
    if (existing) {
      existing.count += 1;
      continue;
    }
    types.push({ typeSlug: finding.typeSlug, typeLabel: finding.typeLabel, count: 1 });
  }
  return types;
}
