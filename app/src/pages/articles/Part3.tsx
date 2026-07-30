import { bodyP, h2Style, calloutBox, calloutLabel, calloutBody, quoteWrap, quoteText, tableWrap, th, td, tdLast } from './shared'

// DCP Journey Part 3 — "The Capability Contract" body copy, ported verbatim
// in full, including the three-planes figure and the old/new baseline
// comparison table.
export default function Part3({ showAlt }: { showAlt: boolean }) {
  return (
    <>
      <div style={calloutBox}>
        <p style={calloutLabel}>Executive summary</p>
        <p style={calloutBody}>
          Part 1 named the missing harness: AI cannot safely govern a connected world if every component describes
          itself in a different way, or worse, does not describe itself at all. Part 2 reframed the anxiety inside
          software development: the baseline is shifting from writing isolated components to assembling, governing,
          validating, and operating systems of capabilities. Part 3 introduces DCP — the Domain Claim Protocol — as
          the capability contract layer for that world. DCP is not a replacement for APIs or MCP: it sits at the
          assembly layer, helping intelligent agents decide which capabilities should compose, under what contract,
          before runtime begins.
        </p>
      </div>

      <h2 style={h2Style}>From missing harness to explicit protocol</h2>
      <p style={bodyP}>
        The first essay asked a simple question: if the GUI was the harness that made computing understandable to
        ordinary humans, what is the equivalent harness for AI? The second essay moved that question into the
        software industry itself. It argued that software work is not disappearing. The baseline is moving upward.
        As generation gets cheaper, the hard work shifts toward assembling capabilities, governing them, validating
        them, and making them safe to operate across domains.
      </p>
      <p style={bodyP}>
        This third essay gives that missing harness a name: DCP, the Domain Claim Protocol. DCP is the idea that
        every meaningful component in an AI-native world should carry a self-description that is useful not only to
        humans, but also to agents. Not a brochure. Not a README. Not a loose API document. A structured claim about
        what the component is, what it owns, what it refuses, what it needs, what it offers, and how it can safely
        compose with other components.
      </p>

      <h2 style={h2Style}>What DCP is</h2>
      <p style={bodyP}>
        DCP is a protocol for components to describe themselves, negotiate how they compose, and then invoke one
        another against a frozen agreement. It is meant for a world where independent capabilities must become peers
        rather than hard-wired subordinates.
      </p>
      <div style={calloutBox}>
        <p style={calloutLabel}>Core idea</p>
        <p style={calloutBody}>
          The most useful way to understand DCP is this: it turns enterprise architecture from a fixed topology into
          a dynamically governable composition graph.
        </p>
      </div>
      <p style={bodyP}>
        In the old model, the application knows its integrations because developers wired them into the application.
        In the emerging model, components may be discovered, selected, validated, and bound based on tenant needs,
        deployment environment, policy, cost, residency, capability version, or runtime context. That cannot be left
        to guesswork. It needs a contract layer.
      </p>
      <p style={bodyP}>
        DCP calls this late-bound enterprise composition. Instead of making every relationship permanent in code, DCP
        lets composition be resolved through claims, requirements, policies, and bindings.
      </p>

      <h2 style={h2Style}>The claim: a component speaks for itself</h2>
      <p style={bodyP}>
        The first building block of DCP is the claim. A claim is a component&#8217;s self-description. It is
        published per component version and is the source of truth for what that component owns, exposes, needs, and
        refuses.
      </p>
      <p style={bodyP}>
        This is the leap beyond conventional API thinking. An API can tell an agent that a capability exists. A DCP
        claim tells the agent whether that capability belongs in a particular composition at all.
      </p>
      <p style={bodyP}>
        A useful claim says: here is my identity, here is my domain, here are the concerns I own, here is the state I
        control, here are the decisions I make, here are the capabilities I offer, here are my dependencies, here is
        where I overlap with others, here is how to resolve those overlaps, here are my integration ports, and here
        are the faults I may emit.
      </p>
      <p style={bodyP}>
        That may sound formal, but the formality is the point. In a small system, a human can keep these boundaries
        in their head. In an interconnected world, the system has to carry the boundaries with it.
      </p>
      {showAlt && (
        <p style={{ font: "400 13px/1.6 'IBM Plex Sans',sans-serif", color: '#6f6c62', margin: '0 0 32px' }}>
          Figure 1. A DCP claim makes ownership, boundaries, dependencies, offers, integration ports, and faults
          explicit.
        </p>
      )}

      <h2 style={h2Style}>The most important part: what it refuses</h2>
      <p style={bodyP}>
        The surprisingly powerful part of DCP is not only what a component claims to do. It is what it explicitly
        refuses to own.
      </p>
      <blockquote style={quoteWrap}>
        <p style={quoteText}>A component that says &#8220;I can do everything&#8221; is not powerful; it is dangerous.</p>
      </blockquote>
      <p style={bodyP}>
        Refusal is how a component becomes trustworthy. A component that says &#8220;I own identity verification, but
        I do not own authorization decisions; those belong to a policy engine&#8221; gives the system a boundary it
        can reason about.
      </p>
      <p style={bodyP}>
        This matters because most failures in large systems are not caused by lack of capability. They are caused by
        confused ownership. Who owns the decision? Who owns the state? Who owns the failure? Who is allowed to
        remediate it? DCP makes those questions first-class.
      </p>
      <p style={bodyP}>
        For AI agents, this is even more important. Agents are very good at stitching fragments together. Without
        boundaries, that stitching becomes improvisation. DCP is a way to make the stitching accountable.
      </p>

      <h2 style={h2Style}>Composition is not runtime improvisation</h2>
      <p style={bodyP}>
        Once components have claims, DCP does not jump directly into execution. It introduces a second step:
        negotiation.
      </p>
      <p style={bodyP}>
        Negotiation is the act of taking two claims, plus context, and deciding whether and how they compose. Does
        one component need something the other offers? Are their versions compatible? Is there an exclusive
        ownership conflict? Does a refused concern point to another component that must be added? Are the right
        credentials, telemetry, audit, and failure responsibilities present?
      </p>
      <p style={bodyP}>
        The output of negotiation is not a prompt. It is not an opinion. It is a frozen composition contract.
      </p>
      <p style={bodyP}>
        That contract states the parties, the binding between consumer need and provider capability, data mappings,
        transport, expectations, provenance, version pins, trust tier, and invalidation behavior. Once produced, it
        travels with the deployment and becomes the canonical execution artifact.
      </p>
      <p style={bodyP}>
        This is the key safety move. Intelligence can help assemble the system, but runtime should not reinterpret
        the system on every call.
      </p>
      <div style={calloutBox}>
        <p style={calloutLabel}>Design posture</p>
        <p style={calloutBody}>
          DCP uses intelligence where judgment is useful — during description and negotiation — and keeps invocation
          deterministic where speed, auditability, and residency matter.
        </p>
      </div>

      <h2 style={h2Style}>The three planes of DCP</h2>
      <p style={bodyP}>DCP separates the lifecycle into three planes.</p>

      <figure style={{ margin: '36px 0', padding: 0 }}>
        <div style={{ border: '1px solid #e5e2da', background: '#fff', borderRadius: 3, padding: '28px 22px' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))',
              gap: 12,
              alignItems: 'stretch',
            }}
          >
            <PlaneCard n="Plane 1" title="Description" body="A component publishes a claim. This should be cheap, cacheable, and stable per version." emphasized={false} />
            <PlaneCard n="Plane 2" title="Negotiation" body="Claims and context are evaluated to produce a frozen composition contract. This is the only plane where intelligence should be needed." emphasized />
            <PlaneCard n="Plane 3" title="Invocation" body="Components call one another against the frozen contract. This is the hot path, so it must be fast, deterministic, and free from runtime reasoning." emphasized={false} />
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              marginTop: 18,
              paddingTop: 16,
              borderTop: '1px solid #efece4',
            }}
          >
            <span style={{ font: "400 11px/1 'IBM Plex Mono',monospace", color: '#8a877f' }}>design time</span>
            <span style={{ flex: 1, height: 1, background: '#ddd9ce' }} />
            <span style={{ font: "400 11px/1 'IBM Plex Mono',monospace", color: '#8a877f' }}>runtime</span>
          </div>
        </div>
        {showAlt && (
          <figcaption style={{ font: "400 13px/1.6 'IBM Plex Sans',sans-serif", color: '#6f6c62', margin: '12px 0 0' }}>
            Figure 2. DCP separates description, negotiation, and invocation so intelligence does not sit in the hot
            path.
          </figcaption>
        )}
      </figure>

      <p style={bodyP}>
        This separation prevents a common AI architecture mistake: putting the reasoning layer into the path of
        every request. If every operation requires an agent to rethink the contract, the system becomes slow, hard
        to audit, and difficult to deploy inside customer boundaries.
      </p>

      <h2 style={h2Style}>A concrete example: the smart room</h2>
      <p style={bodyP}>
        Consider a connected room: air-conditioner, curtains, access control, occupancy sensor, lighting, energy
        policy, and a human operator. In today&#8217;s world, each device may expose an API, and some may even be
        marketed as smart. But the room as a whole is rarely intelligent in a compositional sense.
      </p>
      <p style={bodyP}>An AI agent can turn on the AC. That is useful, but it is not the big picture.</p>
      <p style={bodyP}>
        The bigger question is: should it turn on the AC? At what temperature? For which occupant? Under which
        energy policy? With what safety constraints? What happens if the occupancy sensor is degraded? What if the
        curtain system can reduce heat load more efficiently than the AC? What if access control says the person is
        a visitor and building policy forbids changing room settings?
      </p>
      <p style={bodyP}>
        Those questions cannot be answered by a command interface alone. They require each component to declare its
        domain and boundaries.
      </p>
      <p style={bodyP}>
        In a DCP-style world, the AC does not merely say &#8220;set_temperature is available.&#8221; It says: I own
        thermal comfort execution for this room, I can cool or heat within these limits, I depend on electricity and
        a room sensor, I expose temperature-setting and status capabilities, I refuse access-control decisions, I
        refuse energy-budget authority, and I emit these faults when compressor, sensor, or policy constraints block
        operation. Now the AI agent is no longer guessing. It is composing against declared claims.
      </p>
      {showAlt && (
        <p style={{ font: "400 13px/1.6 'IBM Plex Sans',sans-serif", color: '#6f6c62', margin: '0 0 32px' }}>
          Figure 3. A smart room becomes governable when each participant carries a self-description and composes
          through frozen contracts.
        </p>
      )}

      <h2 style={h2Style}>DCP, APIs, and MCP: different altitudes</h2>
      <p style={bodyP}>DCP is easiest to misunderstand if it is placed at the wrong altitude.</p>
      <p style={bodyP}>
        An API answers: how can software call this capability? It describes endpoints, functions, events, schemas,
        or SDK methods.
      </p>
      <p style={bodyP}>
        MCP answers: how can an LLM invoke this tool at runtime? It is valuable because it gives models a practical
        tool interface.
      </p>
      <p style={bodyP}>
        DCP answers a different question: should this component compose with that component, under what ownership
        boundaries, with which dependency satisfaction, through which contract, and with what runtime binding?
      </p>
      <p style={bodyP}>
        That is why DCP is complementary to MCP. A component may expose runtime tools through MCP and still carry a
        DCP claim for design-time composition. MCP is about invocation in the moment. DCP is about assembly before
        the moment.
      </p>
      {showAlt && (
        <p style={{ font: "400 13px/1.6 'IBM Plex Sans',sans-serif", color: '#6f6c62', margin: '0 0 32px' }}>
          Figure 4. DCP governs assembly; MCP and APIs expose runtime invocation surfaces.
        </p>
      )}

      <h2 style={h2Style}>What changes for software engineers</h2>
      <p style={bodyP}>
        This brings us back to the software-development panic from Part 2. If AI can generate more code and stitch
        more tools together, what remains for engineers?
      </p>
      <p style={bodyP}>
        DCP suggests a very different answer from the usual fear narrative. The work does not disappear; it moves to
        a higher baseline.
      </p>
      <p style={bodyP}>
        Engineers will increasingly design capability boundaries, not only capability implementations. They will
        specify claims, refusals, dependency models, compatibility rules, fault propagation, trust policies,
        versioning behavior, runtime bindings, and validation pipelines.
      </p>
      <p style={bodyP}>
        This is not less engineering. It is more architectural engineering. It is the difference between building
        individual parts and making sure many independently built parts can become a safe system. The craftsmanship
        shifts from &#8220;can I create this component?&#8221; to &#8220;can this component describe itself well
        enough to be discovered, selected, validated, bound, audited, and operated by others?&#8221;
      </p>
      <div style={tableWrap}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={th}>Old baseline</th>
              <th style={th}>AI-native baseline</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>Write the component</td>
              <td style={{ ...td, color: '#5c594f' }}>Define the component and its claim</td>
            </tr>
            <tr>
              <td style={td}>Document the API</td>
              <td style={{ ...td, color: '#5c594f' }}>Declare domain, offers, dependencies, and refusals</td>
            </tr>
            <tr>
              <td style={td}>Manually wire integrations</td>
              <td style={{ ...td, color: '#5c594f' }}>Validate and bind capabilities through contracts</td>
            </tr>
            <tr>
              <td style={td}>Debug failures from logs</td>
              <td style={{ ...td, color: '#5c594f' }}>Propagate typed faults with declared blast radius</td>
            </tr>
            <tr>
              <td style={td}>Treat docs as external prose</td>
              <td style={{ ...td, color: '#5c594f' }}>Generate docs from accepted, bound capabilities</td>
            </tr>
            <tr>
              <td style={tdLast}>Runtime improvisation by agents</td>
              <td style={{ ...tdLast, color: '#5c594f' }}>Design-time negotiation, runtime execution</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 style={h2Style}>What DCP changes in an interconnected world</h2>
      <p style={bodyP}>
        DCP changes the default assumption from hidden integration to declared composition.
      </p>
      <p style={bodyP}>
        In a DCP-oriented system, a component is not merely something that can be called. It is something that can
        be understood at the boundary. It carries a domain, owns decisions, refuses non-owned responsibilities,
        exposes versioned capabilities, declares dependencies, identifies conflicts, and emits meaningful faults.
      </p>
      <p style={bodyP}>
        That shift is what makes the interconnected world realistic. Doors, windows, curtains, ACs, policy engines,
        identity providers, workflow systems, storage systems, and AI services do not become governable merely
        because they have APIs. They become governable when they can participate in a shared composition language.
      </p>
      <p style={bodyP}>
        The most important result is not automation. The most important result is accountability. When something
        composes, we can ask why. When it refuses, we can ask what should own the concern instead. When it fails, we
        can trace what was affected. When it changes version, we can invalidate the right contract. When policy
        differs by tenant, environment, or region, we can resolve a different valid composition without rewriting
        application code.
      </p>

      <h2 style={h2Style}>Closing: from invention to discipline</h2>
      <p style={bodyP}>
        The first age of software rewarded the ability to create programs. The cloud age rewarded the ability to
        operate services. The API age rewarded the ability to expose capabilities. The AI-native age will reward the
        ability to make capabilities self-describing, composable, governable, and safe.
      </p>
      <p style={bodyP}>That is the role DCP is meant to play.</p>
      <p style={bodyP}>
        It is not another wrapper around a tool. It is not a runtime trick. It is not asking every device to become
        intelligent in the theatrical sense. It is asking every meaningful capability to carry enough structured
        self-knowledge that intelligence can compose it without guessing.
      </p>
      <p style={bodyP}>
        In that sense, DCP is the missing harness made concrete: a capability contract for an AI-native world.
      </p>
    </>
  )
}

function PlaneCard({ n, title, body, emphasized }: { n: string; title: string; body: string; emphasized: boolean }) {
  return (
    <div
      style={{
        border: emphasized ? '1px solid #1c1b19' : '1px solid #ddd9ce',
        borderRadius: 3,
        padding: '14px 12px',
        background: emphasized ? '#f4f2ec' : '#faf9f5',
      }}
    >
      <p
        style={{
          font: "500 10px/1 'IBM Plex Mono',monospace",
          letterSpacing: '.1em',
          textTransform: 'uppercase',
          color: '#8a877f',
          margin: '0 0 8px',
        }}
      >
        {n}
      </p>
      <p style={{ font: "500 14px/1.3 'IBM Plex Sans',sans-serif", color: '#1c1b19', margin: '0 0 6px' }}>{title}</p>
      <p style={{ font: "400 12px/1.5 'IBM Plex Sans',sans-serif", color: '#6f6c62', margin: 0 }}>{body}</p>
    </div>
  )
}
