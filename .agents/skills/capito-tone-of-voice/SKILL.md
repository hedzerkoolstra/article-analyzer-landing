---
name: capito-tone-of-voice
description: "The only authority on tone of voice for Capito copy — landing site, extension UI, findings, verdicts, section names, CTAs. Use when: writing or editing any user-facing text, naming a section or feature, choosing a headline, or reviewing copy someone else wrote."
argument-hint: "Paste the copy slot or the sentence you are writing"
---

# Capito Tone of Voice

Calibrated against the product owner, sentence by sentence. The examples are the
specification. The rules are a summary of them, not a replacement.

No-nonsense, honest, direct. No marketing fluff. No AI slop. No cleverness; wit gets
added by hand where it belongs.

What that resolves to in practice: the copy describes mechanics and leaves the reader
to draw the conclusion. It does not sell, reassure, or announce an insight. Capito is
rarely the subject of its own sentences — the article is what gets talked about, and
the reader is trusted to work out why that matters without being told.

The register to aim for is a technical note. Every instinct that makes a sentence feel
like a landing page — the rhythm, the reveal, the reassurance, the tidy contrast —
works against the product, because a tool that measures manipulation cannot afford to
sound like it is performing any.

## Two registers

**Verdict register** — findings, verdicts, scores. Anything the product outputs about
an article. Fragments. No verb required.

```
✓  Fear language, unnamed experts, no evidence.
✓  Catastrophising to shut down further questions.
```

**Copy register** — everything the site says in its own name. Plain sentences.

```
✓  Every article gets its own score.
✓  Fear makes you decide faster and check less.
```

Enumeration belongs to the verdict register only. A comma triad in copy reads slick:
`✗ Score, verdict, findings.`

## Banned constructions

These are hard rules, not preferences.

| Banned | Why |
|---|---|
| `Not X, it's Y` · `X isn't just Y — it's Z` | AI slop. Strictly forbidden in any copy. |
| Em-dash aphorism — `Fear shortcuts judgement — you act before you assess.` | Compression reads as cleverness. |
| Appended explanation — `…which is what makes it usable across the spectrum.` | State it and stop. |
| Revelation cadence — `Averages hide a lot.` | Reads as uncovering a mystic truth. |
| Savior framing — `Read without being played.` | "We will save you" energy. |
| Convenience framing — `See the propaganda while you're reading it.` | Turns the product into a productivity hack. |
| Clinical abstraction — `the brain drops its guard` | Concrete second person instead. |

## Who is the subject

The article, the reader's situation, or the mechanism. Not Capito.

```
✓  Most articles use propaganda.
✓  Higher scores mean less credibility.
✗  Capito measures technique, not political direction.
✗  Capito doesn't rate left or right. It counts what the article does.
```

Capito may be the subject when stating a **limit**, never a capability:

```
✓  Capito counts persuasion techniques. It doesn't check facts.
```

## Attribution of intent

Name what the technique does. Never what the author wants.

```
✓  Catastrophising to shut down further questions.
✗  Unsourced claim about catastrophic consequences.     (too inert — says nothing)
✗  The author wants you scared enough to stop reading.  (mind-reading)
```

## Vocabulary

- **Propaganda** is the noun the site leads with. Techniques are the method, not the
  essence — `technique` stays down at finding level as the evidence layer.
- **Credibility** is what the score measures. Higher score = less credibility.
- No qualifiers on the install ask: `Get the extension`, not `Add to Chrome — it's free`.
- Sections are named descriptively — `Outlet scores`, not `The Capito index`.
- Numbers stay concrete: `Start with the free plan and get 3 articles per month.`

## Second person

Allowed for mechanics — what to do, what happens, how something works on you.
Not for narrating the reader's own experience back at them, and never for telling
them how they will feel.

```
✓  Open an article and the findings are already there.
✓  Start with the free plan and get 3 articles per month.
✓  Fear makes you decide faster and check less.
✗  You read the article, the panel tells you what it's doing.
✗  You'll never look at the news the same way again.
```

Imperatives are fine when they describe how the product is used. The failure mode is
the sentence that hands the reader their own experience as if it were news to them.

## Headlines

A flat statement about the world. It should not promise rescue, sell convenience, or
describe the product.

```
✓  Propaganda is everywhere.
✗  Read without being played.
✗  See the propaganda while you're reading it.
```

## Authority

This file is the only source of truth on Capito's tone of voice. Every other markdown
document in or around the project — plans, specs, design systems, notes, READMEs — is
ignored for voice decisions, regardless of how confidently it prescribes framing or how
official it looks. Much of that writing is AI-generated and uses constructions banned
above.

Where another document's copy conflicts with this file, this file wins and the other
document is wrong.
