# ECMA Website Design Context

Date added: 2026-05-22
Primary source archive: `C:\LookingGlass\CLIENTS\ECMA\_archive\2026-05-26-prior-ecma-website-work\ecma-website-build-summary-input_2026-05-21.md`
Preview source: `https://jordansshaw-pixel.github.io/ecma-website-visual-aid-preview/`
Preview repo archive: `C:\Dev\_archive\2026-05-26-prior-ecma-website-work\ecma-website-visual-aid-preview`

## Status

This is working design context for the Emerald City Mortgage Advisors website rebuild. It came from the archived private GitHub Pages visual-aid preview used to talk through website options with Scott.

It is not final copy, not compliance-approved language, and not a launch checklist. Treat it as direction for the website design and planning pass.

## Core Direction

The rebuild should move ECMA away from a generic mortgage brochure and toward a conversation-first lead path.

The primary action is not "apply now" for every visitor. The site should help a borrower, homeowner, or referral partner understand their situation well enough to reach out to Scott for a no-obligation discussion.

Working hero promise:

> More mortgage options, explained by a real advisor.

The tone should feel calm, advisory, practical, trustworthy, and personal. The site should make Scott accessible without turning the whole experience into a personal-brand page.

## Visitor Paths

### Purchase Borrowers

Help buyers understand affordability, pre-approval, loan-path options, and second-opinion needs before applying.

Suggested path:

1. Visitor arrives from Google, social, referral, or agent introduction.
2. Visitor uses a payment snapshot or reads a loan-path explanation.
3. Visitor reaches out to Scott for a no-obligation discussion.

### Refinance Borrowers

Frame refinance as a scenario review, not a generic rate quote.

The site should help homeowners think through timing, equity, payment, cash-out needs, debt consolidation, and whether a second opinion is useful.

### Agent Partners

Show Scott as a reliable mortgage partner for buyer readiness, complex files, scenario review, and deal support.

The agent path should answer: can I trust Scott with a buyer who needs real guidance?

## Tools And Calculators

Calculators should act as conversation starters, not lending decisions.

Initial tool concepts:

- Payment snapshot
- Loan-to-value check

Guardrail:

> Calculators are draft aids only. They should not imply underwriting, eligibility, approved pricing, taxes, insurance, fees, product availability, or final qualification.

Open decision: calculator results should either stay anonymous, trigger a booking prompt, or feed into GHL for follow-up. Do not assume the answer yet.

## GHL And Floify

The site should not force cold visitors directly into Floify.

Working model:

- Website captures inquiry or booking intent.
- GHL manages follow-up, reminders, nurture, and lead status.
- Floify becomes the formal application path after Scott confirms the visitor is ready.

Current technical status:

- ECMA GHL read access is available locally through `.env.local`.
- The current site is a static GitHub Pages/Vite build, so it must not call GHL directly with a private integration token from browser JavaScript.
- A production GHL form submission needs either an approved GHL-hosted form/calendar link or a server-side endpoint that stores the private token outside the browser.

This workflow needs Scott's approval before production implementation.

## Product Access Language

Product and lender-access claims are compliance-sensitive and need approval before publication.

Phrases to verify:

- Access to 500 loan products
- No vendor lock
- Best-fit loan path
- Second-opinion review
- Broader product access than a single retail bank

Use conservative language until approved:

> Scott helps borrowers compare available loan paths and understand which option may fit their situation before they move into a formal application.

## State Pages

The current working state plan is Washington, California, and Florida.

Draft page angles:

- Washington: local trust, Seattle-area roots, purchase and refinance guidance
- California: high-cost markets, complex borrowers, second-opinion positioning
- Florida: relocation, investment, refinance, and advisor-led comparison

Confirm active licensing and required NEXA/NMLS disclosures before public launch. Do not treat Hawaii as active unless Scott confirms it.

## Proof Plan

The rebuild should include a deliberate review and proof refresh.

Proof to gather:

- Recent Zillow, Google, and Experience.com reviews
- Scott's years in the business
- Strongest borrower scenarios and deal types
- Lender/product access story
- States served
- Real estate agent or referral partner quotes
- Examples of complex files, second opinions, or problem-solving wins

Track permission before using any review, testimonial, quote, or case example publicly.

## Design Reference

Use the visual-aid direction as a pattern library, not final production design.

Relevant source files:

- `C:\Dev\_archive\2026-05-26-prior-ecma-website-work\ecma-website-visual-aid-preview\index.html`
- `C:\Dev\_archive\2026-05-26-prior-ecma-website-work\ecma-website-visual-aid-preview\design-corpus.html`
- `C:\Dev\_archive\2026-05-26-prior-ecma-website-work\ecma-website-visual-aid-preview\design-corpus-source-notes.md`
- `C:\LookingGlass\CLIENTS\ECMA\_archive\2026-05-26-prior-ecma-website-work\website-design-decision-workflow\07_visual-aid\scott-website-process-playbook.md`

Current recommendation from the design corpus:

Use Calm Advisor as the homepage base. Add Scott-led trust, second-opinion conversion paths, numbers-first tool sections, and an agent referral desk page or section.

## Open Scott Review Questions

1. How should GHL and Floify work together from first inquiry to formal application?
2. How should ECMA safely describe product access, lender independence, and second-opinion value?
3. Which client types should the website attract more of?
4. What proof can be used publicly?
5. What should calculator interactions do?
6. What are the Facebook and Instagram pages for in the new funnel?
7. Which cities or markets matter most inside Washington, California, and Florida?
8. What feels wrong, missing, too strong, or not important in the mockup?

## Build Implication

Build the ECMA site as a calm advisory funnel centered on Scott's first conversation. The site should help visitors self-identify, learn enough to ask a better question, and then reach out. Calculators, state pages, review proof, social paths, and partner content should all support that first conversation.

Keep claims, state language, proof, and product wording marked as draft until Scott and compliance approve them.
