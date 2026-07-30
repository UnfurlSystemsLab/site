import { bodyP, h2Style, calloutBox, calloutLabel, calloutBody, quoteWrap, quoteText, tableWrap, th, td, tdLast } from './shared'

// DCP Journey Part 1 — "The Missing Harness" body copy, ported verbatim in full.
export default function Part1() {
  return (
    <>
      <div style={calloutBox}>
        <p style={calloutLabel}>Core question</p>
        <p style={calloutBody}>
          If AI is going to govern an interconnected world, where is the universal harness that tells it what
          everything is, what it can do, what it depends on, and what rules it must obey?
        </p>
      </div>

      <h2 style={h2Style}>Executive summary</h2>
      <p style={bodyP}>
        Every major computing shift has created a new harness: a layer that makes raw capability understandable,
        usable, and governable by its primary consumer. The command line exposed computation to technical users. The
        graphical user interface made computing legible to everyday humans. APIs, SDKs, cloud platforms, and
        orchestration systems made software capabilities callable by other software.
      </p>
      <p style={bodyP}>
        AI is now becoming a new kind of consumer. It does not merely click buttons or call APIs. Increasingly, it is
        expected to reason across tools, devices, services, environments, and decisions. Yet the harness we give AI
        today is still fragmented. We describe tools. We expose endpoints. We register actions. But we rarely
        provide a universal, domain-aware contract that tells AI what an entity is, what it can do, what it requires,
        what it affects, and what governs its use.
      </p>
      <p style={bodyP}>
        That is the missing harness. In an interconnected world, every meaningful entity — from a software service to
        an air-conditioner, from a household device to a smart building, from a business function to a city
        subsystem — needs a way to declare its domain capabilities in a form that AI can inspect, validate, compose,
        and govern. This article frames that missing layer and sets up the next part of the series: what every
        AI-addressable entity should be able to say about itself.
      </p>

      <h2 style={h2Style}>A more connected world is no longer science fiction</h2>
      <p style={bodyP}>
        For more than a century, machine-age fiction imagined worlds where machines did more and more of the work
        around human beings. Machines prepared things, moved things, opened doors, managed comfort, answered needs,
        and quietly shaped the environment around us. At the time, this felt like a distant imagination. Today, it
        feels less like fiction and more like an approaching architecture.
      </p>
      <p style={bodyP}>
        But there is one important difference. Earlier visions mostly imagined machines serving humans directly. A
        person would press a button, issue a command, or ask for an outcome. In the next phase, many of those
        machines will not be governed only by humans. They will be interpreted, coordinated, and often acted upon by
        AI systems.
      </p>
      <p style={bodyP}>
        That changes the problem. If AI becomes the layer that coordinates capabilities across homes, offices,
        factories, cities, cloud systems, and business processes, then AI needs more than access. It needs
        understanding.
      </p>
      <blockquote style={quoteWrap}>
        <p style={quoteText}>
          The connected world does not fail because a device lacks an API. It fails when intelligence cannot
          understand what the device is, what it means, and what rules govern its use.
        </p>
      </blockquote>

      <h2 style={h2Style}>Every era had a harness</h2>
      <p style={bodyP}>
        A harness is an enabling layer. It takes something powerful but difficult to use and makes it accessible to
        its intended consumer. The command line was a harness for technical users. It allowed humans to operate
        computation by expressing precise commands. Later, the graphical user interface became a harness for a much
        wider human audience. People did not need to remember commands; they could see, click, drag, and interact.
      </p>
      <p style={bodyP}>
        The GUI was not just decoration. It translated machine capability into a form humans could understand. It
        provided affordances, constraints, feedback, and a mental model. In that sense, it was not merely a user
        interface. It was a capability harness for human cognition.
      </p>
      <p style={bodyP}>
        As software became more networked, APIs, SDKs, protocols, and cloud platforms became another kind of harness.
        They made software capabilities available to other software. They answered questions like: how do I call
        this service, what parameters do I pass, what response should I expect, and what errors might occur?
      </p>
      <p style={bodyP}>
        Now AI is creating the next shift. The primary consumer is no longer only a human, and not only another
        deterministic software program. The consumer is an intelligent agent expected to reason, choose, compose,
        and act. That agent needs a new kind of harness.
      </p>

      <h2 style={h2Style}>The shift: AI is becoming the consumer of capabilities</h2>
      <p style={bodyP}>
        When a human uses a system, a lot of meaning lives outside the interface. A human can infer context. If they
        see an air-conditioner, they already know it cools a room, consumes electricity, has safe operating limits,
        and affects comfort. If they see an inventory dashboard, they understand that stock levels relate to sales,
        fulfillment, procurement, and customer commitments.
      </p>
      <p style={bodyP}>
        AI cannot be expected to infer all of that reliably from a tool name or API description. It can guess, but
        guessing is not governance. It can call an endpoint, but calling is not understanding. It can chain tools
        together, but chaining is not the same as knowing whether the combination is valid, safe, compliant, or
        meaningful in a domain.
      </p>
      <p style={bodyP}>
        This is why tool-level harnesses are necessary but incomplete. They help AI interact with capabilities. They
        do not fully explain the domain identity, operational boundaries, dependency model, policy surface, lifecycle
        state, or compositional role of the capability itself.
      </p>

      <h2 style={h2Style}>What today&#8217;s AI harnesses solve, and what they miss</h2>
      <p style={bodyP}>
        Today, we are beginning to provide AI with structured ways to use tools. We describe functions. We connect
        agents to external systems. We expose actions through servers, connectors, and protocols. These are
        important. They reduce ambiguity around invocation.
      </p>
      <p style={bodyP}>
        But the larger question remains unanswered: what does the thing represent in the real world or in the
        enterprise domain?
      </p>
      <p style={bodyP}>
        A tool description can say &#8220;set temperature.&#8221; An API can say &#8220;POST /temperature.&#8221; A
        device registry can say &#8220;air-conditioner.&#8221; But an AI governor may need to know much more: whether
        it is hot-and-cold or cooling-only, its tonnage, its power dependency, the room it serves, the safe
        temperature range, the occupancy conditions, maintenance status, energy rules, ownership, override
        permissions, and whether changing it affects other systems.
      </p>
      <p style={bodyP}>
        That missing information is not cosmetic. It is the difference between a system that can call a capability
        and a system that can responsibly reason about it.
      </p>

      <h2 style={h2Style}>The air-conditioner test</h2>
      <p style={bodyP}>
        Consider a simple air-conditioner. At the most basic level, an AI system may be able to turn it on, turn it
        off, set a temperature, or change a mode. That is useful, but it is not enough for intelligent governance.
      </p>
      <p style={bodyP}>To govern even this ordinary device well, AI may need a richer self-description:</p>
      <div style={tableWrap}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: "'IBM Plex Sans',sans-serif" }}>
          <thead>
            <tr>
              <th style={th}>Question AI must answer</th>
              <th style={th}>Example answer from the entity itself</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>What domain does this entity serve?</td>
              <td style={{ ...td, color: '#5c594f' }}>HVAC / climate control</td>
            </tr>
            <tr>
              <td style={td}>What capabilities does it offer?</td>
              <td style={{ ...td, color: '#5c594f' }}>Cool, heat, dehumidify, fan, sleep mode</td>
            </tr>
            <tr>
              <td style={td}>What are its operating constraints?</td>
              <td style={{ ...td, color: '#5c594f' }}>1.5 ton, specific voltage range, safe temperature limits</td>
            </tr>
            <tr>
              <td style={td}>What does it depend on?</td>
              <td style={{ ...td, color: '#5c594f' }}>Power supply, thermostat, network connectivity, room sensor</td>
            </tr>
            <tr>
              <td style={td}>What policies govern it?</td>
              <td style={{ ...td, color: '#5c594f' }}>Energy limits, occupancy rules, user permissions, safety limits</td>
            </tr>
            <tr>
              <td style={td}>What is its current state?</td>
              <td style={{ ...td, color: '#5c594f' }}>Mode, set point, compressor state, fault status, firmware version</td>
            </tr>
            <tr>
              <td style={tdLast}>What relationships does it have?</td>
              <td style={{ ...tdLast, color: '#5c594f' }}>Serves Room 204, belongs to Floor 2, part of Building A climate system</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p style={bodyP}>
        If this information is unavailable or inconsistent, AI must infer. Inference may work in a demo. It is not
        enough for a world where AI is expected to operate across real systems, real constraints, and real
        consequences.
      </p>

      <h2 style={h2Style}>The missing harness</h2>
      <p style={bodyP}>
        The missing harness is a standard way for every AI-addressable entity to describe itself as a domain
        participant, not merely as an endpoint. It should allow AI to discover and understand the entity before
        acting on it.
      </p>
      <p style={bodyP}>Such a harness would not only say, &#8220;Here is how to call me.&#8221; It would also say:</p>
      <ul style={{ margin: '0 0 24px', paddingLeft: 22, font: "400 19px/1.75 'Source Serif 4',serif", color: '#2c2a25' }}>
        <li>This is what I am.</li>
        <li>This is the domain I belong to.</li>
        <li>These are the capabilities I provide.</li>
        <li>These are the capabilities or resources I require.</li>
        <li>These are my constraints and safe operating boundaries.</li>
        <li>These are the policies and permissions that govern my use.</li>
        <li>This is my current state and lifecycle status.</li>
        <li>This is how I compose with other entities.</li>
      </ul>
      <p style={bodyP}>
        This is the shift from tool invocation to domain understanding. It is also the shift from isolated automation
        to composable governance.
      </p>

      <h2 style={h2Style}>Why this cannot be just another API</h2>
      <p style={bodyP}>
        An API is primarily an invocation surface. It tells a caller how to request an operation. But AI governance
        needs a semantic and contractual surface as well. The AI must understand not only the available operation,
        but also the meaning, consequences, constraints, dependencies, and policies around that operation.
      </p>
      <p style={bodyP}>
        This matters because the future interconnected world will not be made of isolated devices and services. It
        will be made of compositions: rooms inside buildings, buildings inside campuses, services inside platforms,
        platforms inside business capabilities, and business capabilities inside regulated operating environments.
      </p>
      <p style={bodyP}>
        In such a world, the harness must travel with the entity. The description cannot live only in a central
        document, a human-maintained wiki, or an integration-specific adapter. The entity itself, or the domain claim
        representing it, must carry enough structured meaning for AI to inspect it and reason about it.
      </p>
      <p style={bodyP}>
        The future AI-native world needs entities that are self-describing, policy-aware, dependency-aware, and
        composable by design.
      </p>

      <h2 style={h2Style}>Toward Domain Claim Protocol</h2>
      <p style={bodyP}>
        This is where the idea of a Domain Claim Protocol begins to emerge. Not as another tool-calling mechanism,
        and not as a replacement for APIs, MCP-style connectors, cloud orchestration, or existing integration
        standards. Those remain useful. But they answer only part of the question.
      </p>
      <p style={bodyP}>
        A Domain Claim Protocol can be thought of as a structured claim that an entity makes about itself: its
        domain, capabilities, requirements, constraints, policies, relationships, and activation rules. In that
        framing, DCP becomes a candidate for the missing harness: a capability contract that AI can read before it
        acts.
      </p>
      <p style={bodyP}>
        The important point is not to start with the protocol. The important point is to recognize the architectural
        gap. AI will increasingly sit above tools, services, devices, and domain systems. If those systems do not
        describe themselves in a standard, inspectable, composable, and governable way, AI will keep stitching
        fragments together rather than understanding the systems it is asked to coordinate.
      </p>
      <p style={bodyP}>
        That is the missing harness. And it may become one of the most important architectural layers of the
        AI-native world.
      </p>

      <h2 style={h2Style}>Closing thought</h2>
      <p style={bodyP}>
        The GUI helped humans use computers because it translated machine capability into human-understandable form.
        The next harness must help AI govern the connected world by translating domain capability into
        AI-understandable form.
      </p>
      <p style={bodyP}>
        The question, then, is simple: what should every AI-addressable entity be able to say about itself? That is
        the question for Part 2.
      </p>
    </>
  )
}
