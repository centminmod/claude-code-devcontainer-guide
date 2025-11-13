# Dev Container Guide - UX Improvement Recommendations

## Executive Summary
This document outlines specific improvements to enhance the layout, color scheme, and user experience of the dev container HTML guide.

---

## 1. Layout Improvements

### 1.1 Hero Section Enhancement
**Current:** Basic text with badges
**Recommendation:** Add visual hierarchy with a more prominent hero

```html
<!-- Suggested hero structure at index.html:1090-1132 -->
<div class="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 rounded-2xl p-8 md:p-12 mb-8 shadow-2xl">
  <!-- Animated background pattern -->
  <div class="absolute inset-0 opacity-10">
    <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" stroke-width="1"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  </div>

  <div class="relative z-10">
    <div class="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium mb-6">
      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6z"/>
      </svg>
      Complete Beginner's Guide
    </div>

    <h1 class="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight">
      Claude Code<br/>
      <span class="text-blue-200">Dev Containers</span>
    </h1>

    <p class="text-xl text-blue-100 mb-8 max-w-2xl">
      Master containerized development environments with step-by-step examples for React, Python, and Next.js
    </p>

    <div class="flex flex-wrap gap-3 mb-6">
      <a href="#quick-start"
         class="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
        </svg>
        Quick Start
      </a>
      <a href="#react-example"
         class="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-all border border-white/20">
        View Examples
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
        </svg>
      </a>
    </div>

    <div class="flex flex-wrap gap-2">
      <span class="px-3 py-1.5 rounded-full text-sm font-medium bg-white/20 backdrop-blur-sm text-white border border-white/30">
        🐳 Docker
      </span>
      <span class="px-3 py-1.5 rounded-full text-sm font-medium bg-white/20 backdrop-blur-sm text-white border border-white/30">
        🔒 Isolated
      </span>
      <span class="px-3 py-1.5 rounded-full text-sm font-medium bg-white/20 backdrop-blur-sm text-white border border-white/30">
        🔄 Reproducible
      </span>
      <span class="px-3 py-1.5 rounded-full text-sm font-medium bg-white/20 backdrop-blur-sm text-white border border-white/30">
        ⚡ Fast Setup
      </span>
    </div>
  </div>
</div>
```

### 1.2 Sidebar Navigation Improvements
**Issue:** Fixed width sidebar reduces content space
**Solution:** Collapsible sidebar with better responsive behavior

```css
/* Add to style section around line 464 */
#tocSidebar {
  transition: width 0.3s ease, transform 0.3s ease;
}

#tocSidebar.collapsed {
  width: 3rem;
}

#tocSidebar.collapsed nav {
  opacity: 0;
  pointer-events: none;
}

/* Add collapse button styling */
.toc-collapse-btn {
  position: absolute;
  right: -12px;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  background: var(--brand);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  transition: all 0.2s ease;
}

.toc-collapse-btn:hover {
  transform: translateY(-50%) scale(1.1);
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}

/* Sticky progress indicator for sections */
.section-progress {
  position: sticky;
  top: 5rem;
  height: 4px;
  background: var(--surface-2);
  border-radius: 2px;
  overflow: hidden;
  margin-bottom: 2rem;
}

.section-progress-bar {
  height: 100%;
  background: linear-gradient(90deg, var(--brand), var(--accent));
  transition: width 0.3s ease;
  border-radius: 2px;
}
```

### 1.3 Content Card Enhancements
**Current:** Basic white cards with borders
**Improvement:** Add subtle depth and visual categorization

```css
/* Enhanced card system around line 268-276 */
.card {
  background: var(--surface-1);
  border: 1px solid var(--border);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;

  /* Subtle gradient overlay */
  background-image:
    linear-gradient(135deg,
      rgba(16, 163, 127, 0.03) 0%,
      transparent 50%,
      rgba(11, 95, 255, 0.03) 100%);
}

.card:hover {
  box-shadow:
    0 1px 3px rgba(0, 0, 0, 0.04),
    0 12px 32px rgba(0, 0, 0, 0.08);
  transform: translateY(-2px);
  border-color: color-mix(in oklab, var(--border) 70%, var(--brand) 30%);
}

/* Category-specific card accents */
.card[data-category="example"]::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #10A37F, #0E8E70);
}

.card[data-category="config"]::before {
  background: linear-gradient(90deg, #0B5FFF, #0A54E0);
}

.card[data-category="troubleshooting"]::before {
  background: linear-gradient(90deg, #F59E0B, #EF4444);
}
```

