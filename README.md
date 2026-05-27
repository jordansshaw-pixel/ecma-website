# ECMA Website

Private implementation repository for the future Emerald City Mortgage Advisors website rebuild.

This repository is intentionally minimal right now. The website stack, page structure, copy, components, Cloudflare deployment, and implementation details will be handled in a later build prompt.

## Purpose

Create a clean implementation home for the ECMA site rebuild without mixing live site code into the LookingGlass client-planning workspace.

## Source Of Truth

Primary strategy, audit, brand, and compliance source material stays in:

`C:\LookingGlass\CLIENTS\ECMA`

Useful source pointers are collected in:

`docs/source-context.md`

## Compliance Notes

- First public reference should use `Emerald City Mortgage Advisors`.
- Later references may use `ECMA`.
- First mention of Scott should use `Scott Warneke, Licensed Mortgage Loan Officer`.
- Preserve NEXA and NMLS disclosure handling.
- Resolve the active license footprint before public launch.
- Do not commit secrets, CRM exports, private client lists, Base44 environment files, or unapproved compliance claims.

## Current Status

The buyer-path preview is implemented and deployed through GitHub Pages.

- Active preview: `https://jordansshaw-pixel.github.io/ecma-website/`
- Current contact behavior: validated mailto fallback
- ECMA GHL access: configured locally through `.env.local`

Private GHL tokens must stay server-side. Do not expose `ECMA_GHL_PRIVATE_INTEGRATION_TOKEN` through Vite client code, static JavaScript, GitHub Pages, or tracked documentation.
