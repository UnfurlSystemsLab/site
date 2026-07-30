import { tableWrap, th, td, tdLast } from '../articles/shared'
import { sectionLabel, sectionBody, listStyle, calloutQuote, codeBlock, codeText, monoSmall } from './labShared'
import { LabSection, RelatedResearchLink } from './LabShell'

// Unfurl Fabric Lab body — ported verbatim from
// site/docs/lab-pages/unfurl-fabric.md.
export default function FabricBody() {
  return (
    <>
      <LabSection>
        <p style={sectionLabel}>What this Lab is for</p>
        <p style={sectionBody}>Unfurl Fabric is the design-time compiler and Studio API host for Unfurl.</p>
        <p style={sectionBody}>
          If DCP is the language components use to describe themselves, Fabric is the system that reads those
          descriptions and turns them into a concrete composition:
        </p>
        <div style={codeBlock}>
          <pre style={codeText}>
            <code>{`catalog + needs + trust + deployment policy
  -> match
  -> resolve
  -> compile
  -> sign
  -> export`}</code>
          </pre>
        </div>
        <p style={sectionBody}>
          The blog introduces a world where software work shifts from writing isolated parts toward governing
          assemblies. Fabric is the part of Unfurl that makes that shift operational. It decides which admitted
          components can satisfy a need, records why the decision is valid, resolves how the components should
          physically run, and emits artifacts that a runtime or deployment tool can consume.
        </p>
      </LabSection>

      <LabSection background="#f4f2ec">
        <p style={sectionLabel}>The simplest explanation</p>
        <p style={sectionBody}>Fabric answers this question:</p>
        <blockquote style={calloutQuote}>
          Given a real catalog of DCP-backed components and an operator&#8217;s need, what is the valid, signed
          assembly we can hand to a runtime?
        </blockquote>
        <p style={sectionBody}>That answer is not a drawing and not an AI suggestion. It is a deterministic contract produced from:</p>
        <ul style={listStyle}>
          <li>catalog claims;</li>
          <li>operator needs;</li>
          <li>trust rules;</li>
          <li>deployment constraints;</li>
          <li>substrate support;</li>
          <li>compatibility and dependency checks.</li>
        </ul>
      </LabSection>

      <LabSection>
        <p style={sectionLabel}>What Fabric owns</p>
        <p style={sectionBody}>Fabric owns the design-time path:</p>
        <div style={tableWrap}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={th}>Area</th>
                <th style={th}>What Fabric does</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ ...td, font: "500 13px/1.5 'IBM Plex Mono',monospace", color: '#1c1b19' }}>Catalog</td>
                <td style={{ ...td, color: '#5c594f' }}>Admits component artifacts and extracts DCP-backed catalog entries.</td>
              </tr>
              <tr>
                <td style={{ ...td, font: "500 13px/1.5 'IBM Plex Mono',monospace", color: '#1c1b19' }}>Needs</td>
                <td style={{ ...td, color: '#5c594f' }}>Reads or derives required capabilities and constraints.</td>
              </tr>
              <tr>
                <td style={{ ...td, font: "500 13px/1.5 'IBM Plex Mono',monospace", color: '#1c1b19' }}>Matching</td>
                <td style={{ ...td, color: '#5c594f' }}>Scores candidates and validates dependency bindings.</td>
              </tr>
              <tr>
                <td style={{ ...td, font: "500 13px/1.5 'IBM Plex Mono',monospace", color: '#1c1b19' }}>Deployment resolution</td>
                <td style={{ ...td, color: '#5c594f' }}>Chooses physical shapes using component claims, substrate support, and deployment policy.</td>
              </tr>
              <tr>
                <td style={{ ...td, font: "500 13px/1.5 'IBM Plex Mono',monospace", color: '#1c1b19' }}>Substrate profile</td>
                <td style={{ ...td, color: '#5c594f' }}>Derives the runtime ports and capabilities required by the selected composition.</td>
              </tr>
              <tr>
                <td style={{ ...td, font: "500 13px/1.5 'IBM Plex Mono',monospace", color: '#1c1b19' }}>Contract compile</td>
                <td style={{ ...td, color: '#5c594f' }}>Produces a root DCP composition contract plus support and diagnostic artifacts.</td>
              </tr>
              <tr>
                <td style={{ ...td, font: "500 13px/1.5 'IBM Plex Mono',monospace", color: '#1c1b19' }}>Signing and verification</td>
                <td style={{ ...td, color: '#5c594f' }}>Freezes the handoff artifact and checks trust, drift, and signatures.</td>
              </tr>
              <tr>
                <td style={{ ...tdLast, font: "500 13px/1.5 'IBM Plex Mono',monospace", color: '#1c1b19' }}>Studio API</td>
                <td style={{ ...tdLast, color: '#5c594f' }}>Provides tenant-scoped routes for catalog, sessions, intents, dynamic DCP, compile, and export.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={{ ...sectionBody, margin: '20px 0 0' }}>
          Fabric does not run production workloads. It does not own the browser UI. It does not host the AI model
          runtime. When AI-assisted authoring is configured, Fabric delegates to Foundry over DCP{' '}
          <code style={{ font: "400 15px/1 'IBM Plex Mono',monospace" }}>agent.run</code> and then re-validates every
          proposal against the admitted catalog.
        </p>
      </LabSection>

      <LabSection background="#f4f2ec">
        <p style={sectionLabel}>How the compile path works</p>
        <p style={sectionBody}>The current Fabric flow is intentionally staged:</p>
        <ol style={{ ...listStyle, paddingLeft: 22 }}>
          <li>Catalog scan or admission reads component artifacts and pins their content.</li>
          <li>Needs loading determines required capabilities.</li>
          <li>Matching creates candidate compositions and validates dependency bindings.</li>
          <li>Selection chooses the valid candidate or asks the operator to resolve ambiguity.</li>
          <li>Deployment resolution records how each selected component should physically run.</li>
          <li>Substrate derivation emits only the runtime profile needed by the chosen contract, without secret values.</li>
          <li>Compile writes a light root DCP composition contract and support artifacts.</li>
          <li>Signing freezes the root DCP contract as the primary handoff.</li>
          <li>Verification checks signature, catalog drift, and trust keys.</li>
        </ol>
        <p style={{ ...sectionBody, margin: 0 }}>
          That separation matters. The root DCP contract is the handoff. Support artifacts help later tooling
          hydrate, package, or explain the result. Diagnostic artifacts are for replay and debugging, similar to
          debug symbols. They should not become the required production interface.
        </p>
      </LabSection>

      <LabSection>
        <p style={sectionLabel}>Why Fabric is needed if DCP already exists</p>
        <p style={sectionBody}>
          DCP tells the truth a component publishes about itself. Fabric applies that truth to a concrete assembly.
        </p>
        <p style={sectionBody}>For example, a component claim may say:</p>
        <ul style={listStyle}>
          <li>&#8220;I offer <code style={{ font: "400 15px/1 'IBM Plex Mono',monospace" }}>rag.search</code>.&#8221;</li>
          <li>&#8220;I require a vector store.&#8221;</li>
          <li>&#8220;I refuse to own identity or authorization.&#8221;</li>
          <li>&#8220;I can run as a container or Spring Boot service.&#8221;</li>
        </ul>
        <p style={sectionBody}>
          Fabric reads that claim next to the operator&#8217;s need and the available catalog. It decides whether
          this component is a valid participant, what else must be selected, which dependencies are external runtime
          bindings, and what deployment shape satisfies policy.
        </p>
        <p style={{ ...sectionBody, margin: 0 }}>
          Without Fabric, claims remain separate statements. With Fabric, they become a signed assembly decision.
        </p>
      </LabSection>

      <LabSection background="#f4f2ec">
        <p style={sectionLabel}>Studio state and file history</p>
        <p style={sectionBody}>
          Fabric Studio routes are tenant and assembly scoped. The current design treats catalogs, drafts, compiled
          contracts, exports, and diagnostics as operator visible files.
        </p>
        <p style={sectionBody}>Important ideas:</p>
        <ul style={listStyle}>
          <li>A tenant catalog can have immutable file versions.</li>
          <li>Draft sessions can point at the catalog version they were created from.</li>
          <li>Historical sessions can be listed like conversation history.</li>
          <li>Display titles are separate from physical file names.</li>
          <li>Dynamic DCP projections should be derived from the draft session inventory, not from whatever catalog happens to be visible in the browser.</li>
        </ul>
        <p style={{ ...sectionBody, margin: 0 }}>
          This is what makes repeatable Studio authoring possible. A draft should be able to say exactly which
          catalog, revision, intents, and export artifacts created it.
        </p>
      </LabSection>

      <LabSection>
        <p style={sectionLabel}>AI authoring is not a parallel compiler</p>
        <p style={sectionBody}>
          Fabric supports a conversational authoring entry point, but the AI does not get its own trust path.
        </p>
        <p style={sectionBody}>The authoring agent can:</p>
        <ul style={listStyle}>
          <li>ask clarification questions;</li>
          <li>suggest needs;</li>
          <li>propose Studio intents;</li>
          <li>suggest deployment policy;</li>
          <li>help with add, remove, replace, connect, or configuration actions.</li>
        </ul>
        <p style={{ ...sectionBody, margin: 0 }}>
          Fabric still validates every proposed intent. The accepted output goes through the same resolve, compile,
          sign, and export path as a visual or CLI-authored draft. An AI-authored contract is the same artifact
          shape as a hand-authored contract.
        </p>
      </LabSection>

      <LabSection background="#f4f2ec">
        <p style={sectionLabel}>What exists now</p>
        <p style={sectionBody}>The active implementation includes:</p>
        <ul style={listStyle}>
          <li>the Fabric compiler path;</li>
          <li>the Studio API server;</li>
          <li>catalog admission and removal;</li>
          <li>tenant file registry records;</li>
          <li>draft sessions and intent history;</li>
          <li>dynamic DCP projection from session state;</li>
          <li>deployment resolution;</li>
          <li>compile/export artifacts;</li>
          <li>Foundry-backed authoring delegation when configured;</li>
          <li>deterministic fallback for local development.</li>
        </ul>
        <p style={{ ...sectionBody, margin: 0 }}>
          The product is still under active development. Expect the API and UI details to move as more real
          assemblies are tested.
        </p>
      </LabSection>

      <LabSection>
        <p style={sectionLabel}>How to read the repository</p>
        <p style={sectionBody}>Start here:</p>
        <ol style={{ ...listStyle, paddingLeft: 22 }}>
          <li><code style={{ font: "400 15px/1 'IBM Plex Mono',monospace" }}>README.md</code> for quick use and build commands.</li>
          <li><code style={{ font: "400 15px/1 'IBM Plex Mono',monospace" }}>docs/HLD-unfurl-fabric.md</code> for the architecture and invariants.</li>
          <li><code style={{ font: "400 15px/1 'IBM Plex Mono',monospace" }}>docs/LLD-fabric-studio-api.md</code> for Studio route contracts and state shape.</li>
          <li><code style={{ font: "400 15px/1 'IBM Plex Mono',monospace" }}>docs/Flowfoundry.md</code> for the end-to-end assembly/export/deployment runbook.</li>
          <li><code style={{ font: "400 15px/1 'IBM Plex Mono',monospace" }}>docs/FlowfoundryAuthoringAgentRunbook.md</code> for how the authoring agent should drive the same phases through tools and questions.</li>
        </ol>
      </LabSection>

      <LabSection background="#f4f2ec">
        <p style={sectionLabel}>What to look for as a reviewer</p>
        <p style={sectionBody}>Good Fabric feedback usually asks:</p>
        <ul style={listStyle}>
          <li>Did Fabric choose from admitted catalog entries only?</li>
          <li>Is the selected component set complete, not only the last selected candidate?</li>
          <li>Are support and diagnostic artifacts kept separate from the primary handoff?</li>
          <li>Are tenant boundaries preserved for files, sessions, catalogs, and exports?</li>
          <li>Does deployment resolution use DCP/component shape metadata rather than UI fallback assumptions?</li>
          <li>Does authoring assistance ask the right questions before proposing a draft?</li>
        </ul>
      </LabSection>

      <LabSection>
        <p style={sectionLabel}>Current open questions</p>
        <ul style={listStyle}>
          <li>Which support artifacts should stay optional, and which are required for downstream packaging?</li>
          <li>How much of the Flowfoundry runbook should be driven by a generic authoring agent versus a workflow-specific DAG?</li>
          <li>Which Studio routes should become public API surfaces, and which should remain local authoring infrastructure?</li>
          <li>How should production auth, audit, telemetry, and secret configuration be represented as DCP/runtime ports before concrete adapters are selected?</li>
        </ul>
      </LabSection>

      <LabSection background="#f4f2ec">
        <p style={sectionLabel}>Bottom line</p>
        <p style={{ ...sectionBody, margin: 0 }}>
          Fabric is the assembly authority. It turns DCP claims and operator needs into a signed, explainable,
          deployable contract while keeping runtime execution, browser rendering, and AI model calls behind their
          own product boundaries.
        </p>
      </LabSection>

      <LabSection>
        <p style={sectionLabel}>Related research</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 16 }}>
          <RelatedResearchLink kind="DCP Journey · Part 3" title="The Capability Contract" to="/research/dcp/part-3" />
          <RelatedResearchLink kind="DCP Journey · Part 4" title="Draft Spec and Discussion" to="/research/dcp/part-4" />
          <RelatedResearchLink kind="DCP Journey · Part 5" title="The Human Harness" to="/research/dcp/part-5" />
          <RelatedResearchLink kind="DCP Journey · Part 7" title="The Living Assembly" to="/research/dcp/part-7" />
        </div>
        <p style={{ ...monoSmall, margin: '20px 0 0' }}>
          Primary audience: readers who understand DCP and want to see how claims become contracts, platform
          engineers evaluating design-time composition, and operators who need catalog, matching, signing, and
          deployment planning.
        </p>
      </LabSection>
    </>
  )
}
