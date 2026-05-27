# ECMA Website Launch Customization Plan

Date: 2026-05-27
Status: pre-launch content, link, tools, and compliance plan
Production domain under review: `www.emeraldcitymortgageadvisors.com`

## Executive Decision

Do not complete the public domain cutover until the remaining page copy, links, tools, contact information, NMLS language, licensing footprint, terms, privacy, and compliance sections are reviewed.

The current GitHub Pages build is a useful preview, but it still contains prototype language, draft compliance warnings, and unbuilt state-page links. The live Squarespace site contains production details that need to be preserved, rewritten, or intentionally retired before launch.

## Sources Reviewed

- Current preview repo: `C:\Dev\ecma-website`
- Current preview URL: `https://jordansshaw-pixel.github.io/ecma-website/`
- Current live website: `https://www.emeraldcitymortgageadvisors.com/`
- Current live pages reviewed:
  - `/`
  - `/mortgage-team-scott-warneke`
  - `/mortgage-process`
  - `/tools`
  - `/commercial`
  - `/contact-us`
- ECMA setup questionnaire: `C:\LookingGlass\CLIENTS\ECMA\setup\questionnaire.md`
- Website source context: `docs/source-context.md`
- Website design context: `docs/design-context.md`
- GHL form plan: `docs/ghl-form-embed-plan.md`

## Current Preview Findings

The preview currently has one production-facing page, `index.html`, with these sections:

- Hero
- Purchase / refinance / agent-partner router
- Buying options
- Conversation coverage
- Buying questions
- Apply vs. talk-first guidance
- Advisor/team section
- Process section
- Proof planning section
- FAQ
- Embedded ECMA GHL form
- Footer

Items that must be customized before launch:

- Remove all `prototype`, `draft`, and `for review` language from public copy.
- Replace proof-planning placeholder copy with approved reviews, credentials, and public trust signals.
- Replace generic team language with confirmed Scott/ECMA language.
- Resolve whether the website is primarily Scott-led or team-led.
- Confirm all state-service claims before publishing.
- Replace or remove unbuilt footer links:
  - `./california-mortgage-advisor/`
  - `./florida-mortgage-advisor/`
  - `./idaho-mortgage-advisor/`
- Add missing production links for Floify, Experience.com reviews, social profiles, NEXA, privacy, terms, and tools.
- Replace the current placeholder compliance footer with approved public disclosures.

## Live Site Inventory To Preserve Or Rewrite

The current public Squarespace site includes these page paths and assets:

- Home: `/`
- Team: `/mortgage-team-scott-warneke`
- Process: `/mortgage-process`
- Tools: `/tools`
- Commercial: `/commercial`
- Contact: `/contact-us`
- Apply portal: `https://scottwarneke1.floify.com/`
- Secure file link on tools page: `https://pipefile.com/emeraldcitymortgageadvisors`
- Facebook: `https://www.facebook.com/emeraldcitymortgage`
- YouTube: `https://www.youtube.com/channel/UCecfbi23MplNKBNJ9YXJqxw`
- Google Maps link: `https://maps.app.goo.gl/yDpy6NeH4AbV3ZU69`
- NEXA link: `http://www.nexamortgage.com/`

Production contact details currently shown:

- Phone: `(206) 707-3788`
- Mailing address: `914 164TH ST SE # 381, MILL CREEK, WA 98012`
- Business hours: `Monday-Friday, 9am-6pm`
- Email shown on contact page: `contact@emeraldcitymortgageadvisors.com`

Current live footer disclosure themes:

- Not an offer to enter into an agreement.
- Not a commitment to make a loan.
- Not all customers will qualify.
- Information, rates, and programs are subject to change without prior notice.
- Products subject to credit and property approval.
- Approvals subject to underwriting guidelines.
- Not all products are available in all states or for all dollar amounts.
- VA, HUD, FHA, and government-affiliation disclaimers.
- NEXA Mortgage, LLC NMLS #1660690.
- NEXA Mortgage, LLC is an Equal Housing Lender.

These should be rewritten only after Scott/NEXA compliance confirms approved language.

## Compliance And NMLS Plan

Required before launch:

1. Confirm Scott Warneke's individual NMLS ID.
2. Confirm exact required display format for:
   - Scott Warneke, Licensed Mortgage Loan Officer
   - Individual NMLS ID
   - NEXA Mortgage, LLC NMLS #1660690
   - Any branch NMLS, state license numbers, or office identifiers
