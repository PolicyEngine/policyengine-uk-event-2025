# Presentation components guide

This guide documents all available components for creating presentation slides.

## Core components

### SlideTitle
Standard title component with consistent styling.

```tsx
<SlideTitle>Your slide title</SlideTitle>
<SlideTitle isCover>Cover slide title</SlideTitle>
<SlideTitle isEnd>Thank you</SlideTitle>
```

### SlideContent
Content wrapper with size and column options.

```tsx
<SlideContent size="sm">...</SlideContent>  // Small text
<SlideContent size="md">...</SlideContent>  // Medium text
<SlideContent size="lg">...</SlideContent>  // Large text
<SlideContent columns={2}>...</SlideContent> // Two-column layout
```

### BulletList
Structured bullet points with optional subtext.

```tsx
<BulletList
  size="md"
  items={[
    { text: 'Main point', subtext: 'Additional detail' },
    { text: 'Simple point' }
  ]}
/>
```

## Data visualisation

### StatCard
Display key metrics with trends.

```tsx
<StatCard
  value="£90k"
  label="VAT threshold"
  unit="per year"
  trend="up"
  trendValue="+£5k"
  color="teal"
/>
```

### ImageGrid
Display multiple images in a grid.

```tsx
<ImageGrid
  columns={2}
  images={[
    {
      src: "/image1.png",
      alt: "Description",
      caption: "Figure 1: Caption"
    },
    {
      src: "/image2.png",
      alt: "Description",
      caption: "Figure 2: Caption"
    }
  ]}
/>
```

## Emphasis and highlighting

### HighlightBox
Emphasise important information.

```tsx
<HighlightBox variant="teal" title="Key point" icon="💡">
  Important information here
</HighlightBox>
```

Variants: `teal`, `dark`, `light`, `warning`, `info`

## Mathematical content

### MathFormula
Display mathematical equations.

```tsx
<MathFormula size="lg" highlighted>
  <Variable>y</Variable>
  <Subscript>i</Subscript>
  <Operator>=</Operator>
  <Variable>A</Variable>
  <Superscript>α</Superscript>
</MathFormula>
```

Helper components:
- `Variable`: Italic variables
- `Subscript`: Subscript text
- `Superscript`: Superscript text
- `Operator`: Mathematical operators
- `Fraction`: Fractions with numerator/denominator

## SVG graphics

### SVGGraphic
Container for custom SVG diagrams.

```tsx
<SVGGraphic viewBox="0 0 800 400" caption="Diagram caption">
  <BoxSVG x={50} y={100} width={150} height={80} fill="#319795" label="Box" />
  <CircleSVG cx={400} cy={140} r={50} fill="#1D4044" label="Circle" />
  <ArrowSVG x1={200} y1={140} x2={350} y2={140} label="Flow" />
</SVGGraphic>
```

Built-in shapes:
- `BoxSVG`: Rounded rectangles with labels
- `CircleSVG`: Circles with labels
- `ArrowSVG`: Arrows with optional labels

## Usage examples

### Statistics slide

```tsx
export default function StatsSlide() {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <SlideTitle>Key statistics</SlideTitle>
        </SlideHeader>

        <SlideContent>
          <div className="grid grid-cols-3 gap-6">
            <StatCard value="1.2M" label="Firms" trend="up" trendValue="+5%" />
            <StatCard value="£180B" label="Revenue" unit="annual" />
            <StatCard value="15%" label="Growth" color="dark" />
          </div>
        </SlideContent>
      </div>
    </Slide>
  );
}
```

### Process diagram slide

```tsx
export default function ProcessSlide() {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <SlideTitle>Processing pipeline</SlideTitle>
        </SlideHeader>

        <SlideContent>
          <SVGGraphic viewBox="0 0 800 300">
            <BoxSVG x={50} y={100} width={120} height={60} label="Input" />
            <BoxSVG x={340} y={100} width={120} height={60} label="Process" />
            <BoxSVG x={630} y={100} width={120} height={60} label="Output" />
            <ArrowSVG x1={170} y1={130} x2={340} y2={130} />
            <ArrowSVG x1={460} y1={130} x2={630} y2={130} />
          </SVGGraphic>
        </SlideContent>
      </div>
    </Slide>
  );
}
```

### Mathematical model slide

```tsx
export default function ModelSlide() {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <SlideTitle>Economic model</SlideTitle>
        </SlideHeader>

        <SlideContent>
          <HighlightBox variant="light" title="Production function">
            <MathFormula size="lg">
              <Variable>Y</Variable>
              <Operator>=</Operator>
              <Variable>A</Variable>
              <Variable>K</Variable>
              <Superscript>α</Superscript>
              <Variable>L</Variable>
              <Superscript>1-α</Superscript>
            </MathFormula>
          </HighlightBox>

          <BulletList
            size="sm"
            items={[
              { text: 'Y represents output' },
              { text: 'K is capital stock' },
              { text: 'L is labour input' },
              { text: 'α is the output elasticity of capital' }
            ]}
          />
        </SlideContent>
      </div>
    </Slide>
  );
}
```

## Best practices

1. **Consistency**: Use the standardised components for consistent styling across all presentations.

2. **Size hierarchy**: Use size props to create visual hierarchy:
   - `lg` for main points
   - `md` for standard content
   - `sm` for detailed information

3. **Colour usage**:
   - Teal (`#319795`): Primary brand colour for emphasis
   - Dark (`#1D4044`): Secondary colour for contrast
   - Gray: Supporting text and captions

4. **Image handling**:
   - Use ImageGrid for multiple images
   - Add meaningful alt text
   - Include figure captions for context

5. **Mathematical content**:
   - Use MathFormula components for equations
   - Highlight key formulas
   - Provide explanations alongside formulas

6. **SVG graphics**:
   - Keep diagrams simple and clear
   - Use consistent colours from the palette
   - Add labels to clarify meaning

7. **Progressive disclosure**:
   - Start with high-level points
   - Add detail through subtext or follow-up slides
   - Use HighlightBox for key takeaways

## Component reference

See `/components/ComponentShowcase.tsx` for live examples of all components.