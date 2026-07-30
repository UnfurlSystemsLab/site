import { bodyP, h2Style, calloutBox, calloutLabel, calloutBody, quoteWrap, quoteText, tableWrap, th, td, tdLast } from './shared'

// DCP Journey Part 2 — "The Baseline Shift" body copy, ported verbatim in full.
export default function Part2() {
  return (
    <>
      <div style={calloutBox}>
        <p style={calloutLabel}>The baseline shift in one line</p>
        <p style={calloutBody}>
          Build components &#8594; connect APIs &#8594; automate workflows &#8594; assemble capabilities &#8594;
          govern systems.
        </p>
      </div>

      <h2 style={h2Style}>Opening: the panic is real, but the diagnosis is shallow</h2>
      <p style={bodyP}>
        There is a strange anxiety running through the software industry right now. It shows up in different words —
        productivity, automation, agents, copilots, replacement — but underneath, the question is almost always the
        same: if AI can write more and more code, what happens to software development?
      </p>
      <p style={bodyP}>That is the understandable question. But it may not be the most important one.</p>
      <p style={bodyP}>
        The deeper shift is not that software developers are becoming unnecessary. The deeper shift is that the
        baseline of software work is moving. The work that once felt like the center of the craft is becoming a
        lower layer. Not irrelevant. Not trivial. Just lower.
      </p>
      <p style={bodyP}>
        This has happened before. Every major computing wave moves the baseline upward. We once valued the ability to
        speak directly to machines. Then higher-level languages lifted us above raw instructions. Operating systems
        lifted us above hardware. GUIs lifted ordinary users above command lines. Frameworks lifted developers above
        repetitive plumbing. Cloud platforms lifted teams above physical infrastructure. APIs lifted products above
        monoliths.
      </p>
      <p style={bodyP}>Now AI is pushing the baseline again.</p>
      <blockquote style={quoteWrap}>
        <p style={quoteText}>
          The next baseline will not be the individual component alone. It will be the ability to assemble, govern,
          validate, replace, and reason across many components in a world where software is no longer trapped inside
          screens.
        </p>
      </blockquote>

      <h2 style={h2Style}>From software as an app to software as an environment</h2>
      <p style={bodyP}>
        Today, software still reaches only a fraction of the physical and operational world. We interact with
        software through phones, browsers, dashboards, admin panels, SaaS tools, and devices that call themselves
        &#8220;smart.&#8221; But most of that smartness is still siloed.
      </p>
      <p style={bodyP}>
        A thermostat may be smart. A door lock may be smart. A camera may be smart. A curtain controller may be
        smart. A building access system may be smart. But most of these systems are not meaningfully composable. They
        can expose APIs, ship mobile apps, publish events, or connect through automation tools, but they do not
        usually introduce themselves as participants in a larger reasoning fabric.
      </p>
      <p style={bodyP}>
        An interconnected world is not simply a world with more APIs. It is a world where every meaningful component
        can say, in a standard way: what it is, what it can do, what it owns, what it refuses to own, what it needs
        from others, what it exposes to others, what policies govern it, what failures it can emit, and how those
        failures should affect the larger system.
      </p>
      <p style={bodyP}>
        This does not mean every door, curtain, window, AC, light, pump, robot, file store, workflow, or connector
        needs to contain an AI model. That would be expensive, unnecessary, and in many cases unsafe. The more
        precise claim is this: every component that participates in an AI-governed environment needs an AI-legible
        self-description. Without that self-description, the AI is not governing a system. It is guessing around a
        pile of endpoints.
      </p>

      <h2 style={h2Style}>The IoT lesson: connected is not the same as composable</h2>
      <p style={bodyP}>
        The closest mainstream preview of this future is IoT, but IoT also shows the gap. IoT connected devices to
        networks. It made physical objects remotely visible, remotely configurable, and sometimes programmable. That
        was a significant step. But connectivity alone does not create coordinated intelligence.
      </p>
      <p style={bodyP}>
        A device can be online and still be opaque. It can be controllable and still be semantically weak. It can
        expose commands and still fail to explain its domain. It can be automated and still be unsafe to compose with
        other automations.
      </p>
      <p style={bodyP}>
        Take an air conditioner. A basic integration might expose commands such as turn on, turn off, set
        temperature, set fan speed. That is useful for a human-facing app or a simple automation. But an AI trying to
        manage a building needs more than commands. It needs to know the AC&#8217;s capacity, energy characteristics,
        supported modes, operational constraints, dependency on external temperature sensors, maintenance state,
        safety boundaries, cost implications, and relationship to other systems such as occupancy, access control,
        energy pricing, and building policy.
      </p>
      <p style={bodyP}>
        Now extend the example. A meeting is scheduled. The room is booked. Access control knows who may enter.
        Curtains affect heat gain and privacy. Lighting affects comfort. HVAC affects energy usage. A fire system has
        absolute authority over some decisions. A security system refuses to disclose certain data. A sustainability
        policy prefers lower cooling during peak tariff periods. A human comfort policy overrides optimization in
        occupied rooms.
      </p>
      <p style={bodyP}>This is not a problem of calling one more API. It is a problem of knowing what each thing means inside the system.</p>

      <h2 style={h2Style}>The new unit of software value</h2>
      <p style={bodyP}>
        For decades, software value was often measured by what could be built: features, services, screens,
        workflows, integrations, libraries, microservices, platforms. That will not disappear. But as AI lowers the
        cost of producing ordinary code, value moves toward the parts that are harder to infer and more expensive to
        get wrong.
      </p>
      <p style={bodyP}>The new unit of value is not just a component. It is a governable component.</p>
      <p style={bodyP}>
        A governable component is not merely callable. It is understandable. It carries enough context for another
        system — human or AI — to know how to compose it responsibly. It declares its boundaries instead of letting
        integrators discover them through production incidents. It exposes capabilities without pretending to own the
        entire problem. It identifies dependencies before deployment, not after failure. It makes conflict visible
        when two systems claim authority over the same decision. It treats faults as part of the contract rather than
        as vague log noise.
      </p>
      <p style={bodyP}>That is where software engineering work expands rather than disappears.</p>
      <p style={bodyP}>
        If AI can produce a CRUD service, the scarce skill becomes knowing what the service should own, what it must
        refuse, what should satisfy its dependencies, what it should expose, how it should version its capabilities,
        and how it should behave when composed with other systems. If AI can generate an integration, the scarce
        skill becomes proving that the integration is safe, policy-compliant, observable, reversible, and compatible
        with the larger graph.
      </p>
      <p style={bodyP}>In other words, the craft shifts from writing isolated parts to designing reliable participation.</p>

      <h2 style={h2Style}>Why the panic misunderstands the baseline shift</h2>
      <p style={bodyP}>The panic says: AI can write code, so developers lose value.</p>
      <p style={bodyP}>
        The better interpretation is: AI can write more code, so low-context coding becomes a weaker moat.
      </p>
      <p style={bodyP}>
        That is uncomfortable, but it is not the end of software work. It is the same pattern software has always
        followed. When a layer becomes easier, the industry does not stop. It builds at the next layer of
        abstraction.
      </p>
      <blockquote style={quoteWrap}>
        <p style={quoteText}>
          The developer of the next era will not be valued only for typing implementation faster than a model. They
          will be valued for shaping systems that models can safely assemble.
        </p>
      </blockquote>
      <p style={bodyP}>
        That work is not small. It includes domain modeling, contract design, capability boundaries, policy design,
        integration semantics, version compatibility, simulation, validation, observability, failure propagation,
        security, provenance, and human escalation. These are not side tasks. In an AI-native software world, they
        become central tasks.
      </p>
      <p style={bodyP}>
        The developer becomes less like a person wiring endpoints together one by one, and more like an architect of
        composable capability. Sometimes that architect will still write code directly. Sometimes they will
        supervise AI-generated code. Sometimes they will define the claim a component makes about itself. Sometimes
        they will review how two components should bind. Sometimes they will decide that a component must refuse a
        request because it belongs to another domain.
      </p>
      <p style={bodyP}>That is not a downgrade of engineering. It is a higher expectation of engineering.</p>

      <h2 style={h2Style}>The missing layer between tools and systems</h2>
      <p style={bodyP}>Invocation is not the same as composition.</p>
      <p style={bodyP}>
        Right now, a lot of AI infrastructure is focused on giving models access to tools. That is important. An
        agent needs a way to call a database, search documents, send a message, query a calendar, invoke an API, or
        run an operation. Runtime tool access matters.
      </p>
      <p style={bodyP}>But tool access answers only one class of question: how can I invoke this?</p>
      <p style={bodyP}>
        The bigger connected-world question is different: should this be composed here at all? What does this
        component claim to own? What does it explicitly not own? Which dependency satisfies this need? Which policy
        applies? Which component has authority when two claims overlap? What should happen when the contract
        assumption breaks?
      </p>
      <p style={bodyP}>Those are not runtime invocation questions. They are assembly questions.</p>
      <p style={bodyP}>
        This difference is crucial. A runtime tool protocol can make an agent powerful in the moment. But an
        interconnected world also needs a design-time composition layer, where intelligence can reason slowly,
        structurally, and safely before runtime. Once composition is settled, runtime should be fast, deterministic,
        and governed by frozen decisions — not reinterpreted on every call by a model.
      </p>
      <p style={bodyP}>
        That is the architectural shape we should be aiming for: intelligence during assembly, determinism during
        execution.
      </p>

      <h2 style={h2Style}>A more concrete example: the AI-managed room</h2>
      <p style={bodyP}>Imagine walking into a conference room in an AI-native building.</p>
      <p style={bodyP}>
        The room does not just contain devices. It contains participants in a system: access control, lighting,
        HVAC, curtains, display, network, occupancy sensors, energy policy, safety policy, maintenance policy,
        calendar context, and user preferences.
      </p>
      <p style={bodyP}>
        A naive AI agent might treat this as a list of tools. It sees available actions: unlock door, lower curtains,
        set AC to 22 degrees, turn on display. That is useful, but shallow.
      </p>
      <p style={bodyP}>
        A better agent sees boundaries. It knows access control owns entry decisions. HVAC owns cooling execution but
        not occupancy authority. Curtains can influence privacy and thermal load but must defer to fire-safety rules.
        Energy policy can recommend a cooling range but not override an occupied-room comfort rule. Maintenance state
        may degrade HVAC capability. A security policy may block camera feeds from being used for comfort
        optimization. Faults from one subsystem may or may not propagate to the whole room depending on their
        declared impact.
      </p>
      <p style={bodyP}>
        In that world, the AI does not merely command objects. It composes decisions. And for that to work, the
        objects and services around it must not be silent. They must carry structured self-knowledge.
      </p>

      <h2 style={h2Style}>What this creates for software engineers</h2>
      <p style={bodyP}>This is where the opportunity for software engineers becomes larger, not smaller.</p>
      <p style={bodyP}>
        The industry will need engineers who can define capability contracts that are clear enough for machines and
        humans. It will need engineers who can model domains without overclaiming them. It will need engineers who
        know the difference between ownership, consultation, delegation, and refusal. It will need engineers who can
        make dependencies explicit, not tribal knowledge. It will need engineers who can design versioning rules that
        allow safe replacement. It will need engineers who can create validation paths before activation and
        deterministic behavior after activation.
      </p>
      <p style={bodyP}>
        It will also need engineers who understand that not every problem should be solved by putting AI in the
        runtime path. A model can help negotiate a composition. It can help explain a conflict. It can help ask a
        human the right question. But once the system is running, many decisions should be boring, fast, auditable,
        and repeatable.
      </p>
      <p style={bodyP}>
        The most valuable software systems of the next decade may not be the ones with the most AI sprinkled inside
        them. They may be the ones whose components are easiest for AI to understand, compose, verify, and govern.
      </p>

      <h2 style={h2Style}>The baseline after the shift</h2>
      <p style={bodyP}>So what does the new baseline look like?</p>
      <p style={bodyP}>
        It looks like software developers starting from a higher assumption: components already exist, models can
        help build more, and the real challenge is making them participate safely in a larger world.
      </p>
      <div style={tableWrap}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={th}>Old center</th>
              <th style={th}>New craft</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>Integration era</td>
              <td style={{ ...td, color: '#5c594f' }}>Moving from app development to capability assembly</td>
            </tr>
            <tr>
              <td style={td}>Early agent era</td>
              <td style={{ ...td, color: '#5c594f' }}>Moving from integration by glue code to integration by declared boundaries</td>
            </tr>
            <tr>
              <td style={tdLast}>Emerging baseline</td>
              <td style={{ ...tdLast, color: '#5c594f' }}>
                Moving from device automation to governable environments; from &#8220;what API can I call?&#8221; to
                &#8220;what domain does this thing serve, what authority does it have, and what contract makes it
                safe to compose?&#8221;
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p style={bodyP}>
        That shift is why the first essay asked for a missing harness. A harness is not just a UI and not just an API
        wrapper. It is the layer that makes capability understandable, accessible, and governable by the consumer of
        that capability. In the GUI era, the consumer was the human. In the AI-native era, the consumer is
        increasingly an agent trying to reason across systems.
      </p>
      <p style={bodyP}>
        The missing harness, then, is not simply about connecting tools. It is about giving every meaningful
        component a way to describe itself as part of a larger composition.
      </p>

      <h2 style={h2Style}>Bridge to Part 3</h2>
      <p style={bodyP}>We should not introduce a protocol too early, because the need must be clear first.</p>
      <p style={bodyP}>
        Part 1 asked what AI is missing when the world becomes more connected. Part 2 reframed the software panic as
        a baseline shift: from writing individual components to assembling governable systems. The next step is to
        make the missing layer concrete.
      </p>
      <p style={bodyP}>
        What should every AI-legible component be able to say about itself? What should be described before
        composition? What should be frozen before runtime? What should be refused instead of guessed? What should be
        validated before activation? And how do we keep intelligence useful without putting it recklessly in the hot
        path? That is where Part 3 begins.
      </p>
    </>
  )
}
