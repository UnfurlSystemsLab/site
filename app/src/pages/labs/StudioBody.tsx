import { tableWrap, th, td, tdLast } from '../articles/shared'
import { sectionLabel, sectionBody, listStyle, codeBlock, codeText, monoSmall } from './labShared'
import { LabSection, RelatedResearchLink } from './LabShell'

// Unfurl Studio and UI Lab body — ported verbatim from
// site/docs/lab-pages/unfurl-studio-ui.md.
export default function StudioBody() {
  return (
    <>
      <LabSection>
        <p style={sectionLabel}>What this Lab is for</p>
        <p style={sectionBody}>Unfurl Studio is the human harness for DCP and Fabric assemblies.</p>
        <p style={sectionBody}>
          The blog argues that AI-native systems need more than protocols and compilers. Humans still need a place
          to inspect, question, manipulate, validate, and operate what the system is assembling. Studio is that
          place.
        </p>
        <p style={sectionBody}>It is not a decorative 3D visualizer. It is a governed authoring and inspection surface:</p>
        <div style={codeBlock}>
          <pre style={codeText}>
            <code>{`DCP/Fabric truth -> Studio scene model -> visual workspace
operator intent -> Fabric validation -> updated scene`}</code>
          </pre>
        </div>
        <p style={{ ...sectionBody, margin: 0 }}>The visual scene is a projection. Fabric and DCP remain the source of truth.</p>
      </LabSection>

      <LabSection background="#f4f2ec">
        <p style={sectionLabel}>The clean mental model</p>
        <p style={sectionBody}>Studio lets a person work with an assembly at the level their brain can handle:</p>
        <ul style={listStyle}>
          <li>a catalog of available components;</li>
          <li>a draft workspace;</li>
          <li>visible ports, dependencies, refusals, and validation status;</li>
          <li>replacement and connection guidance;</li>
          <li>deployment-shape choices;</li>
          <li>authoring-agent clarification questions;</li>
          <li>compile, export, and artifact inspection.</li>
        </ul>
        <p style={{ ...sectionBody, margin: 0 }}>
          The operator manipulates shapes. Fabric validates intents. DCP decides compatibility. Studio renders the
          result.
        </p>
      </LabSection>

      <LabSection>
        <p style={sectionLabel}>Why the UI is part of the architecture</p>
        <p style={sectionBody}>The UI follows the same independence principle as the backend products.</p>
        <p style={sectionBody}>
          Backend products can run separately or be co-packaged. Frontend component webapps should also be able to
          run standalone or be mounted inside a host shell.
        </p>
        <p style={sectionBody}>The host shell provides:</p>
        <ul style={listStyle}>
          <li>routing;</li>
          <li>tenant and user context;</li>
          <li>permissions;</li>
          <li>navigation;</li>
          <li>theme mediation;</li>
          <li>import maps;</li>
          <li>lifecycle and error boundaries.</li>
        </ul>
        <p style={{ ...sectionBody, margin: 0 }}>
          Component webapps provide capability-specific experiences. Themes are separate artifacts. A component may
          suggest visual tone or interaction hints, but it does not directly take over the global UI.
        </p>
      </LabSection>

      <LabSection background="#f4f2ec">
        <p style={sectionLabel}>Studio&#8217;s core rule: visual does not mean vague</p>
        <p style={sectionBody}>Studio separates semantic truth from visual metadata.</p>
        <div style={tableWrap}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={th}>Concern</th>
                <th style={th}>Owner</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={td}>Offers, dependencies, refusals, faults</td>
                <td style={{ ...td, color: '#5c594f' }}>DCP claim</td>
              </tr>
              <tr>
                <td style={td}>Compatibility and trust</td>
                <td style={{ ...td, color: '#5c594f' }}>Fabric/DCP validation</td>
              </tr>
              <tr>
                <td style={td}>Substrate requirements</td>
                <td style={{ ...td, color: '#5c594f' }}>Fabric substrate derivation</td>
              </tr>
              <tr>
                <td style={td}>Port placement and fallback shape</td>
                <td style={{ ...td, color: '#5c594f' }}>Visual manifest</td>
              </tr>
              <tr>
                <td style={tdLast}>Camera, layout, labels, annotations</td>
                <td style={{ ...tdLast, color: '#5c594f' }}>Studio UI state</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={{ ...sectionBody, margin: '20px 0 0' }}>
          A visual port must point back to a real DCP offer, dependency, substrate port, or refusal concern. Studio
          can generate a visual anchor when artwork is missing, but it must not invent semantic capabilities just to
          make the scene look complete.
        </p>
      </LabSection>

      <LabSection>
        <p style={sectionLabel}>What the 3D assembly view is meant to show</p>
        <p style={sectionBody}>The 3D assembly view should make composition inspectable:</p>
        <ul style={listStyle}>
          <li>which components are in the draft;</li>
          <li>which claims, offers, and dependencies they expose;</li>
          <li>which ports are connected or still missing;</li>
          <li>which parts are blocked by trust, shape, or dependency rules;</li>
          <li>which aggregate contains which child claims or contracts;</li>
          <li>how the view changes after each accepted authoring phase.</li>
        </ul>
        <p style={{ ...sectionBody, margin: 0 }}>
          This is especially important for recursive DCP. A large system needs semantic zoom: the operator should be
          able to move from a high-level aggregate to its children without losing the contract structure underneath.
        </p>
      </LabSection>

      <LabSection background="#f4f2ec">
        <p style={sectionLabel}>Conversational authoring</p>
        <p style={sectionBody}>Studio also supports a conversational entry point.</p>
        <p style={sectionBody}>
          The authoring agent should not invent a separate pipeline. It should ask clarifying questions, then
          produce the same things the visual path produces:
        </p>
        <ul style={listStyle}>
          <li>needs;</li>
          <li>Studio intents;</li>
          <li>deployment policy suggestions;</li>
          <li>compile/export requests.</li>
        </ul>
        <p style={sectionBody}>
          Fabric validates every proposed intent. The accepted draft updates the same assembly state and 3D view the
          manual workflow uses.
        </p>
        <p style={sectionBody}>Examples of useful clarification questions:</p>
        <ul style={{ ...listStyle, margin: 0 }}>
          <li>Which tenant catalog version should this draft use?</li>
          <li>Should the user start from a historical draft or create a new one?</li>
          <li>Which admitted component should be the starting/root component?</li>
          <li>Which optional capabilities are required now versus later?</li>
          <li>Does a selected component need external secrets, connectors, auth, or runtime configuration?</li>
          <li>If a component is removed, what downstream connections or capabilities become invalid?</li>
        </ul>
      </LabSection>

      <LabSection>
        <p style={sectionLabel}>What exists now</p>
        <p style={sectionBody}>The current UI workspace includes:</p>
        <ul style={listStyle}>
          <li>a host-shell app;</li>
          <li>a Fabric Studio webapp;</li>
          <li>shared UI contracts;</li>
          <li>event bus, manifests, scene model, validation client, theme engine, renderer, graph-layout, and design-system packages;</li>
          <li>DCP Journey and Labs site pages;</li>
          <li>a DCP Lab detail page;</li>
          <li>Fabric and Studio Lab routes;</li>
          <li>authoring conversation UI and client contracts;</li>
          <li>visual composition and dynamic DCP integration with Fabric Studio APIs.</li>
        </ul>
        <p style={{ ...sectionBody, margin: 0 }}>
          The Studio Lab is still a prototype. It is meant to demonstrate the human harness, not to claim finished
          product maturity.
        </p>
      </LabSection>

      <LabSection background="#f4f2ec">
        <p style={sectionLabel}>How to read the repository</p>
        <p style={sectionBody}>Start here:</p>
        <ol style={{ ...listStyle, paddingLeft: 22 }}>
          <li><code style={{ font: "400 15px/1 'IBM Plex Mono',monospace" }}>README.md</code> for workspace layout.</li>
          <li><code style={{ font: "400 15px/1 'IBM Plex Mono',monospace" }}>docs/HLD-D-fabric-ui-host-shell.md</code> for host-shell architecture.</li>
          <li><code style={{ font: "400 15px/1 'IBM Plex Mono',monospace" }}>docs/LLD-unfurl-studio-visual-composition.md</code> for the Studio scene and visual-composition model.</li>
          <li><code style={{ font: "400 15px/1 'IBM Plex Mono',monospace" }}>docs/HLD-ai-contract-authoring.md</code> for conversational authoring design.</li>
          <li><code style={{ font: "400 15px/1 'IBM Plex Mono',monospace" }}>docs/REPO-ai-contract-authoring-build-spec.md</code> for what is implemented and what remains deferred.</li>
          <li><code style={{ font: "400 15px/1 'IBM Plex Mono',monospace" }}>unfurl-fabric/docs/LLD-fabric-studio-api.md</code> for the backend routes Studio consumes.</li>
        </ol>
      </LabSection>

      <LabSection>
        <p style={sectionLabel}>What to look for as a reviewer</p>
        <p style={sectionBody}>Good Studio feedback usually asks:</p>
        <ul style={listStyle}>
          <li>Does every visual element map back to DCP or Fabric state?</li>
          <li>Does the UI update after each accepted authoring phase, not only at final export?</li>
          <li>Are add, remove, replace, connect, and configuration actions routed through validated intents?</li>
          <li>Does the authoring agent ask enough questions before proposing changes?</li>
          <li>Can a non-expert understand why a connection or component is rejected?</li>
          <li>Can an expert inspect the exact contract, binding, artifact, and diagnostic evidence behind the scene?</li>
        </ul>
      </LabSection>

      <LabSection background="#f4f2ec">
        <p style={sectionLabel}>Current open questions</p>
        <ul style={listStyle}>
          <li>How should semantic zoom expose aggregate claims without hiding child contracts?</li>
          <li>Which runtime signals from a living assembly should appear on the same visual model after deployment?</li>
          <li>How should the site consume markdown Lab pages while keeping repo docs as the technical source of truth?</li>
          <li>What is the smallest polished UI that still proves the human harness idea?</li>
        </ul>
      </LabSection>

      <LabSection>
        <p style={sectionLabel}>Bottom line</p>
        <p style={{ ...sectionBody, margin: 0 }}>
          Studio is the human-facing layer of governed assembly. It lets people work with the same DCP and Fabric
          truth that the compiler sees, but in a form that supports inspection, clarification, visual manipulation,
          and safe evolution.
        </p>
      </LabSection>

      <LabSection background="#f4f2ec">
        <p style={sectionLabel}>Related research</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 16 }}>
          <RelatedResearchLink kind="DCP Journey · Part 5" title="The Human Harness" to="/research/dcp/part-5" />
          <RelatedResearchLink kind="DCP Journey · Part 6" title="Aggregation Is Abstraction" to="/research/dcp/part-6" />
          <RelatedResearchLink kind="DCP Journey · Part 7" title="The Living Assembly" to="/research/dcp/part-7" />
        </div>
        <p style={{ ...monoSmall, margin: '20px 0 0' }}>
          Primary audience: readers coming from the Human Harness essay, operators who need to inspect and govern
          assemblies visually, and frontend engineers evaluating Studio and host-shell architecture.
        </p>
      </LabSection>
    </>
  )
}
