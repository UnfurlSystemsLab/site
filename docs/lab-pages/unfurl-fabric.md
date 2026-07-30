---
slug: fabric
route: /labs/fabric
title: Unfurl Fabric
status: active-development
status_label: Active development
repo: https://github.com/UnfurlSystemsLab/unfurl-fabric
primary_audience:
  - readers who understand DCP and want to see how claims become contracts
  - platform engineers evaluating design-time composition
  - operators who need catalog, matching, signing, and deployment planning
related_research:
  - /research/dcp/part-3
  - /research/dcp/part-4
  - /research/dcp/part-5
  - /research/dcp/part-7
source_docs:
  - unfurl-fabric/docs/HLD-unfurl-fabric.md
  - unfurl-fabric/docs/LLD-fabric-studio-api.md
  - unfurl-fabric/docs/REPO-unfurl-fabric-build-spec.md
  - unfurl-fabric/docs/Flowfoundry.md
  - unfurl-fabric/docs/FlowfoundryAuthoringAgentRunbook.md
---

# Unfurl Fabric

## What this Lab is for

Unfurl Fabric is the design-time compiler and Studio API host for Unfurl.

If DCP is the language components use to describe themselves, Fabric is the
system that reads those descriptions and turns them into a concrete composition:

```text
catalog + needs + trust + deployment policy
  -> match
  -> resolve
  -> compile
  -> sign
  -> export
```

The blog introduces a world where software work shifts from writing isolated
parts toward governing assemblies. Fabric is the part of Unfurl that makes that
shift operational. It decides which admitted components can satisfy a need,
records why the decision is valid, resolves how the components should physically
run, and emits artifacts that a runtime or deployment tool can consume.

## The simplest explanation

Fabric answers this question:

> Given a real catalog of DCP-backed components and an operator's need, what is
> the valid, signed assembly we can hand to a runtime?

That answer is not a drawing and not an AI suggestion. It is a deterministic
contract produced from:

- catalog claims;
- operator needs;
- trust rules;
- deployment constraints;
- substrate support;
- compatibility and dependency checks.

## What Fabric owns

Fabric owns the design-time path:

| Area | What Fabric does |
|---|---|
| Catalog | Admits component artifacts and extracts DCP-backed catalog entries. |
| Needs | Reads or derives required capabilities and constraints. |
| Matching | Scores candidates and validates dependency bindings. |
| Deployment resolution | Chooses physical shapes using component claims, substrate support, and deployment policy. |
| Substrate profile | Derives the runtime ports and capabilities required by the selected composition. |
| Contract compile | Produces a root DCP composition contract plus support and diagnostic artifacts. |
| Signing and verification | Freezes the handoff artifact and checks trust, drift, and signatures. |
| Studio API | Provides tenant-scoped routes for catalog, sessions, intents, dynamic DCP, compile, and export. |

Fabric does not run production workloads. It does not own the browser UI. It
does not host the AI model runtime. When AI-assisted authoring is configured,
Fabric delegates to Foundry over DCP `agent.run` and then re-validates every
proposal against the admitted catalog.

## How the compile path works

The current Fabric flow is intentionally staged:

1. Catalog scan or admission reads component artifacts and pins their content.
2. Needs loading determines required capabilities.
3. Matching creates candidate compositions and validates dependency bindings.
4. Selection chooses the valid candidate or asks the operator to resolve
   ambiguity.
5. Deployment resolution records how each selected component should physically
   run.
6. Substrate derivation emits only the runtime profile needed by the chosen
   contract, without secret values.
7. Compile writes a light root DCP composition contract and support artifacts.
8. Signing freezes the root DCP contract as the primary handoff.
9. Verification checks signature, catalog drift, and trust keys.

That separation matters. The root DCP contract is the handoff. Support artifacts
help later tooling hydrate, package, or explain the result. Diagnostic artifacts
are for replay and debugging, similar to debug symbols. They should not become
the required production interface.

## Why Fabric is needed if DCP already exists

DCP tells the truth a component publishes about itself. Fabric applies that truth
to a concrete assembly.

For example, a component claim may say:

- "I offer `rag.search`."
- "I require a vector store."
- "I refuse to own identity or authorization."
- "I can run as a container or Spring Boot service."

Fabric reads that claim next to the operator's need and the available catalog.
It decides whether this component is a valid participant, what else must be
selected, which dependencies are external runtime bindings, and what deployment
shape satisfies policy.

Without Fabric, claims remain separate statements. With Fabric, they become a
signed assembly decision.

## Studio state and file history

Fabric Studio routes are tenant and assembly scoped. The current design treats
catalogs, drafts, compiled contracts, exports, and diagnostics as operator
visible files.

Important ideas:

- A tenant catalog can have immutable file versions.
- Draft sessions can point at the catalog version they were created from.
- Historical sessions can be listed like conversation history.
- Display titles are separate from physical file names.
- Dynamic DCP projections should be derived from the draft session inventory,
  not from whatever catalog happens to be visible in the browser.

This is what makes repeatable Studio authoring possible. A draft should be able
to say exactly which catalog, revision, intents, and export artifacts created it.

## AI authoring is not a parallel compiler

Fabric supports a conversational authoring entry point, but the AI does not get
its own trust path.

The authoring agent can:

- ask clarification questions;
- suggest needs;
- propose Studio intents;
- suggest deployment policy;
- help with add, remove, replace, connect, or configuration actions.

Fabric still validates every proposed intent. The accepted output goes through
the same resolve, compile, sign, and export path as a visual or CLI-authored
draft. An AI-authored contract is the same artifact shape as a hand-authored
contract.

## What exists now

The active implementation includes:

- the Fabric compiler path;
- the Studio API server;
- catalog admission and removal;
- tenant file registry records;
- draft sessions and intent history;
- dynamic DCP projection from session state;
- deployment resolution;
- compile/export artifacts;
- Foundry-backed authoring delegation when configured;
- deterministic fallback for local development.

The product is still under active development. Expect the API and UI details to
move as more real assemblies are tested.

## How to read the repository

Start here:

1. `README.md` for quick use and build commands.
2. `docs/HLD-unfurl-fabric.md` for the architecture and invariants.
3. `docs/LLD-fabric-studio-api.md` for Studio route contracts and state shape.
4. `docs/Flowfoundry.md` for the end-to-end assembly/export/deployment runbook.
5. `docs/FlowfoundryAuthoringAgentRunbook.md` for how the authoring agent should
   drive the same phases through tools and questions.

## What to look for as a reviewer

Good Fabric feedback usually asks:

- Did Fabric choose from admitted catalog entries only?
- Is the selected component set complete, not only the last selected candidate?
- Are support and diagnostic artifacts kept separate from the primary handoff?
- Are tenant boundaries preserved for files, sessions, catalogs, and exports?
- Does deployment resolution use DCP/component shape metadata rather than UI
  fallback assumptions?
- Does authoring assistance ask the right questions before proposing a draft?

## Current open questions

- Which support artifacts should stay optional, and which are required for
  downstream packaging?
- How much of the Flowfoundry runbook should be driven by a generic authoring
  agent versus a workflow-specific DAG?
- Which Studio routes should become public API surfaces, and which should remain
  local authoring infrastructure?
- How should production auth, audit, telemetry, and secret configuration be
  represented as DCP/runtime ports before concrete adapters are selected?

## Bottom line

Fabric is the assembly authority. It turns DCP claims and operator needs into a
signed, explainable, deployable contract while keeping runtime execution,
browser rendering, and AI model calls behind their own product boundaries.
