import { useState } from 'react'
import './App.css'
import {
  Avatar,
  Button,
  Chip,
  Radio,
  RadioGroup,
  Toggle,
  TooltipTrigger,
  CounterBadge,
  Tag,
  Divider,
  ProgressBar,
  StepIndicator,
  DotStatus,
  Status,
  Field,
  Textarea,
  Tabs,
  Toast,
  Accordion,
  AccordionItem,
  ActionMenu,
} from '@oxymormon/chg-unified-ds'

const themes = ['weatherby', 'comphealth', 'connect', 'locumsmart', 'modio', 'wireframe'] as const
type Theme = typeof themes[number]

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-6">
      <h2 className="text-lg font-semibold text-content-primary">{title}</h2>
      {children}
    </section>
  )
}

function SubSection({ label, children }: { label?: string; children: React.ReactNode }) {
  return (
    <div className="space-y-3">
      {label && <p className="text-sm font-medium text-content-secondary">{label}</p>}
      {children}
    </div>
  )
}

function App() {
  const [theme, setTheme] = useState<Theme>('weatherby')
  const [radioValue, setRadioValue] = useState('option1')
  const [toggleOn, setToggleOn] = useState(false)
  const [chipSelected, setChipSelected] = useState(false)

  return (
    <div data-theme={theme} className="min-h-screen bg-surface-primary text-content-primary">
      {/* Header with Theme Switcher */}
      <header className="sticky top-0 z-50 bg-surface-secondary shadow-sm">
        <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-semibold">CHG Unified Design System</h1>
          <div className="flex items-center gap-3">
            <span className="text-sm text-content-secondary">Theme:</span>
            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value as Theme)}
              className="rounded-lg bg-surface-primary px-3 py-2 text-sm border border-border-primary focus:outline-none focus:ring-2 focus:ring-interactive-primary"
            >
              {themes.map((t) => (
                <option key={t} value={t}>
                  {t.charAt(0).toUpperCase() + t.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-10 space-y-16">

        {/* Avatar */}
        <Section title="Avatar">
          <SubSection label="Sizes">
            <div className="flex flex-wrap items-end gap-4">
              <Avatar name="John Doe" size="sm" />
              <Avatar name="Jane Smith" size="md" />
              <Avatar name="Bob Wilson" size="lg" />
            </div>
          </SubSection>
          <SubSection label="With Status">
            <div className="flex flex-wrap items-center gap-4">
              <Avatar name="Alice Brown" size="md" status="online" />
              <Avatar name="Charlie Davis" size="md" status="busy" />
              <Avatar name="Eve Johnson" size="md" status="away" />
              <Avatar name="Frank Miller" size="md" status="offline" />
            </div>
          </SubSection>
          <SubSection label="With Image">
            <Avatar name="Grace Lee" size="lg" src="https://i.pravatar.cc/150?u=grace" />
          </SubSection>
        </Section>

        <Divider />

        {/* Button */}
        <Section title="Button">
          <SubSection label="Variants">
            <div className="flex flex-wrap items-center gap-3">
              <Button variant="primary">Primary</Button>
              <Button variant="soft">Soft</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="text">Text</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
            </div>
          </SubSection>
          <SubSection label="Sizes">
            <div className="flex flex-wrap items-center gap-3">
              <Button variant="primary" size="xs">Extra Small</Button>
              <Button variant="primary" size="sm">Small</Button>
              <Button variant="primary" size="md">Medium</Button>
              <Button variant="primary" size="lg">Large</Button>
            </div>
          </SubSection>
          <SubSection label="Disabled">
            <div className="flex flex-wrap items-center gap-3">
              <Button variant="primary" isDisabled>Disabled Primary</Button>
              <Button variant="outline" isDisabled>Disabled Outline</Button>
            </div>
          </SubSection>
        </Section>

        <Divider />

        {/* Chip */}
        <Section title="Chip">
          <div className="flex flex-wrap items-center gap-3">
            <Chip>Default</Chip>
            <Chip isSelected={chipSelected} onPress={() => setChipSelected(!chipSelected)}>
              {chipSelected ? 'Selected' : 'Click to Select'}
            </Chip>
            <Chip isRounded>Rounded</Chip>
            <Chip isDismissible onDismiss={() => alert('Dismissed!')}>Dismissible</Chip>
            <Chip size="compact">Compact</Chip>
          </div>
        </Section>

        <Divider />

        {/* Radio/RadioGroup */}
        <Section title="Radio / RadioGroup">
          <div className="max-w-sm">
            <RadioGroup value={radioValue} onChange={setRadioValue}>
              <div className="flex flex-col gap-3">
                <Radio value="option1">Option 1 - Basic plan</Radio>
                <Radio value="option2">Option 2 - Professional plan</Radio>
                <Radio value="option3">Option 3 - Enterprise plan</Radio>
              </div>
            </RadioGroup>
            <p className="mt-4 text-sm text-content-secondary">Selected: <span className="font-medium text-content-primary">{radioValue}</span></p>
          </div>
        </Section>

        <Divider />

        {/* Toggle */}
        <Section title="Toggle">
          <div className="flex flex-wrap items-center gap-8">
            <div className="flex items-center gap-3">
              <Toggle isSelected={toggleOn} onChange={setToggleOn} />
              <span className="text-sm">{toggleOn ? 'On' : 'Off'}</span>
            </div>
            <div className="flex items-center gap-3">
              <Toggle size="compact" isSelected />
              <span className="text-sm">Compact</span>
            </div>
            <div className="flex items-center gap-3">
              <Toggle isIndeterminate />
              <span className="text-sm">Indeterminate</span>
            </div>
            <div className="flex items-center gap-3">
              <Toggle isDisabled />
              <span className="text-sm">Disabled</span>
            </div>
          </div>
        </Section>

        <Divider />

        {/* Tooltip */}
        <Section title="Tooltip">
          <div className="flex flex-wrap items-center gap-3">
            <TooltipTrigger tooltip="This is a plain tooltip" appearance="plain">
              <Button variant="outline" size="sm">Plain</Button>
            </TooltipTrigger>
            <TooltipTrigger tooltip="This is a soft tooltip" appearance="soft">
              <Button variant="outline" size="sm">Soft</Button>
            </TooltipTrigger>
            <TooltipTrigger tooltip="This is a rich tooltip" appearance="rich">
              <Button variant="outline" size="sm">Rich</Button>
            </TooltipTrigger>
            <TooltipTrigger tooltip="Micro" appearance="micro">
              <Button variant="outline" size="sm">Micro</Button>
            </TooltipTrigger>
            <TooltipTrigger tooltip="With arrow pointing to trigger" showArrow>
              <Button variant="outline" size="sm">With Arrow</Button>
            </TooltipTrigger>
          </div>
        </Section>

        <Divider />

        {/* CounterBadge */}
        <Section title="CounterBadge">
          <SubSection label="Colors">
            <div className="flex flex-wrap items-center gap-4">
              <CounterBadge>5</CounterBadge>
              <CounterBadge color="red">12</CounterBadge>
              <CounterBadge color="orange">8</CounterBadge>
              <CounterBadge color="green">3</CounterBadge>
              <CounterBadge color="blue">99+</CounterBadge>
              <CounterBadge color="purple">42</CounterBadge>
            </div>
          </SubSection>
          <SubSection label="Solid & Rounded">
            <div className="flex flex-wrap items-center gap-4">
              <CounterBadge color="blue" isSolid>15</CounterBadge>
              <CounterBadge color="green" isRounded>7</CounterBadge>
              <CounterBadge color="red" isSolid isRounded>3</CounterBadge>
            </div>
          </SubSection>
        </Section>

        <Divider />

        {/* Tag */}
        <Section title="Tag">
          <SubSection label="Colors">
            <div className="flex flex-wrap items-center gap-2">
              <Tag color="neutral">Neutral</Tag>
              <Tag color="red">Red</Tag>
              <Tag color="orange">Orange</Tag>
              <Tag color="yellow">Yellow</Tag>
              <Tag color="green">Green</Tag>
              <Tag color="blue">Blue</Tag>
              <Tag color="purple">Purple</Tag>
              <Tag color="cyan">Cyan</Tag>
            </div>
          </SubSection>
          <SubSection label="Solid">
            <div className="flex flex-wrap items-center gap-2">
              <Tag color="red" isSolid>Solid Red</Tag>
              <Tag color="green" isSolid>Solid Green</Tag>
              <Tag color="blue" isSolid>Solid Blue</Tag>
            </div>
          </SubSection>
          <SubSection label="Rounded">
            <div className="flex flex-wrap items-center gap-2">
              <Tag color="purple" isRounded>Rounded</Tag>
              <Tag color="orange" isSolid isRounded>Solid Rounded</Tag>
              <Tag color="cyan" size="compact">Compact</Tag>
            </div>
          </SubSection>
        </Section>

        <Divider />

        {/* Divider */}
        <Section title="Divider">
          <div className="space-y-8 max-w-lg">
            <SubSection label="Default">
              <Divider />
            </SubSection>
            <SubSection label="With Label (center)">
              <Divider type="label" label="Section Break" alignment="center" />
            </SubSection>
            <SubSection label="With Title (left)">
              <Divider type="title" label="Important Section" alignment="left" />
            </SubSection>
          </div>
        </Section>

        <Divider />

        {/* ProgressBar */}
        <Section title="ProgressBar">
          <div className="space-y-6 max-w-md">
            <SubSection label="25% - Label Right">
              <ProgressBar value={25} label="right" />
            </SubSection>
            <SubSection label="50% - Label Bottom">
              <ProgressBar value={50} label="bottom" />
            </SubSection>
            <SubSection label="75% - No Label">
              <ProgressBar value={75} label={false} />
            </SubSection>
            <SubSection label="100% Complete">
              <ProgressBar value={100} label="right" />
            </SubSection>
          </div>
        </Section>

        <Divider />

        {/* StepIndicator */}
        <Section title="StepIndicator">
          <SubSection label="Horizontal">
            <StepIndicator orientation="horizontal" showLabels>
              <StepIndicator.Item status="complete" label="Account Setup" />
              <StepIndicator.Item status="complete" label="Profile Info" />
              <StepIndicator.Item status="active" label="Preferences" />
              <StepIndicator.Item status="incomplete" label="Review" />
            </StepIndicator>
          </SubSection>
          <SubSection label="Vertical">
            <div className="max-w-xs">
              <StepIndicator orientation="vertical" showLabels>
                <StepIndicator.Item status="complete" label="Order Placed" description="Jan 10, 2024" />
                <StepIndicator.Item status="complete" label="Processing" description="Jan 11, 2024" />
                <StepIndicator.Item status="active" label="Shipped" description="In transit" />
                <StepIndicator.Item status="incomplete" label="Delivered" />
              </StepIndicator>
            </div>
          </SubSection>
        </Section>

        <Divider />

        {/* DotStatus */}
        <Section title="DotStatus">
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2">
              <DotStatus appearance="green" />
              <span className="text-sm">Online</span>
            </div>
            <div className="flex items-center gap-2">
              <DotStatus appearance="red" />
              <span className="text-sm">Offline</span>
            </div>
            <div className="flex items-center gap-2">
              <DotStatus appearance="yellow" />
              <span className="text-sm">Away</span>
            </div>
            <div className="flex items-center gap-2">
              <DotStatus appearance="blue" />
              <span className="text-sm">Info</span>
            </div>
            <div className="flex items-center gap-2">
              <DotStatus appearance="neutral" size="lg" />
              <span className="text-sm">Large</span>
            </div>
            <div className="flex items-center gap-2">
              <DotStatus appearance="purple" border />
              <span className="text-sm">Border</span>
            </div>
          </div>
        </Section>

        <Divider />

        {/* Status */}
        <Section title="Status">
          <SubSection label="Default">
            <div className="flex flex-wrap items-center gap-3">
              <Status appearance="green">Active</Status>
              <Status appearance="red">Error</Status>
              <Status appearance="yellow">Pending</Status>
              <Status appearance="blue">Info</Status>
              <Status appearance="purple">Review</Status>
            </div>
          </SubSection>
          <SubSection label="Solid & Rounded">
            <div className="flex flex-wrap items-center gap-3">
              <Status appearance="green" isSolid>Solid</Status>
              <Status appearance="red" isRounded>Rounded</Status>
              <Status appearance="blue" isSolid isRounded>Both</Status>
              <Status appearance="orange" size="compact">Compact</Status>
            </div>
          </SubSection>
        </Section>

        <Divider />

        {/* Field */}
        <Section title="Field">
          <div className="grid gap-8 max-w-xl">
            <Field label="Email Address" isRequired helperText="We'll never share your email.">
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-lg border border-border-primary bg-surface-primary px-3 py-2 text-sm placeholder:text-content-tertiary focus:outline-none focus:ring-2 focus:ring-interactive-primary"
              />
            </Field>

            <Field label="Country" isRequired>
              <select className="w-full rounded-lg border border-border-primary bg-surface-primary px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-interactive-primary">
                <option value="">Select a country</option>
                <option value="us">United States</option>
                <option value="ca">Canada</option>
                <option value="uk">United Kingdom</option>
                <option value="au">Australia</option>
              </select>
            </Field>

            <Field label="Bio" helperText="Tell us about yourself" showCounter currentCount={45} maxCount={200}>
              <Textarea placeholder="Write a short bio..." rows={3} />
            </Field>

            <Field orientation="horizontal" label="Username" infoText="Must be unique" showInfoIcon>
              <input
                type="text"
                placeholder="johndoe"
                className="w-full rounded-lg border border-border-primary bg-surface-primary px-3 py-2 text-sm placeholder:text-content-tertiary focus:outline-none focus:ring-2 focus:ring-interactive-primary"
              />
            </Field>
          </div>
        </Section>

        <Divider />

        {/* Tabs */}
        <Section title="Tabs">
          <SubSection label="Underline">
            <Tabs
              appearance="underline"
              items={[
                { id: 'overview', label: 'Overview', content: <p className="py-4 text-content-secondary">Overview content - General information about the product.</p> },
                { id: 'features', label: 'Features', content: <p className="py-4 text-content-secondary">Features content - List of all available features.</p> },
                { id: 'pricing', label: 'Pricing', content: <p className="py-4 text-content-secondary">Pricing content - Various pricing plans and options.</p> },
              ]}
            />
          </SubSection>
          <SubSection label="Block">
            <Tabs
              appearance="block"
              items={[
                { id: 'tab1', label: 'Tab One', content: <p className="py-4 text-content-secondary">First tab content.</p> },
                { id: 'tab2', label: 'Tab Two', content: <p className="py-4 text-content-secondary">Second tab content.</p> },
                { id: 'tab3', label: 'Tab Three', content: <p className="py-4 text-content-secondary">Third tab content.</p> },
              ]}
            />
          </SubSection>
        </Section>

        <Divider />

        {/* Toast */}
        <Section title="Toast">
          <div className="space-y-4 max-w-lg">
            <Toast
              title="Changes saved successfully"
              description="Your profile has been updated with the new information."
              appearance="dot"
              dotAppearance="green"
              actions="close"
              onClose={() => {}}
            />
            <Toast
              title="Warning: Low storage"
              description="You have less than 10% storage remaining."
              appearance="dot"
              dotAppearance="yellow"
              actions="subtle"
              primaryActionLabel="Upgrade"
              secondaryActionLabel="Dismiss"
            />
            <Toast
              title="Error occurred"
              description="Failed to process your request. Please try again."
              appearance="dot"
              dotAppearance="red"
              actions="buttons"
              primaryActionLabel="Retry"
              secondaryActionLabel="Cancel"
            />
            <Toast
              title="Welcome back, Sarah!"
              appearance="avatar"
              avatarProps={{ name: "Sarah Connor" }}
              size="condensed"
              actions="close"
              onClose={() => {}}
            />
          </div>
        </Section>

        <Divider />

        {/* Accordion */}
        <Section title="Accordion">
          <div className="max-w-xl">
            <Accordion allowsMultipleExpanded>
              <AccordionItem title="What is this design system?">
                <p className="text-sm text-content-secondary leading-relaxed">
                  The CHG Unified Design System is a multi-brand design system built with React,
                  React Aria Components, and Tailwind CSS 4. It supports multiple brand themes
                  that can be switched dynamically.
                </p>
              </AccordionItem>
              <AccordionItem title="How do I switch themes?">
                <p className="text-sm text-content-secondary leading-relaxed">
                  You can switch themes by setting the <code className="bg-surface-secondary px-1 py-0.5 rounded text-xs">data-theme</code> attribute on your
                  root element. Available themes include weatherby, comphealth, connect, locumsmart,
                  modio, and wireframe.
                </p>
              </AccordionItem>
              <AccordionItem title="What components are available?">
                <p className="text-sm text-content-secondary leading-relaxed">
                  The design system includes Avatar, Button, Chip, Radio, Toggle, Tooltip,
                  CounterBadge, Tag, Divider, ProgressBar, StepIndicator, DotStatus, Status,
                  Field, Tabs, Toast, Accordion, and ActionMenu components.
                </p>
              </AccordionItem>
            </Accordion>
          </div>
        </Section>

        <Divider />

        {/* ActionMenu */}
        <Section title="ActionMenu">
          <div className="max-w-xs">
            <ActionMenu onItemClick={(value) => console.log('Clicked:', value)}>
              <ActionMenu.Item value="edit">Edit</ActionMenu.Item>
              <ActionMenu.Item value="duplicate">Duplicate</ActionMenu.Item>
              <ActionMenu.Item value="share">Share</ActionMenu.Item>
              <ActionMenu.Divider />
              <ActionMenu.Item value="archive">Archive</ActionMenu.Item>
              <ActionMenu.Item value="delete" disabled>Delete</ActionMenu.Item>
            </ActionMenu>
          </div>
        </Section>

        <div className="h-16" />
      </main>
    </div>
  )
}

export default App
