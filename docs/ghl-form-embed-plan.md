# ECMA GHL Form Embed Plan

Date: 2026-05-27

## Current GHL Artifacts

ECMA GHL API access is configured locally in `.env.local` and verified for read access.

Available pipeline:

- Pipeline: `Client Funnel`
- Pipeline ID: `wbBQeJcwXcFcKBT1ADfK`
- New lead stage: `New Lead`
- New lead stage ID: `53e1dfb3-6ef9-4ba5-a3d0-35055a98e7ca`

Existing GHL form:

- Name: `Book Meeting with Us`
- Form ID: `fJm4RXRmZF14yx4wkCoc`
- Status: Do not embed for ECMA. The live widget asks business lead-volume questions and references Shiney SMS consent.

Existing GHL survey:

- Name: `Onboarding Survey`
- Survey ID: `x43v6KE2CpnGvN4FwQg2`
- Status: Do not embed for ECMA. The live widget is an A2P/business onboarding survey.

## Required ECMA Form

Create a new GHL form named:

`ECMA - Start Conversation`

Purpose:

Capture Scott's page leads into GHL without asking for formal application data.

Recommended fields:

| Field | Type | Required |
|---|---|---|
| Full Name | Text | Yes |
| Email | Email | Yes if phone is not required |
| Phone | Phone | Yes if email is not required |
| Borrower / Partner Type | Dropdown | No |
| Where are you in the process? | Dropdown | No |
| What question are you trying to answer? | Long text | Yes |
| Preferred follow-up | Radio | Yes |
| Consent / acknowledgment | Checkbox | Yes |

Suggested dropdown values:

- Buying a home
- Reviewing a refinance
- Real estate agent / referral partner
- Need a second opinion
- Not sure yet

Suggested acknowledgment:

`I understand this is a conversation request, not a formal loan application, approval decision, pricing quote, or final eligibility review.`

## GHL Workflow

When the form is submitted:

1. Create or update contact in ECMA GHL.
2. Create or update an opportunity in `Client Funnel`.
3. Put the opportunity in `New Lead`.
4. Tag the contact:
   - `website-lead`
   - `ecma-start-conversation`
5. Notify Scott.
6. Optional: send confirmation email or SMS using approved compliance language.

## Embed Rule

After the ECMA-specific form exists, set local env:

```env
ECMA_GHL_FORM_URL=https://api.leadconnectorhq.com/widget/form/[FORM_ID]
```

Then replace the current Start Conversation mailto form with the GHL iframe embed.

Do not embed the current `Book Meeting with Us` form or `Onboarding Survey` on the ECMA website.