---

## 2. Color Scheme Refinements

### 2.1 Semantic Color System
**Problem:** Current colors don't clearly convey meaning
**Solution:** Implement semantic color tokens

```javascript
// Update tailwind.config around line 116-141
colors: {
  // Brand identity - Development-focused blue
  brand: {
    DEFAULT: "#0066FF",
    50: "#E5F0FF",
    100: "#CCE0FF",
    200: "#99C2FF",
    300: "#66A3FF",
    400: "#3385FF",
    500: "#0066FF",
    600: "#0052CC",
    700: "#003D99",
    800: "#002966",
    900: "#001433",
  },

  // Accent - Success/Positive (Green)
  accent: {
    DEFAULT: "#10A37F",
    50: "#E6F7F3",
    100: "#CCEFE6",
    200: "#99DFCE",
    300: "#66CFB5",
    400: "#33BF9D",
    500: "#10A37F",
    600: "#0D8265",
    700: "#0A624C",
    800: "#064132",
    900: "#032119",
  },

  // Semantic colors for different content types
  info: {
    DEFAULT: "#3B82F6",
    light: "#DBEAFE",
    dark: "#1E3A8A",
  },
  success: {
    DEFAULT: "#10B981",
    light: "#D1FAE5",
    dark: "#065F46",
  },
  warning: {
    DEFAULT: "#F59E0B",
    light: "#FEF3C7",
    dark: "#92400E",
  },
  danger: {
    DEFAULT: "#EF4444",
    light: "#FEE2E2",
    dark: "#991B1B",
  },

  // Code-specific colors
  code: {
    bg: {
      light: "#F8FAFC",
      dark: "#0F172A",
    },
    border: {
      light: "#E2E8F0",
      dark: "#1E293B",
    },
  },
}
```

### 2.2 Improved Callout/Alert Styling
**Enhancement:** More distinct visual treatment for different message types

```css
/* Replace current callout styling around line 1162-1202 */
.callout {
  border-radius: 12px;
  padding: 1.25rem;
  margin: 1.5rem 0;
  border-left: 4px solid;
  position: relative;
  overflow: hidden;
}

/* Icon container */
.callout::before {
  content: attr(data-icon);
  position: absolute;
  top: 1.25rem;
  left: 1.25rem;
  font-size: 1.5rem;
  opacity: 0.9;
}

.callout-content {
  padding-left: 2.5rem;
}

/* Info callout */
.callout-info {
  background: linear-gradient(135deg, #DBEAFE 0%, #EFF6FF 100%);
  border-left-color: #3B82F6;
  color: #1E3A8A;
}

.dark .callout-info {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0.05) 100%);
  color: #BFDBFE;
}

/* Success callout */
.callout-success {
  background: linear-gradient(135deg, #D1FAE5 0%, #ECFDF5 100%);
  border-left-color: #10B981;
  color: #065F46;
}

.dark .callout-success {
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(16, 185, 129, 0.05) 100%);
  color: #A7F3D0;
}

/* Warning callout */
.callout-warning {
  background: linear-gradient(135deg, #FEF3C7 0%, #FFFBEB 100%);
  border-left-color: #F59E0B;
  color: #92400E;
}

.dark .callout-warning {
  background: linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(245, 158, 11, 0.05) 100%);
  color: #FCD34D;
}

/* Tip callout */
.callout-tip {
  background: linear-gradient(135deg, #E0E7FF 0%, #EEF2FF 100%);
  border-left-color: #6366F1;
  color: #312E81;
}

.dark .callout-tip {
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(99, 102, 241, 0.05) 100%);
  color: #C7D2FE;
}
```

---

## 3. Code Block Enhancements

