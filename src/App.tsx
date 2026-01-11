import { useState, useRef, useEffect } from 'react'
import './App.css'
import {
  Avatar,
  Branding,
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

const brands = [
  { id: 'weatherby', label: 'Weatherby', dotAppearance: 'magenta' as const, brandingId: 'myweatherby' as const },
  { id: 'comphealth', label: 'CompHealth', dotAppearance: 'purple' as const, brandingId: 'mycomphealth' as const },
  { id: 'connect', label: 'Connect', dotAppearance: 'blue' as const, brandingId: 'connect' as const },
  { id: 'locumsmart', label: 'LocumSmart', dotAppearance: 'cyan' as const, brandingId: 'locumsmart' as const },
  { id: 'modio', label: 'Modio', dotAppearance: 'sky' as const, brandingId: 'modio' as const },
  { id: 'wireframe', label: 'Wireframe', dotAppearance: 'neutral' as const, brandingId: 'wireframe' as const },
]

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-8">
      <h2 className="text-lg font-semibold text-content-primary">{title}</h2>
      <div className="space-y-8">
        {children}
      </div>
    </section>
  )
}

function SubSection({ label, children }: { label?: string; children: React.ReactNode }) {
  return (
    <div className="space-y-4">
      {label && <p className="text-sm font-medium text-content-secondary">{label}</p>}
      {children}
    </div>
  )
}

