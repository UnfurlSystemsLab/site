---
slug: studio
route: /labs/studio
title: Unfurl Studio and UI
status: prototype
status_label: Prototype
repo: https://github.com/UnfurlSystemsLab/unfurl-ui
primary_audience:
  - readers coming from the Human Harness essay
  - operators who need to inspect and govern assemblies visually
  - frontend engineers evaluating Studio and host-shell architecture
related_research:
  - /research/dcp/part-5
  - /research/dcp/part-6
  - /research/dcp/part-7
source_docs:
  - unfurl-ui/docs/HLD-D-fabric-ui-host-shell.md
  - unfurl-ui/docs/LLD-unfurl-studio-visual-composition.md
  - unfurl-ui/docs/HLD-ai-contract-authoring.md
  - unfurl-ui/docs/REPO-ai-contract-authoring-build-spec.md
  - unfurl-fabric/docs/LLD-fabric-studio-api.md
---

# Unfurl Studio and UI

## What this Lab is for

Unfurl Studio is the human harness for DCP and Fabric assemblies.

The blog argues that AI-native systems need more than protocols and compilers.
Humans still need a place to inspect, question, manipulate, validate, and
operate what the system is assembling. Studio is that place.

It is not a decorative 3D visualizer. It is a governed authoring and inspection
surface:

```text
DCP/Fabric truth -> Studio scene model -> visual workspace
operator intent -> Fabric validation -> updated scene
```

The visual scene is a projection. Fabric and DCP remain the source of truth.

## The clean mental model

Studio lets a person work with an assembly at the level their brain can handle:

- a catalog of available components;
- a draft workspace;
- visible ports, dependencies, refusals, and validation status;
- replacement and connection guidance;
- deployment-shape choices;
- authoring-agent clarification questions;
- compile, export, and artifact inspection.

The operator manipulates shapes. Fabric validates intents. DCP decides
compatibility. Studio renders the result.

## Why the UI is part of the architecture

The UI follows the same independence principle as the backend products.

Backend products can run separately or be co-packaged. Frontend component
webapps should also be able to run standalone or be mounted inside a host shell.

The host shell provides:

- routing;
- tenant and user context;
- permissions;
- navigation;
- theme mediation;
- import maps;
- lifecycle and error boundaries.

Component webapps provide capability-specific experiences. Themes are separate
artifacts. A component may suggest visual tone or interaction hints, but it does
not directly take over the global UI.

## Studio's core rule: visual does not mean vague

Studio separates semantic truth from visual metadata.

| Concern | Owner |
|---|---|
| Offers, dependencies, refusals, faults | DCP claim |
| Compatibility and trust | Fabric/DCP validation |
| Substrate requirements | Fabric substrate derivation |
| Port placement and fallback shape | Visual manifest |
| Camera, layout, labels, annotations | Studio UI state |

A visual port must point back to a real DCP offer, dependency, substrate port, or
refusal concern. Studio can generate a visual anchor when artwork is missing, but
it must not invent semantic capabilities just to make the scene look complete.

## What the 3D assembly view is meant to show

The 3D assembly view should make composition inspectable:

- which components are in the draft;
- which claims, offers, and dependencies they expose;
- which ports are connected or still missing;
- which parts are blocked by trust, shape, or dependency rules;
- which aggregate contains which child claims or contracts;
- how the view changes after each accepted authoring phase.

This is especially important for recursive DCP. A large system needs semantic
zoom: the operator should be able to move from a high-level aggregate to its
children without losing the contract structure underneath.

## Conversational authoring

Studio also supports a conversational entry point.

The authoring agent should not invent a separate pipeline. It should ask
clarifying questions, then produce the same things the visual path produces:

- needs;
- Studio intents;
- deployment policy suggestions;
- compile/export requests.

Fabric validates every proposed intent. The accepted draft updates the same
assembly state and 3D view the manual workflow uses.

Examples of useful clarification questions:

- Which tenant catalog version should this draft use?
- Should the user start from a historical draft or create a new one?
- Which admitted component should be the starting/root component?
- Which optional capabilities are required now versus later?
- Does a selected component need external secrets, connectors, auth, or runtime
  configuration?
- If a component is removed, what downstream connections or capabilities become
  invalid?

## What exists now

The current UI workspace includes:

- a host-shell app;
- a Fabric Studio webapp;
- shared UI contracts;
- event bus, manifests, scene model, validation client, theme engine, renderer,
  graph-layout, and design-system packages;
- DCP Journey and Labs site pages;
- a DCP Lab detail page;
- thin Fabric and Studio Lab routes that this markdown is intended to enrich;
- authoring conversation UI and client contracts;
- visual composition and dynamic DCP integration with Fabric Studio APIs.

The Studio Lab is still a prototype. It is meant to demonstrate the human
harness, not to claim finished product maturity.

## How to read the repository

Start here:

1. `README.md` for workspace layout.
2. `docs/HLD-D-fabric-ui-host-shell.md` for host-shell architecture.
3. `docs/LLD-unfurl-studio-visual-composition.md` for the Studio scene and
   visual-composition model.
4. `docs/HLD-ai-contract-authoring.md` for conversational authoring design.
5. `docs/REPO-ai-contract-authoring-build-spec.md` for what is implemented and
   what remains deferred.
6. `unfurl-fabric/docs/LLD-fabric-studio-api.md` for the backend routes Studio
   consumes.

## What to look for as a reviewer

Good Studio feedback usually asks:

- Does every visual element map back to DCP or Fabric state?
- Does the UI update after each accepted authoring phase, not only at final
  export?
- Are add, remove, replace, connect, and configuration actions routed through
  validated intents?
- Does the authoring agent ask enough questions before proposing changes?
- Can a non-expert understand why a connection or component is rejected?
- Can an expert inspect the exact contract, binding, artifact, and diagnostic
  evidence behind the scene?

## Current open questions

- How should semantic zoom expose aggregate claims without hiding child
  contracts?
- Which runtime signals from a living assembly should appear on the same visual
  model after deployment?
- How should the site consume markdown Lab pages while keeping repo docs as the
  technical source of truth?
- What is the smallest polished UI that still proves the human harness idea?

## Bottom line

Studio is the human-facing layer of governed assembly. It lets people work with
the same DCP and Fabric truth that the compiler sees, but in a form that supports
inspection, clarification, visual manipulation, and safe evolution.
