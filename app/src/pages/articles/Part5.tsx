import type { CSSProperties } from 'react'
import { bodyP, h2Style, calloutBox, calloutLabel, calloutBody, quoteWrap, quoteText, tableWrap, th, td, tdLast } from './shared'

// DCP Journey Part 5 — "The Human Harness" body copy, ported verbatim in
// full, including the practical review-grammar table and the
// document-answering-assistant worked example.
export default function Part5() {
  const thirdCol: CSSProperties = {
    textAlign: 'left',
    font: "500 10px/1.4 'IBM Plex Mono',monospace",
    letterSpacing: '.1em',
    textTransform: 'uppercase',
    color: '#64748b',
    padding: '14px 18px',
    borderBottom: '1px solid #e1e5ec',
  }
  const monoTd: CSSProperties = { font: "400 13px/1.5 'IBM Plex Mono',monospace", color: '#475569', padding: '12px 18px', borderBottom: '1px solid #eef0f3' }
  const monoTdLast: CSSProperties = { font: "400 13px/1.5 'IBM Plex Mono',monospace", color: '#475569', padding: '12px 18px' }

  return (
    <>
      <div style={calloutBox}>
        <p style={calloutLabel}>Series context</p>
        <p style={calloutBody}>
          In the earlier parts of this series, we started with a missing layer: a harness that allows AI to
          understand what components are, what they can do, what they refuse to do, and how they can be safely
          composed. Part 4 moved that idea closer to a draft protocol: DCP as a way to make capabilities explicit,
          negotiable, and contract-bound.
        </p>
      </div>
      <p style={bodyP}>
        Part 5 completes another side of the story. If DCP is the AI harness, then there must also be a human
        harness. Not because humans need to micromanage every AI decision, but because every meaningful system still
        needs human review, human intent, human accountability, and human imagination. The human harness is not
        merely a dashboard. It is the surface through which people can inspect, manipulate, validate, and govern
        AI-native assemblies without losing the underlying truth.
      </p>

      <h2 style={h2Style}>The clue was already in the schema</h2>
      <p style={bodyP}>
        If you look closely at the DCP-facing material we discussed in Part 4, some fields do not look like they are
        meant only for AI. Shape, fallback form, visual category, port anchors, connector shapes, interaction
        handles: these are not fields an AI needs in order to reason about capability compatibility. They are fields
        a human needs in order to see capability compatibility.
      </p>
      <p style={bodyP}>
        That distinction matters. A system that only describes itself for AI becomes powerful, but difficult to
        trust. A system that only describes itself for humans becomes usable, but brittle and manual. The deeper
        idea is that a component should carry one source of truth, with multiple projections. One projection makes it
        legible to AI. Another makes it legible to humans.
      </p>
      <p style={bodyP}>
        This is why the human harness should not be bolted on after the protocol is finished. It is already implied
        by the protocol. DCP needs a way to describe what is true. Humans need a way to review that truth, manipulate
        it safely, and understand what changed before anything is allowed to run.
      </p>

      <h2 style={h2Style}>From GUI to human harness</h2>
      <p style={bodyP}>
        The GUI was one of the great human harnesses of computing. It did not change what software could do at the
        machine level, but it changed who could use it and how safely they could reason about it. People no longer
        had to remember every command, every flag, and every hidden state. They could see files, windows, buttons,
        errors, and relationships.
      </p>
      <p style={bodyP}>
        But AI-native systems require something deeper than the old GUI. The interface cannot simply expose buttons
        over functions. It has to expose relationships: what owns what, what depends on what, what is missing, what
        is refused, what is trusted, what is bound, and what will be signed into an executable contract.
      </p>
      <p style={bodyP}>
        A normal UI hides complexity. A human harness must reveal the right complexity at the right level. It should
        not drown the operator in raw YAML, logs, or graph data. It should turn the system into something a human can
        inspect spatially, semantically, and procedurally.
      </p>

      <h2 style={h2Style}>Unfurl Studio: the human harness</h2>
      <p style={bodyP}>
        Unfurl Studio is the product expression of this human harness. It is the design-time surface where operators
        can compose intelligent components visually, inspect the DCP facts behind them, and export the same signed
        contract that the non-visual pipeline would produce.
      </p>
      <p style={bodyP}>
        Unfurl Studio is one product expression of this pattern, not a requirement of DCP itself. The protocol stays
        product-neutral: another authoring surface can project the same claims, contracts, runtime bindings, faults,
        and review questions if it preserves DCP as the source of truth.
      </p>
      <p style={bodyP}>
        The important part is what Studio is not. It is not a free-form diagramming canvas. It is not a place where
        moving shapes magically creates a contract. It is not a shortcut around DCP, Fabric, trust policy, or
        compatibility validation. It is a projection of Fabric state into a form that humans can work with.
      </p>
      <p style={bodyP}>
        That distinction gives Studio its integrity. The human moves shapes, connects ports, asks the advisor for
        help, or reviews a suggested change. But Fabric validates the intent. DCP decides compatibility. The signed
        contract comes from the compiler, not from serializing the visual scene.
      </p>

      <h2 style={h2Style}>Why visual metadata is not decoration</h2>
      <p style={bodyP}>
        It is tempting to treat visual metadata as cosmetic: a cube here, a socket there, a color hint somewhere
        else. That would miss the point. Visual metadata is how protocol truth becomes a human affordance.
      </p>
      <p style={bodyP}>
        A port is not just a circle on a box. It can represent an offer, a dependency, a substrate dependency, or a
        refusal redirect. A pipe is not just a line. It represents a proposed relationship that must be validated. A
        fallback shape is not just a default graphic. It means every component can participate in the human harness
        even if its author has not supplied a custom 3D asset.
      </p>
      <p style={bodyP}>
        In that sense, the human harness is inclusive by design. Component authors should not need to hire 3D artists
        before their components become inspectable. If a component can publish truthful capability metadata, Studio
        can render an understandable shape, generate handles, and surface validation feedback.
      </p>

      <h2 style={h2Style}>The review loop: AI proposes, human disposes, Fabric validates</h2>
      <p style={bodyP}>
        The most important sentence in this part may be the simplest: the AI should propose; the human should
        dispose; Fabric should validate.
      </p>
      <blockquote style={quoteWrap}>
        <p style={quoteText}>The AI should propose; the human should dispose; Fabric should validate.</p>
      </blockquote>
      <p style={bodyP}>
        This is not anti-AI. It is how AI becomes useful in serious systems. An AI assistant can clarify
        requirements, turn vague intent into structured needs, suggest components, propose connections, and explain
        gaps. But it should not create a hidden trust path. It should not hallucinate components. It should not
        bypass the admitted catalog. It should not sign artifacts on the strength of its own confidence.
      </p>
      <p style={bodyP}>
        A healthy human harness gives the operator several choices at each step: accept the proposal, edit it
        visually, ask the agent to revise, inspect the underlying facts, or stop because the system has revealed a
        gap. The harness converts AI from an opaque generator into a visible collaborator.
      </p>

      <h2 style={h2Style}>A practical review grammar</h2>
      <div style={tableWrap}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={th}>Question for the human</th>
              <th style={th}>Visible surface</th>
              <th style={thirdCol}>Source of truth</th>
              <th style={thirdCol}>Validation owner</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>What is this component?</td>
              <td style={{ ...td, color: '#475569' }}>Component shape, label, inspector</td>
              <td style={monoTd}>DCP claim identity and domain</td>
              <td style={monoTd}>Fabric/DCP</td>
            </tr>
            <tr>
              <td style={td}>What can it do?</td>
              <td style={{ ...td, color: '#475569' }}>Offer ports and capability list</td>
              <td style={monoTd}>DCP offers</td>
              <td style={monoTd}>Fabric/DCP matcher</td>
            </tr>
            <tr>
              <td style={td}>What does it need?</td>
              <td style={{ ...td, color: '#475569' }}>Required sockets, substrate pipes</td>
              <td style={monoTd}>DCP dependencies and substrate profile</td>
              <td style={monoTd}>Fabric deployment resolver</td>
            </tr>
            <tr>
              <td style={td}>What does it refuse?</td>
              <td style={{ ...td, color: '#475569' }}>Capped or redirected handles, warnings</td>
              <td style={monoTd}>DCP refusals</td>
              <td style={monoTd}>DCP claim validation</td>
            </tr>
            <tr>
              <td style={td}>Can this connection exist?</td>
              <td style={{ ...td, color: '#475569' }}>Pipe preview, compatibility glow, rejection reason</td>
              <td style={monoTd}>Claims, versions, trust policy</td>
              <td style={monoTd}>Fabric validation</td>
            </tr>
            <tr>
              <td style={tdLast}>Can I export it?</td>
              <td style={{ ...tdLast, color: '#475569' }}>Compile/export panel</td>
              <td style={monoTdLast}>Validated candidate and signed contract</td>
              <td style={monoTdLast}>Fabric compiler and signer</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 style={h2Style}>The human harness must support multiple ways of seeing</h2>
      <p style={bodyP}>
        Not every operator thinks spatially. Not every workflow is small enough for a 3D surface. Not every review
        can happen through drag-and-drop. A serious human harness therefore needs synchronized views over the same
        truth.
      </p>
      <p style={bodyP}>
        The visual workspace is useful for composition and intuition. The inspector is useful for details. The
        decision audit is useful for trust and traceability. A 2D or table view is necessary for accessibility,
        keyboard navigation, large systems, and precise review.
      </p>
      <p style={bodyP}>
        The point is not to make one perfect screen. The point is to make the system reviewable through multiple
        lenses while preserving the same model underneath.
      </p>

      <h2 style={h2Style}>Why this matters for trust</h2>
      <p style={bodyP}>
        The more capable AI becomes, the more important reviewability becomes. A system assembled by AI may be
        technically valid and still be hard for a human to trust. The operator needs to understand not only the
        result, but the reason the result exists.
      </p>
      <p style={bodyP}>
        Why was this identity provider selected? Why was that storage provider rejected? Why is this dependency
        routed through the substrate? Why is the audit concern refused by one component and redirected to another?
        Why is this shape deployable in one environment but not another?
      </p>
      <p style={bodyP}>
        Those are not decorative questions. They are governance questions. They are the questions that determine
        whether humans can safely delegate assembly work to AI without surrendering judgment.
      </p>
      <p style={bodyP}>
        In today&#8217;s tooling, much of this review happens through scattered logs, YAML files, CI output, ad hoc
        diagrams, cloud consoles, and tribal memory. The human harness brings those relationships into one semantic
        surface. It does not remove technical depth. It makes depth navigable.
      </p>

      <h2 style={h2Style}>A small example: composing a document-answering assistant</h2>
      <p style={bodyP}>
        Imagine an operator asks for a document-answering assistant that reads internal docs, uses an approved model
        provider, stores embeddings in a customer-controlled store, and escalates uncertain answers to a human queue.
      </p>
      <p style={bodyP}>
        In a purely conversational tool, the AI might return an architecture diagram and some generated
        configuration. Useful, but not enough. In a human harness, the AI first clarifies requirements, proposes a
        needs spec, and suggests a composition. Studio then shows the actual admitted components: a RAG component, a
        storage provider, an approved model gateway, an audit sink, an approval workflow, and the required substrate
        services.
      </p>
      <p style={bodyP}>
        The operator can click the model gateway and see whether it is customer-provided or external. They can
        inspect the storage dependency and see whether credentials are referenced rather than embedded. They can see
        a refusal: the RAG component does not own authorization decisions; that responsibility belongs elsewhere.
        They can try a connection, see it rejected, and read why. When the assembly validates, they can export the
        same signed artifact that the compiler would have produced outside the UI.
      </p>
      <p style={bodyP}>
        That is the human harness at work. It does not make the system less technical. It makes the technical truth
        visible enough to govern.
      </p>

      <h2 style={h2Style}>The principle: visual does not mean vague</h2>
      <p style={bodyP}>
        Many technical people distrust visual tools because visual tools often become informal. Boxes and arrows
        drift away from what actually runs. Diagrams become stale. The UI looks friendly but the system of record
        lives somewhere else.
      </p>
      <p style={bodyP}>
        The human harness has to avoid that failure. Visual must not mean vague. Visual must mean grounded. Every
        handle maps to a declared capability, dependency, substrate dependency, or refusal. Every semantic action
        becomes an intent. Every accepted intent is validated. Every export comes from the compiler. Every artifact
        stays tied to the same source of truth.
      </p>
      <p style={bodyP}>
        This is the difference between a diagramming surface and a governed composition surface. A diagram lets a
        human describe what they hope is true. A human harness lets a human manipulate what the system knows is
        true.
      </p>

      <h2 style={h2Style}>Bridge to Part 6: aggregation and semantic zoom</h2>
      <p style={bodyP}>
        Part 5 explains why AI-native systems need a human harness. Part 6 will explain why that harness must
        support aggregation.
      </p>
      <p style={bodyP}>
        A single component is only the beginning. A home can be an aggregate of climate, lighting, water, security,
        and energy systems. A colony can be an aggregate of homes. A city can be an aggregate of colonies, public
        systems, grids, transport, utilities, and governance surfaces. At every level, the human harness must let
        people zoom in for detail and zoom out for abstraction.
      </p>
      <p style={bodyP}>
        This is where the map analogy becomes important. When you zoom out, you do not want every screw, wire, tap,
        sensor, model, queue, and API call. You want a meaningful abstraction. When you zoom in, you want the details
        to reappear in the right place. Aggregation is how intelligence scales; semantic zoom is how humans stay
        oriented.
      </p>
      <p style={bodyP}>
        The next question is not only how components compose. It is how composed things become components in their
        own right.
      </p>
    </>
  )
}
