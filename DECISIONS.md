# maalikahmad.tech decisions
Ruled facts. Read before working; pass into every agent brief; append when Maalik rules. Never reopen.
## Product and pricing
- Legal pages (privacy, terms, support) for all apps are migrating from maalikahmad.tech to hbkllabs.com/{app}/..., generated via webswift.ai and hosted on the personal Cloudflare account, not webswiftai (source: memory legal-pages-move-to-hbkllabs, 2026-06-29; legal-pages-fleet-404, 2026-08-27)
- Do not break any app's legal URLs while migrating; they are compiled into apps and set as App Store Connect privacy URLs (source: memory maalikahmad-tech-portfolio-modern, 2026-08-27)
## Design and copy
- The portfolio should adopt WebSwift portfoliogrid, modern variant; ruled deferred 2026-08-27 ("forget it for now"), do not start unprompted (source: memory maalikahmad-tech-portfolio-modern, 2026-08-27)
- No em dashes in user-facing copy (source: ~/.claude/CLAUDE.md Copy & Tone)
## Tech and ops
- Repo is a Next.js Pages Router site (not App Router), legal pattern is `pages/{app}/{privacy,terms,support}.tsx` wrapping `components/{App}/...` (source: control-point/registry/apps.md:166-173; repo CLAUDE.md)
- Canonical host is www.maalikahmad.tech (root 308-redirects to www); use the www URL in ASC (source: registry/apps.md:172)
- Legal source of truth for new work is hbkllabs.com; author gap apps (no legal page yet) directly there (source: memory legal-pages-move-to-hbkllabs, 2026-06-29)