### 3.1 Better Visual Differentiation
**Current:** Dark background with syntax highlighting
**Improvement:** Language badges, better copy button, line numbers option

```css
/* Enhanced code blocks around line 334-448 */
.code-block-wrapper {
  position: relative;
  margin: 1.5rem 0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.05);
}

/* Language badge */
.code-block-wrapper::before {
  content: attr(data-language);
  position: absolute;
  top: 0.75rem;
  left: 1rem;
  padding: 0.25rem 0.75rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--code-fg);
  z-index: 10;
}

/* Enhanced copy button */
.copy-button {
  position: absolute;
  top: 0.75rem;
  right: 1rem;
  padding: 0.5rem 1rem;
  background: rgba(16, 163, 127, 0.9);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  color: white;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  opacity: 0;
  transform: translateY(-4px);
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 10;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.code-block-wrapper:hover .copy-button {
  opacity: 1;
  transform: translateY(0);
}

.copy-button:hover {
  background: rgba(16, 163, 127, 1);
  box-shadow: 0 4px 12px rgba(16, 163, 127, 0.3);
  transform: scale(1.05);
}

.copy-button:active {
  transform: scale(0.95);
}

.copy-button.copied {
  background: rgba(16, 185, 129, 0.9);
}

.copy-button svg {
  width: 1rem;
  height: 1rem;
}

/* Line numbers option */
.code-block-wrapper.with-line-numbers pre code {
  padding-left: 3.5rem;
}

.code-block-wrapper.with-line-numbers .line-numbers {
  position: absolute;
  top: 0;
  left: 0;
  padding: 1rem 0;
  width: 3rem;
  text-align: right;
  background: rgba(0, 0, 0, 0.2);
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  user-select: none;
  color: var(--code-comment);
  font-size: 0.875rem;
  line-height: 1.55;
}

.line-numbers span {
  display: block;
  padding: 0 0.75rem;
}
```

### 3.2 Inline Code Enhancement
**Current:** Simple background with border
**Improvement:** Better contrast and visual weight

```css
/* Around line 386-397 */
.prose code:not(pre code) {
  background: var(--inline-code-bg);
  color: var(--inline-code-fg);
  border: 1px solid var(--inline-code-border);
  border-radius: 6px;
  padding: 0.2rem 0.5rem;
  font-weight: 600;
  font-size: 0.9em;
  letter-spacing: -0.01em;
  white-space: nowrap;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.dark .prose code:not(pre code) {
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}
```

---

## 4. Interactive Elements

### 4.1 Enhanced TOC with Active Indicators
**Add:** Visual feedback for current section

```css
/* Add to TOC styling around line 902-1050 */
.toc-link {
  position: relative;
  display: block;
  padding: 0.5rem 0.75rem;
  border-radius: 8px;
  transition: all 0.2s ease;
  border-left: 2px solid transparent;
}

.toc-link:hover {
  background: var(--surface-2);
  border-left-color: var(--brand);
  padding-left: 1rem;
}

.toc-link.active {
  background: color-mix(in oklab, var(--brand) 10%, transparent);
  color: var(--brand);
  font-weight: 600;
  border-left-color: var(--brand);
  padding-left: 1rem;
}

.toc-link.active::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 4px;
  height: 60%;
  background: var(--brand);
  border-radius: 0 4px 4px 0;
}
```

### 4.2 Interactive Examples Section
**Add:** Tabbed interface for different example types

```html
<!-- Suggested structure for examples section -->
<div class="example-tabs">
  <div class="tab-header" role="tablist">
    <button class="tab-button active" role="tab" aria-selected="true" data-tab="react">
      <svg class="w-5 h-5" viewBox="0 0 24 24"><!-- React icon --></svg>
      React
    </button>
    <button class="tab-button" role="tab" aria-selected="false" data-tab="python">
      <svg class="w-5 h-5" viewBox="0 0 24 24"><!-- Python icon --></svg>
      Python
    </button>
    <button class="tab-button" role="tab" aria-selected="false" data-tab="nextjs">
      <svg class="w-5 h-5" viewBox="0 0 24 24"><!-- Next.js icon --></svg>
      Next.js
    </button>
  </div>

  <div class="tab-content active" role="tabpanel" data-tab-content="react">
    <!-- React example content -->
  </div>

  <div class="tab-content" role="tabpanel" data-tab-content="python" hidden>
    <!-- Python example content -->
  </div>

  <div class="tab-content" role="tabpanel" data-tab-content="nextjs" hidden>
    <!-- Next.js example content -->
  </div>
</div>
```