3. Confirm active licensing footprint.
4. Remove unsupported state references.
5. Confirm whether Hawaii should be removed because internal notes say the license is suspended.
6. Confirm whether Idaho should be removed because the current preview references Idaho but source context does not support it clearly.
7. Confirm whether Iowa should appear at all, since internal notes mention a rookie LO in Iowa but not Scott's own active footprint.
8. Confirm whether commercial lending claims are allowed and under what disclaimers.
9. Confirm Equal Housing Lender / Equal Housing Opportunity icon and text requirements.
10. Add `Terms and Conditions` and `Privacy Policy` pages or links before production launch.

Conservative state-language rule for now:

Use only `Washington, California, and Florida` if Scott confirms those are active. Do not publish Hawaii, Idaho, or Iowa until compliance confirms the exact public wording.

## Page Customization Plan

### Home

Goal: turn the preview into the main public homepage.

Updates:

- Keep the conversation-first positioning.
- Add a clear path for purchase, refinance, and real estate agent visitors.
- Replace placeholder proof with approved review snippets and links.
- Add production contact details.
- Add Floify as a secondary action after GHL conversation capture.
- Add footer compliance text and NMLS lines.

### Team / About Scott

Goal: replace generic `Team` section with a dedicated Scott-led trust page or section.

Content needed:

- Scott Warneke, Licensed Mortgage Loan Officer.
- Individual NMLS ID.
- Years of experience, only if confirmed.
- Approved bio and market focus.
- Relationship to NEXA Mortgage, LLC.
- Experience.com / Google / Zillow proof links, only if approved.
- Optional team language if ECMA has other loan officers to list publicly.

### Process

Goal: preserve the useful live-site process content, but simplify it for lead conversion.

Updates:

- Split into `Talk First`, `Apply`, `Documentation`, `Underwriting`, `Closing`.
- Avoid implying qualification or approval before underwriting.
- Add borrower expectations and document examples.
- Add GHL form CTA at the top and bottom.
- Add Floify apply CTA only where the visitor is ready.

### Purchase

Goal: create a borrower page for home buyers and pre-approval conversations.

Topics:

- Affordability discussion.
- Pre-approval readiness.
- First-time buyer questions.
- Second-opinion review.
- Conventional, FHA, VA, jumbo, and other product wording only if approved.
- Reminder that final eligibility depends on full application, credit, property, and underwriting.

### Refinance

Goal: create a refinance review path rather than a generic rate quote page.

Topics:

- Payment and rate review.
- Cash-out scenarios.
- Debt consolidation scenarios.
- Equity / LTV conversation.
- Timing and break-even questions.
- No promise of savings or approval.

### Agent Partners

Goal: support Scott's strategy of using buyer/refi leads to build realtor relationships.

Topics:

- Buyer readiness support.
- Scenario review.
- Complex file discussion.
- Second-opinion assistance.
- Communication expectations.
- Referral handoff path into GHL.

### Tools

Goal: build a practical tools section Scott can point people to from social, email, realtor conversations, and follow-up.

Recommended tools for phase one:

- Mortgage payment snapshot.
- Refinance break-even estimate.
- LTV / home equity estimate.
- Buyer readiness checklist.
- Document checklist.
- Secure file upload link, if Pipefile remains active and approved.
- Ask Scott / GHL embedded form.

Tools guardrails:

- Tools are educational estimates only.
- No calculator should imply eligibility, underwriting approval, loan approval, final pricing, tax accuracy, insurance accuracy, closing-cost accuracy, or product availability.
- Each result should end with a soft CTA: `Send this scenario to Scott`.
- Do not send data to GHL from custom JavaScript unless there is a server-side endpoint. The private GHL token must not be exposed in browser code.

### Commercial

Goal: decide whether the new site should keep a commercial page.

Review required:

- Confirm current commercial capabilities.
- Confirm whether SBA, hedge fund, private investor, and nationwide language is approved.
- Decide whether commercial belongs in the primary navigation or as a lower-priority page.
- Add stronger disclaimers if kept.

### Reviews / Proof

Goal: replace placeholder proof with approved real reviews.

Potential sources:

- Experience.com profile.
- Google Business Profile.
- Existing Zillow reviews.
- Current live-site testimonials.

Required:

- Confirm permission and attribution rules.
- Avoid over-quoting long reviews if not needed.
- Link to the review source where possible.
- Add dates and locations only when accurate.

### Contact / Start Conversation

Goal: make GHL the primary intake path.

Current embedded GHL form:

- URL: `https://api.leadconnectorhq.com/widget/form/ZdS1N70ex9I9fbCy71ch`
- Current fields: full name, phone, email, reason for reaching out, guidance text, captcha, GHL terms.

Updates:

- Add production contact details beside the form.
- Add what happens next after submit.
- Decide whether GHL should redirect to a site thank-you page.
- If redirect is enabled, create `/thank-you/` with compliance-safe next steps.

