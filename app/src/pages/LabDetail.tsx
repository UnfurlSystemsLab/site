import { Navigate, useParams } from 'react-router-dom'
import { getLab, STATUS_COLOR } from '../data/labs'
import LabShell from './labs/LabShell'
import DcpBody from './labs/DcpBody'
import FabricBody from './labs/FabricBody'
import StudioBody from './labs/StudioBody'

/*
 * LabDetail — Lab detail page, parameterized by slug.
 *
 * Full body content for all three Labs is ported from the Lab-page drafts
 * at site/docs/lab-pages/*.md (domain-claim-protocol.md, unfurl-fabric.md,
 * unfurl-studio-ui.md) — see DcpBody/FabricBody/StudioBody. LabShell holds
 * the shared breadcrumb/hero/repository/participate chrome every Lab page
 * uses.
 * Pattern: Strategy — the slug selects which body/hero-copy strategy to
 * render inside the shared shell.
 */
export default function LabDetail() {
  const { slug } = useParams<{ slug: string }>()
  const lab = slug ? getLab(slug) : undefined

  if (!lab) {
    return <Navigate to="/labs" replace />
  }

  const statusColor = STATUS_COLOR[lab.status]

  if (lab.slug === 'dcp') {
    return (
      <LabShell
        breadcrumbLabel="DCP"
        statusLabel="Draft specification"
        statusColor={statusColor}
        updated="Last updated 1 August 2026"
        title="Domain Claim Protocol"
        subtitle="A way for a component to state what it can do, what it needs, and under what conditions it may be invoked — written down so an assembly can be checked rather than trusted."
        repo="UnfurlSystemsLab/dcp"
        repoDescription="Specification home for the protocol model, schema narrative, examples, and discussion threads. The Java implementation lives in UnfurlSystemsLab/unfurl-dcp."
        secondaryHref="https://github.com/UnfurlSystemsLab/dcp/blob/main/docs/HLD-C2-dcp-schema-spec-updated.md"
        secondaryLabel="Read the draft spec"
      >
        <DcpBody />
      </LabShell>
    )
  }

  if (lab.slug === 'fabric') {
    return (
      <LabShell
        breadcrumbLabel="Fabric"
        statusLabel={lab.statusLabel}
        statusColor={statusColor}
        updated="Last updated 1 August 2026"
        title="Unfurl Fabric"
        subtitle="The design-time compiler and Studio API host: it matches needs to claims, validates the result, and produces a signed, deployable composition."
        repo="UnfurlSystemsLab/unfurl-fabric"
        repoDescription="Fabric compiler, Studio API server, catalog admission, and the Flowfoundry assembly runbook."
        secondaryHref="https://github.com/UnfurlSystemsLab/unfurl-fabric/blob/main/docs/HLD-unfurl-fabric.md"
        secondaryLabel="Read the architecture doc"
      >
        <FabricBody />
      </LabShell>
    )
  }

  return (
    <LabShell
      breadcrumbLabel="Studio"
      statusLabel={lab.statusLabel}
      statusColor={statusColor}
      updated="Last updated 1 August 2026"
      title="Unfurl Studio and UI"
      subtitle="The human harness for DCP and Fabric assemblies: a governed authoring and inspection surface, not a decorative 3D visualizer."
      repo="UnfurlSystemsLab/unfurl-ui"
      repoDescription="Host-shell app, Fabric Studio webapp, shared UI contracts, and the conversational authoring client."
      secondaryHref="https://github.com/UnfurlSystemsLab/unfurl-ui/blob/main/docs/LLD-unfurl-studio-visual-composition.md"
      secondaryLabel="Read the Studio design doc"
    >
      <StudioBody />
    </LabShell>
  )
}