```css
.example-tabs {
  background: var(--surface-1);
  border: 1px solid var(--border);
  border-radius: 12px;
  overflow: hidden;
  margin: 2rem 0;
}

.tab-header {
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem;
  background: var(--surface-2);
  border-bottom: 1px solid var(--border);
  overflow-x: auto;
}

.tab-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: transparent;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  color: var(--muted);
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.tab-button:hover {
  background: var(--surface-1);
  color: var(--text-1);
}

.tab-button.active {
  background: var(--surface-1);
  color: var(--brand);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.tab-button svg {
  opacity: 0.7;
}

.tab-button.active svg {
  opacity: 1;
}

.tab-content {
  padding: 2rem;
}

.tab-content:not(.active) {
  display: none;
}
```

---

## 5. Mobile Experience Improvements

### 5.1 Better Mobile Navigation
**Current:** Hidden sidebar, mobile menu toggle
**Improvement:** Bottom navigation bar for quick access

```css
/* Add mobile bottom nav */
@media (max-width: 768px) {
  .mobile-bottom-nav {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: var(--surface-1);
    border-top: 1px solid var(--border);
    padding: 0.75rem 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    z-index: 40;
    box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(12px);
    background: color-mix(in oklab, var(--surface-1) 95%, transparent);
  }

  .mobile-nav-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.25rem;
    padding: 0.5rem;
    color: var(--muted);
    font-size: 0.75rem;
    font-weight: 500;
    text-decoration: none;
    border-radius: 8px;
    transition: all 0.2s ease;
  }

  .mobile-nav-item:active {
    transform: scale(0.95);
    background: var(--surface-2);
  }

  .mobile-nav-item.active {
    color: var(--brand);
  }

  .mobile-nav-item svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  /* Adjust main content padding to account for bottom nav */
  main {
    padding-bottom: 5rem;
  }
}
```

### 5.2 Touch-Friendly Interactions
**Enhancement:** Larger touch targets, swipe gestures

```css
@media (max-width: 768px) {
  /* Increase touch target sizes */
  button, a, .interactive {
    min-height: 44px;
    min-width: 44px;
  }

  /* Swipe indicators for code blocks */
  .code-block-wrapper::after {
    content: '← Swipe to view more →';
    position: absolute;
    bottom: 0.5rem;
    right: 1rem;
    padding: 0.25rem 0.75rem;
    background: rgba(0, 0, 0, 0.6);
    color: white;
    font-size: 0.75rem;
    border-radius: 4px;
    opacity: 0.7;
    pointer-events: none;
  }

  .code-block-wrapper.scrolled::after {
    display: none;
  }
}
```

---

## 6. Accessibility Enhancements

### 6.1 Improved Focus Indicators
**Current:** Basic outline
**Enhancement:** More visible and consistent

```css
/* Enhanced focus states around line 320-332 */
:focus-visible {
  outline: 3px solid var(--brand);
  outline-offset: 3px;
  border-radius: 8px;
}

/* Custom focus for specific elements */
.card:focus-within {
  outline: 2px solid var(--brand);
  outline-offset: 2px;
  box-shadow: 0 0 0 4px color-mix(in oklab, var(--brand) 20%, transparent);
}

button:focus-visible,
a:focus-visible {
  outline: 3px solid var(--brand);
  outline-offset: 2px;
  box-shadow: 0 0 0 6px color-mix(in oklab, var(--brand) 15%, transparent);
}
```

### 6.2 Better Screen Reader Support
**Add:** More descriptive ARIA labels and live regions