### Terms, Privacy, And Compliance

Goal: add public policy and disclosure pages before launch.

Required pages or page sections:

- `/privacy-policy/`
- `/terms-and-conditions/`
- `/disclosures/` or a footer compliance disclosure block
- Optional `/accessibility/`

Topics to cover with approved legal/compliance text:

- General website use.
- No loan commitment.
- No guarantee of eligibility, approval, terms, rates, or product availability.
- Contact form and communications consent.
- SMS/email consent if GHL form or follow-up uses those channels.
- Privacy handling for form submissions.
- Third-party links, including Floify, Experience.com, Google, Facebook, YouTube, Pipefile, and NEXA.
- Equal Housing Lender / Equal Housing Opportunity wording.
- NMLS Consumer Access link.

## Link Audit Plan

Internal links to implement or update:

- `/`
- `/purchase/`
- `/refinance/`
- `/agent-partners/`
- `/tools/`
- `/process/`
- `/team/` or `/about-scott/`
- `/commercial/` if kept
- `/contact/`
- `/thank-you/` if GHL redirect is enabled
- `/privacy-policy/`
- `/terms-and-conditions/`
- `/disclosures/` if separate

External links to verify:

- Floify: `https://scottwarneke1.floify.com/`
- GHL form: `https://api.leadconnectorhq.com/widget/form/ZdS1N70ex9I9fbCy71ch`
- Experience.com reviews: `https://www.experience.com/reviews/scott-12617932`
- Facebook: `https://www.facebook.com/emeraldcitymortgage`
- YouTube legacy channel: `https://www.youtube.com/channel/UCecfbi23MplNKBNJ9YXJqxw`
- YouTube primary channel from Scott notes: `https://www.youtube.com/@LoanMan7/videos`
- LinkedIn: `https://www.linkedin.com/in/scott-warneke-69403525`
- Pipefile secure upload: `https://pipefile.com/emeraldcitymortgageadvisors`
- NEXA: `https://www.nexamortgage.com/`
- Google Maps / Google Business Profile link.
- NMLS Consumer Access link.

Broken or risky current preview links:

- `./california-mortgage-advisor/` is not implemented.
- `./florida-mortgage-advisor/` is not implemented.
- `./idaho-mortgage-advisor/` is not implemented and may not be licensed/approved.

## SEO And Metadata Plan

Before launch:

- Create unique title tags and meta descriptions per page.
- Add canonical URLs for production domain.
- Add Open Graph title/description/image.
- Add favicon and social share image if missing.
- Add sitemap.
- Add robots.txt.
- Add structured data only after NMLS/contact/licensing facts are verified.
- Keep state/local SEO pages limited to confirmed active states and approved wording.

## Implementation Sequence

1. Keep GitHub Pages preview as the review environment.
2. Do not point DNS away from Squarespace until content and compliance are ready.
3. Create final content matrix for every page above.
4. Confirm Scott's individual NMLS ID and active licensing footprint.
5. Confirm approved NEXA, state, Equal Housing, VA/FHA/HUD, privacy, and terms language.
6. Implement page structure and replace prototype copy.
7. Build the tools section with educational disclaimers.
8. Add or remove state pages based on confirmed licensing.
9. Add terms, privacy, disclosure, and thank-you pages.
10. Run link audit across internal and external links.
11. Run build verification.
12. Review in browser at desktop and mobile widths.
13. Send preview to Scott/NEXA for compliance approval.
14. Only after approval, complete domain cutover to GitHub Pages.

## Open Questions For Scott Or Compliance

- What is Scott Warneke's individual NMLS ID?
- What exact state licensing language is approved today?
- Should Hawaii be removed from all public copy?
- Should Idaho be removed from the preview entirely?
- Should Iowa appear because of the rookie LO, or stay out of public copy?
- Should the commercial page remain in the primary navigation?
- Which review sources may be quoted publicly?
- Should the GHL form redirect to a thank-you page?
- Which YouTube URL is preferred: the legacy channel or `@LoanMan7`?
- Is the Pipefile secure upload link still active and approved?
- Is the current NEXA footer disclosure still the approved version for 2026?

## Launch Gate

The site is ready for production only when:

- No prototype/draft language remains.
- All navigation links resolve.
- No unapproved state pages or state claims remain.
- Scott's individual NMLS ID is displayed where required.
- NEXA Mortgage, LLC NMLS #1660690 is displayed where required.
- Phone, email, address, hours, social links, Floify, GHL, and review links are verified.
- Tools include estimate-only disclaimers.
- Terms, privacy, and compliance sections are present.
- Scott and compliance approve the preview.
