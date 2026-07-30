import type { CSSProperties } from 'react'
import { bodyP, h2Style, calloutBox, calloutLabel, calloutBody, listStyle, tableWrap, th, td, tdLast } from './shared'

// DCP Journey Part 4 — "Draft Spec and Discussion" body copy, ported
// verbatim in full: the core-primitives table, aggregation levels, the
// illustrative YAML claim fragment and its section-by-section meaning, the
// negotiation/contract/runtime-binding tables, negotiation modes, the smart
// room example, and the closing contribution prompts and discussion norms.
export default function Part4() {
  const codeTag: CSSProperties = {
    font: "400 12px/1 'IBM Plex Mono',monospace",
    background: '#f4f2ec',
    padding: '2px 5px',
    borderRadius: 2,
    color: '#3a382f',
  }

  return (
    <>
      <div style={calloutBox}>
        <p style={calloutLabel}>Discussion draft posture</p>
        <p style={calloutBody}>
          This part intentionally starts with the current draft shape of DCP. The explanation and the invitation to
          contribute come after the reader has seen what is being proposed.
        </p>
      </div>

      <h2 style={h2Style}>Put the draft on the table</h2>
      <p style={bodyP}>
        If people are going to improve DCP, they should see the draft shape before being asked for ideas. In the
        earlier parts of this series, we moved from the missing harness to the software baseline shift, and then to
        DCP as a capability contract for an AI-native world. Part 4 should do something slightly different.
      </p>
      <p style={bodyP}>
        It should not begin by asking people to comment on an abstract idea. It should first show the current draft:
        the shape of the protocol, the main primitives, the guardrails, and the questions it is trying to answer.
        Only after that does it make sense to explain the design and invite discussion.
      </p>
      <p style={bodyP}>
        A community cannot critique a protocol it has not seen. Starting with the draft spec makes the conversation
        more precise, more inclusive, and more useful.
      </p>

      <h2 style={h2Style}>Current DCP draft spec — public working shape</h2>
      <p style={bodyP}>
        The following is not a final standard. It is a public-facing working shape of the current DCP draft: enough
        structure to make the proposal concrete, while still leaving room for domain feedback and design correction.
      </p>
      <p style={bodyP}>
        DCP stands for Domain Claim Protocol. At the highest level, it is a protocol by which components describe
        themselves, negotiate how they compose, and invoke one another through a frozen contract rather than ad hoc
        runtime interpretation.
      </p>

      <h2 style={h2Style}>1. Purpose and scope</h2>
      <p style={bodyP}>
        DCP is designed for late-bound enterprise composition. Instead of hardcoding every application topology,
        components publish claims. Those claims can then be resolved through requirements, policies, context, and
        bindings.
      </p>
      <p style={bodyP}>
        A component can be a software service, infrastructure capability, intelligent component, device-facing
        adapter, workflow engine, connector, or other capability-bearing unit.
      </p>
      <p style={bodyP}>
        Composition is resolved through claims, requirements, policies, and bindings rather than only through
        hand-written integration code. The output of composition is a frozen artifact that runtime can execute
        deterministically.
      </p>
      <p style={bodyP}>
        DCP does not replace business APIs, authentication protocols, hosting systems, or MCP. It sits at the
        composition layer above them.
      </p>

      <h2 style={h2Style}>2. Core primitives in the draft</h2>
      <div style={tableWrap}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={th}>Primitive</th>
              <th style={th}>What it answers</th>
              <th style={th}>Why it matters</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ ...td, font: "500 13px/1.5 'IBM Plex Mono',monospace", color: '#1c1b19' }}>Claim</td>
              <td style={{ ...td, color: '#5c594f' }}>What is this component, what domain does it own, and what does it refuse?</td>
              <td style={{ ...td, color: '#5c594f' }}>Prevents AI from guessing what a component is responsible for.</td>
            </tr>
            <tr>
              <td style={{ ...td, font: "500 13px/1.5 'IBM Plex Mono',monospace", color: '#1c1b19' }}>Negotiation</td>
              <td style={{ ...td, color: '#5c594f' }}>Can two claims compose under this context, policy, tenant, and environment?</td>
              <td style={{ ...td, color: '#5c594f' }}>Moves intelligence to design time, where reasoning is allowed and reviewable.</td>
            </tr>
            <tr>
              <td style={{ ...td, font: "500 13px/1.5 'IBM Plex Mono',monospace", color: '#1c1b19' }}>Composition contract</td>
              <td style={{ ...td, color: '#5c594f' }}>
                What exact need binds to what exact offer, with what transport, mapping, expectations, provenance,
                trust, and invalidation rules?
              </td>
              <td style={{ ...td, color: '#5c594f' }}>Freezes the agreement so runtime can execute without rethinking it.</td>
            </tr>
            <tr>
              <td style={{ ...td, font: "500 13px/1.5 'IBM Plex Mono',monospace", color: '#1c1b19' }}>Runtime binding</td>
              <td style={{ ...td, color: '#5c594f' }}>Where and how is the frozen contract wired in a specific environment or tenant?</td>
              <td style={{ ...td, color: '#5c594f' }}>Keeps endpoints, secret refs, scaling, telemetry, and runtime policy out of the claim.</td>
            </tr>
            <tr>
              <td style={{ ...td, font: "500 13px/1.5 'IBM Plex Mono',monospace", color: '#1c1b19' }}>Aggregate component</td>
              <td style={{ ...td, color: '#5c594f' }}>How can a parent capability contain and govern child components, contracts, and bindings?</td>
              <td style={{ ...td, color: '#5c594f' }}>Makes assembly first-class instead of private planner metadata.</td>
            </tr>
            <tr>
              <td style={{ ...tdLast, font: "500 13px/1.5 'IBM Plex Mono',monospace", color: '#1c1b19' }}>Fault vocabulary</td>
              <td style={{ ...tdLast, color: '#5c594f' }}>How can a component fail, what does the failure affect, and when may it propagate?</td>
              <td style={{ ...tdLast, color: '#5c594f' }}>Makes failures machine-readable without turning every runtime incident into AI reasoning.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 style={h2Style}>3. Aggregation of components</h2>
      <p style={bodyP}>
        Aggregation is not an optional extension to the DCP story. It is how DCP represents a larger capability made
        from smaller capabilities. A smart room, workflow, module, product surface, or enterprise domain can behave
        as an aggregate component while still preserving the claims, contracts, and runtime bindings of its children.
      </p>
      <p style={bodyP}>In the draft shape, aggregation appears at three levels:</p>
      <div style={tableWrap}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={th}>Level</th>
              <th style={th}>Aggregate shape</th>
              <th style={th}>Why it matters</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ ...td, font: "500 13px/1.5 'IBM Plex Mono',monospace", color: '#1c1b19' }}>Claims</td>
              <td style={{ ...td, color: '#5c594f' }}>Parent claim references child claims.</td>
              <td style={{ ...td, color: '#5c594f' }}>Larger capabilities remain explainable without erasing child ownership boundaries.</td>
            </tr>
            <tr>
              <td style={{ ...td, font: "500 13px/1.5 'IBM Plex Mono',monospace", color: '#1c1b19' }}>Contracts</td>
              <td style={{ ...td, color: '#5c594f' }}>Parent contract references child contracts.</td>
              <td style={{ ...td, color: '#5c594f' }}>Multi-component agreements travel as DCP contract trees, not private planner metadata.</td>
            </tr>
            <tr>
              <td style={{ ...tdLast, font: "500 13px/1.5 'IBM Plex Mono',monospace", color: '#1c1b19' }}>Runtime bindings</td>
              <td style={{ ...tdLast, color: '#5c594f' }}>Parent binding references child bindings.</td>
              <td style={{ ...tdLast, color: '#5c594f' }}>Deployment wiring remains inspectable across environments, tenants, and child components.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div style={calloutBox}>
        <p style={calloutLabel}>Public draft note</p>
        <p style={calloutBody}>
          If aggregation is missing, the spec collapses back into pairwise integration. For an interconnected world,
          the parent/child composition graph must be part of the protocol surface itself.
        </p>
      </div>
      <p style={bodyP}>
        An aggregate component is still a component: it has a domain, boundary, dependencies, offers, refusals,
        conflicts, faults, and metadata. Child components do not disappear inside the parent. Their claims,
        contracts, and bindings remain independently inspectable. A multi-component deployment should be represented
        as a DCP tree that can be validated, audited, and discussed.
      </p>
      <p style={bodyP}>
        This is the bridge between ordinary components and systems-of-components: rooms, workflows, modules,
        enterprises, and future AI-governed environments.
      </p>

      <h2 style={h2Style}>4. Component claim</h2>
      <p style={bodyP}>
        A claim is the component self-description. It is static, published per component version, and treated as
        the source of truth for what the component owns and refuses.
      </p>
      <p style={{ ...bodyP, margin: '0 0 12px' }}>
        <strong>Illustrative claim fragment.</strong> The full schema is larger, but even a small claim fragment
        shows the shape DCP wants to make explicit:
      </p>
      <div style={{ border: '1px solid #e5e2da', background: '#1c1b19', borderRadius: 3, padding: '20px 22px', margin: '0 0 12px', overflowX: 'auto' }}>
        <pre style={{ margin: 0, font: "400 13px/1.7 'IBM Plex Mono',monospace", color: '#e8e5dd' }}>
          <code>{`identity:
  uri: dcp://components/smart-room/hvac
  name: Room HVAC Adapter
  kind: component
  version: 1.0.0
domain:
  concerns:
    - concern: room-climate-control
      scope_notes: Owns local temperature execution, not building-wide energy policy.
  boundary_principles:
    - Comfort decisions may be constrained by safety, occupancy, and energy policy.
refusals:
  - concern: building-wide-energy-policy
    owned_by: energy-optimization-system
offers:
  - capability: room.climate.setpoint
dependencies:
  required:
    - need: occupancy-signal
faults:
  emitted:
    - code: hvac.sensor_stale
      severity: degraded`}</code>
        </pre>
      </div>
      <div style={tableWrap}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={th}>Claim section</th>
              <th style={th}>Draft meaning</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}><code style={codeTag}>identity</code></td>
              <td style={{ ...td, color: '#5c594f' }}>Stable URI, name, kind, version, publisher.</td>
            </tr>
            <tr>
              <td style={td}><code style={codeTag}>domain</code></td>
              <td style={{ ...td, color: '#5c594f' }}>Plain-language summary, concerns, owned state, owned decisions, and boundary principles.</td>
            </tr>
            <tr>
              <td style={td}><code style={codeTag}>refusals</code></td>
              <td style={{ ...td, color: '#5c594f' }}>Specific things the component does not own, with rationale and ideally who should own them instead.</td>
            </tr>
            <tr>
              <td style={td}><code style={codeTag}>dependencies</code></td>
              <td style={{ ...td, color: '#5c594f' }}>Required, recommended, and forbidden dependencies.</td>
            </tr>
            <tr>
              <td style={td}><code style={codeTag}>offers</code></td>
              <td style={{ ...td, color: '#5c594f' }}>Capabilities exposed for others to consume, with interface, stability, version, and cost implications when relevant.</td>
            </tr>
            <tr>
              <td style={td}><code style={codeTag}>conflict_resolution</code></td>
              <td style={{ ...td, color: '#5c594f' }}>How overlapping concerns should be handled: exclusive, negotiable, deferring, or consulted.</td>
            </tr>
            <tr>
              <td style={td}><code style={codeTag}>negotiation_surface</code></td>
              <td style={{ ...td, color: '#5c594f' }}>Required when the component is intelligent; defines bounded design-time negotiation capability.</td>
            </tr>
            <tr>
              <td style={td}><code style={codeTag}>integration_ports</code></td>
              <td style={{ ...td, color: '#5c594f' }}>Authentication, authorization, telemetry, monitoring, and AI integration surfaces.</td>
            </tr>
            <tr>
              <td style={td}><code style={codeTag}>faults</code></td>
              <td style={{ ...td, color: '#5c594f' }}>Declared operational-fault vocabulary and propagation policy.</td>
            </tr>
            <tr>
              <td style={tdLast}><code style={codeTag}>metadata</code></td>
              <td style={{ ...tdLast, color: '#5c594f' }}>DCP version, claim version, effective date, references, and related metadata.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 style={h2Style}>5. Negotiation and composition contract</h2>
      <p style={bodyP}>
        Negotiation is the design-time step that reads two claims and context, then produces a frozen composition
        contract. It answers questions such as: Does this component own the required concern? Is a dependency
        satisfied? Is there an exclusive conflict? What owns the refused concern instead?
      </p>
      <p style={bodyP}>
        The composition contract is the artifact that runtime consumes. Conceptually, it carries the parties,
        binding, data mapping, transport, expectations, provenance, trust, version pins, and invalidation behavior.
      </p>
      <div style={tableWrap}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={th}>Contract field</th>
              <th style={th}>Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ ...td, font: "500 13px/1.5 'IBM Plex Mono',monospace", color: '#1c1b19' }}>parties</td>
              <td style={{ ...td, color: '#5c594f' }}>The consumer and provider claims and their pinned versions.</td>
            </tr>
            <tr>
              <td style={{ ...td, font: "500 13px/1.5 'IBM Plex Mono',monospace", color: '#1c1b19' }}>binding</td>
              <td style={{ ...td, color: '#5c594f' }}>The consumer need and provider capability being connected.</td>
            </tr>
            <tr>
              <td style={{ ...td, font: "500 13px/1.5 'IBM Plex Mono',monospace", color: '#1c1b19' }}>data_mapping</td>
              <td style={{ ...td, color: '#5c594f' }}>How inputs and outputs map across the boundary.</td>
            </tr>
            <tr>
              <td style={{ ...td, font: "500 13px/1.5 'IBM Plex Mono',monospace", color: '#1c1b19' }}>transport</td>
              <td style={{ ...td, color: '#5c594f' }}>How invocation occurs: in-process, HTTP/JSON, or gRPC, depending on valid packaging and support.</td>
            </tr>
            <tr>
              <td style={{ ...td, font: "500 13px/1.5 'IBM Plex Mono',monospace", color: '#1c1b19' }}>expectations</td>
              <td style={{ ...td, color: '#5c594f' }}>Timeouts, idempotency, async behavior, and correlation requirements.</td>
            </tr>
            <tr>
              <td style={{ ...td, font: "500 13px/1.5 'IBM Plex Mono',monospace", color: '#1c1b19' }}>provenance</td>
              <td style={{ ...td, color: '#5c594f' }}>How the contract was authored: by Fabric, a model, human-in-the-loop, or embedded self.</td>
            </tr>
            <tr>
              <td style={{ ...td, font: "500 13px/1.5 'IBM Plex Mono',monospace", color: '#1c1b19' }}>trust</td>
              <td style={{ ...td, color: '#5c594f' }}>The recorded trust tier; policy decides what to do with it.</td>
            </tr>
            <tr>
              <td style={{ ...tdLast, font: "500 13px/1.5 'IBM Plex Mono',monospace", color: '#1c1b19' }}>invalidation</td>
              <td style={{ ...tdLast, color: '#5c594f' }}>When the contract must be re-negotiated; runtime violation hard-fails rather than self-heals.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 style={h2Style}>6. Runtime binding and guardrails</h2>
      <p style={bodyP}>
        The contract says what is valid. The runtime binding says where and how it is wired in a specific
        environment, tenant, region, namespace, or deployment target.
      </p>
      <ul style={listStyle}>
        <li>Runtime bindings may include endpoint references, secret references, telemetry routing, scaling policy, rate limits, circuit breakers, rollout controls, and non-secret configuration.</li>
        <li>Runtime bindings must not change the semantic agreement captured by the contract.</li>
        <li>Secrets are references only, never inline values.</li>
        <li>If a runtime assumption is violated, the draft leans toward hard-fail and later design-time re-negotiation, not runtime self-healing.</li>
        <li>The runtime path remains deterministic: no model, no reasoning loop, and no phone-home dependency.</li>
      </ul>

      <h2 style={h2Style}>7. Negotiation modes</h2>
      <p style={bodyP}>
        The draft allows the same negotiation question schema to be answered in different modes, depending on how
        many parties are intelligent.
      </p>
      <div style={tableWrap}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={th}>Mode</th>
              <th style={th}>Who answers?</th>
              <th style={th}>Why it matters</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ ...td, font: "500 13px/1.5 'IBM Plex Mono',monospace", color: '#1c1b19' }}>C2C</td>
              <td style={{ ...td, color: '#5c594f' }}>Component to component, or a model on behalf of components.</td>
              <td style={{ ...td, color: '#5c594f' }}>The thesis-pure case for autonomous composition.</td>
            </tr>
            <tr>
              <td style={{ ...td, font: "500 13px/1.5 'IBM Plex Mono',monospace", color: '#1c1b19' }}>H2C</td>
              <td style={{ ...td, color: '#5c594f' }}>A human represents a non-intelligent side.</td>
              <td style={{ ...td, color: '#5c594f' }}>Useful early on, and produces structured examples for future automation.</td>
            </tr>
            <tr>
              <td style={{ ...tdLast, font: "500 13px/1.5 'IBM Plex Mono',monospace", color: '#1c1b19' }}>H2H</td>
              <td style={{ ...tdLast, color: '#5c594f' }}>Humans drive composition manually, with structure supplied by the authoring environment.</td>
              <td style={{ ...tdLast, color: '#5c594f' }}>Keeps the model inclusive for today&#8217;s non-intelligent components.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 style={h2Style}>How to read the draft in plain language</h2>
      <p style={bodyP}>
        The draft may look technical, but the underlying idea is simple: if AI is going to coordinate systems, those
        systems need to explain themselves before they are coordinated.
      </p>
      <p style={bodyP}>
        An API tells another system how to call something. A tool protocol can tell an AI how to invoke a tool. DCP
        is asking a broader set of questions: What is this thing? What domain does it serve? What does it own? What
        does it refuse? What does it need? What does it offer? What happens when it fails? Who should decide when
        boundaries overlap?
      </p>
      <p style={bodyP}>
        This is why DCP is not merely another interface description. It is a capability contract. Its value is not
        only in making successful calls possible, but in making unsafe, ambiguous, or invalid composition visible
        before runtime.
      </p>

      <h2 style={h2Style}>Example: a smart room</h2>
      <p style={bodyP}>
        Take a smart room with an air conditioner, curtains, a door lock, an occupancy sensor, a user preference
        profile, and a building energy-management system. Each piece can expose capabilities. But capability alone
        is not enough.
      </p>
      <p style={bodyP}>
        The AC may offer cooling, heating, fan speed, power state, and telemetry. It may refuse to own building-wide
        energy policy.
      </p>
      <p style={bodyP}>
        The curtains may offer open, close, tilt, and sunlight-blocking modes. They may refuse to own privacy policy.
      </p>
      <p style={bodyP}>
        The occupancy sensor may offer presence signals. It may refuse to identify a person unless identity is
        provided by another component.
      </p>
      <p style={bodyP}>
        The building energy system may own optimization across rooms, but it may need to defer to safety policy,
        tenant preference, or human override.
      </p>
      <p style={bodyP}>A human may need to approve high-cost, privacy-sensitive, or safety-relevant actions.</p>
      <p style={bodyP}>
        The point is not to make every object intelligent. The point is to make every relevant object sufficiently
        self-describing that intelligence can assemble and govern the system without guessing. The room itself can
        also be an aggregate component: a parent claim that contains the AC, curtains, lock, sensor, policy layer,
        and user-preference component as children.
      </p>

      <h2 style={h2Style}>Why the draft begins with boundaries</h2>
      <p style={bodyP}>
        In ordinary software documentation, refusals are often implicit. A service describes what it does, and
        everything else is assumed to be out of scope. That is not enough for AI-native composition.
      </p>
      <p style={bodyP}>
        When AI assembles systems, implicit boundaries become dangerous. A component that never says what it refuses
        may be overused. A component that claims too much may create ownership conflicts. A component that hides
        failure behavior may cause downstream systems to make unsafe assumptions.
      </p>
      <p style={bodyP}>
        So the draft treats boundaries as first-class. Domain assertions, refusals, conflict resolution, faults, and
        human escalation are not side notes. They are core protocol material.
      </p>

      <h2 style={h2Style}>Now open it for discussion</h2>
      <p style={bodyP}>
        Once the draft shape is visible, the invitation becomes more precise. The question is no longer, &#8220;Do
        you like DCP?&#8221; The better question is: &#8220;Can this draft describe the components, devices,
        services, workflows, and policies from your domain without lying, oversimplifying, or hiding risk?&#8221;
      </p>
      <p style={bodyP}>
        This is where inclusiveness matters. DCP should not be shaped only by protocol designers or AI engineers. It
        needs software engineers, platform teams, device builders, security teams, SREs, product teams, UX
        designers, legal and compliance experts, domain specialists, and people who operate systems in the real
        world.
      </p>

      <h2 style={h2Style}>What to contribute</h2>
      <p style={bodyP}>
        The most valuable contribution is a concrete case. Pick one component from your world and try to describe it
        through the draft spec. Then identify where the draft works, where it feels awkward, and where it fails.
      </p>
      <div style={tableWrap}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={th}>Prompt</th>
              <th style={th}>What to share</th>
              <th style={th}>Why it helps</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ ...td, font: "500 13px/1.5 'IBM Plex Mono',monospace", color: '#1c1b19' }}>Component</td>
              <td style={{ ...td, color: '#5c594f' }}>What specific thing are you describing?</td>
              <td style={{ ...td, color: '#5c594f' }}>Keeps feedback grounded.</td>
            </tr>
            <tr>
              <td style={{ ...td, font: "500 13px/1.5 'IBM Plex Mono',monospace", color: '#1c1b19' }}>Domain</td>
              <td style={{ ...td, color: '#5c594f' }}>What does it own, and where does that domain end?</td>
              <td style={{ ...td, color: '#5c594f' }}>Tests domain and boundary language.</td>
            </tr>
            <tr>
              <td style={{ ...td, font: "500 13px/1.5 'IBM Plex Mono',monospace", color: '#1c1b19' }}>Refusals</td>
              <td style={{ ...td, color: '#5c594f' }}>What must it explicitly not own?</td>
              <td style={{ ...td, color: '#5c594f' }}>Reveals unsafe or ambiguous claims.</td>
            </tr>
            <tr>
              <td style={{ ...td, font: "500 13px/1.5 'IBM Plex Mono',monospace", color: '#1c1b19' }}>Dependencies</td>
              <td style={{ ...td, color: '#5c594f' }}>What must exist for it to operate safely?</td>
              <td style={{ ...td, color: '#5c594f' }}>Tests required, recommended, and forbidden dependencies.</td>
            </tr>
            <tr>
              <td style={{ ...td, font: "500 13px/1.5 'IBM Plex Mono',monospace", color: '#1c1b19' }}>Offers</td>
              <td style={{ ...td, color: '#5c594f' }}>What capabilities can others consume?</td>
              <td style={{ ...td, color: '#5c594f' }}>Tests capability versioning and access shape.</td>
            </tr>
            <tr>
              <td style={{ ...td, font: "500 13px/1.5 'IBM Plex Mono',monospace", color: '#1c1b19' }}>Conflicts</td>
              <td style={{ ...td, color: '#5c594f' }}>Where does ownership overlap with another component?</td>
              <td style={{ ...td, color: '#5c594f' }}>Tests negotiation and conflict resolution.</td>
            </tr>
            <tr>
              <td style={{ ...td, font: "500 13px/1.5 'IBM Plex Mono',monospace", color: '#1c1b19' }}>Faults</td>
              <td style={{ ...td, color: '#5c594f' }}>How can it fail, what does that affect, and what remediation is allowed?</td>
              <td style={{ ...td, color: '#5c594f' }}>Tests operational vocabulary and propagation.</td>
            </tr>
            <tr>
              <td style={{ ...td, font: "500 13px/1.5 'IBM Plex Mono',monospace", color: '#1c1b19' }}>Aggregation</td>
              <td style={{ ...td, color: '#5c594f' }}>Does this component belong inside a larger parent component or capability?</td>
              <td style={{ ...td, color: '#5c594f' }}>Tests whether parent and child boundaries remain clear.</td>
            </tr>
            <tr>
              <td style={{ ...tdLast, font: "500 13px/1.5 'IBM Plex Mono',monospace", color: '#1c1b19' }}>Human role</td>
              <td style={{ ...tdLast, color: '#5c594f' }}>Where should a human decide, approve, or override?</td>
              <td style={{ ...tdLast, color: '#5c594f' }}>Tests governance and escalation boundaries.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 style={h2Style}>Questions for readers</h2>
      <ul style={listStyle}>
        <li>Can this draft describe physical-world devices without pretending they are ordinary APIs?</li>
        <li>Can this draft describe aggregates such as smart rooms, workflows, product modules, or enterprise domains without hiding child components?</li>
        <li>Are the boundary and refusal concepts strong enough for regulated domains?</li>
        <li>Does the fault vocabulary capture the failures that operators actually care about?</li>
        <li>Where should the draft force human escalation rather than allow automated negotiation?</li>
        <li>What should be standardized, and what should remain policy-specific?</li>
        <li>Which fields are too abstract, too implementation-shaped, or missing entirely?</li>
        <li>What would make claim authoring easier for engineers and non-engineers?</li>
      </ul>

      <h2 style={h2Style}>Discussion norms</h2>
      <p style={bodyP}>To make the discussion productive, feedback should aim to be specific and example-led.</p>
      <ul style={listStyle}>
        <li>Start with a real component, device, service, workflow, or policy from your domain.</li>
        <li>State the boundary: what it owns and what it refuses.</li>
        <li>Call out the edge case: where the draft becomes unclear or unsafe.</li>
        <li>Name the human decision point, if one exists.</li>
        <li>Distinguish a missing protocol concept from a product policy choice.</li>
        <li>Prefer small, concrete examples over broad agreement or rejection.</li>
      </ul>

      <h2 style={h2Style}>Closing thought</h2>
      <p style={bodyP}>
        If AI is going to help assemble the future, the capability contract it uses should not be written in
        isolation. It should be tested against real systems, real domains, real constraints, and real failures.
      </p>
      <p style={bodyP}>
        That is why Part 4 should begin with the draft spec. Then explain it. Then open it for discussion. The order
        matters because the goal is not applause. The goal is better protocol design.
      </p>
    </>
  )
}
