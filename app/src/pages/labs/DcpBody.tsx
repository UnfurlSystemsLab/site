import { tableWrap, th, td, tdLast } from '../articles/shared'
import { sectionLabel, sectionBody, listStyle, calloutQuote, monoSmall } from './labShared'
import { LabSection, RelatedResearchLink } from './LabShell'

// DCP Lab body — ported verbatim from
// site/docs/lab-pages/domain-claim-protocol.md, replacing the earlier
// placeholder "bounds vocabulary" / invoice-validation example content with
// the real Lab-page draft.
export default function DcpBody() {
  return (
    <>
      <LabSection>
        <p style={sectionLabel}>What this Lab is for</p>
        <p style={sectionBody}>
          The Domain Claim Protocol is the contract language Unfurl uses when software components need to describe
          themselves to humans, runtimes, and AI-assisted assembly tools.
        </p>
        <p style={sectionBody}>
          If the blog says &#8220;software work is moving from isolated components to governed assembly,&#8221; this
          Lab answers the next question:
        </p>
        <blockquote style={calloutQuote}>
          What must a component write down so another system can safely decide whether it belongs in an assembly?
        </blockquote>
        <p style={sectionBody}>
          DCP is that written-down layer. It does not replace APIs, MCP, authentication, deployment systems, or
          product runtime logic. It sits one level above ordinary interfaces: the level where a component declares
          what it owns, what it refuses, what it needs, what it offers, what can fail, and how it may be bound.
        </p>
      </LabSection>

      <LabSection background="#eef1f6">
        <p style={sectionLabel}>The clean mental model</p>
        <p style={sectionBody}>DCP has three planes.</p>
        <div style={tableWrap}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={th}>Plane</th>
                <th style={th}>Question</th>
                <th style={th}>Output</th>
                <th style={th}>Runtime cost</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ ...td, font: "500 13px/1.5 'IBM Plex Mono',monospace", color: '#0f172a' }}>Description</td>
                <td style={{ ...td, color: '#475569' }}>What does this component claim about itself?</td>
                <td style={{ ...td, color: '#475569' }}>A claim</td>
                <td style={{ ...td, color: '#475569' }}>Cheap and cacheable</td>
              </tr>
              <tr>
                <td style={{ ...td, font: "500 13px/1.5 'IBM Plex Mono',monospace", color: '#0f172a' }}>Negotiation</td>
                <td style={{ ...td, color: '#475569' }}>Can these claims compose under this context and policy?</td>
                <td style={{ ...td, color: '#475569' }}>A frozen composition contract</td>
                <td style={{ ...td, color: '#475569' }}>Expensive but rare</td>
              </tr>
              <tr>
                <td style={{ ...tdLast, font: "500 13px/1.5 'IBM Plex Mono',monospace", color: '#0f172a' }}>Invocation</td>
                <td style={{ ...tdLast, color: '#475569' }}>Can this call happen against the frozen contract?</td>
                <td style={{ ...tdLast, color: '#475569' }}>Deterministic invocation result</td>
                <td style={{ ...tdLast, color: '#475569' }}>Fast hot path</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={{ ...sectionBody, margin: '20px 0 0' }}>
          The most important design decision is that negotiation is not repeated on every runtime call. Intelligence
          may help during description and negotiation, but runtime invocation must be deterministic against a frozen
          contract.
        </p>
      </LabSection>

      <LabSection>
        <p style={sectionLabel}>What a claim says</p>
        <p style={sectionBody}>A useful DCP claim is more than an API description. It says:</p>
        <ul style={listStyle}>
          <li>who the component is;</li>
          <li>what domain concerns it owns;</li>
          <li>what state and decisions belong to those concerns;</li>
          <li>where its domain ends;</li>
          <li>what it explicitly refuses to own;</li>
          <li>what dependencies must be present;</li>
          <li>what capabilities it offers;</li>
          <li>what faults it can produce;</li>
          <li>what ports or bindings are needed at runtime;</li>
          <li>what metadata, provenance, and trust context apply.</li>
        </ul>
        <p style={sectionBody}>
          The refusals matter as much as the offers. A component that cannot say what it does not own is not yet
          safe to compose, because another component or operator must guess where the boundary is.
        </p>
      </LabSection>

      <LabSection background="#eef1f6">
        <p style={sectionLabel}>Why this is different from an API document</p>
        <p style={sectionBody}>An API document tells a caller how to call something.</p>
        <p style={sectionBody}>DCP asks a broader question:</p>
        <blockquote style={calloutQuote}>
          Should this component be used here at all, under this ownership boundary, with these dependencies,
          constraints, costs, fault semantics, and runtime bindings?
        </blockquote>
        <p style={sectionBody}>
          That is why DCP is complementary to MCP and ordinary APIs. A component may expose runtime tools through MCP
          or HTTP while still carrying a DCP claim for assembly. MCP is useful at the moment of tool invocation. DCP
          is useful before invocation, when a system needs to decide whether the tool belongs in a governed assembly.
        </p>
      </LabSection>

      <LabSection>
        <p style={sectionLabel}>Aggregation: the reason DCP is not only pairwise</p>
        <p style={sectionBody}>
          The blog&#8217;s aggregation essay makes a key point: large systems are not just piles of components. A
          smart home, an agent skill, a workflow, or a city can be an aggregate that exposes a new higher-level
          capability while keeping child pieces inspectable.
        </p>
        <p style={sectionBody}>DCP treats aggregation as a protocol concern, not a private UI trick.</p>
        <p style={sectionBody}>The current Java implementation uses recursive projection:</p>
        <ul style={listStyle}>
          <li>a parent claim can reference child claims;</li>
          <li>projection walks the containment tree;</li>
          <li>each node keeps depth, parent, descendants, offers, and edges;</li>
          <li>cycles and runaway depth are guarded;</li>
          <li>deterministic ordering keeps views reproducible.</li>
        </ul>
        <p style={sectionBody}>
          The same pattern applies to contracts and runtime bindings. A parent contract can reference child
          contracts, and a parent runtime binding can reference child bindings. The aggregate is governable without
          hiding the children.
        </p>
      </LabSection>

      <LabSection background="#eef1f6">
        <p style={sectionLabel}>What exists now</p>
        <p style={sectionBody}>The public DCP surface is split into two repositories:</p>
        <ul style={listStyle}>
          <li><code style={{ font: "400 15px/1 'IBM Plex Mono',monospace" }}>dcp</code>: the protocol specification, schema narrative, examples, design discussions, and issue workflow.</li>
          <li><code style={{ font: "400 15px/1 'IBM Plex Mono',monospace" }}>unfurl-dcp</code>: the Java implementation library for records, codecs, canonical hashing, verification, recursive projections, adapter guidance, and the <code style={{ font: "400 15px/1 'IBM Plex Mono',monospace" }}>add-dcp-capability</code> Codex skill workflow.</li>
        </ul>
        <p style={sectionBody}>
          The specification is still draft, and the Java implementation is the executable proof of that draft. That
          means the shape is concrete enough to review and build against, but still open to correction where real
          adapter work exposes gaps.
        </p>
        <p style={sectionBody}>
          Java implementation repository:{' '}
          <a href="https://github.com/UnfurlSystemsLab/unfurl-dcp" style={{ color: '#2b59d4', textDecoration: 'none' }}>
            UnfurlSystemsLab/unfurl-dcp ↗
          </a>
        </p>
      </LabSection>

      <LabSection>
        <p style={sectionLabel}>How to read the repository</p>
        <p style={sectionBody}>Start here:</p>
        <ol style={{ ...listStyle, paddingLeft: 22 }}>
          <li>
            <a href="https://github.com/UnfurlSystemsLab/dcp?tab=readme-ov-file" style={{ color: '#2b59d4', textDecoration: 'none' }}>
              <code style={{ font: "400 15px/1 'IBM Plex Mono',monospace" }}>dcp/README.md</code>
            </a>{' '}
            for the specification repo role.
          </li>
          <li><code style={{ font: "400 15px/1 'IBM Plex Mono',monospace" }}>dcp/docs/HLD-C-dcp-v0.2-internal.md</code> for the protocol model.</li>
          <li><code style={{ font: "400 15px/1 'IBM Plex Mono',monospace" }}>dcp/docs/HLD-C2-dcp-schema-spec-updated.md</code> for field-level schema shape.</li>
          <li><code style={{ font: "400 15px/1 'IBM Plex Mono',monospace" }}>unfurl-dcp/docs/use/README.md</code> for practical Java library usage.</li>
          <li><code style={{ font: "400 15px/1 'IBM Plex Mono',monospace" }}>unfurl-dcp/docs/templates/AGENTS-dcp-adapter.md</code> when creating a DCP adapter or substrate component.</li>
        </ol>
        <p style={sectionBody}>Then use the Discussions board to challenge a specific part of the model:</p>
        <ul style={listStyle}>
          <li>what DCP is and is not;</li>
          <li>claim boundaries and refusals;</li>
          <li>dependencies, offers, and capability versioning;</li>
          <li>runtime binding;</li>
          <li><code style={{ font: "400 15px/1 'IBM Plex Mono',monospace" }}>ContractInvocable</code> adapter shape;</li>
          <li>recursive composition;</li>
          <li>faults;</li>
          <li>trust and signing;</li>
          <li>generated capability documentation.</li>
        </ul>
      </LabSection>

      <LabSection background="#eef1f6">
        <p style={sectionLabel}>What to look for as a reviewer</p>
        <p style={sectionBody}>Good feedback is concrete. Bring a real component and ask:</p>
        <ul style={listStyle}>
          <li>What does this component own?</li>
          <li>What does it refuse to own?</li>
          <li>What dependencies must be bound before it can run?</li>
          <li>Which runtime surface is stable enough to offer?</li>
          <li>What faults should a caller see?</li>
          <li>Can the component live alone, inside a parent aggregate, or both?</li>
          <li>What would make the claim easier to author?</li>
        </ul>
        <p style={sectionBody}>
          If the current schema cannot express the answer cleanly, that is exactly the kind of gap this Lab exists to
          find.
        </p>
      </LabSection>

      <LabSection>
        <p style={sectionLabel}>Current open questions</p>
        <ul style={listStyle}>
          <li>How strict should validation be before the ecosystem has many real claims?</li>
          <li>Which fields should remain product-neutral, and which should be projections owned by Fabric, Flow, Foundry, or a host runtime?</li>
          <li>How should generated documentation expose only accepted DCP capability surfaces?</li>
          <li>Which examples best demonstrate aggregation without overwhelming first-time readers?</li>
        </ul>
      </LabSection>

      <LabSection background="#eef1f6">
        <p style={sectionLabel}>Bottom line</p>
        <p style={{ ...sectionBody, margin: 0 }}>
          DCP is the capability contract layer. It turns hidden integration assumptions into explicit, reviewable
          artifacts so humans, runtimes, and AI-assisted authoring tools can assemble systems without guessing where
          the boundaries are.
        </p>
      </LabSection>

      <LabSection>
        <p style={sectionLabel}>Related research</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 16 }}>
          <RelatedResearchLink kind="DCP Journey · Part 3" title="The Capability Contract" to="/research/dcp/part-3" />
          <RelatedResearchLink kind="DCP Journey · Part 4" title="Draft Spec and Discussion" to="/research/dcp/part-4" />
          <RelatedResearchLink kind="DCP Journey · Part 6" title="Aggregation Is Abstraction" to="/research/dcp/part-6" />
          <RelatedResearchLink kind="DCP Journey · Part 7" title="The Living Assembly" to="/research/dcp/part-7" />
        </div>
        <p style={{ ...monoSmall, margin: '20px 0 0' }}>
          Primary audience: component authors, adapter authors, and architects evaluating AI-native composition.
        </p>
      </LabSection>
    </>
  )
}
