---
slug: dcp
route: /labs/dcp
title: Domain Claim Protocol
short_title: DCP
status: draft-spec
status_label: Draft spec
repo: https://github.com/UnfurlSystemsLab/dcp
primary_audience:
  - component authors
  - adapter authors
  - architects evaluating AI-native composition
  - readers coming from DCP Journey Parts 3 and 4
related_research:
  - /research/dcp/part-3
  - /research/dcp/part-4
  - /research/dcp/part-6
  - /research/dcp/part-7
source_docs:
  - dcp/docs/HLD-C-dcp-v0.2-internal.md
  - dcp/docs/HLD-C2-dcp-schema-spec-updated.md
  - unfurl-dcp/docs/LLD-unfurl-dcp-java.md
  - unfurl-dcp/docs/REPO-recursive-dcp-projection-build-spec.md
  - unfurl-dcp/docs/templates/AGENTS-dcp-adapter.md
---

# Domain Claim Protocol

## What this Lab is for

The Domain Claim Protocol is the contract language Unfurl uses when software
components need to describe themselves to humans, runtimes, and AI-assisted
assembly tools.

If the blog says "software work is moving from isolated components to governed
assembly," this Lab answers the next question:

> What must a component write down so another system can safely decide whether
> it belongs in an assembly?

DCP is that written-down layer. It does not replace APIs, MCP, authentication,
deployment systems, or product runtime logic. It sits one level above ordinary
interfaces: the level where a component declares what it owns, what it refuses,
what it needs, what it offers, what can fail, and how it may be bound.

## The clean mental model

DCP has three planes.

| Plane | Question | Output | Runtime cost |
|---|---|---|---|
| Description | What does this component claim about itself? | A claim | Cheap and cacheable |
| Negotiation | Can these claims compose under this context and policy? | A frozen composition contract | Expensive but rare |
| Invocation | Can this call happen against the frozen contract? | Deterministic invocation result | Fast hot path |

The most important design decision is that negotiation is not repeated on every
runtime call. Intelligence may help during description and negotiation, but
runtime invocation must be deterministic against a frozen contract.

## What a claim says

A useful DCP claim is more than an API description. It says:

- who the component is;
- what domain concerns it owns;
- what state and decisions belong to those concerns;
- where its domain ends;
- what it explicitly refuses to own;
- what dependencies must be present;
- what capabilities it offers;
- what faults it can produce;
- what ports or bindings are needed at runtime;
- what metadata, provenance, and trust context apply.

The refusals matter as much as the offers. A component that cannot say what it
does not own is not yet safe to compose, because another component or operator
must guess where the boundary is.

## Why this is different from an API document

An API document tells a caller how to call something.

DCP asks a broader question:

> Should this component be used here at all, under this ownership boundary,
> with these dependencies, constraints, costs, fault semantics, and runtime
> bindings?

That is why DCP is complementary to MCP and ordinary APIs. A component may expose
runtime tools through MCP or HTTP while still carrying a DCP claim for assembly.
MCP is useful at the moment of tool invocation. DCP is useful before invocation,
when a system needs to decide whether the tool belongs in a governed assembly.

## Aggregation: the reason DCP is not only pairwise

The blog's aggregation essay makes a key point: large systems are not just piles
of components. A smart home, an agent skill, a workflow, or a city can be an
aggregate that exposes a new higher-level capability while keeping child pieces
inspectable.

DCP treats aggregation as a protocol concern, not a private UI trick.

The current Java implementation uses recursive projection:

- a parent claim can reference child claims;
- projection walks the containment tree;
- each node keeps depth, parent, descendants, offers, and edges;
- cycles and runaway depth are guarded;
- deterministic ordering keeps views reproducible.

The same pattern applies to contracts and runtime bindings. A parent contract can
reference child contracts, and a parent runtime binding can reference child
bindings. The aggregate is governable without hiding the children.

## What exists now

The public DCP surface is split into two repositories:

- `dcp`: the protocol specification, schema narrative, examples, design
  discussions, and issue workflow.
- `unfurl-dcp`: the Java implementation library for records, codecs, canonical
  hashing, verification, recursive projections, adapter guidance, and the
  `add-dcp-capability` Codex skill workflow.

The specification is still draft, and the Java implementation is the executable
proof of that draft. That means the shape is concrete enough to review and build
against, but still open to correction where real adapter work exposes gaps.

Java implementation repository:
<https://github.com/UnfurlSystemsLab/unfurl-dcp>

## How to read the repository

Start here:

1. `dcp/README.md` for the specification repo role.
2. `dcp/docs/HLD-C-dcp-v0.2-internal.md` for the protocol model.
3. `dcp/docs/HLD-C2-dcp-schema-spec-updated.md` for field-level schema shape.
4. `unfurl-dcp/docs/use/README.md` for practical Java library usage.
5. `unfurl-dcp/docs/templates/AGENTS-dcp-adapter.md` when creating a DCP adapter
   or substrate component.

Then use the Discussions board to challenge a specific part of the model:

- what DCP is and is not;
- claim boundaries and refusals;
- dependencies, offers, and capability versioning;
- runtime binding;
- `ContractInvocable` adapter shape;
- recursive composition;
- faults;
- trust and signing;
- generated capability documentation.

## What to look for as a reviewer

Good feedback is concrete. Bring a real component and ask:

- What does this component own?
- What does it refuse to own?
- What dependencies must be bound before it can run?
- Which runtime surface is stable enough to offer?
- What faults should a caller see?
- Can the component live alone, inside a parent aggregate, or both?
- What would make the claim easier to author?

If the current schema cannot express the answer cleanly, that is exactly the
kind of gap this Lab exists to find.

## Current open questions

- How strict should validation be before the ecosystem has many real claims?
- Which fields should remain product-neutral, and which should be projections
  owned by Fabric, Flow, Foundry, or a host runtime?
- How should generated documentation expose only accepted DCP capability
  surfaces?
- Which examples best demonstrate aggregation without overwhelming first-time
  readers?

## Bottom line

DCP is the capability contract layer. It turns hidden integration assumptions
into explicit, reviewable artifacts so humans, runtimes, and AI-assisted
authoring tools can assemble systems without guessing where the boundaries are.