function App() {
  const [selectedTheme, setSelectedTheme] = useState('weatherby')
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [radioValue, setRadioValue] = useState('option1')
  const [toggleOn, setToggleOn] = useState(false)
  const [chipSelected, setChipSelected] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div data-theme={selectedTheme} className="min-h-screen bg-surface-primary text-content-primary">
      {/* Header with Theme Switcher */}
      <header className="sticky top-0 z-50 bg-white shadow-md isolate">
        <div className="mx-auto max-w-5xl px-6 py-16 flex items-center justify-between">
          <div className="flex items-center gap-32">
            <h1 className="text-3xl font-semibold">CHG Unified Design System</h1>
            <Branding brand={brands.find(b => b.id === selectedTheme)?.brandingId || 'wireframe'} size="sm" />
          </div>
          <div ref={dropdownRef} className="relative">
            <Button
              variant="outline"
              size="md"
              onPress={() => setDropdownOpen(!dropdownOpen)}
            >
              <span className="flex items-center gap-6">
                <DotStatus appearance={brands.find(b => b.id === selectedTheme)?.dotAppearance} />
                {brands.find(b => b.id === selectedTheme)?.label}
                <svg
                  width="20"
                  height="20"
                  className={`transition-transform shrink-0 ${dropdownOpen ? 'rotate-180' : ''}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </span>
            </Button>

            {dropdownOpen && (
              <ActionMenu
                className="absolute right-0 mt-2 min-w-48 z-50"
                onItemClick={(value) => {
                  if (value) setSelectedTheme(value)
                  setDropdownOpen(false)
                }}
              >
                {brands.map((brand) => (
                  <ActionMenu.Item key={brand.id} value={brand.id}>
                    <span className="flex items-center gap-6">
                      <DotStatus appearance={brand.dotAppearance} />
                      {brand.label}
                    </span>
                  </ActionMenu.Item>
                ))}
              </ActionMenu>
            )}
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 pt-32 pb-10 space-y-32">

        {/* About Section */}
        <section className="bg-gray-50 rounded-12 p-16 space-y-12">
          <p className="text-gray-700">
            Design System Test is a web app built with components from the <strong>CHG Unified Design System</strong>,
            a multi-brand React component library built with React Aria Components and Tailwind CSS 4.
          </p>
          <p className="text-gray-700 pb-12">
            All components are imported from the <a href="https://www.npmjs.com/package/@oxymormon/chg-unified-ds" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">@oxymormon/chg-unified-ds</a> NPM package and support runtime theme switching
            via the <code className="bg-gray-200 px-4 py-2 rounded-4 text-sm">data-theme</code> attribute.
          </p>
          <div className="flex flex-wrap gap-8">
            <Button
              variant="primary"
              size="sm"
              href="https://github.com/jordanchghealthcare/chg-unified-ds"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="flex items-center gap-6">
                <svg className="size-16" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
                </svg>
                GitHub Repository
              </span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              href="https://www.npmjs.com/package/@oxymormon/chg-unified-ds"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="flex items-center gap-6">
                <svg className="size-16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M0 7.334v8h6.666v1.332H12v-1.332h12v-8H0zm6.666 6.664H5.334v-4H3.999v4H1.335V8.667h5.331v5.331zm4 0v1.336H8.001V8.667h5.334v5.332h-2.669v-.001zm12.001 0h-1.33v-4h-1.336v4h-1.335v-4h-1.33v4h-2.671V8.667h8.002v5.331zM10.665 10H12v2.667h-1.335V10z" />
                </svg>
                npm Package
              </span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              href="https://chg-unified-ds.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="flex items-center gap-6">
                <svg className="size-16" viewBox="0 0 64 64" fill="none">
                  <path d="M8.42 58.97L6.4 6.15c-.07-1.75 1.3-3.22 3.08-3.33L55.31.01c1.81-.11 3.37 1.24 3.48 3.01v57.76c0 1.78-1.47 3.22-3.28 3.22l-43.94-1.93c-1.7-.08-3.07-1.42-3.13-3.1z" fill="#FF4785"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M46.8 24.52c-1.16.88-9.76 1.48-9.76.23.18-4.78-2-4.99-3.21-4.99-1.15 0-3.09.34-3.09 2.9 0 2.61 2.83 4.08 6.16 5.81 4.72 2.45 10.44 5.43 10.44 12.9 0 7.17-5.94 11.13-13.51 11.13-7.82 0-14.65-3.1-13.88-13.85.3-1.26 10.24-.96 10.24 0-.12 4.44.92 5.74 3.52 5.74 2 0 2.91-1.08 2.91-2.9 0-2.75-2.95-4.38-6.35-6.25-4.6-2.53-10.01-5.51-10.01-12.35 0-6.82 4.79-11.37 13.33-11.37 8.55 0 13.21 4.48 13.21 13z" fill="white"/>
                </svg>
                Storybook
              </span>
            </Button>
          </div>
        </section>

        {/* Avatar */}
        <Section title="Avatar">
          <SubSection label="Sizes">
            <div className="flex flex-wrap items-end gap-6">
              <Avatar name="John Doe" size="sm" />
              <Avatar name="Jane Smith" size="md" />
              <Avatar name="Bob Wilson" size="lg" />
            </div>
          </SubSection>
          <SubSection label="With Status">
            <div className="flex flex-wrap items-center gap-6">
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
            <div className="flex flex-wrap items-center gap-6">
              <Button variant="primary">Primary</Button>
              <Button variant="soft">Soft</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="text">Text</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
            </div>
          </SubSection>
          <SubSection label="Sizes">
            <div className="flex flex-wrap items-center gap-6">
              <Button variant="primary" size="xs">Extra Small</Button>
              <Button variant="primary" size="sm">Small</Button>
              <Button variant="primary" size="md">Medium</Button>
              <Button variant="primary" size="lg">Large</Button>
            </div>
          </SubSection>
          <SubSection label="Disabled">
            <div className="flex flex-wrap items-center gap-6">
              <Button variant="primary" isDisabled>Disabled Primary</Button>
              <Button variant="outline" isDisabled>Disabled Outline</Button>
            </div>
          </SubSection>
        </Section>

        <Divider />

        {/* Tooltip */}
        <Section title="Tooltip">
          <div className="flex flex-wrap items-center gap-6">
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

        {/* Chip */}
        <Section title="Chip">
          <div className="flex flex-wrap items-center gap-8">
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
            <div className="flex items-center gap-4">
              <Toggle isSelected={toggleOn} onChange={setToggleOn} />
              <span className="text-sm">{toggleOn ? 'On' : 'Off'}</span>
            </div>
            <div className="flex items-center gap-4">
              <Toggle size="compact" isSelected />
              <span className="text-sm">Compact</span>
            </div>
            <div className="flex items-center gap-4">
              <Toggle isIndeterminate />
              <span className="text-sm">Indeterminate</span>
            </div>
            <div className="flex items-center gap-4">
              <Toggle isDisabled />
              <span className="text-sm">Disabled</span>
            </div>
          </div>
        </Section>

        <Divider />

        {/* CounterBadge */}
        <Section title="CounterBadge">
          <SubSection label="Colors">
            <div className="flex flex-wrap items-center gap-6">
              <CounterBadge>5</CounterBadge>
              <CounterBadge color="red">12</CounterBadge>
              <CounterBadge color="orange">8</CounterBadge>
              <CounterBadge color="green">3</CounterBadge>
              <CounterBadge color="blue">99+</CounterBadge>
              <CounterBadge color="purple">42</CounterBadge>
            </div>
          </SubSection>
          <SubSection label="Solid & Rounded">
            <div className="flex flex-wrap items-center gap-6">
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
            <div className="flex flex-wrap items-center gap-6">
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
            <div className="flex flex-wrap items-center gap-6">
              <Tag color="red" isSolid>Solid Red</Tag>
              <Tag color="green" isSolid>Solid Green</Tag>
              <Tag color="blue" isSolid>Solid Blue</Tag>
            </div>
          </SubSection>
          <SubSection label="Rounded">
            <div className="flex flex-wrap items-center gap-6">
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
            <div className="flex flex-wrap items-center gap-6">
              <Status appearance="green">Active</Status>
              <Status appearance="red">Error</Status>
              <Status appearance="yellow">Pending</Status>
              <Status appearance="blue">Info</Status>
              <Status appearance="purple">Review</Status>
            </div>
          </SubSection>
          <SubSection label="Solid & Rounded">
            <div className="flex flex-wrap items-center gap-6">
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
                <p className="text-sm text-content-secondary leading-relaxed px-16">
                  The CHG Unified Design System is a multi-brand design system built with React,
                  React Aria Components, and Tailwind CSS 4. It supports multiple brand themes
                  that can be switched dynamically.
                </p>
              </AccordionItem>
              <AccordionItem title="How do I switch themes?">
                <p className="text-sm text-content-secondary leading-relaxed px-16">
                  You can switch themes by setting the <code className="bg-surface-secondary px-1 py-0.5 rounded text-xs">data-theme</code> attribute on your
                  root element. Available themes include weatherby, comphealth, connect, locumsmart,
                  modio, and wireframe.
                </p>
              </AccordionItem>
              <AccordionItem title="What components are available?">
                <p className="text-sm text-content-secondary leading-relaxed px-16">
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
              <ActionMenu.Item value="delete">Delete</ActionMenu.Item>
            </ActionMenu>
          </div>
        </Section>

        <div className="h-16" />
      </main>
    </div>
  )
}

export default App