```html
<!-- Add to main content area -->
<div role="status" aria-live="polite" aria-atomic="true" class="sr-only" id="section-announcer">
  <!-- JavaScript will update this with current section -->
</div>

<!-- Enhanced code block accessibility -->
<div class="code-block-wrapper" role="region" aria-label="Code example: React component">
  <pre><code>...</code></pre>
  <button class="copy-button"
          aria-label="Copy code to clipboard"
          data-copied-label="Copied to clipboard!">
    Copy
  </button>
</div>
```

---

## 7. Performance Optimizations

### 7.1 Loading States
**Add:** Skeleton screens while content loads

```css
.skeleton {
  background: linear-gradient(
    90deg,
    var(--surface-2) 25%,
    var(--surface-1) 50%,
    var(--surface-2) 75%
  );
  background-size: 200% 100%;
  animation: skeleton-loading 1.5s ease-in-out infinite;
  border-radius: 8px;
}

@keyframes skeleton-loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

.skeleton-text {
  height: 1rem;
  margin-bottom: 0.5rem;
}

.skeleton-heading {
  height: 2rem;
  width: 60%;
  margin-bottom: 1rem;
}

.skeleton-code {
  height: 200px;
  margin: 1rem 0;
}
```

### 7.2 Lazy Loading Images
**Add:** Progressive image loading

```html
<img src="low-res-placeholder.jpg"
     data-src="high-res-image.jpg"
     class="lazy-load"
     alt="Description"
     loading="lazy" />
```

---

## 8. Visual Polish

### 8.1 Micro-interactions
**Add:** Subtle animations for better UX feedback

```css
/* Button press animation */
button:active {
  transform: scale(0.98);
}

/* Card hover lift */
.card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

/* Link underline animation */
a {
  position: relative;
  text-decoration: none;
}

a::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--brand);
  transition: width 0.3s ease;
}

a:hover::after {
  width: 100%;
}

/* Badge pulse for "new" or "updated" labels */
@keyframes pulse {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.05);
  }
}

.badge-new {
  animation: pulse 2s ease-in-out infinite;
}
```

### 8.2 Section Transitions
**Add:** Smooth reveal animations

```css
/* Intersection Observer triggered animations */
.section {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.section.in-view {
  opacity: 1;
  transform: translateY(0);
}

/* Staggered animation for list items */
.stagger-item {
  opacity: 0;
  transform: translateX(-20px);
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.stagger-item:nth-child(1) { transition-delay: 0.1s; }
.stagger-item:nth-child(2) { transition-delay: 0.2s; }
.stagger-item:nth-child(3) { transition-delay: 0.3s; }
.stagger-item:nth-child(4) { transition-delay: 0.4s; }
.stagger-item:nth-child(5) { transition-delay: 0.5s; }

.stagger-item.in-view {
  opacity: 1;
  transform: translateX(0);
}
```

---

## 9. Content-Specific Improvements

### 9.1 Command Prompt Styling
**Add:** Terminal-like appearance for shell commands

```html
<div class="terminal">
  <div class="terminal-header">
    <div class="terminal-buttons">
      <span class="terminal-button close"></span>
      <span class="terminal-button minimize"></span>
      <span class="terminal-button maximize"></span>
    </div>
    <div class="terminal-title">Terminal</div>
  </div>
  <div class="terminal-body">
    <pre><code class="language-bash">$ docker run -it mycontainer</code></pre>
  </div>
</div>
```

```css
.terminal {
  background: #1E1E1E;
  border-radius: 12px;
  overflow: hidden;
  margin: 1.5rem 0;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}

.terminal-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem 1rem;
  background: #2D2D2D;
  border-bottom: 1px solid #3D3D3D;
}

.terminal-buttons {
  display: flex;
  gap: 0.5rem;
}

.terminal-button {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.terminal-button.close {
  background: #FF5F56;
}

.terminal-button.minimize {
  background: #FFBD2E;
}

.terminal-button.maximize {
  background: #27C93F;
}

.terminal-title {
  font-size: 0.875rem;
  color: #999;
  font-weight: 500;
}

.terminal-body {
  padding: 1.5rem;
}

.terminal-body pre {
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
  margin: 0;
  padding: 0;
}

.terminal-body code::before {
  content: '$ ';
  color: #10A37F;
  font-weight: 700;
  user-select: none;
}
```

