import { bodyP, h2Style, calloutBox, calloutLabel, calloutBody, quoteWrap, quoteText, tableWrap, th, td, tdLast } from './shared'

// DCP Journey Part 7 — "The Living Assembly" body copy, ported verbatim in
// full, including the runtime-layer table and the city-to-component
// drill-down example.
export default function Part7() {
  return (
    <>
      <div style={calloutBox}>
        <p style={calloutLabel}>Executive summary</p>
        <p style={calloutBody}>
          Part 6 introduced aggregation as abstraction. Part 7 moves from design-time assembly to runtime life. Once
          an assembly is created, loaded, and bound to a real environment, the human harness must remain useful. It
          should not become a pretty design tool that disappears when the system starts running. It should become
          the operator surface for loading, monitoring, stress testing, tracing, auditing, and evolving the assembly.
        </p>
      </div>
      <p style={bodyP}>
        The key idea is simple: monitoring should be projected onto the assembly humans understand. Logs, metrics,
        traces, and dashboards are necessary, but they are not enough. A DCP-grounded system knows the claims,
        contracts, runtime bindings, faults, dependencies, and aggregation levels that give those signals meaning.
        The human harness can therefore show not only that something failed, but what capability is affected, what
        parent claim is impacted, what contract is involved, what remediation is allowed, and where a human decision
        is required.
      </p>

      <h2 style={h2Style}>The bridge from aggregation to operations</h2>
      <p style={bodyP}>
        In Part 6, we said that aggregation is not a pile of components. It is an abstraction layer. A smart house is
        not just an air conditioner, geyser, lights, curtains, sensors, doors, and software controllers thrown into
        one diagram. A smart house is a higher-level component with its own claims: what it can do, what it depends
        on, what it refuses to own, how healthy it is, and what level of automation it can safely expose.
      </p>
      <p style={bodyP}>
        That abstraction is useful at design time because it keeps humans and AI from drowning in detail. But the
        same abstraction is even more valuable at runtime. Once the assembly is loaded, something will eventually
        degrade. A provider will slow down. A sensor will stop reporting. A policy will deny an action. A component
        will become expensive under load. A contract assumption will be violated.
      </p>
      <p style={bodyP}>
        When that happens, the human should not have to start from a thousand raw logs. The human should start from
        the living assembly.
      </p>
      <p style={bodyP}>
        The question for Part 7 is: after DCP helps us describe, compose, and aggregate a system, how do humans
        understand that system while it is running? This is where the human harness becomes operational. It is no
        longer only a way to assemble components. It becomes the window through which humans load assemblies, watch
        them breathe, test their limits, trace their failures, and decide how they should evolve.
      </p>

      <h2 style={h2Style}>Loading an assembly is not just deployment</h2>
      <p style={bodyP}>
        A traditional deployment asks a narrow question: can we put this software somewhere and start it? An
        AI-native assembly asks a richer question: can we load this signed composition into a real environment
        without losing the meaning of the contract?
      </p>
      <p style={bodyP}>
        The assembly has a signed contract. It has runtime bindings. It has dependencies on named providers such as
        storage, identity, telemetry, audit sinks, connectors, model providers, state stores, or work queues. It has
        policies. It has version pins. It has trust assumptions. It may have child contracts and child runtime
        bindings below it.
      </p>
      <p style={bodyP}>
        So loading an assembly should mean more than starting containers or invoking scripts. It should mean
        projecting a frozen design-time agreement into a live environment while preserving the semantic relationship
        between each component and the resources it uses.
      </p>
      <p style={{ ...bodyP, margin: '0 0 16px' }}>
        <strong>Runtime layers loaded with an assembly:</strong>
      </p>
      <div style={tableWrap}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={th}>Runtime layer</th>
              <th style={th}>Question it answers</th>
              <th style={th}>Why the human harness needs it</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ ...td, font: "500 13px/1.5 'IBM Plex Mono',monospace", color: '#0f172a' }}>Composition contract</td>
              <td style={{ ...td, color: '#475569' }}>What is valid?</td>
              <td style={{ ...td, color: '#475569' }}>Shows the agreement the system is supposed to obey.</td>
            </tr>
            <tr>
              <td style={{ ...td, font: "500 13px/1.5 'IBM Plex Mono',monospace", color: '#0f172a' }}>Runtime binding</td>
              <td style={{ ...td, color: '#475569' }}>Where is it wired?</td>
              <td style={{ ...td, color: '#475569' }}>Shows the environment, provider instance, endpoint references, policy, telemetry namespace, and activation state.</td>
            </tr>
            <tr>
              <td style={{ ...td, font: "500 13px/1.5 'IBM Plex Mono',monospace", color: '#0f172a' }}>Substrate profile</td>
              <td style={{ ...td, color: '#475569' }}>What runtime surface is allowed?</td>
              <td style={{ ...td, color: '#475569' }}>Shows what support capabilities are required and which ports are intentionally active.</td>
            </tr>
            <tr>
              <td style={{ ...td, font: "500 13px/1.5 'IBM Plex Mono',monospace", color: '#0f172a' }}>Fault vocabulary</td>
              <td style={{ ...td, color: '#475569' }}>What failures are meaningful?</td>
              <td style={{ ...td, color: '#475569' }}>Shows which signals are declared, what they affect, and when they propagate upward.</td>
            </tr>
            <tr>
              <td style={{ ...tdLast, font: "500 13px/1.5 'IBM Plex Mono',monospace", color: '#0f172a' }}>Audit and provenance</td>
              <td style={{ ...tdLast, color: '#475569' }}>Why is this running?</td>
              <td style={{ ...tdLast, color: '#475569' }}>Shows who compiled, signed, loaded, changed, or approved the assembly.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p style={bodyP}>This is the first shift Part 7 makes: loading is not merely operational mechanics. Loading is contract hydration.</p>

      <h2 style={h2Style}>Observability should follow the assembly, not the log stream</h2>
      <p style={bodyP}>
        Today, observability is often split across many surfaces. Logs sit in one system. Metrics sit in another.
        Traces sit somewhere else. Cloud health has its own dashboard. Security events have their own console.
        Product analytics tell a different story again.
      </p>
      <p style={bodyP}>
        All of those signals are useful, but they force the operator to reconstruct meaning after the fact. The
        operator has to ask: which user action triggered this? Which component owns the failing capability? Which
        dependency was involved? Is this a local failure, a parent-level degradation, or simply an expected refusal?
      </p>
      <p style={bodyP}>
        A DCP-grounded human harness can invert that experience. It can begin with the assembly graph and attach
        operational evidence to the claims, offers, dependencies, contracts, runtime bindings, and faults that
        already exist. Instead of asking humans to read every signal and infer the system, the harness can show the
        system and place the signals where they belong.
      </p>
      <p style={bodyP}>This does not replace logging or telemetry. It gives them a semantic home.</p>

      <h2 style={h2Style}>Faults as semantic events</h2>
      <p style={bodyP}>
        This is one of the most important ideas in the runtime story: a failure is not automatically a fault.
      </p>
      <p style={bodyP}>
        A log line might say that an API timed out. A metric might show that latency rose. A trace might show that a
        dependency call exceeded a threshold. But DCP asks a more structured question: is this a declared fault? What
        capability does it affect? Does it impact a parent claim? What evidence justifies it? What remediation is
        allowed?
      </p>
      <p style={bodyP}>
        That distinction matters because runtime systems need restraint. A child component failure should not
        automatically become a city-level incident. A temporary sensor blip should not automatically disable a
        house. A refused action should not be treated as a bug if the component explicitly refuses ownership of that
        concern.
      </p>
      <p style={bodyP}>
        In a DCP-shaped runtime view, faults become typed operational events. They carry a code, category, severity,
        affected needs, affected offers, evidence references, correlation identifiers, and propagation rules. The
        parent does not guess. The propagation gate decides whether the signal should be suppressed, propagated, or
        rejected as undeclared.
      </p>
      <p style={bodyP}>
        That is what makes the fault visible to both humans and machines without pushing reasoning into the hot
        path.
      </p>

      <h2 style={h2Style}>Drill-down: from city signal to component cause</h2>
      <p style={bodyP}>
        Imagine a city-level dashboard showing that climate comfort is degraded in one zone. In today&#8217;s
        tooling, that alert might be the beginning of a hunt: logs, device IDs, building management dashboards,
        tenant complaints, vendor consoles, ticket histories, and raw telemetry.
      </p>
      <p style={bodyP}>
        In a DCP-grounded human harness, the operator begins at the city-level claim. The city claim says which
        colony claim is affected. The colony claim says which house claim is degraded. The house claim says that the
        living area climate-control capability is affected. The room-level view says the meeting room cannot
        maintain the agreed temperature range. The component view shows that an AC adapter emitted a declared
        compressor-limit or power-policy fault.
      </p>
      <p style={bodyP}>
        The operator does not lose the big picture while drilling down. Each zoom step preserves the relationship
        between the aggregate and the child. That is the operational version of the Google Maps analogy from Part 6.
      </p>
      <p style={bodyP}>
        At city scale, the operator sees city-level impact. At colony scale, the operator sees grouped affected
        homes. At house scale, the operator sees affected capabilities. At room scale, the operator sees comfort,
        occupancy, and device context. At component scale, the operator sees the exact claim, contract, binding,
        fault signal, evidence, and allowed remediation.
      </p>
      <p style={bodyP}>
        The important thing is not the 3D view itself. The important thing is semantic continuity. The UI should let
        the human zoom without losing meaning.
      </p>

      <h2 style={h2Style}>The accelerator pedal for systems</h2>
      <p style={bodyP}>
        Runtime observation is not only about waiting for failures. A human harness should also let operators safely
        explore limits.
      </p>
      <p style={bodyP}>
        This is where the accelerator pedal idea becomes powerful. Instead of only reading static dashboards, the
        operator should be able to select stress parameters and watch how the assembly behaves. Increase users.
        Increase sessions. Increase requests per minute. Increase model calls. Increase sensor events. Tighten
        policies. Add regional constraints. Change cost limits. Then watch which capabilities degrade first, which
        faults propagate, which contracts hold, and which assumptions break.
      </p>
      <p style={bodyP}>
        This should not be a random load-testing widget bolted onto the side. It should be tied to the same assembly
        model. The operator is not merely applying generic traffic. The operator is applying scenario pressure to
        declared capabilities and observing how claims, contracts, bindings, and faults respond.
      </p>
      <p style={bodyP}>
        A house could be tested under peak morning load: geysers, taps, HVAC, kitchen appliances, doors, occupancy
        sensors, and energy policy. A colony could be tested under festival traffic, water pressure limits, shared
        security events, or power constraints. A city could be tested under emergency routing, energy demand, climate
        events, or citizen-service demand.
      </p>
      <p style={bodyP}>
        The result is not just a graph of CPU and memory. The result is an operational story: at this load, this
        capability degrades; this dependency saturates; this fault propagates to the parent; this remediation
        remains allowed; this human approval is required before the system can proceed.
      </p>

      <h2 style={h2Style}>Traceability, audit, and explainability</h2>
      <p style={bodyP}>
        Traceability becomes much stronger when the runtime view is attached to the assembly rather than floating
        beside it.
      </p>
      <p style={bodyP}>
        A human should be able to ask: what contract authorized this connection? Which runtime binding supplied this
        provider? Which version of the component was active? Which policy allowed or denied the action? Which fault
        propagated upward? Which human approved the replacement? Which evidence supports this incident?
      </p>
      <p style={bodyP}>
        This is why the human harness needs more than a visual graph. It needs audit panels, contract views, binding
        views, fault views, and evidence trails. It needs to show the living assembly as a sequence of decisions, not
        just a topology.
      </p>
      <p style={bodyP}>
        For developers, this changes debugging. Instead of starting from a stack trace and manually reconstructing
        the system boundary, they can begin from an affected capability, inspect the contract and binding, see the
        fault evidence, and then drill into the code or adapter responsible for that behavior.
      </p>
      <p style={bodyP}>
        For operators, this changes incident response. Instead of asking which dashboard to open, they can ask which
        capability is degraded and what the system already knows about the failure.
      </p>
      <p style={bodyP}>
        For auditors, this changes review. Instead of asking for screenshots and explanations after the fact, they
        can inspect the signed contract, runtime binding, provenance, decision audit, and fault evidence in one
        continuity of meaning.
      </p>

      <h2 style={h2Style}>Fixing, replacing, and evolving</h2>
      <p style={bodyP}>A living assembly must be allowed to evolve. But evolution must not become silent mutation.</p>
      <p style={bodyP}>
        If a component is replaced, the replacement should still satisfy the parent need. If a binding changes, the
        semantic contract should remain valid or be regenerated. If a claim version changes, the relevant contract
        should be reviewed or renegotiated. If a fault suggests remediation, the remediation should stay inside the
        claim boundary and host policy. If a human overrides the default path, the decision should be recorded.
      </p>
      <p style={bodyP}>This is the line between safe evolution and hidden drift.</p>
      <p style={bodyP}>
        The human harness can make this line visible. It can show safe replacements. It can show blocked
        replacements. It can explain why a component cannot be substituted. It can show which child contracts are
        affected by a parent change. It can require explicit operator approval where ambiguity remains. It can send a
        developer to the exact adapter, connector, or code path that produced the fault.
      </p>
      <p style={bodyP}>
        The goal is not to remove engineers from the loop. The goal is to give engineers a better loop: observe the
        affected capability, understand the contract, inspect the evidence, fix or replace the right component,
        revalidate the assembly, and load the next version without losing traceability.
      </p>

      <h2 style={h2Style}>What Part 7 adds to the series</h2>
      <p style={bodyP}>
        The first six parts moved from the missing harness, to the baseline shift, to DCP, to open discussion, to the
        human harness, to aggregation as abstraction. Part 7 adds the missing runtime half.
      </p>
      <p style={bodyP}>
        A system is not complete when it is described. It is not complete when it is assembled. It is not even
        complete when it is deployed. It becomes a usable intelligent system when humans can understand it while it
        runs.
      </p>
      <blockquote style={quoteWrap}>
        <p style={quoteText}>
          A system is not complete when it is described, assembled, or even deployed. It becomes a usable intelligent
          system when humans can understand it while it runs.
        </p>
      </blockquote>
      <p style={bodyP}>
        That is the deeper promise of the human harness: not a prettier dashboard, but a semantic operating surface.
      </p>
      <p style={bodyP}>
        It lets humans see assemblies at the level they care about, zoom into details when needed, apply controlled
        stress, trace faults, audit decisions, and evolve systems safely. It turns monitoring from a scattered set of
        tools into a continuation of the assembly model.
      </p>
      <p style={bodyP}>
        In an AI-native world, this may become one of the most important software interfaces we build: the place
        where humans remain in control not by reading everything, but by understanding the right thing at the right
        level.
      </p>
    </>
  )
}
