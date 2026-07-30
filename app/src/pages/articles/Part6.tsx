import { bodyP, h2Style, calloutBox, calloutLabel, calloutBody, quoteWrap, quoteText, tableWrap, th, td, tdLast } from './shared'

// DCP Journey Part 6 — "Aggregation Is Abstraction" body copy, ported
// verbatim in full, including the semantic-zoom figure, the house
// abstraction-levels table, and the aggregation design-principles table.
export default function Part6({ showAlt }: { showAlt: boolean }) {
  const zoomCard = (label: string, body: string, emphasized: boolean) => (
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
        {label}
      </p>
      <p style={{ font: "400 12px/1.5 'IBM Plex Sans',sans-serif", color: '#6f6c62', margin: 0 }}>{body}</p>
    </div>
  )

  return (
    <>
      <div style={calloutBox}>
        <p style={calloutLabel}>Executive summary</p>
        <p style={calloutBody}>
          In Part 5, we introduced the human harness: the visual and interactive layer that lets people inspect,
          review, and govern what AI and DCP assemble. That harness only works if it can show the right level of
          detail at the right time. Part 6 argues that aggregation is the scaling principle that makes this possible
          &#8212; from a single component up through houses, colonies, and cities.
        </p>
      </div>

      <p style={bodyP}>
        A user should not be forced to inspect every sensor, tap, geyser, AC mode, identity provider, storage
        connector, and runtime binding just to understand whether a house, colony, workflow, or city is healthy
        enough to reason about. An aggregate is not merely a bag of child components. A house is not just AC plus
        geyser plus taps plus doors plus curtains. At the level of the house, it exposes higher-level capabilities:
        comfort, security, energy posture, water readiness, automation level. The underlying components remain
        there, but they are not the first thing every agent or human needs to see.
      </p>
      <p style={bodyP}>
        This is why aggregation matters for AI-native systems. Intelligence cannot reason over every leaf node all
        the time. It needs semantic zoom, just like a map. Zoomed out, a map shows continents, cities, roads, and
        neighborhoods. Zoomed in, it shows lanes, buildings, entrances, and points of interest. DCP aggregation
        applies the same idea to capabilities.
      </p>
      <div style={calloutBox}>
        <p style={calloutLabel}>Source note</p>
        <p style={calloutBody}>
          The source documents ground this framing in DCP containment and recursive projection: DCP projection walks
          claim graphs through CONTAINS relationships and exposes depth, parent links, offers, edges, and
          deterministic ordering; nesting appears only when claims declare containment metadata.
        </p>
      </div>

      <h2 style={h2Style}>From the human harness to semantic zoom</h2>
      <p style={bodyP}>
        The previous essay introduced the human harness: the layer through which people can understand and govern
        AI-created assemblies. We looked at fields like shape, fallback form, visual ports, connector shapes, and
        interaction handles. Those fields are not decorative. They exist because DCP is not only meant to be read by
        AI. It is also meant to be projected into a human interface.
      </p>
      <p style={bodyP}>But once we accept that, a deeper question appears. What should the human actually see?</p>
      <p style={bodyP}>
        A raw DCP universe can become enormous. A smart home may contain climate devices, entry systems, water
        systems, sensors, lighting, appliances, identity policies, telemetry, storage, and AI assistants. A colony may
        contain hundreds of such homes, plus shared infrastructure. A city may contain colonies, public systems,
        transit, hospitals, energy grids, and emergency services. Showing everything at once is not transparency. It
        is noise with a nicer font.
      </p>
      <p style={bodyP}>So the next problem is not only visualization. The next problem is aggregation.</p>

      <h2 style={h2Style}>Aggregation is not compilation</h2>
      <p style={bodyP}>
        It is tempting to define aggregation as a compiled list of child capabilities. A house contains an AC, a
        geyser, a few automatic taps, smart curtains, door locks, windows, lights, sensors, and maybe a small local
        AI. Therefore, the house aggregate is simply the union of those capabilities.
      </p>
      <p style={bodyP}>That definition is technically convenient and conceptually weak.</p>
      <p style={bodyP}>
        A house does not become useful to an AI because the AI can see ten thousand tiny capabilities. It becomes
        useful because those capabilities can be summarized into the few higher-level meanings that matter at the
        house level. Is the house climate-controllable? Is water available? Is entry secure? Is it safe to leave
        unattended? Is automation partial or complete? Can it coordinate with the colony during peak energy hours?
      </p>
      <blockquote style={quoteWrap}>
        <p style={quoteText}>
          Aggregation is not the act of piling capabilities together. It is the act of giving a collection a new,
          meaningful surface.
        </p>
      </blockquote>
      <p style={bodyP}>
        The aggregate must expose a new surface. It should hide internal complexity by default, but preserve
        drill-down when a decision requires it. That is the difference between a pile and a system.
      </p>

      <h2 style={h2Style}>The map analogy</h2>
      <p style={bodyP}>
        A map does not show every house, window, tap, switch, cable, and pipe when you are looking at a city. At the
        city level, it shows city-level meaning. At the neighborhood level, it shows neighborhoods. At the street
        level, it shows streets, buildings, entrances, and traffic. The details have not disappeared. They are
        simply not projected at the wrong level.
      </p>
      <p style={bodyP}>
        AI-native systems need the same discipline. A city-level agent should not reason directly over every geyser
        in every house. It should reason over abstractions like water demand, energy flexibility, automation
        coverage, infrastructure risk, and service availability. A house-level agent can then reason over rooms and
        devices. A device-level agent can reason over modes, thresholds, faults, and dependencies.
      </p>
      <p style={bodyP}>
        Aggregation is the protocol-level foundation for that zoom behavior. It gives every level a claim of its own.
      </p>
      <figure style={{ margin: '36px 0', padding: 0 }}>
        <div style={{ border: '1px solid #e5e2da', background: '#fff', borderRadius: 3, padding: '26px 22px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(140px,1fr))', gap: 12 }}>
            {zoomCard('City', 'Smart coverage, infrastructure readiness, risk concentration', false)}
            {zoomCard('Colony', 'Shared utilities, energy coordination, emergency readiness', false)}
            {zoomCard('House', 'Comfort, water readiness, energy posture, security state', true)}
            {zoomCard('Component', 'Ports, dependencies, refusals, faults, bindings', false)}
          </div>
        </div>
        {showAlt && (
          <figcaption style={{ font: "400 13px/1.6 'IBM Plex Sans',sans-serif", color: '#6f6c62', margin: '12px 0 0' }}>
            Figure 1. Semantic zoom: each level exposes different meaning, not just more or fewer objects. The same
            source of truth produces different projections at different levels.
          </figcaption>
        )}
      </figure>

      <h2 style={h2Style}>A house is an aggregate, not a folder</h2>
      <p style={bodyP}>
        Consider a house. It may contain an AI-enabled air conditioner, automatic taps, an automatic geyser, smart
        windows, curtains, doors, motion sensors, occupancy sensors, energy meters, solar inputs, and perhaps a local
        home assistant. Each component has detailed capabilities and constraints.
      </p>
      <p style={bodyP}>
        At the house level, the aggregate should not flatten all of that into one giant capability spreadsheet. It
        should expose house-level capabilities such as comfort management, water readiness, energy posture, security
        state, privacy boundary, and automation coverage.
      </p>
      <p style={bodyP}>
        The AC still has its own detailed claim. The geyser still has its own safety limits. The tap still has its
        own flow and leak behavior. But the house aggregate provides a more useful surface for most decisions. A
        human can ask: is this house fully automated, mostly automated, or partially automated? An AI can ask: can
        this house reduce energy demand for the next hour without violating comfort or safety?
      </p>
      <p style={bodyP}>That is aggregation doing real work.</p>

      <h2 style={h2Style}>Example: abstraction levels for a house</h2>
      <div style={tableWrap}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={th}>Level</th>
              <th style={th}>What it exposes</th>
              <th style={th}>What it hides by default</th>
              <th style={th}>When to drill down</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ ...td, font: "500 13px/1.5 'IBM Plex Mono',monospace", color: '#1c1b19' }}>Fully automated house</td>
              <td style={{ ...td, color: '#5c594f' }}>Comfort, security, water, energy, automation policy</td>
              <td style={{ ...td, color: '#5c594f' }}>Individual device modes and sensor chatter</td>
              <td style={{ ...td, color: '#5c594f' }}>Fault, override, audit, or optimization decision</td>
            </tr>
            <tr>
              <td style={{ ...td, font: "500 13px/1.5 'IBM Plex Mono',monospace", color: '#1c1b19' }}>Mostly automated house</td>
              <td style={{ ...td, color: '#5c594f' }}>Automated zones plus manual dependencies</td>
              <td style={{ ...td, color: '#5c594f' }}>Partial manual controls and device details</td>
              <td style={{ ...td, color: '#5c594f' }}>When an automation request touches a manual boundary</td>
            </tr>
            <tr>
              <td style={{ ...td, font: "500 13px/1.5 'IBM Plex Mono',monospace", color: '#1c1b19' }}>Partially automated house</td>
              <td style={{ ...td, color: '#5c594f' }}>Limited smart capabilities and unsupported areas</td>
              <td style={{ ...td, color: '#5c594f' }}>Non-addressable devices</td>
              <td style={{ ...td, color: '#5c594f' }}>When a capability is missing or needs human action</td>
            </tr>
            <tr>
              <td style={{ ...tdLast, font: "500 13px/1.5 'IBM Plex Mono',monospace", color: '#1c1b19' }}>Manual house</td>
              <td style={{ ...tdLast, color: '#5c594f' }}>Known boundaries and human-owned decisions</td>
              <td style={{ ...tdLast, color: '#5c594f' }}>Device-level automation because it does not exist</td>
              <td style={{ ...tdLast, color: '#5c594f' }}>When onboarding or upgrading components</td>
            </tr>
          </tbody>
        </table>
      </div>
      {showAlt && (
        <p style={{ font: "400 13px/1.6 'IBM Plex Sans',sans-serif", color: '#6f6c62', margin: '0 0 32px' }}>
          Figure 2. An aggregate claim exposes a higher-level surface while keeping children inspectable.
        </p>
      )}

      <h2 style={h2Style}>From houses to colonies to cities</h2>
      <p style={bodyP}>
        Once the house becomes an aggregate, the next level becomes possible. A colony is not just a list of houses.
        It is a new abstraction that can expose shared utilities, entry and visitor flow, maintenance posture, energy
        coordination, water availability, waste management, and emergency readiness.
      </p>
      <p style={bodyP}>
        A colony might know that 30 percent of its homes are fully automated, 50 percent are partially automated, and
        20 percent are mostly manual. That is not a trivial statistic. It changes what an AI can coordinate. During
        peak demand, fully automated homes may be able to participate in load shaping. Manual homes may require
        human notification. Partially automated homes may need narrower control.
      </p>

      <h2 style={h2Style}>At the city level</h2>
      <p style={bodyP}>
        The same pattern repeats. A city is not a dumping ground for every house-level claim. It is an aggregate that
        exposes city-scale meaning: smart coverage, infrastructure readiness, risk concentration, service
        reachability, and coordination boundaries.
      </p>
      <p style={bodyP}>
        Terms like fully smart city, partially smart city, or assisted city should not be marketing labels. They
        should become meaningful abstractions grounded in lower-level claims. What percentage of the city can be
        addressed by AI? Which capabilities are automated? Which remain human-led? Which systems expose DCP claims?
        Which are still opaque?
      </p>
      <p style={bodyP}>A mature aggregation model lets those labels become inspectable, not decorative.</p>

      <h2 style={h2Style}>How DCP supports aggregation</h2>
      <p style={bodyP}>
        At the protocol level, aggregation should not be treated as a UI trick. The containment relationship must be
        part of the DCP model. An aggregate claim should be able to say: I contain these child claims. A projection
        tool should be able to walk that graph recursively. A human harness should be able to show the graph as a
        semantic zoom navigator. An AI should be able to reason at the right depth.
      </p>
      <p style={bodyP}>
        This matters because nested assemblies are not always clean hierarchies. A city may contain colonies, but a
        workflow may contain nodes, a node may invoke an agent, an agent may contain phases, and a phase may
        reference tools, prompts, RAG sources, skills, and models. Aggregation is not only for physical systems. It
        is also for software and AI systems.
      </p>

      <h2 style={h2Style}>Containment is different from compatibility</h2>
      <p style={bodyP}>
        One important distinction: containment is not the same as compatibility. A child is inside an aggregate
        because the aggregate contains it. A replacement candidate is compatible because it can satisfy a role. Those
        are different relationships, and they should not be blurred.
      </p>
      <p style={bodyP}>
        This distinction is subtle, but it prevents a lot of confusion. A colony contains houses. That does not mean
        every house is a replacement for every other house. A Foundry agent contains phases and tools. That does not
        mean every tool is a compatible replacement for every other tool. The containment graph tells us what exists
        inside. The compatibility graph tells us what can replace or connect.
      </p>
      <div style={calloutBox}>
        <p style={calloutLabel}>Source note</p>
        <p style={calloutBody}>
          The recursive projection build spec separates containment from replacement compatibility: compatible
          descendants must not be populated from descendant claim URIs because descendant claim URIs represent
          containment.
        </p>
      </div>
      {showAlt && (
        <p style={{ font: "400 13px/1.6 'IBM Plex Sans',sans-serif", color: '#6f6c62', margin: '0 0 32px' }}>
          Figure 3. Aggregation should travel through claim trees, contract trees, and runtime binding trees.
        </p>
      )}

      <h2 style={h2Style}>Aggregate contracts and runtime bindings</h2>
      <p style={bodyP}>
        The same idea should continue after design-time description. A deployable multi-component assembly should not
        exist only as private planner metadata. If the assembly is an aggregate, its contracts should preserve that
        structure. A parent contract can reference child contracts; each child remains a normal contract with its own
        parties, binding, transport, expectations, provenance, trust, and invalidation rules.
      </p>
      <p style={bodyP}>
        Runtime bindings should follow the same principle. A parent runtime binding can reference child runtime
        bindings. Each child binding still pins its own contract and environment-specific wiring. That gives us a
        runtime structure that can be observed, audited, explained, and regenerated without inventing a parallel
        wiring format.
      </p>

      <h2 style={h2Style}>Why this changes engineering work</h2>
      <p style={bodyP}>
        In Part 2, we argued that the software baseline is shifting from writing isolated components to assembling
        and governing systems. Aggregation is where that shift becomes concrete. Engineers will still build
        components, but the higher-value work moves toward defining clean aggregate surfaces, stable boundaries,
        meaningful summaries, and safe drill-down paths.
      </p>
      <p style={bodyP}>
        This is not just architecture. It is product thinking. What should a house claim about itself? What should a
        colony expose? What should a workflow hide until inspection? What should a user see first? What should an AI
        reason about by default? These become design questions, not merely implementation details.
      </p>

      <h2 style={h2Style}>Why this changes the human harness</h2>
      <p style={bodyP}>
        For Unfurl Studio, aggregation means the UI should not be a static diagram. It should be a semantic zoom
        surface. A user should be able to start from a city, zoom into a colony, then into a house, then into a room,
        then into a component. At each level, the UI should change vocabulary, not only scale the picture.
      </p>
      <p style={bodyP}>
        At the city level, the UI might show automation coverage and infrastructure readiness. At the house level, it
        might show comfort, water, energy, and security. At the device level, it might show ports, dependencies,
        refusals, faults, and bindings. The same source of truth produces different projections at different levels.
      </p>

      <h2 style={h2Style}>Design principles for aggregation</h2>
      <div style={tableWrap}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={th}>Principle</th>
              <th style={th}>Meaning</th>
              <th style={th}>Failure mode it prevents</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ ...td, font: "500 13px/1.5 'IBM Plex Mono',monospace", color: '#1c1b19' }}>Expose a new surface</td>
              <td style={{ ...td, color: '#5c594f' }}>The aggregate must claim higher-level meaning, not only union child capabilities.</td>
              <td style={{ ...td, color: '#5c594f' }}>Capability sprawl</td>
            </tr>
            <tr>
              <td style={{ ...td, font: "500 13px/1.5 'IBM Plex Mono',monospace", color: '#1c1b19' }}>Preserve drill-down</td>
              <td style={{ ...td, color: '#5c594f' }}>Details remain reachable when faults, audits, or decisions require them.</td>
              <td style={{ ...td, color: '#5c594f' }}>Opaque black boxes</td>
            </tr>
            <tr>
              <td style={{ ...td, font: "500 13px/1.5 'IBM Plex Mono',monospace", color: '#1c1b19' }}>Separate containment from compatibility</td>
              <td style={{ ...td, color: '#5c594f' }}>Contained children are not automatically replacements.</td>
              <td style={{ ...td, color: '#5c594f' }}>Bad substitutions</td>
            </tr>
            <tr>
              <td style={{ ...td, font: "500 13px/1.5 'IBM Plex Mono',monospace", color: '#1c1b19' }}>Carry aggregation through runtime</td>
              <td style={{ ...td, color: '#5c594f' }}>Claims, contracts, and bindings should all preserve aggregate structure.</td>
              <td style={{ ...td, color: '#5c594f' }}>Hidden planner metadata</td>
            </tr>
            <tr>
              <td style={{ ...tdLast, font: "500 13px/1.5 'IBM Plex Mono',monospace", color: '#1c1b19' }}>Use semantic zoom</td>
              <td style={{ ...tdLast, color: '#5c594f' }}>Each level should use its own vocabulary and metrics.</td>
              <td style={{ ...tdLast, color: '#5c594f' }}>One giant diagram</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 style={h2Style}>The real promise</h2>
      <p style={bodyP}>
        The real promise of aggregation is that AI can operate at many scales without drowning in detail. A
        city-level agent can coordinate with colony-level aggregates. A colony-level agent can coordinate with
        house-level aggregates. A house-level agent can coordinate with room and device aggregates. Humans can enter
        the same model through Unfurl Studio and choose the right level of inspection.
      </p>
      <p style={bodyP}>
        This is how an interconnected world remains understandable. Not by showing everything. Not by hiding
        everything. By exposing the right abstraction at the right level, while preserving the ability to zoom in
        when truth demands it.
      </p>

      <h2 style={h2Style}>Bridge to Part 7</h2>
      <p style={bodyP}>
        Aggregation also sets up the next problem: runtime life. Once an assembly is created and loaded, how do
        humans observe it? How do they see which component is unhealthy? How does a fault propagate from a device to
        a house, from a house to a colony, or from a workflow node to an agent? How do we test scale by increasing
        users, sessions, traffic, or load from the same human harness?
      </p>
      <p style={bodyP}>
        That is where Part 7 goes next: from designing assemblies to observing living systems.
      </p>
      <blockquote style={quoteWrap}>
        <p style={quoteText}>
          Without aggregation, intelligence drowns in detail. With aggregation, intelligence can reason at the right
          scale.
        </p>
      </blockquote>
    </>
  )
}