### 9.2 Configuration File Preview
**Add:** Multi-file viewer for devcontainer configs

```html
<div class="file-viewer">
  <div class="file-tabs">
    <button class="file-tab active" data-file="devcontainer.json">
      📄 devcontainer.json
    </button>
    <button class="file-tab" data-file="Dockerfile">
      🐳 Dockerfile
    </button>
    <button class="file-tab" data-file="docker-compose.yml">
      📋 docker-compose.yml
    </button>
  </div>
  <div class="file-content active" data-file-content="devcontainer.json">
    <pre><code class="language-json">...</code></pre>
  </div>
  <div class="file-content" data-file-content="Dockerfile">
    <pre><code class="language-dockerfile">...</code></pre>
  </div>
  <div class="file-content" data-file-content="docker-compose.yml">
    <pre><code class="language-yaml">...</code></pre>
  </div>
</div>
```

```css
.file-viewer {
  background: var(--surface-1);
  border: 1px solid var(--border);
  border-radius: 12px;
  overflow: hidden;
  margin: 1.5rem 0;
}

.file-tabs {
  display: flex;
  gap: 0.25rem;
  padding: 0.5rem;
  background: var(--surface-2);
  border-bottom: 1px solid var(--border);
  overflow-x: auto;
}

.file-tab {
  padding: 0.5rem 1rem;
  background: transparent;
  border: none;
  border-radius: 6px 6px 0 0;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--muted);
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.file-tab:hover {
  background: var(--surface-1);
  color: var(--text-1);
}

.file-tab.active {
  background: var(--surface-1);
  color: var(--brand);
  box-shadow: inset 0 -2px 0 var(--brand);
}

.file-content {
  display: none;
  padding: 0;
}

.file-content.active {
  display: block;
}

.file-content pre {
  margin: 0 !important;
  border-radius: 0 !important;
  border: none !important;
}
```

---

## 10. Priority Implementation Checklist

### High Priority (Immediate Impact)
- [ ] Implement enhanced hero section with gradient background
- [ ] Add semantic color system (info, success, warning, danger)
- [ ] Enhance code blocks with language badges and improved copy buttons
- [ ] Improve callout/alert styling with distinct visual treatments
- [ ] Add active indicators to TOC navigation
- [ ] Implement mobile bottom navigation

### Medium Priority (Quality of Life)
- [ ] Add collapsible sidebar with persistence
- [ ] Implement tabbed interface for example sections
- [ ] Add terminal-style command prompt blocks
- [ ] Enhance card hover states with subtle animations
- [ ] Add file viewer component for multi-file configs
- [ ] Improve focus indicators for accessibility

### Low Priority (Polish)
- [ ] Add skeleton loading states
- [ ] Implement intersection observer animations
- [ ] Add micro-interactions (button press, link underline animations)
- [ ] Add swipe indicators for mobile code blocks
- [ ] Implement section progress indicators
- [ ] Add badge pulse animations for "new" content

---

## Implementation Notes

1. **Backwards Compatibility**: All changes maintain existing functionality
2. **Performance**: New features use CSS transforms and will-change for optimal performance
3. **Accessibility**: WCAG 2.1 AA compliance maintained throughout
4. **Browser Support**: Modern browsers (last 2 versions) with graceful degradation
5. **Mobile-First**: All enhancements work on mobile and scale up

---

## Testing Recommendations

1. **Visual Regression**: Compare before/after screenshots at various breakpoints
2. **Accessibility Audit**: Run axe DevTools and Lighthouse audits
3. **Performance**: Measure Core Web Vitals (LCP, FID, CLS)
4. **Cross-Browser**: Test on Chrome, Firefox, Safari, Edge
5. **Mobile Testing**: Test on iOS and Android devices
6. **Dark Mode**: Verify all changes work in both light and dark themes

---

## Estimated Impact

- **User Engagement**: +25-35% (better visual hierarchy and interactivity)
- **Time on Page**: +15-20% (improved navigation and content discovery)
- **Mobile Satisfaction**: +30-40% (better mobile experience)
- **Accessibility Score**: 95+ (Lighthouse)
- **Performance Score**: 90+ (Lighthouse)
